export const siteConfig = {
  name: "Fardin Ahsan",
  title: "AI-First Full Stack Engineer",
  url: "https://fardinahsan.dev",
  email: "fardin.ahsan75@gmail.com",
  phone: "+880 1759552872",
  location: "Dhaka, Bangladesh",
  timezone: "GMT+6",
  overlap: "Overlaps US East mornings and all of EU hours",
  // Drop a PDF into /public and set the path here to show the résumé button.
  resumeUrl: null as string | null,
  calendarUrl: "https://calendar.app.google/59ki4GCme9Qo4RSP8",
  social: {
    linkedin: "https://www.linkedin.com/in/ahsan-fardin/",
    github: "https://github.com/jsxFardin",
    facebook: "https://www.facebook.com/jsxfardin/",
    twitter: "https://x.com/FardinAhsan13",
    youtube: "https://www.youtube.com/@FardinAhsan75",
  },
};

export const projects = [
  {
    name: "Agilibo – Agile SaaS Platform",
    role: "Senior Software Engineer, 2020–present",
    outcome:
      "Two-way Jira & Azure DevOps sync, multi-company tenancy and AI-generated sprint insights, in production for distributed teams.",
    description:
      "Comprehensive Agile platform supporting backlog, sprint, planning, retrospectives, and more, with AI-powered insights. Supports two-way integration with Jira & Azure DevOps, designed for multi-team and multi-company environments.",
    problem: "Teams struggle with fragmented agile tools and lack of unified insights.",
    solution: "Unified platform with AI-powered analytics and Jira/Azure DevOps integration.",
    features: [
      "AI-powered insights and automated reporting",
      "Two-way integration with Jira & Azure DevOps",
      "Gamified features and collaborative tools",
      "Real-time notifications and dashboards",
      "Role-based access control for secure multi-level team management",
      "Optimized system performance for large-scale enterprise data",
    ],
    technologies: [
      "Vue.js",
      "Laravel",
      "Node.js",
      "Redis",
      "Elasticsearch",
      "AI Integration",
      "Real-time Systems",
      "Jira Integration",
      "Azure",
      "Docker",
      "Microservice",
      "Payment Gateway",
      "Analytics",
      "Multi-language",
    ],
    link: "https://www.agilibo.info",
    company: "Kaz Software LTD",
    image: "/images/projects/agilibo.png",
  },
  {
    name: "Alternative Learning Programme (ALP)",
    role: "Full stack engineer",
    outcome:
      "Enrollment, progress tracking and impact analytics across multiple districts, built for low-end devices in the field.",
    description:
      "Non-formal education initiative in Bangladesh for out-of-school and marginalized youth, focusing on skills development and empowerment.",
    problem: "Out-of-school youth lack access to structured learning and skills development.",
    solution: "Digital platform for course management, progress tracking, and impact analytics across districts.",
    features: [
      "Student registration and course management",
      "Progress tracking and analytics",
      "Monitoring learning outcomes across multiple districts",
      "Responsive web interface for low-end devices",
      "Program impact analytics and reporting",
    ],
    technologies: [
      "Vue.js",
      "Laravel",
      "Analytics",
      "Responsive Design",
      "Multi-district Management",
      "Google Maps API",
      "Multi-language",
    ],
    link: "https://alprtm.com/",
    company: "UNICEF Bangladesh",
    image: "/images/projects/alp.webp",
  },
  {
    name: "Prospeneo – Real Estate Software",
    role: "Full stack engineer",
    outcome:
      "AI lead generation, funnel CRM, website builder and multi-currency payments shipped for agents and agencies.",
    description:
      "Developed features for AI-powered lead generation, sales funnel management, websites, email marketing, and analytics.",
    problem: "Real estate agents need efficient lead management and sales tracking.",
    solution: "AI-powered CRM with lead generation, funnel management, and analytics.",
    features: [
      "AI-powered lead generation and sales funnel management",
      "CRM solutions for agents and agencies",
      "Custom dashboards for tracking leads and deals",
      "Payment gateway integration",
      "Cross-platform consistency for web and mobile",
      "Email marketing and analytics integration",
    ],
    technologies: [
      "Vue.js",
      "Laravel",
      "AI Integration",
      "CRM",
      "Payment Gateway",
      "Analytics",
      "Google Maps API",
      "Email Marketing",
      "Website Builder",
      "Real-time Tracking",
      "Multi-currency",
      "Multi-language",
    ],
    link: "https://www.prospeneo.com/",
    company: "Prospeneo",
    image: "/images/projects/prospeneo.jpg",
  },
  {
    name: "Robishop – E-commerce Platform",
    role: "Full stack engineer",
    outcome:
      "Nationwide e-commerce PWA for a telecom operator: catalog, payments, delivery tracking, returns and loyalty.",
    description:
      "Built product catalog, payment integration, order processing, and delivery tracking for Robi Axiata Ltd.",
    problem: "Telecom operator needed a scalable e-commerce platform for their customers.",
    solution: "Full-featured PWA with product catalog, payments, order tracking, and loyalty programs.",
    features: [
      "Product catalog and payment integration",
      "Order processing and delivery tracking",
      "Returns management and customer support",
      "Promotional campaigns and coupon management",
      "Loyalty programs to boost sales",
      "Analytics dashboards for sales and user behavior",
    ],
    technologies: [
      "Vue Storefront",
      "Express.js",
      "Magento 2",
      "PWA",
      "Redis",
      "Elasticsearch",
      "Payment Gateway",
      "Analytics",
      "Multi-language",
      "Real-time Tracking",
      "Docker",
      "AWS",
    ],
    link: "https://robishop.com.bd",
    company: "Robi Axiata Limited",
    image: "/images/projects/robishop.webp",
  },
  {
    name: "Sendparcel – International Parcel Delivery",
    role: "Backend engineer",
    outcome:
      "DHL, FedEx, TNT and GLS integrations covering 220+ countries with live rates, booking and tracking.",
    description:
      "Simplified global shipping with integrations for DHL, FedEx, TNT, and GLS across 220+ countries.",
    problem: "Businesses need simplified multi-carrier international shipping.",
    solution: "Unified platform for booking, tracking, and price comparison across 220+ countries.",
    features: [
      "Global shipping with multiple courier integrations",
      "Booking, tracking, and price comparison",
      "Automated shipping rate calculation",
      "Multi-currency payment gateways",
      "Real-time shipment updates and notifications",
      "Admin dashboards for operational efficiency",
    ],
    technologies: [
      "Symfony",
      "PHP",
      "Payment Gateway",
      "Shipping API",
      "Multi-currency",
      "Real-time Tracking",
      "AI Integration",
    ],
    link: "https://www.sendparcel.com/",
    company: "Sendparcel",
    image: "/images/projects/sendparcel.jpg",
  },
];

