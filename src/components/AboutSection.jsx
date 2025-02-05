import { motion } from 'framer-motion'

function AboutSection() {
  return (
    <section id="about" className="min-h-[calc(100vh-50px)] py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-purple-500 rounded-full blur-3xl -top-10 sm:-top-20 -right-10 sm:-right-20"></div>
        <div className="absolute w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-blue-500 rounded-full blur-3xl -bottom-10 sm:-bottom-20 -left-10 sm:-left-20"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* Left side - Image with floating animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative floating">
              <div className="w-full max-w-[500px] sm:max-w-[600px] md:max-w-[750px] mx-auto aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden glass">
                <img
                 
                  src="/assets/IMG_1707.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-full h-full border-2 border-purple-500 rounded-xl sm:rounded-2xl"></div>
              
              {/* Additional decorative elements */}
              <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-16 sm:w-24 h-16 sm:h-24 border-t-2 border-l-2 border-purple-400 rounded-tl-xl sm:rounded-tl-2xl"></div>
              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-16 sm:w-24 h-16 sm:h-24 border-b-2 border-r-2 border-purple-400 rounded-br-xl sm:rounded-br-2xl"></div>
            </div>
          </motion.div>

          {/* Right side - Content with glass effect */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-white"
          >
            <div className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl glass border border-white/10">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-lg rounded-full mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm font-medium">About Me</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Bringing Creative
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  {" "}Vision{" "}
                </span>
                to Life
              </h2>

              <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8">
                I'm a passionate 3D artist and designer with expertise in creating immersive digital experiences.
                With a background in both technical and creative aspects of 3D design,
                I bring ideas to life through compelling visual storytelling.
              </p>

              {/* Stats with enhanced styling */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { number: "5+", text: "Years Experience" },
                  { number: "100%", text: "Dedication" },
                  { number: "24/7", text: "Creative Mind" },
                  { number: "∞", text: "Passion" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="p-3 sm:p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 
                             hover:bg-white/10 transition-all duration-300"
                  >
                    <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 
                                 bg-clip-text text-transparent">{item.number}</h3>
                    <p className="text-sm sm:text-base text-gray-400">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
export default AboutSection