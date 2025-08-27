import { Circle } from "./BlogCard"

export const BlogSkeleton = () => {
  return (
    <div role="status" className="animate-pulse">
      <div className="p-4 border-b border-gray-700 pb-6 w-screen max-w-screen-md cursor-pointer bg-gray-900 rounded-lg shadow-md">
        
        {/* Header Section */}
        <div className="flex items-center mb-4">
          {/* Avatar */}
          <div className="h-10 w-10 bg-blue-800 rounded-full"></div>
          
          {/* Author Info */}
          <div className="ml-3 flex-1">
            <div className="h-3 bg-blue-700 rounded w-24 mb-2"></div>
            <div className="h-2 bg-blue-600 rounded w-16"></div>
          </div>
        </div>

        {/* Blog Title */}
        <div className="h-4 bg-blue-700 rounded w-3/4 mb-3"></div>

        {/* Blog Description */}
        <div className="space-y-2">
          <div className="h-3 bg-blue-600 rounded"></div>
          <div className="h-3 bg-blue-600 rounded w-5/6"></div>
        </div>

        {/* Footer (date or read time) */}
        <div className="mt-4">
          <div className="h-2 bg-blue-700 rounded w-20"></div>
        </div>

        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}
