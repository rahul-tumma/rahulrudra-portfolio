import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowLeft } from 'react-icons/fa'
import { Canvas } from '@react-three/fiber'
import { Stage, OrbitControls, useGLTF } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import { projects } from '../JsonData/ProjectData'
import useScrollToTop from '../hooks/useScrollToTop'

function Model({ modelPath }) {
  const modelRef = useRef()
  const gltf = useGLTF(modelPath)
  gltf.scene.scale.set(2, 2, 2)

  return (
    <primitive 
      ref={modelRef}
      object={gltf.scene}
      position={[0, 0, 0]}
    />
  )
}

// Add this new component to handle different media types
function MediaDisplay({ media }) {
  if (!media) return null;

  switch (media.type) {
    case 'model':
      return (
        <Canvas
          camera={{ position: [12, 5, 12], fov: 45 }}
          className="w-full h-full"
        >
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.6}>
              <Model modelPath={media.path} />
            </Stage>
            <OrbitControls 
              enablePan={false}
              enableZoom={true}
              enableRotate={true}
              minDistance={6}
              maxDistance={20}
              zoomSpeed={0.5}
            />
          </Suspense>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <spotLight position={[0, -10, 0]} angle={0.5} penumbra={1} intensity={0.5} />
        </Canvas>
      );
    
    case 'video':
      return (
        <video 
          controls 
          className="w-full h-full object-cover"
          poster={media.poster}
        >
          <source src={media.path} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    
    case 'image':
    default:
      return (
        <img 
          src={media.path} 
          alt="Project media"
          className="w-full h-full object-cover"
        />
      );
  }
}

function ProjectPage() {
  useScrollToTop()
  const { id } = useParams()
  const project = projects.find(p => p.id === parseInt(id))

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-white mb-4">Project not found</h2>
          <Link 
            to="/"
            className="text-purple-400 hover:text-purple-300 flex items-center justify-center gap-2"
          >
            <FaArrowLeft /> Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <div className="container mx-auto px-4">
        {/* Navigation */}
        <Link 
          to="/"
          className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 group"
        >
          <FaArrowLeft className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Project Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-400">
                  {project.category}
                </span>
                {project.technologies?.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-white/10 rounded-full text-gray-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          {/* Project Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Media Viewer */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10"
            >
              <div className="aspect-square relative">
                {/* Instructions - Only show for 3D models */}
                {project.media?.type === 'model' && (
                  <div className="absolute top-4 left-4 z-10 text-white text-sm bg-black/50 
                              backdrop-blur-md p-3 rounded-lg space-y-2">
                    <p className="flex items-center gap-2">
                      <span className="w-4 h-4 inline-flex items-center justify-center 
                                   bg-white/20 rounded-full text-xs">🖱️</span>
                      Drag to rotate
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-4 h-4 inline-flex items-center justify-center 
                                   bg-white/20 rounded-full text-xs">⚡</span>
                      Scroll to zoom
                    </p>
                  </div>
                )}
                
                <MediaDisplay media={project.media} />
              </div>
            </motion.div>

            {/* Project Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              {/* Features */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {project.features?.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">•</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Company Attribution Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="space-y-2">
                <p className="text-gray-400">
                  <span className="text-purple-400">Originally developed for:</span> {project.companyInfo.name}
                </p>
                <p className="text-sm text-gray-500">{project.companyInfo.disclaimer}</p>
              </div>
              
              {project.companyInfo.productUrl && (
                <a
                  href={project.companyInfo.productUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 
                           hover:bg-purple-500/30 rounded-full text-purple-400 
                           transition-colors duration-300"
                >
                  View Original Product
                  <svg
                    className="w-4 h-4"
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
              )}
            </div>
          </motion.div>

          {/* Project Images */}
          {project.images && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {project.images.map((image, index) => (
                <div 
                  key={index}
                  className="rounded-xl overflow-hidden border border-white/10"
                >
                  <img 
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectPage