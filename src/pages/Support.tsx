// NutriTrack Help Center — React + Tailwind + react-hook-form + zod
// ---------------------------------------------------------------
// Drop this into your React/Next.js app (e.g., app/help/page.tsx or pages/help.tsx)
// and ensure Tailwind is configured. This component renders:
//  - Searchable, filterable FAQ with collapsible answers
//  - Contact form validated by Zod via zodResolver
//  - POST to /api/support with a graceful mailto fallback
//  - Optional GA4 events (faq_open, support_form_submit)
//
// Install once:
//   npm i react-hook-form zod @hookform/resolvers
//
// Server route examples for /api/support are at the bottom of this file (commented).

import React, { useEffect, useMemo, useState, useDeferredValue } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getFaqs } from "../lib/sanity";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { Helmet } from "react-helmet-async"
declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
        grecaptcha?: {
            render: (container: HTMLElement | string, params: {
                sitekey: string;
                callback?: (resp: string) => void;
                'error-callback'?: () => void;
                'expired-callback'?: () => void;
            }) => number;
            getResponse: (widgetId?: number) => string;
            reset: (widgetId?: number) => void;
        };
        onRecaptchaLoad?: () => void;
    }
}

// -----------------------------
// FAQ DATA
// -----------------------------

type FaqItem = {
    id: string;
    question: string;
    // FAQ answer is stored as Portable Text in Sanity
    answer: PortableTextBlock[];
    category: string; // e.g., "Getting Started", "Logging Food"
    tags?: string[];
};

// Sanity raw shape for type safety when mapping
type SanityFaq = {
    _id: string;
    question?: string;
    answer?: PortableTextBlock[];
    category?: string;
    tag?: string[];
};

// Build categories list with "All" (component derives live categories at runtime)

// -----------------------------
// CONTACT FORM SCHEMA
// -----------------------------

const SupportSchema = z.object({
    name: z.string().trim().max(80).optional(),
    email: z.string().trim().email("Enter a valid email"),
    // use a const assertion so z.enum infers the tuple type correctly
    topic: z.enum(["General", "Account", "Logging Food", "AI Suggestions", "Notifications", "Billing", "Bug"] as const),
    subject: z.string().trim().min(3, "Subject is too short").max(120),
    message: z.string().trim().min(10, "Tell us a bit more (10+ chars)").max(4000),
});

type SupportFormValues = z.infer<typeof SupportSchema>;

// -----------------------------
// COMPONENT
// -----------------------------

