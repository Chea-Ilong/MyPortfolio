"use client"

export default function LoadingSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#2a2826]">
      <div className="max-w-4xl mx-auto p-8 space-y-8 animate-pulse">
        {/* Header skeleton */}
        <div className="text-center space-y-4">
          <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded-lg mx-auto w-3/4"></div>
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-lg mx-auto w-1/2"></div>
        </div>
        
        {/* Content skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white dark:bg-[#2a2826] rounded-lg p-6 shadow-lg">
              <div className="h-48 bg-gray-300 dark:bg-gray-700 rounded-lg mb-4"></div>
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2 w-3/4"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}