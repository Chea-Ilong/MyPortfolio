"use client"

import { motion } from "framer-motion"

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-[#1F1D1B] z-50 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          className="w-16 h-16 border-4 border-gray-200 dark:border-gray-600 border-t-[#EB2420] rounded-full mx-auto mb-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.p
          className="text-gray-600 dark:text-gray-300 text-lg font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Loading...
        </motion.p>
      </div>
    </div>
  )
}

export default Loading