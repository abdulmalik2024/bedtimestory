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
    <main className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-story-700 mb-4 font-story">
            Bedtime Story Generator
          </h1>
          <p className="text-xl text-night-600 max-w-2xl mx-auto">
            Create magical, age-appropriate bedtime stories with AI. 
            Perfect for families looking for engaging stories to read or listen to together.
          </p>
        </div>

        {!story ? (
          <StoryForm 
            onStoryGenerated={handleStoryGenerated}
            onError={handleGenerationError}
            onGenerationStart={handleGenerationStart}
            onGenerationComplete={handleGenerationComplete}
            isGenerating={isGenerating}
          />
        ) : (
          <StoryDisplay 
            story={story}
            onGenerateNew={() => setStory(null)}
          />
        )}

        {error && (
          <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  Error generating story
                </h3>
                <div className="mt-2 text-sm text-red-700">
                  {error}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
} 