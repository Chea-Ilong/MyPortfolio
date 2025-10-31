"use client"

import { useState, memo, useCallback } from "react"
import { Award } from "lucide-react"
import { motion } from "framer-motion"
import { COLORS } from "@/constants"

interface CertificateCardProps {
  title?: string
  issuer?: string
  date?: string
  images?: string[]
  credential?: string
}

const CertificateCard = memo(function CertificateCard({
  title,
  issuer,
  date,
  images,
  credential,
}: CertificateCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      borderColor: "rgba(235, 36, 32, 0.5)",
      transition: {
        duration: 0.3,
      },
    },
  }

  const imageVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.08,
      transition: { duration: 0.4 },
    },
  }

  const iconVariants = {
    initial: { rotate: -10, opacity: 0.5 },
    animate: {
      rotate: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.2,
      color: "#EB2420",
      transition: { duration: 0.2 },
    },
  }

  // Image navigation functions with useCallback
  const nextImage = useCallback(() => {
    if (images && images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }
  }, [images])

  const prevImage = useCallback(() => {
    if (images && images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
    }
  }, [images])

  // Ensure we have valid images array and current index
  const imageArray = Array.isArray(images) ? images : []
  const validIndex = imageArray.length > 0 ? Math.min(currentImageIndex, imageArray.length - 1) : 0
  const currentImage = imageArray.length > 0 ? imageArray[validIndex] : "/placeholder.jpg"

  return (
    <motion.div
      className="relative bg-white dark:bg-[#2a2826] rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-all min-h-[280px] md:min-h-[300px]"
      style={{ borderColor: "rgb(235, 36, 32, 0.2)" }}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
    >
      <div className="flex flex-col md:flex-row h-full">
        {/* Left side - Image */}
        <div className="md:w-1/3 relative group">
          <div className="relative h-56 md:h-72 overflow-hidden">
            <motion.img
              key={validIndex}
              src={currentImage}
              alt={title || "Certificate image"}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              variants={imageVariants}
              initial="initial"
              whileHover="hover"
              onError={(e) => {
                e.currentTarget.src = "/placeholder.jpg"
              }}
            />

            {/* Image navigation arrows */}
            {imageArray.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 text-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 z-20 backdrop-blur-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 text-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 z-20 backdrop-blur-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Image indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20 bg-black/30 backdrop-blur-sm rounded-full px-3 py-2">
                  {imageArray.map((_: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                        index === validIndex 
                          ? 'bg-white shadow-md' 
                          : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right side - Content */}
        <div className="md:w-2/3 p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">{title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-base mb-2">{issuer}</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">{date}</p>
            </div>
            <motion.div
              variants={iconVariants}
              whileHover="hover"
              whileTap={{ scale: 0.9, color: "#EB2420" }}
              initial="initial"
              animate="animate"
              viewport={{ once: true }}
              className="ml-4"
            >
              <Award className="text-[#EB2420]" size={24} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
})

CertificateCard.displayName = "CertificateCard"

export default CertificateCard