export default function Support() {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState<string>("All");
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const [submitState, setSubmitState] = useState<"idle" | "sending" | "done" | "error">("idle");
    // Sanity-driven FAQs
    const [faqs, setFaqs] = useState<FaqItem[] | null>(null);
    const [loadingFaqs, setLoadingFaqs] = useState(false);
    const [faqError, setFaqError] = useState<string | null>(null);

    // Load FAQs from Sanity (fallback to local `FAQS` if something goes wrong)
    useEffect(() => {
        let mounted = true;
        setLoadingFaqs(true);
        getFaqs()
            .then((data) => {
                if (!mounted) return;
                const arr = data as SanityFaq[];
                const mapped: FaqItem[] = arr.map((d: SanityFaq) => ({
                    id: String(d._id),
                    question: String(d.question ?? ""),
                    answer: (d.answer as PortableTextBlock[]) ?? [],
                    category: String(d.category ?? "Uncategorized"),
                    tags: (d.tag as string[]) ?? [],
                }));
                setFaqs(mapped);
                setFaqError(null);
            })
            .catch((err) => {
                console.error("Failed to fetch FAQs from Sanity:", err);
                if (!mounted) return;
                setFaqError("Unable to load FAQs from CMS");
                setFaqs(null);
            })
            .finally(() => {
                if (!mounted) return;
                setLoadingFaqs(false);
            });

        return () => {
            mounted = false;
        };
    }, []);

    // Debounced search query for improved UX
    const deferredQuery = useDeferredValue(query);
    // Filter + search (use remote FAQs only)
    const filteredFaqs = useMemo<FaqItem[]>(() => {
        const source = faqs ?? [];
        const q = deferredQuery.toLowerCase().trim();
        return source.filter((f: FaqItem) => {
            const inCat = category === "All" || f.category === category;
            if (!inCat) return false;
            if (!q) return true;
            const hay = (f.question + " " + JSON.stringify(f.answer) + " " + (f.tags?.join(" ") ?? "")).toLowerCase();
            return hay.includes(q);
        });
    }, [deferredQuery, category, faqs]);

    const categoriesList = useMemo<string[]>(() => ["All", ...Array.from(new Set((faqs ?? []).map((f: FaqItem) => f.category)))], [faqs]);

    // Convert Sanity Portable Text blocks to plain text for JSON-LD
    const toPlainText = (blocks: PortableTextBlock[] = []): string => {
        try {
            return blocks
                .map((block: any) => {
                    if (!block) return '';
                    if (block._type !== 'block' || !Array.isArray(block.children)) return '';
                    return block.children.map((span: any) => span?.text ?? '').join('');
                })
                .join('\n')
                .trim();
        } catch {
            return '';
        }
    };

    // Build FAQPage JSON-LD from fetched FAQs
    const faqSchema = useMemo(() => {
        if (!faqs || faqs.length === 0) return null;
        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.slice(0, 100).map((f) => ({
                "@type": "Question",
                "name": f.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": toPlainText(f.answer)
                }
            }))
        };
    }, [faqs]);

    // GA4 helper (safe)
    const gtag = (name: string, params: Record<string, unknown>) => {
        if (typeof window !== "undefined" && typeof window.gtag === "function") {
            window.gtag("event", name, params);
        }
    };

    const loadRecaptchaV2 = (): Promise<void> =>
        new Promise((resolve, reject) => {
            if (typeof window === "undefined") return resolve();
            if (window.grecaptcha?.render) return resolve(); // already loaded

            // global callback
            (window as any).onRecaptchaLoad = () => resolve();

            // check if already loaded
            const existing = document.querySelector('script[src*="recaptcha/api.js"]');
            if (existing) {
                existing.addEventListener("load", () => resolve());
                existing.addEventListener("error", () => reject(new Error("reCAPTCHA script failed")));
                return;
            }

            // add correct script
            const script = document.createElement("script");
            script.src = "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit";
            script.async = true;
            script.defer = true;
            script.onerror = () => reject(new Error("Failed to load reCAPTCHA"));
            document.head.appendChild(script);
        });



    const recaptchaRef = React.useRef<HTMLDivElement>(null);
    const [widgetId, setWidgetId] = useState<number | null>(null);
    const [captchaSolved, setCaptchaSolved] = useState(false);

    useEffect(() => {
        let cancelled = false;

        loadRecaptchaV2()
            .then(() => {
                if (cancelled || !recaptchaRef.current) return;

                // small delay ensures the div is mounted
                setTimeout(() => {
                    if (cancelled || !recaptchaRef.current) return;
                    const id = window.grecaptcha!.render(recaptchaRef.current, {
                        sitekey: "6Lcn9P4rAAAAAOTbLUIwyQDXpSubTABWJiwam1tk",
                        callback: () => setCaptchaSolved(true),
                        "expired-callback": () => setCaptchaSolved(false),
                        "error-callback": () => setCaptchaSolved(false),
                    });
                    setWidgetId(id);
                }, 300);
            })
            .catch((err) => console.error("Failed to load reCAPTCHA:", err));

        return () => {
            cancelled = true;
        };
    }, []);


    // Form
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<SupportFormValues>({ resolver: zodResolver(SupportSchema) });

    const onSubmit = async (data: SupportFormValues) => {
        setSubmitState("sending");
        try {
            const token = widgetId !== null ? window.grecaptcha!.getResponse(widgetId) : "";
            if (!token) {
                setCaptchaSolved(false);
                throw new Error("Please complete the reCAPTCHA challenge.");
            }

            const formData = new FormData();
            formData.append("email", data.email);
            if (data.name) formData.append("name", data.name);
            formData.append("topic", data.topic);
            formData.append("subject", data.subject);
            formData.append("message", data.message);
            formData.append("path", typeof window !== "undefined" ? window.location.pathname : "/help");
            formData.append("g-recaptcha-response", token);
            formData.append("_replyto", data.email);
            formData.append("_subject", `[${data.topic}] ${data.subject}`);

            const res = await fetch("https://formspree.io/f/mrbooaaz", {
                method: "POST",
                headers: { Accept: "application/json" },
                body: formData,
            });

            if (!res.ok) {
                const text = await res.text();
                throw new Error(`HTTP ${res.status} – ${text}`);
            }

            setSubmitState("done");
            gtag("support_form_submit", { topic: data.topic });
            reset();
            if (widgetId !== null) {
                window.grecaptcha!.reset(widgetId);
                setCaptchaSolved(false);
            }
        } catch (e) {
            console.error("Form submission failed:", e);
            setSubmitState("error");
            const subject = encodeURIComponent(`[NutriTrack Support] ${data.subject}`);
            const body = encodeURIComponent(
                `Topic: ${data.topic}\nName: ${data.name ?? ""}\nEmail: ${data.email}\nPath: ${typeof window !== "undefined" ? window.location.href : ""}\n\n${data.message}`
            );
            window.location.href = `mailto:support@nutritrack-app.com?subject=${subject}&body=${body}`;
        }
    };

    // UI
    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* SEO + JSON-LD */}
            {/* Add Helmet for meta tags/JSON-LD */}
            {
                // Insert react-helmet or similar block here if not already present
            }
            <Helmet>
                <title>NutriTrack Support Center – Help &amp; Contact</title>
                <link rel="canonical" href="https://www.nutritrack-app.com/support-center" />
                <meta name="description" content="Get help with NutriTrack: browse FAQs or contact support for account, food logging, AI, billing, and more." />
                <meta property="og:title" content="NutriTrack Support Center – Help &amp; Contact" />
                <meta property="og:description" content="Get help with NutriTrack: browse FAQs or contact support for account, food logging, AI, billing, and more." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.nutritrack-app.com/support-center" />
                <meta property="og:image" content="https://www.nutritrack-app.com/logo-green.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:site_name" content="NutriTrack" />
                <meta property="og:locale" content="en_US" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="NutriTrack Support Center – Help &amp; Contact" />
                <meta name="twitter:description" content="Get help with NutriTrack: browse FAQs or contact support for account, food logging, AI, billing, and more." />
                <meta name="twitter:image" content="https://www.nutritrack-app.com/logo-green.jpg" />
                {/* WebPage JSON-LD */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "NutriTrack Support Center",
                        "description": "Get help with NutriTrack: browse FAQs or contact support for account, food logging, AI, billing, and more.",
                        "url": "https://www.nutritrack-app.com/support-center"
                    })}
                </script>
                {/* FAQPage JSON-LD */}
                {faqSchema && (
                    <script type="application/ld+json">
                        {JSON.stringify(faqSchema)}
                    </script>
                )}
            </Helmet>
            <Navbar />
            <div className="mx-auto max-w-6xl px-4 py-10">
                <header className="mb-8">
                    <h1 className="text-3xl font-semibold">Support Center</h1>
                    <p className="text-sm text-neutral-500 mt-2">Find quick answers or contact support@nutritrack-app.com</p>
                </header>

                {/* Search + Category */}
                <div className="grid gap-8 md:grid-cols-5 mb-8">
                    <input
                        type="search"
                        placeholder="Search questions…"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="md:col-span-3 w-full rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="md:col-span-2  w-full rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {categoriesList.map((c) => (
                            <option key={c} value={c}>{c}</option>
                        ))}
                    </select>
                </div>

                <div className="grid gap-8 md:grid-cols-5">
                    {/* FAQ list */}
                    <section className="md:col-span-3 mb-10">
                        <h2 className="text-xl font-medium mb-4">FAQs</h2>
                        {loadingFaqs && <div className="text-sm text-neutral-500 mb-3">Loading FAQs…</div>}
                        {faqError && <div className="text-sm text-amber-700 mb-3">{faqError}</div>}

                        <ul className="space-y-3">
                            {filteredFaqs.map((f) => {
                                const open = expandedId === f.id;
                                return (
                                    <li key={f.id} className="rounded-2xl border border-neutral-200 bg-white/70 backdrop-blur">
                                        <button
                                            type="button"
                                            aria-expanded={open}
                                            aria-controls={`faq-${f.id}`}
                                            aria-labelledby={`q-${f.id}`}
                                            onClick={() => {
                                                setExpandedId(open ? null : f.id);
                                                if (!open) gtag("faq_open", { id: f.id, category: f.category });
                                            }}
                                            className="w-full text-left px-4 py-4 cursor-pointer"
                                        >
                                            <div className="flex items-start justify-between gap-4">
                                                <div>
                                                    <p className="font-medium" id={`q-${f.id}`}>{f.question}</p>
                                                    <span className="text-xs text-neutral-500">{f.category}</span>
                                                </div>
                                                <span className="text-neutral-400">{open ? "−" : "+"}</span>
                                            </div>
                                        </button>
                                        {open && (
                                            <div
                                                id={`faq-${f.id}`}
                                                role="region"
                                                aria-labelledby={`q-${f.id}`}
                                                className="px-4 pb-4 text-sm text-neutral-700"
                                            >
                                                <div className="prose">
                                                    <PortableText value={f.answer as PortableTextBlock[]} />
                                                </div>
                                            </div>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>

                        {filteredFaqs.length === 0 && query.length > 0 && (
                            <div className="text-sm text-neutral-500">No results. Try a different keyword or category.</div>
                        )}
                    </section>

                    {/* Contact form */}
                    <aside className="md:col-span-2">
                        <h2 className="text-xl font-medium mb-4">Contact support</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl border border-neutral-200 bg-white/70 backdrop-blur p-4 space-y-4">
                            <div>
                                <label className="block text-sm mb-1" htmlFor="support-email">Email *</label>
                                <input
                                    id="support-email"
                                    {...register("email")}
                                    type="email"
                                    aria-invalid={!!errors.email}
                                    aria-describedby={errors.email ? "support-email-error" : undefined}
                                    className="w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.email && <p id="support-email-error" className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-sm mb-1" htmlFor="support-name">Name</label>
                                    <input id="support-name" {...register("name")} type="text" className="w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-sm mb-1" htmlFor="support-topic">Topic *</label>
                                    <select
                                        id="support-topic"
                                        {...register("topic")}
                                        aria-invalid={!!errors.topic}
                                        aria-describedby={errors.topic ? "support-topic-error" : undefined}
                                        className="w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Select…</option>
                                        <option>General</option>
                                        <option>Account</option>
                                        <option>Logging Food</option>
                                        <option>AI Suggestions</option>
                                        <option>Notifications</option>
                                        <option>Billing</option>
                                        <option>Bug</option>
                                    </select>
                                    {errors.topic && <p id="support-topic-error" className="text-xs text-red-600 mt-1">{errors.topic.message as string}</p>}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm mb-1" htmlFor="support-subject">Subject *</label>
                                <input
                                    id="support-subject"
                                    {...register("subject")}
                                    type="text"
                                    aria-invalid={!!errors.subject}
                                    aria-describedby={errors.subject ? "support-subject-error" : undefined}
                                    className="w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.subject && <p id="support-subject-error" className="text-xs text-red-600 mt-1">{errors.subject.message}</p>}
                            </div>
                            <div>
                                <label className="block text-sm mb-1" htmlFor="support-message">Message *</label>
                                <textarea
                                    id="support-message"
                                    {...register("message")}
                                    rows={5}
                                    aria-invalid={!!errors.message}
                                    aria-describedby={errors.message ? "support-message-error" : undefined}
                                    className="w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.message && <p id="support-message-error" className="text-xs text-red-600 mt-1">{errors.message.message}</p>}
                            </div>
                            <div className="mt-2">
                                <div ref={recaptchaRef} className="g-recaptcha" />
                            </div>
                            <button
                                type="submit"
                                disabled={submitState === "sending" || !captchaSolved}
                                className="w-full rounded-xl bg-main text-white py-2 font-medium hover:bg-main-dark disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
                            >
                                {submitState === "sending" ? "Sending…" : (!captchaSolved ? "Please verify you're human…" : "Send message")}
                            </button>
                            {submitState === "done" && (
                                <p className="text-sm text-green-700">Thanks! We got your message and will reply soon.</p>
                            )}
                            {submitState === "error" && (
                                <p className="text-sm text-amber-700">We couldn't reach the server—opening your mail app instead.</p>
                            )}
                            <p className="text-xs text-neutral-500">By submitting, you agree to be contacted at the provided email.</p>
                            <small className="text-xs text-neutral-500 block text-center mt-1">
                                Protected by reCAPTCHA v2
                            </small>
                        </form>
                    </aside>
                </div>

            </div>
            <Footer />
        </div>
    );
}

/* =======================================================================
   NEXT.JS API ROUTE (choose one) — place in /app/api/support/route.ts
   =======================================================================

// --- Option A: Resend (https://resend.com) ---
import { NextResponse } from "next/server";
import { z } from "zod";

const SupportSchema = z.object({
  name: z.string().max(80).optional(),
  email: z.string().email(),
  topic: z.string(),
  subject: z.string().min(3),
  message: z.string().min(10),
  path: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const data = SupportSchema.parse(json);

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return NextResponse.json({ ok: false }, { status: 500 });

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "NutriTrack Support <support@nutritrack-app.com>",
        to: ["support@nutritrack-app.com"],
        reply_to: data.email,
        subject: `[${data.topic}] ${data.subject}`,
        text: `From: ${data.name ?? ""} <${data.email}>\nTopic: ${data.topic}\nPath: ${data.path ?? ""}\n\n${data.message}`,
      }),
    });

    if (!res.ok) return NextResponse.json({ ok: false }, { status: 500 });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}

// --- Option B: Nodemailer/SMTP ---
// import nodemailer from "nodemailer";
// export async function POST(req: Request) {
//   const data = SupportSchema.parse(await req.json());
//   const transporter = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: Number(process.env.SMTP_PORT || 587),
//     secure: false,
//     auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
//   });
//   await transporter.sendMail({
//     from: process.env.SMTP_FROM || "support@nutritrack-app.com",
//     to: "support@nutritrack-app.com",
//     replyTo: data.email,
//     subject: `[${data.topic}] ${data.subject}`,
//     text: `From: ${data.name ?? ""} <${data.email}>\nTopic: ${data.topic}\nPath: ${data.path ?? ""}\n\n${data.message}`,
//   });
//   return new Response(JSON.stringify({ ok: true }), { status: 200 });
// }
*/
