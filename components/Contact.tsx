import React from "react";
import { siteConfig } from "@/lib/data";

const socials: { key: keyof typeof siteConfig.social; label: string }[] = [
  { key: "linkedin", label: "LinkedIn" },
  { key: "github", label: "GitHub" },
  { key: "youtube", label: "YouTube" },
  { key: "twitter", label: "X (Twitter)" },
];

const Contact = () => (
  <section id="contact" className="section" aria-labelledby="contact-heading">
    <div className="container-site grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-6">
        <p className="eyebrow mb-6">
          <span className="text-ink mr-3">09</span>
          Contact
        </p>
        <h2 id="contact-heading" className="h-display text-4xl sm:text-5xl lg:text-6xl max-w-[12ch] mb-6">
          Let&rsquo;s build the thing that removes the manual work.
        </h2>
        <p className="lede max-w-[44ch]">
          Reply within one business day. Tell me what you are hiring for and I
          will say honestly whether I am the right fit.
        </p>
      </div>

      <div className="lg:col-span-6 grid sm:grid-cols-2 gap-px bg-line border border-line rounded-lg overflow-hidden self-start">
        <div className="bg-paper p-7">
          <h3 className="eyebrow mb-3">Hiring for a project</h3>
          <p className="text-[15px] text-ink-2 leading-relaxed mb-6">
            20 minutes to scope the problem. You leave with a rough plan.
          </p>
          <a href={siteConfig.calendarUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
            Book a call
          </a>
        </div>
        <div className="bg-paper p-7">
          <h3 className="eyebrow mb-3">Hiring for a role</h3>
          <p className="text-[15px] text-ink-2 leading-relaxed mb-6">
            Send the job description. I reply with a fit summary and availability.
          </p>
          <a href={`mailto:${siteConfig.email}?subject=Role%20inquiry`} className="btn-secondary w-full">
            Email me
          </a>
        </div>
        <dl className="sm:col-span-2 bg-paper p-7 grid sm:grid-cols-2 gap-x-8 gap-y-5 text-sm">
          <div>
            <dt className="eyebrow mb-1">Email</dt>
            <dd>
              <a href={`mailto:${siteConfig.email}`} className="link break-all">
                {siteConfig.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="eyebrow mb-1">WhatsApp</dt>
            <dd>
              <a href="https://wa.me/8801759552872" target="_blank" rel="noopener noreferrer" className="link">
                {siteConfig.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="eyebrow mb-1">Location</dt>
            <dd className="text-ink">
              {siteConfig.location} ({siteConfig.timezone})
            </dd>
          </div>
          <div>
            <dt className="eyebrow mb-1">Elsewhere</dt>
            <dd className="flex flex-wrap gap-x-5 gap-y-3">
              {socials.map((s) => (
                <a key={s.key} href={siteConfig.social[s.key]} target="_blank" rel="noopener noreferrer" className="link">
                  {s.label}
                </a>
              ))}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
);

export default Contact;
