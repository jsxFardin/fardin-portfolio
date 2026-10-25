import React from "react";
import Image from "next/image";

// Heights (px) are bucketed by aspect ratio so wide wordmarks and compact
// marks carry similar visual weight. Wide: 20, medium: 28-32, squarish: 36-40.
const clientLogos = [
  { name: "UNICEF", logo: "/images/clients/unicef.png", w: 480, h: 259, size: 32 },
  { name: "Robi Axiata", logo: "/images/clients/robi.svg", w: 74, h: 33, size: 28 },
  { name: "Novo Nordisk", logo: "/images/clients/novo.png", w: 480, h: 347, size: 36 },
  { name: "World Bank", logo: "/images/clients/world-bank.svg", w: 312, h: 63, size: 20 },
  { name: "Oxfam", logo: "/images/clients/oxfam.png", w: 480, h: 536, size: 40 },
  { name: "JICA", logo: "/images/clients/jica.png", w: 480, h: 392, size: 36 },
  { name: "PKSF", logo: "/images/clients/pksf.png", w: 382, h: 439, size: 40 },
  { name: "Agilibo", logo: "/images/clients/agilibo.png", w: 480, h: 340, size: 36 },
  { name: "Sendparcel", logo: "/images/clients/sendparcel.png", w: 200, h: 48, size: 20 },
  { name: "Prospeneo", logo: "/images/clients/prospeneo.svg", w: 1922, h: 411, size: 20 },
  { name: "Polar", logo: "/images/clients/polar.png", w: 443, h: 394, size: 36 },
  { name: "Purbakone", logo: "/images/clients/purbakone.png", w: 257, h: 74, size: 24 },
];

const Clients = () => {
  return (
    <section
      id="clients"
      className="py-10 sm:py-12 border-b border-line"
      aria-labelledby="clients-heading"
    >
      <div className="container-site">
        <h2 id="clients-heading" className="eyebrow mb-6">
          Trusted by teams at
        </h2>
        <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-4">
          {clientLogos.map((c) => (
            <li key={c.name} className="flex items-center justify-center h-14">
              <Image
                src={c.logo}
                alt={c.name}
                width={c.w}
                height={c.h}
                className="max-w-full object-contain brightness-0 opacity-55"
                style={{ height: c.size, width: "auto" }}
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
