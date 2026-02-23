import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PersonSchema, WebSiteSchema } from "@/lib/structured-data";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fardinahsan.dev"),
  title: {
    default: "Fardin Ahsan - Full Stack Developer Portfolio",
    template: "%s | Fardin Ahsan",
  },
  description:
    "Fardin Ahsan — Full Stack Developer (7+ yrs) specializing in Laravel, React, Vue, Node, Next.js, SaaS and microservices. ERP, CRM, POS, e‑commerce, DevOps.",
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
    "freelance developer",
    "remote developer",
    "contract developer",
    "portfolio",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fardinahsan.dev",
    siteName: "Fardin Ahsan - Full Stack Developer",
    title: "Fardin Ahsan - Full Stack Developer Portfolio",
    description:
      "Full Stack Developer (7+ yrs) specializing in Laravel, React, Vue, Node.js, SaaS and microservices. Available for freelance work.",
    images: [
      {
        url: "/images/fardin-ahsan.jpg",
        width: 600,
        height: 600,
        alt: "Fardin Ahsan - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fardin Ahsan - Full Stack Developer Portfolio",
    description:
      "Full Stack Developer (7+ yrs) specializing in Laravel, React, Vue, Node.js, SaaS and microservices.",
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
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
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
      <body className={inter.className}>
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