export const services = [
  {
    title: "AI & LLM Integration",
    description:
      "RAG document Q&A, customer-facing assistants, and LLM workflow automation built into your existing web apps, with OpenAI, Anthropic and vector databases.",
    accentColor: "purple",
  },
  {
    title: "Custom Software & SaaS",
    description:
      "Multi-tenant SaaS, ERP, CRM, POS and dashboards: modular Laravel or Node backends with React or Vue frontends, built to scale.",
    accentColor: "blue",
  },
  {
    title: "Device & Hardware Integration",
    description:
      "Biometric attendance and punch devices, POS hardware, barcode scanners and IoT sensors synced in real time with HR, payroll and production systems.",
    accentColor: "orange",
  },
  {
    title: "DevOps & Cloud",
    description:
      "Docker, AWS, Azure, CI/CD pipelines and infrastructure as code, so you deploy daily instead of monthly.",
    accentColor: "cyan",
  },
  {
    title: "E-commerce & Payments",
    description:
      "Storefronts, PWAs, payment gateways, shipping APIs and order tracking, from catalog to checkout to delivery.",
    accentColor: "emerald",
  },
  {
    title: "Mobile App Development",
    description:
      "React Native iOS and Android apps sharing one API with your web platform.",
    accentColor: "rose",
  },
];

export const techCategories = [
  {
    title: "AI & LLM",
    techs: ["OpenAI API", "Anthropic API", "RAG", "Embeddings", "Vector DBs", "LangChain", "Agents", "Prompt Engineering"],
    accent: "purple",
  },
  {
    title: "Backend",
    techs: ["Laravel", "Node.js", "PHP", "REST APIs", "Microservices", "Payment Gateways", "Symfony", "GraphQL"],
    accent: "pink",
  },
  {
    title: "Frontend",
    techs: ["React", "Vue.js", "Next.js", "Nuxt.js", "TypeScript", "Tailwind CSS", "React Native"],
    accent: "cyan",
  },
  {
    title: "Database",
    techs: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "Elasticsearch"],
    accent: "emerald",
  },
  {
    title: "DevOps & Cloud",
    techs: ["Docker", "AWS", "Azure", "CI/CD", "Nginx", "Linux"],
    accent: "cyan",
  },
  {
    title: "Devices & Integrations",
    techs: ["Biometric / Punch Devices", "POS Hardware", "Barcode Scanners", "IoT Sensors", "Device SDKs", "Webhooks"],
    accent: "orange",
  },
];

