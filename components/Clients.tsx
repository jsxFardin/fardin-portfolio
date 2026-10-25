import React from "react";
import Image from "next/image";

const clientLogos = [
  { name: "UNICEF", logo: "/images/clients/unicef.png" },
  { name: "Robi Axiata", logo: "/images/clients/robi.svg" },
  { name: "Novo Nordisk", logo: "/images/clients/novo.png" },
  { name: "World Bank", logo: "/images/clients/world-bank.svg" },
  { name: "Oxfam", logo: "/images/clients/oxfam.png" },
  { name: "JICA", logo: "/images/clients/jica.png" },
  { name: "PKSF", logo: "/images/clients/pksf.png" },
  { name: "Agilibo", logo: "/images/clients/agilibo.png" },
  { name: "Sendparcel", logo: "/images/clients/sendparcel.png" },
  { name: "Prospeneo", logo: "/images/clients/prospeneo.svg" },
  { name: "Polar", logo: "/images/clients/polar.png" },
  { name: "Purbakone", logo: "/images/clients/purbakone.png" },
];

const Clients = () => {
  return (
    <section
      id="clients"
      className="py-10 border-b border-line"
      aria-labelledby="clients-heading"
    >
      <div className="container-site">
        <h2 id="clients-heading" className="eyebrow mb-6">
          Trusted by teams at
        </h2>
        <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-6 items-center">
          {clientLogos.map((c) => (
            <li key={c.name} className="flex items-center justify-start h-10">
              <Image
                src={c.logo}
                alt={c.name}
                width={120}
                height={40}
                className="h-7 sm:h-8 w-auto object-contain brightness-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Clients;
