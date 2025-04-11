import Link from "next/link"
import { Rocket } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center p-4">
      <Rocket className="text-blue-400 w-16 h-16 mb-4" />
      <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="text-gray-400 mb-8">The crypto you're looking for has vanished into the blockchain.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg transition-all duration-200 hover:scale-105"
      >
        Return to Launch
      </Link>
    </div>
  )
}
