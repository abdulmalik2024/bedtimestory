'use client'

import { useState, useEffect, useRef } from 'react'
import { Story, StoryPage } from '@/types/story'
import { Play, Pause, RotateCcw, Volume2, ChevronLeft, ChevronRight, Lightbulb } from 'lucide-react'

interface StoryDisplayProps {
  story: Story
  onGenerateNew: () => void
}

export function StoryDisplay({ story, onGenerateNew }: StoryDisplayProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isAudioLoaded, setIsAudioLoaded] = useState(false)

  // Parse story content into pages
  const storyPages: StoryPage[] = story.content
    .split(/<h2>Page \d+<\/h2>/)
    .filter(page => page.trim())
    .map((page, index) => ({
      pageNumber: index + 1,
      content: page.trim(),
      heading: `Page ${index + 1}`
    }))

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('loadedmetadata', () => {
        setDuration(audioRef.current?.duration || 0)
        setIsAudioLoaded(true)
      })

      audioRef.current.addEventListener('timeupdate', () => {
        setCurrentTime(audioRef.current?.currentTime || 0)
      })

      audioRef.current.addEventListener('ended', () => {
        setIsPlaying(false)
        setCurrentTime(0)
      })
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  const seekAudio = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time
      setCurrentTime(time)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const nextPage = () => {
    if (currentPage < storyPages.length - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Story Header */}
      <div className="story-card text-center">
        <h1 className="story-heading text-3xl mb-4">{story.title}</h1>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-night-600">
          <span>Age: {story.age}</span>
          {story.storyType && <span>Type: {story.storyType}</span>}
          {story.character && <span>Character: {story.character}</span>}
          {story.endingType && <span>Ending: {story.endingType}</span>}
        </div>
      </div>

      {/* Story Content */}
      <div className="story-card">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="story-heading text-xl">
              {storyPages[currentPage].heading}
            </h2>
            <div className="flex items-center space-x-2 text-sm text-night-500">
              <span>{currentPage + 1} of {storyPages.length}</span>
            </div>
          </div>
          
          <div 
            className="story-text leading-relaxed"
            dangerouslySetInnerHTML={{ __html: storyPages[currentPage].content }}
          />
        </div>

        {/* Page Navigation */}
        <div className="flex items-center justify-between pt-4 border-t border-night-100">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="story-button-secondary flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <div className="flex space-x-2">
            {storyPages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentPage 
                    ? 'bg-story-500' 
                    : 'bg-night-200 hover:bg-night-300'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextPage}
            disabled={currentPage === storyPages.length - 1}
            className="story-button-secondary flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Audio Player */}
      <div className="story-card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-night-800 flex items-center">
            <Volume2 className="w-5 h-5 mr-2 text-story-500" />
            Listen to Story
          </h3>
          <button
            onClick={onGenerateNew}
            className="story-button-secondary flex items-center space-x-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>New Story</span>
          </button>
        </div>

        <div className="space-y-4">
          {/* Audio Controls */}
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={toggleAudio}
              disabled={!isAudioLoaded}
              className="w-16 h-16 bg-story-500 hover:bg-story-600 text-white rounded-full flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8" />
              ) : (
                <Play className="w-8 h-8 ml-1" />
              )}
            </button>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-night-600">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
            <div className="w-full bg-night-200 rounded-full h-2">
              <div
                className="bg-story-500 h-2 rounded-full transition-all duration-100"
                style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
              />
            </div>
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={(e) => seekAudio(Number(e.target.value))}
              className="w-full h-2 bg-transparent appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #f2751a 0%, #f2751a ${(currentTime / (duration || 1)) * 100}%, #e2e8f0 ${(currentTime / (duration || 1)) * 100}%, #e2e8f0 100%)`
              }}
            />
          </div>

          {/* Audio Element */}
          <audio
            ref={audioRef}
            src={story.audioUrl}
            preload="metadata"
            className="hidden"
          />
        </div>

        {!isAudioLoaded && (
          <div className="text-center text-sm text-night-500 mt-4">
            <p>Audio is being prepared... Please wait a moment.</p>
          </div>
        )}
      </div>

      {/* Lesson Learned */}
      {story.lesson && (
        <div className="story-card bg-gradient-to-r from-story-50 to-night-50 border-story-200">
          <h3 className="text-lg font-semibold text-story-700 mb-3 flex items-center">
            <Lightbulb className="w-5 h-5 mr-2" />
            Lesson Learned
          </h3>
          <p className="story-text text-story-800">{story.lesson}</p>
        </div>
      )}
    </div>
  )
} 