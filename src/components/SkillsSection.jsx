import { motion } from 'framer-motion'
import { SiBlender, SiAutodesk, SiAdobephotoshop, SiUnrealengine } from 'react-icons/si'
import { FaPaintBrush, FaCube } from 'react-icons/fa'

function SkillsSection() {
  const skills = [
    {
      category: "3D Modeling",
      icon: <SiBlender className="w-8 h-8" />,
      items: ["Blender", "3ds Max", "Maya", "Hard Surface", "Organic Modeling", "Topology"]
    },
    {
      category: "Environment Design",
      icon: <FaCube className="w-8 h-8" />,
      items: ["Scene Layout", "Props", "Architecture", "Level Design", "Environment Modeling", "Lighting", "Terrain Creation", "Set Dressing"]
    },
    {
      category: "Texturing",
      icon: <FaPaintBrush className="w-8 h-8" />,
      items: ["Substance Painter", "UV Mapping", "PBR Materials", "Texture Painting", "Baking"]
    },
    {
      category: "Digital Art",
      icon: <SiAdobephotoshop className="w-8 h-8" />,
      items: ["Photoshop", "Concept Art", "Post-Processing", "Color Grading", "Compositing"]
    },
    {
      category: "Technical Skills",
      icon: <SiUnrealengine className="w-8 h-8" />,
      items: ["UV Unwrapping", "Retopology", "LOD Creation", "Normal Mapping", "Light Setup"]
    },
    {
      category: "Soft Skills",
      icon: <FaPaintBrush className="w-8 h-8" />,
      items: ["Leadership", "Problem Solving", "Time Management", "Communication", "Teamwork", "Creative Thinking"]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
     
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl -top-20 -right-20"></div>
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl -bottom-20 -left-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full mb-6">
                <span className="text-sm font-medium text-white">My Skills</span>
              </div>
            </div>

            <h2 className="text-4xl font-bold text-white mb-4 flex justify-center items-center">
              <span>Skills</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mx-2">&</span>
              <span>Expertise</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-center">
              Tools and technologies I use to create amazing work
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
