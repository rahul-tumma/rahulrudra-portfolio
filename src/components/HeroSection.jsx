import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Stage } from '@react-three/drei'
import { Suspense, useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TextScramble from './TextScramble'

// Add this array outside the component
const roles = [
  "3D Artist",
  "Developer",
  "Designer",
  "Animator"
]

function Model() {
  const modelRef = useRef()
  const gltf = useGLTF('/assets/lego_bike.glb')
  
  // Adjust scale for GLB model - you might need to tweak these values
  gltf.scene.scale.set(2, 2, 2)
  
  return (
    <primitive 
      ref={modelRef}
      object={gltf.scene}
      position={[0, 0, 0]}
    />
  )
}

function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 2000) // Change every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-48 md:w-96 h-48 md:h-96 bg-purple-500 rounded-full blur-3xl -top-10 md:-top-20 -left-10 md:-left-20"></div>
        <div className="absolute w-48 md:w-96 h-48 md:h-96 bg-blue-500 rounded-full blur-3xl -bottom-10 md:-bottom-20 -right-10 md:-right-20"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-white space-y-4  md:space-y-6 text-center lg:text-left mt-8 md:mt-0"
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full mb-2 md:mb-4">
              <span className="text-xs md:text-sm font-medium">3D Artist & Designer</span>
            </div>

            {/* 3D Model for Mobile - Show only on small screens */}
            <div className="block lg:hidden w-full mb-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full"
              >
                <div className="w-full aspect-square max-w-[400px] mx-auto bg-white/5 backdrop-blur-lg 
                              rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  {/* Instructions */}
                  <div className="absolute top-2 left-2 z-10 text-white text-xs bg-black/50 
                                backdrop-blur-md p-2 rounded-lg space-y-1">
                    <p className="flex items-center gap-2">
                      <span className="w-3 h-3 inline-flex items-center justify-center 
                                     bg-white/20 rounded-full text-[10px]">🖱️</span>
                      Drag to rotate
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-3 h-3 inline-flex items-center justify-center 
                                     bg-white/20 rounded-full text-[10px]">⚡</span>
                      Scroll to zoom
                    </p>
                  </div>

                  <Canvas
                    camera={{ position: [12, 5, 12], fov: 45, near: 0.1, far: 1000 }}
                    className="w-full h-full"
                  >
                    <Suspense fallback={null}>
                      <Stage environment="city" intensity={0.6}>
                        <Model />
                      </Stage>
                      <OrbitControls 
                        enablePan={false}
                        enableZoom={true}
                        enableRotate={true}
                        minPolarAngle={Math.PI / 4}
                        maxPolarAngle={Math.PI / 1.5}
                        minDistance={2}
                        maxDistance={25}
                        zoomSpeed={1}
                      />
                    </Suspense>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                    <spotLight position={[0, -10, 0]} angle={0.5} penumbra={1} intensity={0.5} />
                  </Canvas>
                </div>
              </motion.div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Hi, I'm Rahul{" "}
              <TextScramble 
                text={roles[currentRole]}
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 inline-block pb-3"
              />
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0">
  I create immersive 3D experiences through modeling, animation, and digital artistry.
  Let's bring your next project to life together.
</p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="w-full sm:w-auto px-6 md:px-8 py-3 bg-white text-purple-900 rounded-full font-medium 
                           hover:bg-purple-100 hover:scale-105 hover:shadow-lg hover:text-purple-700
                           transition-all duration-300 ease-in-out">
                View Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-6 md:px-8 py-3 border border-white/30 rounded-full font-medium
                           hover:bg-white/10 transition-colors duration-300">
                Contact Me
              </button>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-8 pt-6 md:pt-8 border-t border-white/10">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">5+</h3>
                <p className="text-sm md:text-base text-gray-400">Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">100+</h3>
                <p className="text-sm md:text-base text-gray-400">Projects Completed</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - 3D Model Viewer (Desktop Only) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block w-full lg:w-1/2 mt-8 lg:mt-0"
          >
            <div className="w-full aspect-square max-w-[400px] md:max-w-[500px] mx-auto bg-white/5 backdrop-blur-lg 
                          rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Instructions */}
              <div className="absolute top-2 md:top-4 left-2 md:left-4 z-10 text-white text-xs md:text-sm bg-black/50 
                            backdrop-blur-md p-2 md:p-3 rounded-lg space-y-1">
                <p className="flex items-center gap-2">
                  <span className="w-3 h-3 md:w-4 md:h-4 inline-flex items-center justify-center 
                                 bg-white/20 rounded-full text-[10px] md:text-xs">🖱️</span>
                  Drag to rotate
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-3 h-3 md:w-4 md:h-4 inline-flex items-center justify-center 
                                 bg-white/20 rounded-full text-[10px] md:text-xs">⚡</span>
                  Scroll to zoom
                </p>
              </div>

              <Canvas
                camera={{ position: [5, 2, 5], fov: 45, near: 0.1, far: 1000 }}
                className="w-full h-full"
              >
                <Suspense fallback={null}>
                  <Stage environment="city" intensity={0.6}>
                    <Model />
                  </Stage>
                  
                  <OrbitControls 
                    enablePan={false}
                    enableZoom={true}
                    enableRotate={true}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI / 1.5}
                    minDistance={2}
                    maxDistance={25}
                    zoomSpeed={1}
                  />
                </Suspense>

                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <spotLight position={[0, -10, 0]} angle={0.5} penumbra={1} intensity={0.5} />
              </Canvas>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </div>
  )
}

export default HeroSection
