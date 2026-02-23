"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { projects } from "@/lib/data";
import { ProjectsSchema } from "@/lib/structured-data";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [imageError, setImageError] = useState(false);
  const project = projects[currentProject];

  useEffect(() => {
    setImageError(false);
  }, [currentProject]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentProject(index);
  };

  return (
    <section
      id="projects"
      className="section-padding bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      <ProjectsSchema />
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
          <h2 id="projects-heading" className="text-3xl-mobile font-bold text-white mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mx-auto rounded-full" aria-hidden="true" />
        </header>

        <div className="relative">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/20 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-white/20">
                  {!imageError ? (
                    <Image
                      src={project.image}
                      alt={`${project.name} - ${project.company} project screenshot`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      loading="lazy"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-sm">{project.name}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="text-sm-mobile font-semibold text-white mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 8).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-gray-300 border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl-mobile font-bold text-white">
                  {project.name}
                </h3>
                <p className="text-base-mobile text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                {"problem" in project && "solution" in project && (
                  <div className="space-y-2">
                    <p className="text-sm-mobile text-gray-400">
                      <strong className="text-pink-400">Problem:</strong>{" "}
                      {project.problem}
                    </p>
                    <p className="text-sm-mobile text-gray-400">
                      <strong className="text-emerald-400">Solution:</strong>{" "}
                      {project.solution}
                    </p>
                  </div>
                )}
                <div>
                  <h4 className="text-lg-mobile font-semibold text-white mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 4).map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-sm-mobile text-gray-300 flex items-start"
                      >
                        <span className="text-pink-400 mr-3 mt-1" aria-hidden="true">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm-mobile font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25 focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                  aria-label={`View ${project.name} live demo`}
                >
                  View Live Demo
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div
            className="flex items-center justify-center mt-8 space-x-4"
            role="group"
            aria-label="Project carousel navigation"
          >
            <button
              onClick={prevProject}
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              disabled={projects.length <= 1}
              aria-label="Previous project"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex space-x-2" role="tablist" aria-label="Project indicators">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  role="tab"
                  aria-selected={index === currentProject}
                  aria-label={`Go to project ${index + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${
                    index === currentProject
                      ? "bg-gradient-to-r from-pink-500 to-purple-500 scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              disabled={projects.length <= 1}
              aria-label="Next project"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
