import { motion } from 'framer-motion'
import { FaCode, FaCube, FaPalette } from 'react-icons/fa'
import AnimatedBackground from './AnimatedBackground'

function PortfolioSection() {
  const projects = [
    {
      title: "Sci-Fi Character Model",
      category: "3D Modeling",
      description: "Detailed character model created for a sci-fi game project",
      icon: <FaCube className="w-8 h-8" />,
      imageUrl: "https://picsum.photos/800/600"
    },
    {
      title: "Interactive Web Experience",
      category: "Web Development", 
      description: "3D web experience built with Three.js and React",
      icon: <FaCode className="w-8 h-8" />,
      imageUrl: "https://picsum.photos/800/600"
    },
    {
      title: "Fantasy Environment",
      category: "3D Art",
      description: "Stylized environment design for an indie game",
      icon: <FaPalette className="w-8 h-8" />,
      imageUrl: "https://picsum.photos/800/600"
    }
  ]

  return (
    <section id="portfolio" className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full mb-6">
            <span className="text-sm font-medium">My Work</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {" "}Projects{" "}
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing my best work in 3D modeling and design
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm 
                         border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img 
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover w-full h-full rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                              transition-opacity flex items-center justify-center">
                  <div className="text-purple-400 transform scale-0 group-hover:scale-100 
                                transition-transform">
                    {project.icon}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-purple-400 text-sm mb-2">{project.category}</p>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
