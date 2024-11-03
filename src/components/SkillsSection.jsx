import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaDatabase, FaCode } from 'react-icons/fa'
import { SiThreedotjs, SiBlender } from 'react-icons/si'

function SkillsSection() {
  const skills = [
    {
      category: "3D Modeling",
      icon: <SiBlender className="w-8 h-8" />,
      items: ["Blender", "Maya", "ZBrush", "Substance Painter"]
    },
    {
      category: "Web Development",
      icon: <FaCode className="w-8 h-8" />,
      items: ["React", "Three.js", "Node.js", "WebGL"]
    },
    {
      category: "3D Graphics",
      icon: <SiThreedotjs className="w-8 h-8" />,
      items: ["Three.js", "WebGL", "GLSL", "Shaders"]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl -top-20 -right-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Tools</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10
                         hover:bg-white/10 transition-colors group"
            >
              <div className="text-purple-400 mb-6 group-hover:text-purple-300">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
