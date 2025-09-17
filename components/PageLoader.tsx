"use client"

export default function PageLoader() {
  return (
    <div className="fixed inset-0 bg-white dark:bg-[#1F1D1B] z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-gray-200 dark:border-gray-700 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-[#EB2420] border-t-transparent rounded-full animate-spin"></div>
        </div>
        <div className="text-gray-600 dark:text-gray-400 text-lg font-medium">
          Loading Portfolio...
        </div>
      </div>
    </div>
  )
}