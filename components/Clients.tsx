"use client";

import React from "react";
import Image from "next/image";

const Clients = () => {
  const clientLogos = [
    {
      name: "UNICEF",
      logo: "/images/clients/unicef.png",
      industry: "International Development",
    },
    {
      name: "Robi Axiata",
      logo: "/images/clients/robi.svg",
      industry: "Telecommunications",
    },

    {
      name: "JICA",
      logo: "/images/clients/jica.png",
      industry: "International Cooperation",
    },
    {
      name: "Novo Nordisk",
      logo: "/images/clients/novo.png",
      industry: "Healthcare",
    },
    {
      name: "World Bank",
      logo: "/images/clients/world-bank.svg",
      industry: "Financial Services",
    },
    {
      name: "Agilibo",
      logo: "/images/clients/agilibo.png",
      industry: "Agile SaaS Platform",
    },
    {
      name: "Sendparcel",
      logo: "/images/clients/sendparcel.png",
      industry: "Logistics",
    },
    {
      name: "Oxfam",
      logo: "/images/clients/oxfam.png",
      industry: "Humanitarian Aid",
    },
    {
      name: "Prospeneo",
      logo: "/images/clients/prospeneo.svg",
      industry: "Technology",
    },
    {
      name: "Polar",
      logo: "/images/clients/polar.png",
      industry: "Manufacturing",
    },
    {
      name: "PKSF",
      logo: "/images/clients/pksf.png",
      industry: "Financial Services",
    },
    {
      name: "Purbakone",
      logo: "/images/clients/purbakone.png",
      industry: "Real Estate",
    },
    // {
    //   name: "Archibo",
    //   logo: "/images/clients/archibo.png",
    //   industry: "Architecture",
    // },
  ];

  return (
    <section
      id="clients"
      className="section-padding bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          <div className="text-left lg:col-span-1">
            <h2 className="text-3xl-mobile font-bold text-white mb-4 text-center">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Clients
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mx-auto rounded-full"></div>

            <div className="space-y-4 mt-4">
              <p className="text-base-mobile text-gray-300 leading-relaxed">
                Throughout my professional journey, I have worked with some of
                the most reputable organizations across different industries.
              </p>

              <p className="text-base-mobile text-gray-300 leading-relaxed">
                These collaborations have allowed me to encounter and overcome
                unique challenges. These opportunities helped me to learn, grow,
                and develop my skills.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {clientLogos.map((client, index) => (
                <div key={index} className="flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={150}
                    height={100}
                    className="max-w-full max-h-full object-contain sm:w-24 sm:h-16 w-20 h-14"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
