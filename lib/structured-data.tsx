import { siteConfig, projects } from "./data";

const baseUrl = siteConfig.url;

export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    description:
      "AI-First Full Stack Engineer with 7+ years of experience building LLM-powered web apps (RAG, AI assistants, workflow automation), SaaS/ERP/CRM platforms and hardware/device integrations.",
    image: `${baseUrl}/images/fardin-ahsan.jpg`,
    url: baseUrl,
    email: siteConfig.email,
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.github,
      siteConfig.social.twitter,
      siteConfig.social.facebook,
      siteConfig.social.youtube,
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Large Language Models",
      "Retrieval-Augmented Generation",
      "AI Agents",
      "Laravel",
      "Vue.js",
      "React",
      "Node.js",
      "Next.js",
      "Microservices",
      "SaaS Development",
      "DevOps",
      "AWS",
      "Azure",
      "Hardware Integration",
      "Biometric Devices",
      "IoT",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "AI-First Full Stack Engineer",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} - Portfolio`,
    url: baseUrl,
    description: "AI-First Full Stack Engineer portfolio — LLM-powered web apps, SaaS platforms and device integrations.",
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProjectsSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.name,
        description: project.description,
        url: project.link,
        image: `${baseUrl}${project.image}`,
        author: {
          "@type": "Person",
          name: siteConfig.name,
        },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
