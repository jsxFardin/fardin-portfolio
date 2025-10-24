import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://fardinahsan.dev"),
  title: "Fardin Ahsan - Full Stack Developer Portfolio",
  description:
    "Fardin Ahsan — Full Stack Developer (7+ yrs) specializing in Laravel, React, Vue, Node, Next.js, SaaS and microservices. ERP, CRM, POS, e‑commerce, DevOps.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "full stack developer",
    "web development",
    "Laravel developer",
    "Vue.js developer",
    "React developer",
    "Node.js developer",
    "Next.js",
    "Nuxt.js",
    "SaaS development",
    "ERP development",
    "CRM systems",
    "POS solutions",
    "DevOps engineer",
    "CI/CD pipelines",
    "AWS",
    "Azure",
    "Docker",
    "microservices architecture",
    "cloud deployment",
    "scalable web apps",
    "API integration",
    "backend development",
    "frontend development",
    "real-time tracking platforms",
    "payment gateway integration",
    "enterprise web solutions",
    "business automation",
    "software architect",
    "web application developer",
    "JavaScript",
    "TypeScript",
    "PHP",
    "Python",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Kubernetes",
    "Terraform",
    "Jenkins",
    "Git",
    "REST API",
    "GraphQL",
    "WebSocket",
    "responsive design",
    "mobile-first development",
    "progressive web apps",
    "performance optimization",
    "security best practices",
    "code review",
    "agile development",
    "scrum methodology",
    "team leadership",
    "technical consulting",
    "system design",
    "database optimization",
    "serverless architecture",
    "containerization",
    "monitoring and logging",
    "automated testing",
    "continuous integration",
    "continuous deployment",
    "infrastructure as code",
    "cloud migration",
    "API design",
    "third-party integrations",
    "e-commerce development",
    "fintech solutions",
    "healthcare applications",
    "education platforms",
    "social media applications",
    "content management systems",
    "custom software development",
    "legacy system modernization",
    "digital transformation",
    "startup development",
    "enterprise solutions",
    "freelance developer",
    "remote developer",
    "contract developer",
    "portfolio",
    "case studies",
    "project showcase",
    "client testimonials",
    "technical expertise",
    "problem solving",
    "innovation",
    "best practices",
    "code quality",
    "maintainable code",
    "documentation",
    "mentoring",
    "knowledge sharing",
    "open source",
    "community contribution",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MFB7SPBC');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MFB7SPBC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Navigation />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
