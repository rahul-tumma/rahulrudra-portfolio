import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaBehance, FaArtstation, FaEnvelope, FaPhone } from 'react-icons/fa'
import { RiTwitterXFill } from 'react-icons/ri'
import AnimatedBackground from './AnimatedBackground'

function Footer() {
  const socialLinks = [
    { 
      icon: <FaArtstation className="w-5 h-5" />, 
      url: "https://www.artstation.com/rahul_rudra26",
      label: "ArtStation", 
      color: "hover:text-blue-400"
    },
    { 
      icon: <FaLinkedin className="w-5 h-5" />, 
      url: "https://www.linkedin.com/in/rahul-rudra-1b49ab164",
      label: "LinkedIn",
      color: "hover:text-blue-500"
    },
    { 
      icon: <FaInstagram className="w-5 h-5" />, 
      url: "https://www.instagram.com/rahul__rr?igsh=Mng1dXozaG11YnA0",
      label: "Instagram",
      color: "hover:text-pink-500"
    },
    {
      icon: <RiTwitterXFill className="w-5 h-5" />,
      url: "https://x.com/rahul__rr?t=hAB0QHKKPQv1DTIlePKCuQ&s=09", 
      label: "Twitter (X)",
      color: "hover:text-gray-200"
    }
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ]

  return (
    <footer className="relative pt-32 pb-10 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 overflow-hidden">
      <AnimatedBackground />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-2000 right-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="relative inline-block">
              <h2 className="text-3xl font-bold text-white">
                Rahul Rudra<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">.</span>
              </h2>
              <div className="absolute -bottom-2 left-0 w-40 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            </div>
            <p className="text-gray-400">
              Creating immersive 3D experiences and bringing creative visions to life through stunning visual design.
            </p>
          </motion.div>

          {/* Quick Links with Hover Effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-bold mb-6 relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info with Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-white font-bold mb-6 relative inline-block">
              Contact
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              <motion.li whileHover={{ x: 5 }} className="text-gray-400 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <FaEnvelope className="w-4 h-4" />
                </div>
                <a href="mailto:rahul.rudra26@gmail.com" className="hover:text-white transition-colors duration-300">
                  rahul.rudra26@gmail.com
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="text-gray-400 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <FaPhone className="w-4 h-4" />
                </div>
                <a 
                  href="https://wa.me/917405459520?text=Hi, I'm interested in discussing a project with you!"
                  className="hover:text-white transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 7405459520
                </a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Social Links with Custom Hover Effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-white font-bold mb-6 relative inline-block">
              Connect
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className={`flex items-center gap-2 text-gray-400 ${social.color} 
                             transition-all duration-300 p-2 rounded-lg hover:bg-white/5`}
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                    {social.icon}
                  </div>
                  <span className="text-sm">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        {/* Bottom Bar with Gradient Border */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="border-t border-white/10 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Rahul Rudra. All rights reserved.
            </p>
            <p className="text-gray-400 text-center md:text-right">
              Developed by <a href="https://rahultumma.surge.sh" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Rahul Tumma</a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer