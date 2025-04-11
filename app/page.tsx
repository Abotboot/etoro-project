"use client"

import Link from "next/link"
import { Bitcoin, CircleDotIcon, Rocket, TrendingUp, DollarSign, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function CryptoLanding() {
  // Hardcoded signup URL
  const signupUrl = "https://your-signup-url.com"
  const [mounted, setMounted] = useState(false)

  // This ensures hydration issues don't cause styling problems
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden relative">
      {/* Background stars */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/5 animate-float-slow text-yellow-500 opacity-20">
          <Bitcoin size={64} />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float text-blue-500 opacity-20">
          <CircleDotIcon size={80} />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float-slow text-green-500 opacity-20">
          <DollarSign size={48} />
        </div>
        <div className="absolute top-2/3 right-1/3 animate-float text-purple-500 opacity-20">
          <TrendingUp size={56} />
        </div>
        <div className="absolute bottom-1/3 left-1/4 animate-rocket text-red-500 opacity-30">
          <Rocket size={48} />
        </div>
        <div className="absolute top-1/2 right-1/5 animate-rocket-alt text-orange-500 opacity-30">
          <Rocket size={64} />
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-2">
            <Rocket className="text-blue-400" />
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              CryptoLaunch
            </h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">
              Features
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Roadmap
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Tokenomics
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Team
            </a>
          </nav>
        </header>

        <main className="flex flex-col items-center justify-center min-h-[70vh] text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              The Next Generation of Crypto Innovation
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join the revolution and be part of the future of decentralized finance
            </p>

            {/* Crypto Charts/Graphs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <Bitcoin size={20} className="text-yellow-500" />
                    <span className="font-bold">BTC</span>
                  </div>
                  <span className="text-green-400">+12.4%</span>
                </div>
                <div className="h-24 w-full">
                  <svg viewBox="0 0 100 40" className="h-full w-full">
                    <path
                      d="M0,35 L5,32 L10,33 L15,30 L20,31 L25,29 L30,25 L35,26 L40,23 L45,20 L50,15 L55,18 L60,16 L65,14 L70,15 L75,10 L80,12 L85,8 L90,5 L95,7 L100,2"
                      fill="none"
                      stroke="rgb(74, 222, 128)"
                      strokeWidth="1"
                    />
                    <path
                      d="M0,35 L5,32 L10,33 L15,30 L20,31 L25,29 L30,25 L35,26 L40,23 L45,20 L50,15 L55,18 L60,16 L65,14 L70,15 L75,10 L80,12 L85,8 L90,5 L95,7 L100,2 V40 H0 Z"
                      fill="url(#btcGradient)"
                      opacity="0.2"
                    />
                    <defs>
                      <linearGradient id="btcGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgb(74, 222, 128)" stopOpacity="1" />
                        <stop offset="100%" stopColor="rgb(74, 222, 128)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <CircleDotIcon size={20} className="text-blue-500" />
                    <span className="font-bold">ETH</span>
                  </div>
                  <span className="text-green-400">+8.7%</span>
                </div>
                <div className="h-24 w-full">
                  <svg viewBox="0 0 100 40" className="h-full w-full">
                    <path
                      d="M0,30 L5,28 L10,32 L15,25 L20,27 L25,22 L30,20 L35,18 L40,15 L45,17 L50,12 L55,10 L60,15 L65,13 L70,8 L75,10 L80,7 L85,5 L90,8 L95,6 L100,4"
                      fill="none"
                      stroke="rgb(96, 165, 250)"
                      strokeWidth="1"
                    />
                    <path
                      d="M0,30 L5,28 L10,32 L15,25 L20,27 L25,22 L30,20 L35,18 L40,15 L45,17 L50,12 L55,10 L60,15 L65,13 L70,8 L75,10 L80,7 L85,5 L90,8 L95,6 L100,4 V40 H0 Z"
                      fill="url(#ethGradient)"
                      opacity="0.2"
                    />
                    <defs>
                      <linearGradient id="ethGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgb(96, 165, 250)" stopOpacity="1" />
                        <stop offset="100%" stopColor="rgb(96, 165, 250)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={20} className="text-purple-500" />
                    <span className="font-bold">LAUNCH</span>
                  </div>
                  <span className="text-green-400">+156%</span>
                </div>
                <div className="h-24 w-full">
                  <svg viewBox="0 0 100 40" className="h-full w-full">
                    <path
                      d="M0,38 L5,36 L10,35 L15,33 L20,30 L25,28 L30,25 L35,22 L40,20 L45,18 L50,15 L55,12 L60,10 L65,8 L70,7 L75,5 L80,4 L85,3 L90,2 L95,1 L100,0"
                      fill="none"
                      stroke="rgb(192, 132, 252)"
                      strokeWidth="1"
                    />
                    <path
                      d="M0,38 L5,36 L10,35 L15,33 L20,30 L25,28 L30,25 L35,22 L40,20 L45,18 L50,15 L55,12 L60,10 L65,8 L70,7 L75,5 L80,4 L85,3 L90,2 L95,1 L100,0 V40 H0 Z"
                      fill="url(#launchGradient)"
                      opacity="0.2"
                    />
                    <defs>
                      <linearGradient id="launchGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgb(192, 132, 252)" stopOpacity="1" />
                        <stop offset="100%" stopColor="rgb(192, 132, 252)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            {/* Signup Button */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
              <Link
                href="https://grabify.link/4UNCSL"
                className="relative flex items-center justify-center gap-2 px-8 py-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-2xl rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-glow"
              >
                SIGN UP NOW
                <ArrowRight className="ml-2" />
              </Link>
            </div>

            <p className="mt-8 text-gray-400 text-sm">Early adopters get exclusive token rewards</p>
          </div>
        </main>

        <footer className="mt-24 text-center text-gray-500 text-sm">
          <p>© 2025 CryptoLaunch. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
