'use client'

import React from 'react'

const Skills = () => {
  // Skills data
  const frontendSkills = [
    { name: 'React', level: 95 },
    { name: 'Vue.js', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'Nuxt.js', level: 80 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'TypeScript', level: 85 }
  ]

  const backendSkills = [
    { name: 'Laravel', level: 95 },
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 80 },
    { name: 'PHP', level: 90 },
    { name: 'REST APIs', level: 90 },
    { name: 'MySQL', level: 85 }
  ]

  const additionalSkills = [
    'Docker', 'AWS', 'Azure', 'CI/CD', 'Git', 'GitHub', 'PostgreSQL', 
    'MongoDB', 'Vite', 'Webpack', 'NPM', 'Composer', 'Postman', 'Figma'
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'pink':
        return 'from-pink-500 to-pink-600'
      case 'purple':
        return 'from-purple-500 to-purple-600'
      case 'cyan':
        return 'from-cyan-500 to-cyan-600'
      default:
        return 'from-pink-500 to-pink-600'
    }
  }

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container-max relative z-10">
        <h2 className="text-3xl-mobile font-bold text-white mb-8 text-center">
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Skills</span>
        </h2>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-base-mobile text-gray-300 text-center leading-relaxed">
            With over six years of experience, I've developed expertise across the full technology stack, 
            from frontend frameworks to backend systems and DevOps practices.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Frontend Skills */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-xl-mobile font-bold text-pink-400 mb-6 flex items-center">
              <span className="mr-3">🎨</span>
              Frontend Development
            </h3>
            <div className="space-y-4">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-base-mobile font-medium text-white">{skill.name}</span>
                    <span className="text-sm-mobile text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-xl-mobile font-bold text-purple-400 mb-6 flex items-center">
              <span className="mr-3">⚙️</span>
              Backend Development
            </h3>
            <div className="space-y-4">
              {backendSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-base-mobile font-medium text-white">{skill.name}</span>
                    <span className="text-sm-mobile text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-cyan-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-12">
          <h3 className="text-xl-mobile font-semibold text-white mb-6 text-center">Additional Skills & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm-mobile text-gray-300 border border-white/20 hover:bg-pink-500/20 hover:border-pink-500/50 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Experience Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">6+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">20+</div>
                <div className="text-gray-300">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
