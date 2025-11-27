export interface SEOPageData {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  longForm: {
    title: string;
    content: string[];
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export const seoPages: SEOPageData[] = [
  {
    slug: "calorie-counter-app",
    title: "Best Calorie Counter App & Tracker | MacroAura",
    description: "Looking for the best calorie counter app? MacroAura makes tracking calories simple. Log meals, scan barcodes, and hit your goals with our free calorie tracker.",
    keywords: "calorie counter, calorie tracker app, best calorie tracker, free calorie counter, food diary app",
    hero: {
      title: "The Calorie Counter App That Actually Works",
      subtitle: "Stop guessing. Start tracking. MacroAura is the simple, powerful calorie tracker app designed to help you reach your goals without the stress.",
      cta: "Start Counting Calories"
    },
    features: [
      {
        title: "Lightning Fast Logging",
        description: "Log meals in seconds with our smart search and barcode scanner.",
        icon: "fa-bolt"
      },
      {
        title: "Accurate Database",
        description: "Access millions of verified foods for precise calorie counting.",
        icon: "fa-database"
      },
      {
        title: "Smart Insights",
        description: "See exactly where your calories are coming from with daily breakdowns.",
        icon: "fa-chart-pie"
      }
    ],
    longForm: [
      {
        title: "Why Use a Calorie Counter App?",
        content: [
          "Weight loss boils down to one simple principle: calories in versus calories out. But tracking that balance manually is a headache. That's where a **calorie counter app** like MacroAura changes the game.",
          "By digitally logging your meals, you gain instant awareness of your eating habits. No more accidental overeating or wondering why the scale isn't moving. A **calorie tracker app** gives you the data you need to make informed decisions about your health."
        ]
      },
      {
        title: "What Makes MacroAura the Best Calorie Tracker?",
        content: [
          "Unlike other apps that are cluttered with ads or confusing features, MacroAura focuses on speed and simplicity. We know that if logging is a chore, you won't do it. That's why we built the fastest **calorie counter** on the market.",
          "With features like barcode scanning, quick-add calories, and saved meals, you can log your entire day in under 2 minutes. Plus, our privacy-first approach means your health data stays yours."
        ]
      },
      {
        title: "More Than Just Calories",
        content: [
          "While calories matter, quality matters too. MacroAura isn't just a **calorie counter**; it's a complete nutrition coach. Track your macros (protein, carbs, fats), monitor your water intake, and watch your habits improve over time.",
          "Whether you're looking to lose weight, build muscle, or simply eat healthier, having a reliable **calorie tracker app** in your pocket is the secret weapon for long-term success."
        ]
      }
    ],
    faq: [
      {
        question: "Is this calorie counter app free?",
        answer: "Yes, MacroAura offers a robust free version that includes all core calorie tracking features, barcode scanning, and food logging."
      },
      {
        question: "How accurate is the calorie tracker?",
        answer: "Our database is powered by verified nutritional data, ensuring that your calorie counts are as precise as possible."
      },
      {
        question: "Can I track macros with this app?",
        answer: "Absolutely. In addition to being a calorie counter, MacroAura is a full-featured macro tracker that lets you set custom protein, carb, and fat goals."
      }
    ]
  },
  {
    slug: "macro-tracker-app",
    title: "Macro Tracker & Macro Diet App | MacroAura",
    description: "Track macros easily with MacroAura. The ultimate macro diet app for counting protein, carbs, and fats. Perfect for IIFYM and muscle building.",
    keywords: "macro tracker, track macros, macro diet app, iifym app, protein tracker",
    hero: {
      title: "Master Your Nutrition with the Ultimate Macro Tracker",
      subtitle: "Don't just count calories. Optimize your fuel. MacroAura is the macro diet app built for performance, muscle growth, and flexible dieting.",
      cta: "Start Tracking Macros"
    },
    features: [
      {
        title: "Custom Macro Goals",
        description: "Set personalized targets for protein, carbs, and fats based on your goals.",
        icon: "fa-bullseye"
      },
      {
        title: "Visual Breakdowns",
        description: "See your daily macro split at a glance with beautiful charts.",
        icon: "fa-chart-pie"
      },
      {
        title: "Protein Focus",
        description: "Dedicated tools to help you hit your daily protein targets effortlessly.",
        icon: "fa-dumbbell"
      }
    ],
    longForm: [
      {
        title: "Why You Need a Macro Tracker",
        content: [
          "Calories tell you how much you're eating, but macros tell you *what* you're eating. If you're trying to build muscle or burn fat efficiently, a **macro tracker** is essential.",
          "By balancing your protein, carbohydrates, and fats, you can optimize your body's performance. A **macro diet app** helps you ensure you're getting enough protein for recovery and the right amount of carbs for energy."
        ]
      },
      {
        title: "The Simplest Way to Track Macros",
        content: [
          "Tracking macros can feel like advanced calculus with the wrong tools. MacroAura simplifies the process. Our **macro tracker** automatically calculates the nutrient breakdown of every food you log.",
          "Whether you're following IIFYM (If It Fits Your Macros), Keto, or a balanced diet, MacroAura adapts to your style. Just log your food, and let our **macro diet app** handle the math."
        ]
      },
      {
        title: "Build Muscle and Burn Fat",
        content: [
          "Protein is the building block of muscle. MacroAura puts your protein intake front and center, making it the perfect **protein tracker** for athletes and gym-goers.",
          "Stop guessing if you're eating enough to support your gains. Use a dedicated **macro tracker** to take control of your nutrition and see real results faster."
        ]
      }
    ],
    faq: [
      {
        question: "What is a macro tracker?",
        answer: "A macro tracker is an app that helps you log and monitor your intake of macronutrients: protein, carbohydrates, and fats, rather than just calories."
      },
      {
        question: "Is MacroAura good for the Keto diet?",
        answer: "Yes! You can customize your macro goals in MacroAura to fit a low-carb, high-fat Keto diet perfectly."
      },
      {
        question: "How do I calculate my macros?",
        answer: "MacroAura includes a built-in macro calculator that suggests personalized targets based on your age, weight, activity level, and fitness goals."
      }
    ]
  },
  {
    slug: "food-nutrition-tracker",
    title: "Food & Nutrition Tracker App | Barcode Scanner | MacroAura",
    description: "The complete food nutrition tracker. Log meals, scan barcodes, and understand your nutrition. The best food log app for healthy eating.",
    keywords: "food log app, nutrition tracker, barcode scanner food, food diary, meal logger",
    hero: {
      title: "Your Personal Food & Nutrition Tracker",
      subtitle: "Understand what's on your plate. MacroAura is the comprehensive food log app that gives you the full nutritional picture of every meal.",
      cta: "Log Your Food"
    },
    features: [
      {
        title: "Barcode Scanner",
        description: "Instantly log packaged foods with our lightning-fast barcode scanner.",
        icon: "fa-barcode"
      },
      {
        title: "Complete Nutrition",
        description: "Track vitamins, minerals, and micronutrients, not just calories.",
        icon: "fa-apple-alt"
      },
      {
        title: "Meal History",
        description: "Learn from your habits with a searchable history of your food log.",
        icon: "fa-history"
      }
    ],
    longForm: [
      {
        title: "The Power of a Food Log App",
        content: [
          "Mindful eating starts with awareness. Keeping a food diary is one of the most effective ways to improve your diet. A digital **food nutrition tracker** makes this habit effortless.",
          "MacroAura serves as your daily **food log app**, helping you spot patterns, identify triggers, and make healthier choices. It's not just about restriction; it's about understanding the fuel you put in your body."
        ]
      },
      {
        title: "Scan, Log, Done",
        content: [
          "We know you're busy. That's why our **nutrition tracker** features a powerful **barcode scanner**. Just point your camera at any food package, and MacroAura instantly pulls up all the nutritional data.",
          "No barcode? No problem. Our extensive database and smart search make manual entry a breeze. It's the **food nutrition tracker** designed for the real world."
        ]
      },
      {
        title: "Deep Nutritional Insights",
        content: [
          "Most apps stop at calories. MacroAura goes deeper. As a complete **nutrition tracker**, we help you monitor fiber, sugar, sodium, and other key nutrients.",
          "Take control of your long-term health by understanding the full nutritional profile of your diet with the most detailed **food log app** available."
        ]
      }
    ],
    faq: [
      {
        question: "Does the app have a barcode scanner?",
        answer: "Yes, MacroAura features a built-in barcode scanner that makes logging packaged foods instant and accurate."
      },
      {
        question: "Can I save my favorite meals?",
        answer: "Absolutely. You can save frequently eaten meals and recipes to your food log for quick one-tap logging in the future."
      },
      {
        question: "Is this good for tracking micronutrients?",
        answer: "Yes, MacroAura provides detailed breakdowns of micronutrients like fiber, sugar, and sodium to give you a complete picture of your nutrition."
      }
    ]
  },
  {
    slug: "water-tracker-app",
    title: "Water Tracker & Hydration Log App | MacroAura",
    description: "Stay hydrated with MacroAura's water tracker app. Log your daily water intake, set goals, and build healthy hydration habits.",
    keywords: "hydration tracker, water log app, water tracker app, daily water intake, drink water reminder",
    hero: {
      title: "Simple, Effective Water Tracker App",
      subtitle: "Hydration is the foundation of health. Track your daily water intake and build lasting habits with MacroAura's easy-to-use hydration tracker.",
      cta: "Start Tracking Water"
    },
    features: [
      {
        title: "Quick Logging",
        description: "Log water with a single tap. Choose from preset amounts or custom sizes.",
        icon: "fa-tint"
      },
      {
        title: "Daily Goals",
        description: "Set personalized hydration targets and visualize your progress.",
        icon: "fa-check-circle"
      },
      {
        title: "Hydration History",
        description: "View your water intake over time to spot trends and stay consistent.",
        icon: "fa-calendar-alt"
      }
    ],
    longForm: [
      {
        title: "Why Use a Water Tracker App?",
        content: [
          "We all know we should drink more water, but actually doing it is a challenge. A **water tracker app** acts as your personal accountability partner.",
          "Proper hydration improves energy, skin health, and cognitive function. By using a **hydration tracker**, you turn the abstract goal of \"drinking more water\" into a concrete, trackable daily habit."
        ]
      },
      {
        title: "Track More Than Just Water",
        content: [
          "MacroAura isn't just a **water log app**; it's a complete health companion. You can track water alongside your meals and macros, giving you a holistic view of your health.",
          "See how your hydration levels correlate with your energy and hunger. Often, what we think is hunger is actually thirst. Our **water tracker app** helps you stay in tune with your body's needs."
        ]
      },
      {
        title: "Build a Hydration Habit",
        content: [
          "Consistency is key. MacroAura makes logging water satisfying and simple. Watch your daily progress bar fill up and maintain your streak.",
          "Whether you're an athlete needing precise **hydration tracking** or just trying to drink your 8 glasses a day, MacroAura is the simple tool to help you succeed."
        ]
      }
    ],
    faq: [
      {
        question: "How much water should I drink a day?",
        answer: "While the \"8 glasses\" rule is common, individual needs vary. MacroAura helps you set a personalized goal based on your body weight and activity level."
      },
      {
        question: "Is the water tracker free?",
        answer: "Yes, the water tracking feature is completely free to use within the MacroAura app."
      },
      {
        question: "Can I track other beverages?",
        answer: "Currently, the focus is on water, but you can log other beverages as part of your food diary to track their caloric and nutritional impact."
      }
    ]
  },
  {
    slug: "weight-tracker-app",
    title: "Weight Tracker & Weight Loss Log App | MacroAura",
    description: "Track your weight loss journey with MacroAura. The simple weight tracker app for logging weight, monitoring BMI, and visualizing progress.",
    keywords: "weight log, weight loss tracker, bmi tracker, weight tracker app, scale app",
    hero: {
      title: "Visualize Your Progress with Our Weight Tracker",
      subtitle: "The scale is just data. MacroAura turns that data into motivation. Log your weight, track trends, and celebrate every milestone.",
      cta: "Track Your Weight"
    },
    features: [
      {
        title: "Progress Charts",
        description: "Visualize your weight loss journey with beautiful, easy-to-read graphs.",
        icon: "fa-chart-line"
      },
      {
        title: "BMI Calculator",
        description: "Automatically calculate and track your BMI with every weigh-in.",
        icon: "fa-calculator"
      },
      {
        title: "Private & Secure",
        description: "Your weight data is personal. We keep it secure and private.",
        icon: "fa-lock"
      }
    ],
    longForm: [
      {
        title: "The Best Way to Track Weight Loss",
        content: [
          "Sustainable weight loss isn't a straight line. It has ups and downs. A **weight tracker app** helps you see the bigger picture, focusing on long-term trends rather than daily fluctuations.",
          "MacroAura's **weight log** allows you to record your weight daily or weekly, smoothing out the noise and showing you the true direction of your progress."
        ]
      },
      {
        title: "More Than Just a Number",
        content: [
          "MacroAura combines **weight loss tracking** with nutrition and hydration data. This lets you see cause and effect. Did a high-sodium meal cause a temporary spike? Is your consistency with protein leading to steady loss?",
          "By integrating a **weight tracker** with your food diary, you get the insights you need to understand your body and adjust your plan for better results."
        ]
      },
      {
        title: "Track BMI and Milestones",
        content: [
          "In addition to raw weight, MacroAura functions as a **BMI tracker**, helping you understand your health metrics in context.",
          "Set a goal weight and watch as you get closer every day. Our **weight tracker app** is designed to keep you motivated, celebrating every pound lost and every healthy habit built."
        ]
      }
    ],
    faq: [
      {
        question: "How often should I weigh myself?",
        answer: "We recommend weighing yourself at the same time each day (usually morning) for the most consistent data, but you can log as often as you prefer."
      },
      {
        question: "Does this app calculate BMI?",
        answer: "Yes, MacroAura automatically calculates and updates your BMI (Body Mass Index) every time you log a new weight."
      },
      {
        question: "Is my weight data private?",
        answer: "Absolutely. Your health data is stored securely on your device and is never shared without your explicit permission."
      }
    ]
  }
];
