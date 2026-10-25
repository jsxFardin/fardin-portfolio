import React from "react";
import Image from "next/image";
import { siteConfig, videos } from "@/lib/data";
import SectionHeader from "./SectionHeader";

const Videos = () => (
  <section id="videos" className="section" aria-labelledby="videos-heading">
    <div className="container-site">
      <SectionHeader
        id="videos-heading"
        index="07"
        eyebrow="Videos"
        title="Short engineering breakdowns."
        lede={
          <>
            Performance, security and AI tooling from real projects.{" "}
            <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="btn-link">
              YouTube channel
            </a>
          </>
        }
      />
      <ul className="grid sm:grid-cols-2 gap-6">
        {videos.map((v) => (
          <li key={v.id}>
            <a
              href={`https://www.youtube.com/watch?v=${v.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              aria-label={`Watch on YouTube: ${v.title}`}
            >
              <div className="relative aspect-video overflow-hidden rounded-lg border border-line group-hover:border-line-strong bg-paper-2 transition-colors">
                <Image
                  src={`https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="w-12 h-12 rounded-full bg-paper/95 border border-line flex items-center justify-center">
                    <svg className="w-4 h-4 text-ink translate-x-px" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>
              </div>
              <p className="font-mono text-xs text-ink-3 mt-4 mb-1">{v.published}</p>
              <h3 className="text-ink font-medium leading-snug group-hover:underline underline-offset-4 decoration-line-strong">
                {v.title}
              </h3>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Videos;
