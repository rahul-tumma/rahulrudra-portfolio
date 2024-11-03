import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

function ContactSection() {
  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email",
      value: "hello@example.com",
      link: "mailto:hello@example.com"
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Location",
      value: "New York, NY",
      link: "#"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-terminal-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl top-20 -right-20"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let's discuss your project and bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm
                           border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="text-purple-400">{info.icon}</div>
                <div>
                  <h3 className="text-white font-medium">{info.title}</h3>
                  <p className="text-gray-400">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-white/5 border border-white/10 
                         text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-white/5 border border-white/10 
                         text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-white/5 border border-white/10 
                         text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-white text-purple-900 rounded-lg font-medium
                       hover:bg-purple-100 transition-colors duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
