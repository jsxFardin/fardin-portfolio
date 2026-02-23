import { siteConfig } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-8 px-4 border-t border-white/10 bg-slate-900/50"
      role="contentinfo"
    >
      <div className="container-max flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">
          © {currentYear} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex gap-6">
          {Object.entries(siteConfig.social).map(([key, url]) => {
            const labels: Record<string, string> = {
              linkedin: "LinkedIn",
              github: "GitHub",
              facebook: "Facebook",
              twitter: "X",
            };
            const label = labels[key] ?? key.charAt(0).toUpperCase() + key.slice(1);
            return (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded"
                aria-label={label}
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
