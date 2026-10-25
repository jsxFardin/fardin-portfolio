import type { Metadata, Viewport } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PersonSchema, WebSiteSchema } from "@/lib/structured-data";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fardinahsan.dev"),
  title: {
    default: "Fardin Ahsan - AI-First Full Stack Engineer",
    template: "%s | Fardin Ahsan",
  },
  description:
    "Fardin Ahsan — AI-First Full Stack Engineer (7+ yrs). LLM-powered web apps (RAG, AI assistants, workflow automation), SaaS/ERP/CRM platforms, biometric & IoT device integration. Laravel, Node, React, AWS.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  keywords: [
    "AI engineer",
    "AI-first full stack engineer",
    "LLM developer",
    "RAG developer",
    "AI integration",
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
    "device integration",
    "biometric attendance integration",
    "IoT integration",
    "freelance developer",
    "remote developer",
    "contract developer",
    "portfolio",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fardinahsan.dev",
    siteName: "Fardin Ahsan - AI-First Full Stack Engineer",
    title: "Fardin Ahsan - AI-First Full Stack Engineer",
    description:
      "I build AI-powered web apps that cut manual work and scale your business. RAG, LLM assistants, SaaS/ERP, device integration. 7+ yrs · UNICEF, Novo Nordisk, Robi.",
    images: [
      {
        url: "/images/fardin-ahsan.jpg",
        width: 800,
        height: 800,
        alt: "Fardin Ahsan - AI-First Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fardin Ahsan - AI-First Full Stack Engineer",
    description:
      "AI-powered web apps that cut manual work: RAG, LLM assistants, SaaS/ERP, device integration. 7+ yrs.",
    creator: "@FardinAhsan13",
    images: ["/images/fardin-ahsan.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  verification: {
    // Add your verification IDs when available
    // google: "your-google-verification-id",
    // yandex: "your-yandex-verification-id",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf8f4",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${mono.variable}`}>
      <head>
        <PersonSchema />
        <WebSiteSchema />
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
      </head>
      <body className="font-sans">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MFB7SPBC"
            title="Google Tag Manager"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content" className="min-h-screen" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
