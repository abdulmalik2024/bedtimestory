import { Moon, Sparkles } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-night-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-story-400 to-story-600 rounded-lg">
              <Moon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-story-700">StoryTime</h1>
              <p className="text-xs text-night-500">AI Bedtime Stories</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-night-600 hover:text-story-600 transition-colors">
              Features
            </a>
            <a href="#about" className="text-night-600 hover:text-story-600 transition-colors">
              About
            </a>
            <a href="#contact" className="text-night-600 hover:text-story-600 transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-story-400 rounded-full animate-pulse-gentle"></div>
            <span className="text-sm text-night-500">AI Powered</span>
          </div>
        </div>
      </div>
    </header>
  )
} 