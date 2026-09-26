import Link from 'next/link'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-[#C2F800] font-extrabold text-[80px] sm:text-[120px] leading-none">
        404
      </h1>
      <h2 className="text-white font-bold text-xl sm:text-2xl uppercase mt-2">
        Page Not Found
      </h2>
      <p className="text-[#9CA3AF] text-sm mt-3 max-w-sm">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 mt-8 bg-[#C2F800] text-black font-bold text-sm uppercase px-6 py-3 rounded-md"
      >
        <Home size={16} />
        Back to Home
      </Link>
    </div>
  )
}