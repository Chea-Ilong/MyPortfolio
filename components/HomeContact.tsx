"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa"
import Link from "next/link"

const HomeContact = () => {
  const [activeIcon, setActiveIcon] = useState<string | null>(null)

  const contactInfo = [
    {
      id: "location",
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      title: "Location",
      content: "Phnom Penh, Cambodia",
    },
    {
      id: "phone",
      icon: <FaPhone className="w-5 h-5" />,
      title: "Phone",
      content: "085602418",
    },
    {
      id: "email",
      icon: <FaEnvelope className="w-5 h-5" />,
      title: "Email",
      content: "cheadara133@gmail.com",
    },
  ]

  const socialLinks = [
    { id: "github", icon: <FaGithub className="w-6 h-6" />, href: "https://github.com/Chea-Ilong" },
    { id: "linkedin", icon: <FaLinkedin className="w-6 h-6" />, href: "https://www.linkedin.com/in/chea-ilong-88bb83333/" },
    { id: "facebook", icon: <FaFacebook className="w-6 h-6" />, href: "https://www.facebook.com/chea.elong.9" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="contact" className="py-16 bg-white dark:bg-[#1F1D1B] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Contact Information</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-[#EB2420] mx-auto mt-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Feel free to reach out if you have any questions or would like to collaborate on a project.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="bg-gray-50 dark:bg-[#2a2826] p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-[#EB2420]">Get In Touch</h3>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <motion.div key={item.id} className="flex items-start" whileHover={{ x: 5 }}>
                  <motion.div
                    className={`flex-shrink-0 mt-1 bg-white dark:bg-[#1F1D1B] p-3 rounded-full ${
                      activeIcon === item.id ? "text-white bg-[#EB2420]" : "text-[#EB2420]"
                    }`}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#EB2420",
                      color: "#ffffff",
                    }}
                    whileTap={{ scale: 0.9 }}
                    onMouseEnter={() => setActiveIcon(item.id)}
                    onMouseLeave={() => setActiveIcon(null)}
                  >
                    {item.icon}
                  </motion.div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-white dark:bg-[#1F1D1B] p-3 rounded-full ${
                      activeIcon === `social-${link.id}` ? "bg-[#EB2420] text-white" : "text-gray-600 dark:text-white"
                    } transition-colors duration-300`}
                    whileHover={{ scale: 1.1, backgroundColor: "#EB2420", color: "#ffffff" }}
                    whileTap={{ scale: 0.9 }}
                    onMouseEnter={() => setActiveIcon(`social-${link.id}`)}
                    onMouseLeave={() => setActiveIcon(null)}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gray-50 dark:bg-[#2a2826] p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-[#EB2420]">Send Me a Message</h3>

            <form className="space-y-4">
              <motion.div whileHover={{ y: -2 }}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-white dark:bg-[#1F1D1B] border border-gray-300 dark:border-[#EB2420]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB2420] focus:border-[#EB2420] text-gray-900 dark:text-white transition-all duration-300"
                  placeholder="John Doe"
                />
              </motion.div>

              <motion.div whileHover={{ y: -2 }}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-white dark:bg-[#1F1D1B] border border-gray-300 dark:border-[#EB2420]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB2420] focus:border-[#EB2420] text-gray-900 dark:text-white transition-all duration-300"
                  placeholder="john@example.com"
                />
              </motion.div>

              <motion.div whileHover={{ y: -2 }}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-white dark:bg-[#1F1D1B] border border-gray-300 dark:border-[#EB2420]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB2420] focus:border-[#EB2420] text-gray-900 dark:text-white transition-all duration-300"
                  placeholder="Your message here..."
                ></textarea>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-[#EB2420] text-white py-3 px-4 rounded-md hover:bg-[#EB2420]/90 transition-colors duration-300 font-medium"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/contact">
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-[#EB2420] text-white font-medium rounded-lg hover:bg-[#EB2420]/90 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Me a Message
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default HomeContact
