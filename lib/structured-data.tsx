import { siteConfig, projects } from "./data";

const baseUrl = siteConfig.url;

export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    description:
      "Full Stack Developer with 7+ years of experience specializing in scalable web applications, microservice-based architectures, and SaaS solutions.",
    image: `${baseUrl}/images/fardin-ahsan.jpg`,
    url: baseUrl,
    email: siteConfig.email,
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.github,
      siteConfig.social.twitter,
      siteConfig.social.facebook,
    ],
    knowsAbout: [
      "Laravel",
      "Vue.js",
      "React",
      "Node.js",
      "Next.js",
      "Microservices",
      "SaaS Development",
      "DevOps",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Developer",
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
    description: "Full Stack Developer portfolio showcasing projects and expertise.",
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
