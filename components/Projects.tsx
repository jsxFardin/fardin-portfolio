"use client";

import React, { useState, useEffect } from "react";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      name: "Agilibo – Agile SaaS Platform",
      description:
        "Comprehensive Agile platform supporting backlog, sprint, planning, retrospectives, and more, with AI-powered insights. Supports two-way integration with Jira & Azure DevOps, designed for multi-team and multi-company environments.",
      features: [
        "AI-powered insights and automated reporting",
        "Two-way integration with Jira & Azure DevOps",
        "Gamified features and collaborative tools",
        "Real-time notifications and dashboards",
        "Role-based access control for secure multi-level team management",
        "Optimized system performance for large-scale enterprise data",
      ],
      technologies: [
        "Vue.js",
        "Laravel",
        "Node.js",
        "Redis",
        "Elasticsearch",
        "AI Integration",
        "Real-time Systems",
        "Jira Integration",
        "Azure",
        "Docker",
        "Microservice",
        "Payment Gateway",
        "Analytics",
        "Multi-language",
      ],
      link: "https://www.agilibo.info",
      company: "Kaz Software LTD",
      image: "/images/projects/agilibo.png",
    },
    {
      name: "Alternative Learning Programme (ALP)",
      description:
        "Non-formal education initiative in Bangladesh for out-of-school and marginalized youth, focusing on skills development and empowerment.",
      features: [
        "Student registration and course management",
        "Progress tracking and analytics",
        "Monitoring learning outcomes across multiple districts",
        "Responsive web interface for low-end devices",
        "Program impact analytics and reporting",
      ],
      technologies: [
        "Vue.js",
        "Laravel",
        "Analytics",
        "Responsive Design",
        "Multi-district Management",
        "Google Maps API",
        "Multi-language",
      ],
      link: "https://alprtm.com/",
      company: "UNICEF Bangladesh",
      image: "/images/projects/alp.png",
    },
    {
      name: "Prospeneo – Real Estate Software",
      description:
        "Developed features for AI-powered lead generation, sales funnel management, websites, email marketing, and analytics.",
      features: [
        "AI-powered lead generation and sales funnel management",
        "CRM solutions for agents and agencies",
        "Custom dashboards for tracking leads and deals",
        "Payment gateway integration",
        "Cross-platform consistency for web and mobile",
        "Email marketing and analytics integration",
      ],
      technologies: [
        "Vue.js",
        "Laravel",
        "AI Integration",
        "CRM",
        "Payment Gateway",
        "Analytics",
        "Google Maps API",
        "Email Marketing",
        "Website Builder",
        "Real-time Tracking",
        "Multi-currency",
        "Multi-language",
      ],
      link: "https://www.prospeneo.com/",
      company: "Prospeneo",
      image: "/images/projects/prospeneo.jpg",
    },
    {
      name: "Robishop – E-commerce Platform",
      description:
        "Built product catalog, payment integration, order processing, and delivery tracking for Robi Axiata Ltd.",
      features: [
        "Product catalog and payment integration",
        "Order processing and delivery tracking",
        "Returns management and customer support",
        "Promotional campaigns and coupon management",
        "Loyalty programs to boost sales",
        "Analytics dashboards for sales and user behavior",
      ],
      technologies: [
        "Vue Storefront",
        "Express.js",
        "Magento 2",
        "PWA",
        "Redis",
        "Elasticsearch",
        "Payment Gateway",
        "Analytics",
        "Multi-language",
        "Real-time Tracking",
        "Docker",
        "AWS",
      ],
      link: "https://robishop.com.bd",
      company: "Robi Axiata Limited",
      image: "/images/projects/robishop.webp",
    },
    {
      name: "Sendparcel – International Parcel Delivery",
      description:
        "Simplified global shipping with integrations for DHL, FedEx, TNT, and GLS across 220+ countries.",
      features: [
        "Global shipping with multiple courier integrations",
        "Booking, tracking, and price comparison",
        "Automated shipping rate calculation",
        "Multi-currency payment gateways",
        "Real-time shipment updates and notifications",
        "Admin dashboards for operational efficiency",
      ],
      technologies: [
        "Symfony",
        "PHP",
        "Payment Gateway",
        "Shipping API",
        "Multi-currency",
        "Real-time Tracking",
        "AI Integration",
      ],
      link: "https://www.sendparcel.com/",
      company: "Sendparcel",
      image: "/images/projects/sendparcel.jpg",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [projects.length]);

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
        <div className="text-center mb-8">
          <h2 className="text-3xl-mobile font-bold text-white mb-4 text-center">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Project Display */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/20 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left Column - Image, Technologies, and Link */}
              <div className="space-y-6">
                {/* Project Image */}
                <div className="relative">
                  <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-white/20">
                    <img
                      src={projects[currentProject].image}
                      alt={projects[currentProject].name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const nextElement =
                          target.nextElementSibling as HTMLElement;
                        if (nextElement) {
                          nextElement.style.display = "flex";
                        }
                      }}
                    />
                    <div className="w-full h-full flex items-center justify-center text-gray-400 hidden">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                          <svg
                            className="w-8 h-8"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p>Project Image</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technology Tags */}
                <div>
                  <h4 className="text-sm-mobile font-semibold text-white mb-3">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[currentProject].technologies.map(
                      (tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-gray-300 border border-white/20"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column - Project Details */}
              <div className="space-y-6">
                {/* Project Title */}
                <h3 className="text-2xl-mobile font-bold text-white">
                  {projects[currentProject].name}
                </h3>

                {/* Project Description */}
                <p className="text-base-mobile text-gray-300 leading-relaxed">
                  {projects[currentProject].description}
                </p>

                {/* Key Features */}
                <div>
                  <h4 className="text-lg-mobile font-semibold text-white mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {projects[currentProject].features
                      .slice(0, 4)
                      .map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="text-sm-mobile text-gray-300 flex items-start"
                        >
                          <span className="text-pink-400 mr-3 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                  </ul>
                </div>

                {/* Action Button */}
                <div className="pt-4">
                  <a
                    href={projects[currentProject].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm-mobile font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25"
                  >
                    View Live Demo
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
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
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            {/* Previous Button */}
            <button
              onClick={prevProject}
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={projects.length <= 1}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Project Indicators */}
            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject
                      ? "bg-gradient-to-r from-pink-500 to-purple-500 scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextProject}
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={projects.length <= 1}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
