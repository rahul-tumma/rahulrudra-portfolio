import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { useState } from 'react'

function ContactSection() {
  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email",
      value: "rahul.rudra26@gmail.com",
      link: "mailto:rahul.rudra26@gmail.com"
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 7405459520",
      link: `https://wa.me/917405459520?text=${encodeURIComponent("Hi, I'm interested in discussing a project with you!")}`
    }
  ]

  // Add state for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Add handle change function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Update handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `*New Message from Portfolio*\nName: ${formData.name}\n${formData.email ? `Email: ${formData.email}\n` : ''}Message: ${formData.message}`;
    window.open(`https://wa.me/917405459520?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-terminal-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 -z-10">
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl top-20 -right-20"></div>
      </div>

      <div className="container mx-auto px-4">
 

<motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full mb-6">
              <span className="text-sm font-medium text-white">My Contact</span>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-white mb-4 flex justify-center items-center">
            <span>Get in </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mx-2">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-center">
          Let's discuss your project and bring your ideas to life
          </p>
        </motion.div>
         

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto relative z-10">
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
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 relative z-10"
          >
            <div>
              <input
                type="text"
                name="name"
                value={formData.name || ''}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-white/5 border border-white/10 
                         text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email || ''}
                onChange={handleChange}
                placeholder="Your Email (Optional)"
                className="w-full p-3 rounded-lg bg-white/5 border border-white/10 
                         text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message || ''}
                onChange={handleChange}
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
