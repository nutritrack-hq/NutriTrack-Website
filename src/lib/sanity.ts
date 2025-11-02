// src/lib/sanity.ts
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET;
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION;
const useCdn = false; 
if (!projectId) {
  console.warn('VITE_SANITY_PROJECT_ID is not set. Sanity client will not work.');
}

export const client = sanityClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});

export const imageBuilder = imageUrlBuilder(client);

export function urlFor(source: string) {
  return imageBuilder.image(source);
}

// -----------------------------
// GROQ queries & helpers
// -----------------------------

/**
 * Query to fetch all FAQs with dereferenced category title and tags
 * Fields: _id, question, answer (Portable Text), tag (array of strings), category (string)
 */
// URL :https://esg2ut4k.api.sanity.io/v2025-11-02/data/query/prod?query=*%5B_type+%3D%3D+%22faq%22%5D+%7C+order%28order+asc%29%7B%0A++_id%2C%0A++question%2C%0A++answer%2C%0A++tag%2C%0A++%22category%22%3A+category-%3Etitle%0A%7D&perspective=published
export const faqQuery = `*[_type == "faq"] | order(order asc){
  _id,
  question,
  answer,
  tag,
  "category": category->title
}`;

/**
 * Query to fetch categories
 */
// URL:https://esg2ut4k.api.sanity.io/v2025-11-02/data/query/prod?query=*%5B_type+%3D%3D+%22category%22%5D+%7C+order%28order+asc%29%7B%0A++_id%2C%0A++title%2C%0A++order%0A%7D&perspective=published
export const categoriesQuery = `*[_type == "category"] | order(order asc){
  _id,
  title,
  order
}`;

/**
 * Fetch all published FAQs.
 */
export async function getFaqs(): Promise<unknown[]> {
  return client.fetch(faqQuery);
}

/**
 * Fetch FAQs for a given category title (case-sensitive match of category title).
 */
export async function getFaqsByCategory(categoryTitle: string): Promise<unknown[]> {
  const q = `*[_type == "faq" && category->title == $title] | order(order asc){_id, question, answer, tag, "category": category->title}`;
  return client.fetch(q, { title: categoryTitle });
}

/**
 * Fetch a single FAQ by its _id
 */
export async function getFaqById(id: string): Promise<unknown | null> {
  const q = `*[_type == "faq" && _id == 560febf0-a948-415f-b6b7-b06c90d0fa79]{_id, question, answer, tag, "category": category->title}[0]`;
  return client.fetch(q, { id });
}

/**
 * Fetch categories list
 */
export async function getCategories(): Promise<unknown[]> {
  return client.fetch(categoriesQuery);
}