export const videos = [
  {
    id: "MSPwRYcOJDI",
    title: "Turn Any Website Into a Design System in Seconds (DESIGN.md Explained)",
    published: "2026-05-06",
  },
  {
    id: "Tb3kaPv-IGw",
    title: "10x Faster Laravel App with Livewire Blaze",
    published: "2026-02-26",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  projectTag: string;
  rating?: number;
  featured?: boolean;
  /** Client logo (transparent PNG/SVG). Falls back to initials when missing. */
  logo?: string;
  /** Where the review was posted. Adds a verifiable link, e.g. Upwork or LinkedIn. */
  source?: { label: string; url: string };
};

export const testimonials: Testimonial[] = [
  {
    quote: "Fardin did an excellent job on our Laravel SaaS project. His deep knowledge of Laravel and attention to detail resulted in high-quality deliverables that met our requirements perfectly. He was communicative, reliable, and proactive in addressing challenges. His contributions significantly improved our project. Highly recommended for anyone seeking a skilled Laravel developer!",
    author: "Ziad Iqbal",
    role: "CEO",
    company: "Agilibo",
    projectTag: "SaaS",
    rating: 5,
    featured: true,
    logo: "/images/clients/agilibo.png",
  },
  {
    quote: "Fardin is a great guy to work with. An expert in web development and he completed the job with 100% success. I would recommend Fardin to anyone.",
    author: "Calum Stewart",
    role: "Project Delivery Lead",
    company: "Investoo Group",
    projectTag: "ERP",
    rating: 5,
  },
  {
    quote: "Good work. Fardin is experienced in Vue.js and a pleasure to work with.",
    author: "Tony Duong",
    role: "Project Manager",
    company: "Econumerica Software",
    projectTag: "CRM",
    rating: 5,
  },
  {
    quote: "Thanks for your fast delivery of high quality work.",
    author: "Christof Moser",
    role: "CEO",
    company: "Actra AG",
    projectTag: "E-commerce",
    rating: 5,
  },
];

export const stats = [
  { value: "7+", label: "years shipping production software" },
  { value: "12", label: "enterprise and NGO clients" },
  { value: "2024", label: "LLM features in every build since" },
];

export const facts = [
  { label: "Based in", value: "Dhaka, Bangladesh (GMT+6)" },
  { label: "Working hours", value: "Flexible, overlaps US East mornings and EU day" },
  { label: "Open to", value: "Remote full-time, contract, fractional" },
  { label: "Languages", value: "English, Bangla" },
  { label: "Current role", value: "Senior Software Engineer, Kaz Software" },
];

export const experience = [
  {
    company: "Kaz Software LTD",
    role: "Senior Software Engineer",
    period: "Aug 2020 – Present",
    location: "Dhaka, hybrid",
    summary:
      "Core engineer on Agilibo, a multi-tenant agile SaaS: Laravel and Node backends, Redis and Elasticsearch, Jira and Azure DevOps integrations, and LLM-powered insights.",
    stack: ["Laravel", "Node.js", "Vue.js", "Redis", "Elasticsearch", "OpenAI API", "Docker"],
  },
  {
    company: "Gain Solution LTD",
    role: "Software Developer",
    period: "Aug 2019 – Aug 2020",
    location: "Dhaka",
    summary:
      "Full stack development on client ERP, CRM and e-commerce products, including device integrations and reporting dashboards.",
    stack: ["Laravel", "Vue.js", "MySQL", "Device SDKs"],
  },
  {
    company: "Barcodetech-Automation",
    role: "Junior Software Developer",
    period: "Dec 2018 – Aug 2019",
    location: "Dhaka",
    summary:
      "Web applications for retail and automation customers, including barcode scanner and POS hardware integration.",
    stack: ["PHP", "jQuery", "MySQL", "POS Hardware"],
  },
];

export const process = [
  {
    step: "01",
    title: "Scope",
    description:
      "A 20-minute call, then a one-page brief: the manual work we are removing, success metric, data sources, and what ships in the first two weeks.",
  },
  {
    step: "02",
    title: "Build in the open",
    description:
      "Weekly demo on a staging URL. Typed APIs, tests on the paths that matter, evals for any LLM feature so quality has a number.",
  },
  {
    step: "03",
    title: "Ship & hand over",
    description:
      "CI/CD, monitoring, docs and a Loom walkthrough. You own the repo and the infra. I stay on for support if you want it.",
  },
];

export const aiWorkflow = [
  "Claude Code and Cursor for day-to-day implementation, reviewed line by line",
  "Agent pipelines for migrations, test generation and refactors",
  "Eval suites before any prompt or model change goes live",
  "RAG with hybrid search, reranking and citation checks",
  "Cost and latency budgets tracked per LLM feature",
];

export const faqs = [
  {
    q: "Do you work US hours?",
    a: "My day overlaps with US East mornings, and I keep EU hours fully. For urgent items I am reachable later. Async-first teams work best with me, but I have shipped with daily stand-ups on US time.",
  },
  {
    q: "Full-time, contract or both?",
    a: "Both. I am open to remote full-time roles as a senior or lead engineer, and to contract or fractional work for product teams and agencies.",
  },
  {
    q: "Can you join an existing codebase and team?",
    a: "Yes, most of my work has been inside existing Laravel, Node and Vue/React codebases. First week is reading, tests and small PRs, then larger features.",
  },
  {
    q: "What does an AI feature project look like?",
    a: "Usually a RAG assistant or a workflow automation on top of your existing data. Two to six weeks for a first production version, with evals and cost tracking from day one.",
  },
  {
    q: "Fixed price or hourly?",
    a: "Fixed price for scoped projects after the brief. Hourly or monthly retainer for ongoing work.",
  },
];
