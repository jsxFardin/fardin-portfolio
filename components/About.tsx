"use client";

import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <article
      id="about"
      className="section-padding bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background Pattern */}
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
        <header className="text-center mb-8">
          <h2 id="about-heading" className="text-3xl-mobile font-bold text-white mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Me
            </span>
          </h2>
          <div
            className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mx-auto rounded-full"
            aria-hidden="true"
          />
        </header>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <aside className="lg:col-span-1 flex justify-center items-center lg:justify-start">
            <figure className="relative group">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <Image
                  src="/images/fardin-ahsan.jpg"
                  alt="Fardin Ahsan - Full Stack Developer with 7+ years of experience in Laravel, React, Vue.js, and microservice architectures"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
                  loading="lazy"
                  sizes="(max-width: 1024px) 256px, 320px"
                />
              </div>
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                aria-hidden="true"
              />
            </figure>
          </aside>

          <section className="space-y-6 lg:col-span-2">
            <h3 className="text-2xl-mobile font-semibold text-white">
              Full Stack Developer with 7+ years of experience
            </h3>
            <div>
              <p className="text-base-mobile text-gray-300 leading-relaxed">
                I&apos;m a Full Stack Developer specializing in designing,
                developing, and delivering scalable, high-performance web
                applications,{" "}
                <span className="font-semibold text-pink-400">
                  microservice-based architectures
                </span>
                , and{" "}
                <span className="font-semibold text-purple-400">
                  SaaS solutions
                </span>
                .
              </p>
              <p className="text-base-mobile text-gray-300 leading-relaxed">
                With expertise in Laravel, Vue.js, React, Node.js, Next.js, and
                Nuxt.js, I&apos;ve successfully built{" "}
                <span className="font-semibold text-cyan-400">ERP</span>,{" "}
                <span className="font-semibold text-pink-400">CRM</span>,{" "}
                <span className="font-semibold text-purple-400">POS</span>, and{" "}
                <span className="font-semibold text-cyan-400">
                  e-commerce platforms
                </span>
                , along with hands-on experience in{" "}
                <span className="font-semibold text-pink-400">DevOps</span>,{" "}
                <span className="font-semibold text-purple-400">AWS</span>,{" "}
                <span className="font-semibold text-cyan-400">Azure</span>, and{" "}
                <span className="font-semibold text-pink-400">Docker</span>.
              </p>
              <p className="text-base-mobile text-gray-300 leading-relaxed">
                I&apos;ve delivered enterprise-grade solutions for organizations like{" "}
                <span className="font-semibold text-pink-400">
                  UNICEF Bangladesh
                </span>
                , <span className="font-semibold text-purple-400">Robi</span>,{" "}
                <span className="font-semibold text-cyan-400">Oxfam</span>, and{" "}
                <span className="font-semibold text-pink-400">
                  Novo Nordisk
                </span>
                , as well as developed and scaled international SaaS products.
              </p>
              <p className="text-base-mobile text-gray-300 leading-relaxed">
                My experience includes building{" "}
                <span className="font-semibold text-purple-400">
                  AI-powered dashboards
                </span>
                ,{" "}
                <span className="font-semibold text-cyan-400">
                  microservice-driven systems
                </span>
                ,{" "}
                <span className="font-semibold text-pink-400">
                  real-time tracking platforms
                </span>
                , and{" "}
                <span className="font-semibold text-purple-400">
                  payment gateway integration
                </span>{" "}
                that enhance operational efficiency and user experience.
              </p>
              <p className="text-base-mobile text-gray-300 leading-relaxed">
                Passionate about leveraging cutting-edge technologies, I focus
                on solving complex business challenges and driving measurable
                growth through{" "}
                <span className="font-semibold text-purple-400">clean</span>,{" "}
                <span className="font-semibold text-cyan-400">scalable</span>,
                and{" "}
                <span className="font-semibold text-pink-400">
                  future-ready solutions
                </span>
                .
              </p>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};

export default About;
