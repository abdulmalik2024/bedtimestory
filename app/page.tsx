'use client'

import { useState } from 'react'
import { StoryForm } from '@/components/StoryForm'
import { StoryDisplay } from '@/components/StoryDisplay'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Story } from '@/types/story'

export default function Home() {
  const [story, setStory] = useState<Story | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleStoryGenerated = (newStory: Story) => {
    setStory(newStory)
    setError(null)
  }

  const handleGenerationError = (errorMessage: string) => {
    setError(errorMessage)
    setStory(null)
  }

  const handleGenerationStart = () => {
    setIsGenerating(true)
    setError(null)
  }

  const handleGenerationComplete = () => {
    setIsGenerating(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f172a] to-[#1e293b]">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12 fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-full mb-6 shadow-lg">
            <span className="text-4xl">🌙</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-normal mb-6 text-white leading-tight">
            Story Time Magic
          </h1>
          
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto leading-relaxed mb-8">
            Create magical, personalized bedtime stories with AI-generated illustrations and soothing narration
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#2563eb] rounded-full"></span>
              AI-Powered Stories
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#3b82f6] rounded-full"></span>
              Beautiful Illustrations
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#f59e0b] rounded-full"></span>
              Audio Narration
            </span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 slide-up">
          <div className="story-card text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-xl mb-3 text-white">Personalized Stories</h3>
            <p className="text-white text-sm leading-relaxed">
              Stories tailored to your child's age, interests, and learning goals
            </p>
          </div>
          
          <div className="story-card text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#92400e] to-[#b45309] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-xl mb-3 text-white">AI Illustrations</h3>
            <p className="text-white text-sm leading-relaxed">
              Beautiful, age-appropriate artwork that brings stories to life
            </p>
          </div>
          
          <div className="story-card text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#1e293b] to-[#334155] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🎧</span>
            </div>
            <h3 className="text-xl mb-3 text-white">Audio Narration</h3>
            <p className="text-white text-sm leading-relaxed">
              Soothing voices perfect for bedtime listening and learning
            </p>
          </div>
        </div>

        {/* Story Form or Display Section */}
        {!story ? (
          <div className="story-card slide-up">
            <StoryForm 
              onStoryGenerated={handleStoryGenerated}
              onError={handleGenerationError}
              onGenerationStart={handleGenerationStart}
              onGenerationComplete={handleGenerationComplete}
              isGenerating={isGenerating}
            />
          </div>
        ) : (
          <div className="slide-up">
            <StoryDisplay 
              story={story}
              onGenerateNew={() => setStory(null)}
            />
          </div>
        )}

        {/* Error Display */}
        {error && (
          <div className="mt-8 story-card bg-red-900/30 border-red-700/50 fade-in">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-300">
                  Error generating story
                </h3>
                <div className="mt-2 text-sm text-red-200">
                  {error}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Additional Info */}
        <div className="text-center mt-12 fade-in">
          <div className="inline-flex items-center gap-3 bg-[#1e293b]/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm border border-[#475569]/50">
            <span className="text-[#f59e0b]">💡</span>
            <span className="text-white text-sm">
              Each story is uniquely crafted and safe for children of all ages
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
} 