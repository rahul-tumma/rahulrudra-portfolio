import { motion } from 'framer-motion'
import { FaCode, FaCube, FaPalette, FaEye, FaExternalLinkAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { projects } from '../JsonData/ProjectData'

function PortfolioSection() {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section id="portfolio" className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
       
      <div className="container mx-auto px-4">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full mb-6">
            <span className="text-sm font-medium text-white">My Work</span>
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
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl 
                         overflow-hidden border border-white/10 
                         hover:border-purple-500/50 transition-all duration-300
                         flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <img 
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300
                           group-hover:scale-105"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100
                              transition-opacity duration-300 flex items-center justify-center">
                  <Link 
                    to={`/project/${project.id}`}
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-full
                             text-white hover:bg-white/20 transition-colors duration-200"
                    aria-label={`View ${project.title} details`}
                  >
                    <FaEye className="w-6 h-6" />
                  </Link>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-400">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 
                             transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
                {project.description.slice(0, 120) + '...'}
                </p>

                {/* View Project Button */}
                <Link 
                  to={`/project/${project.id}`}
                  className="inline-flex items-center justify-center w-full px-4 py-2
                           bg-gradient-to-r from-purple-500 to-pink-500 
                           hover:from-purple-600 hover:to-pink-600
                           text-white rounded-lg transition-colors duration-300
                           mt-auto"
                >
                  <span>View Project</span>
                  <FaExternalLinkAlt className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioSection
