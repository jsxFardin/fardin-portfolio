"use client";

import React from "react";
import Image from "next/image";

const clientLogos = [
  { name: "UNICEF", logo: "/images/clients/unicef.png", industry: "International Development" },
  { name: "Robi Axiata", logo: "/images/clients/robi.svg", industry: "Telecommunications" },
  { name: "JICA", logo: "/images/clients/jica.png", industry: "International Cooperation" },
  { name: "Novo Nordisk", logo: "/images/clients/novo.png", industry: "Healthcare" },
  { name: "World Bank", logo: "/images/clients/world-bank.svg", industry: "Financial Services" },
  { name: "Agilibo", logo: "/images/clients/agilibo.png", industry: "Agile SaaS Platform" },
  { name: "Sendparcel", logo: "/images/clients/sendparcel.png", industry: "Logistics" },
  { name: "Oxfam", logo: "/images/clients/oxfam.png", industry: "Humanitarian Aid" },
  { name: "Prospeneo", logo: "/images/clients/prospeneo.svg", industry: "Technology" },
  { name: "Polar", logo: "/images/clients/polar.png", industry: "Manufacturing" },
  { name: "PKSF", logo: "/images/clients/pksf.png", industry: "Financial Services" },
  { name: "Purbakone", logo: "/images/clients/purbakone.png", industry: "Real Estate" },
];

const Clients = () => {
  return (
    <section
      id="clients"
      className="section-padding bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
      aria-labelledby="clients-heading"
    >
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          <div className="text-left lg:col-span-1">
            <h2 id="clients-heading" className="text-3xl-mobile font-bold text-white mb-4 text-center lg:text-left">
              Projects &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Partnerships
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mx-auto lg:mx-0 rounded-full" aria-hidden="true" />

            <div className="space-y-4 mt-4">
              <p className="text-base-mobile text-gray-300 leading-relaxed">
                Throughout my professional journey, I have worked with some of
                the most reputable organizations across different industries.
              </p>
              <p className="text-base-mobile text-gray-300 leading-relaxed">
                These collaborations have allowed me to encounter and overcome
                unique challenges and develop my skills.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6" role="list">
              {clientLogos.map((client, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
                  role="listitem"
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} - ${client.industry} client logo`}
                    width={150}
                    height={100}
                    className="max-w-full h-auto object-contain w-20 h-14 sm:w-24 sm:h-16"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            aria-label="View featured projects"
          >
            See My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Clients;
