import { Moon, Sparkles } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-[#2a2a2a] sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white text-lg">🌙</span>
            </div>
            <div>
              <h1 className="text-2xl font-normal text-[#f8fafc] leading-none">
                Story Time Magic
              </h1>
              <p className="text-xs text-[#94a3b8] -mt-1">
                Magical bedtime stories
              </p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-[#94a3b8] hover:text-[#f1f5f9] transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="#" className="text-[#94a3b8] hover:text-[#f1f5f9] transition-colors duration-200 font-medium">
              About
            </a>
            <a href="#" className="text-[#94a3b8] hover:text-[#f1f5f9] transition-colors duration-200 font-medium">
              Contact
            </a>
          </nav>
          
          <div className="flex items-center space-x-3">
            <button className="p-2 text-[#94a3b8] hover:text-[#f1f5f9] hover:bg-[#2a2a2a] rounded-lg transition-all duration-200">
              <span className="text-lg">🔍</span>
            </button>
            <button className="p-2 text-[#94a3b8] hover:text-[#f1f5f9] hover:bg-[#2a2a2a] rounded-lg transition-all duration-200">
              <span className="text-lg">⚙️</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
} 