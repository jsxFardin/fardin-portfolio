import React from "react";

type Props = {
  id: string;
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  className?: string;
};

const SectionHeader = ({ id, index, eyebrow, title, lede, className = "" }: Props) => (
  <header className={`grid lg:grid-cols-12 gap-6 mb-12 sm:mb-16 ${className}`}>
    <p className="eyebrow lg:col-span-3">
      <span className="text-ink">{index}</span> — {eyebrow}
    </p>
    <div className="lg:col-span-9 max-w-3xl">
      <h2 id={id} className="h-section">
        {title}
      </h2>
      {lede && <p className="lede mt-5 max-w-[56ch]">{lede}</p>}
    </div>
  </header>
);

export default SectionHeader;
