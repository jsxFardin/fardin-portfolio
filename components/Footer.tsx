import { siteConfig } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line py-8" role="contentinfo">
      <div className="container-site flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-ink-3">
        <p>
          © {year} {siteConfig.name}. {siteConfig.title}.
        </p>
        <p className="font-mono text-xs">{siteConfig.location}</p>
      </div>
    </footer>
  );
}
