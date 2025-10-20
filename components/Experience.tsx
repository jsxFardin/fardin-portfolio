'use client'

import React from 'react'

const Experience = () => {
  const experiences = [
    {
      company: 'Kaz Software LTD',
      address: '35/5 Shantinagar Bazar Rd, Dhaka 1217',
      fromDate: '4th August 2020',
      toDate: 'Present',
      designation: 'Senior Software Engineer',
      duration: '3+ Years',
      current: true
    },
    {
      company: 'Gain Solution LTD',
      address: 'House #1182, Avenue #11, Dhaka 1216',
      fromDate: '1st August 2019',
      toDate: '1st August 2020',
      designation: 'Software Developer',
      duration: '1 Year'
    },
    {
      company: 'Barcodetech-Automation',
      address: 'RH Home Center, 1 Green Road, Tejgaon, Dhaka',
      fromDate: '1st December 2018',
      toDate: '1st August 2019',
      designation: 'Junior Software Developer',
      duration: '8 Months'
    }
  ]

  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container-max relative z-10">
        <h2 className="text-3xl-mobile font-bold text-white mb-8 text-center">
          Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Experience</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-8">
            <p className="text-base-mobile text-gray-300 text-center leading-relaxed">
              Over six years of experience in full-stack development, specializing in building scalable web applications, 
              SaaS platforms, and enterprise solutions. Proven track record of delivering high-quality software that drives business growth.
            </p>
          </div>

          <div className="space-y-6">
            {/* Current Role */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h3 className="text-xl-mobile font-bold text-white group-hover:text-pink-400 transition-colors duration-300">
                    Senior Software Engineer
                  </h3>
                  <p className="text-lg-mobile font-semibold text-pink-400">Kaz Software LTD</p>
                  <p className="text-sm-mobile text-gray-400">35/5 Shantinagar Bazar Rd, Dhaka 1217</p>
                </div>
                <div className="mt-2 lg:mt-0">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm-mobile font-semibold rounded-full">
                    Current
                  </span>
                </div>
              </div>
              <p className="text-sm-mobile text-gray-300">August 2020 - Present</p>
            </div>

            {/* Previous Roles */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/10 transition-all duration-300 group">
              <div className="mb-4">
                <h3 className="text-xl-mobile font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                  Software Developer
                </h3>
                <p className="text-lg-mobile font-semibold text-purple-400">Gain Solution LTD</p>
                <p className="text-sm-mobile text-gray-400">House #1182, Avenue #11, Dhaka 1216</p>
              </div>
              <p className="text-sm-mobile text-gray-300">August 2019 - August 2020</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/10 transition-all duration-300 group">
              <div className="mb-4">
                <h3 className="text-xl-mobile font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  Junior Software Developer
                </h3>
                <p className="text-lg-mobile font-semibold text-cyan-400">Barcodetech-Automation</p>
                <p className="text-sm-mobile text-gray-400">RH Home Center, 1 Green Road, Tejgaon, Dhaka</p>
              </div>
              <p className="text-sm-mobile text-gray-300">December 2018 - August 2019</p>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Experience Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">6+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">3</div>
                <div className="text-gray-300">Companies Worked</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">Senior</div>
                <div className="text-gray-300">Current Level</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
