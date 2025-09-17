"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub } from "react-icons/fa"

const Contact = () => {
  const [activeIcon, setActiveIcon] = useState<string | null>(null)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formState)
    // Reset form
    setFormState({
      name: "",
      email: "",
      message: "",
    })
  }

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

  const contactItems = [
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
    { id: "github", icon: <FaGithub className="w-5 h-5" />, href: "https://github.com/Chea-Ilong" },
    {
      id: "linkedin",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      href: "https://www.linkedin.com/in/chea-ilong-88bb83333/",
    },
    {
      id: "facebook",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      href: "https://www.facebook.com/chea.elong.9",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-[#1F1D1B] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Get In Touch</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-[#EB2420] mx-auto mt-4"
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 text-[#EB2420]">Contact Information</h3>

            <div className="space-y-6">
              {contactItems.map((item) => (
                <motion.div key={item.id} className="flex items-start" whileHover={{ x: 5 }}>
                  <motion.div
                    className={`flex-shrink-0 mt-1 bg-white dark:bg-[#2a2826] p-3 rounded-full ${activeIcon === item.id ? "text-white bg-[#EB2420]" : "text-[#EB2420]"}`}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#EB2420",
                      color: "#ffffff",
                    }}
                    whileTap={{ scale: 0.9, backgroundColor: "#EB2420", color: "#ffffff" }}
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

            <div className="mt-10">
              <h4 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-white dark:bg-[#2a2826] p-3 rounded-full ${activeIcon === link.id ? "bg-[#EB2420] text-white" : "text-gray-600 dark:text-white"} transition-colors duration-300`}
                    whileHover={{ scale: 1.1, backgroundColor: "#EB2420", color: "#ffffff" }}
                    whileTap={{ scale: 0.9, backgroundColor: "#EB2420", color: "#ffffff" }}
                    onMouseEnter={() => setActiveIcon(link.id)}
                    onMouseLeave={() => setActiveIcon(null)}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 text-[#EB2420]">Send Me a Message</h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <motion.div
                whileHover={{ y: -2 }}
                animate={{
                  borderColor: focusedField === "name" ? "#EB2420" : "rgba(235, 36, 32, 0.2)",
                }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-2 bg-white dark:bg-[#2a2826] border border-gray-300 dark:border-[#EB2420]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB2420] focus:border-[#EB2420] text-gray-900 dark:text-white transition-all duration-300"
                  placeholder="John Doe"
                />
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                animate={{
                  borderColor: focusedField === "email" ? "#EB2420" : "rgba(235, 36, 32, 0.2)",
                }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-2 bg-white dark:bg-[#2a2826] border border-gray-300 dark:border-[#EB2420]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB2420] focus:border-[#EB2420] text-gray-900 dark:text-white transition-all duration-300"
                  placeholder="john@example.com"
                />
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                animate={{
                  borderColor: focusedField === "message" ? "#EB2420" : "rgba(235, 36, 32, 0.2)",
                }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-2 bg-white dark:bg-[#2a2826] border border-gray-300 dark:border-[#EB2420]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB2420] focus:border-[#EB2420] text-gray-900 dark:text-white transition-all duration-300"
                  placeholder="Your message here..."
                ></textarea>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-[#EB2420] text-white py-2 px-4 rounded-md hover:bg-[#EB2420]/90 transition-colors duration-300 font-medium"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
