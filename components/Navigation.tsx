'use client'

import React, { useState, useEffect } from 'react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = window.innerWidth >= 1024 ? 80 : 64 
      const elementPosition = element.offsetTop - navHeight - 20
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'Clients', id: 'clients' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Services', id: 'services' },
    { name: 'Tech', id: 'technologies' },
    { name: 'Testimonials', id: 'testimonials' },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-900/90 backdrop-blur-xl border-b border-white/20 shadow-2xl' 
          : 'bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Brand Logo - span instead of h1 for single h1 per page */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a
                href="#hero"
                onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
                className="block w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg hover:shadow-pink-500/25 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                aria-label="Fardin Ahsan - Go to homepage"
              >
                <span className="text-white text-lg lg:text-xl font-bold">FA</span>
              </a>
            </div>
            <div className="ml-3 hidden sm:block">
              <span className="text-xl lg:text-2xl font-bold text-white">
                Fardin <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Ahsan</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1" role="menubar">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                role="menuitem"
                className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 font-medium group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:rounded-lg"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300" aria-hidden="true"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full group-hover:left-0 transition-all duration-300" aria-hidden="true"></div>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25 focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              aria-label="Get in touch - Contact me"
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <svg
                className={`w-6 h-6 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
        id="mobile-menu"
        role="menu"
        aria-label="Mobile navigation menu"
        >
          <div className="bg-slate-800 border border-white/20 rounded-2xl mt-4 shadow-2xl">
            <div className="p-6">
              <div className="space-y-3 mb-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    role="menuitem"
                    className="w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-all duration-200 font-medium text-base focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-inset"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition-all duration-200 focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800"
                aria-label="Contact me"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
