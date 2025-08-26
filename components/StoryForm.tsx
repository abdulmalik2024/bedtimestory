'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { StoryFormData, Story } from '@/types/story'
import { Sparkles, BookOpen, Users, Heart, Lightbulb } from 'lucide-react'

interface StoryFormProps {
  onStoryGenerated: (story: Story) => void
  onError: (error: string) => void
  onGenerationStart: () => void
  onGenerationComplete: () => void
  isGenerating: boolean
}

export function StoryForm({
  onStoryGenerated,
  onError,
  onGenerationStart,
  onGenerationComplete,
  isGenerating
}: StoryFormProps) {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<StoryFormData>()
  const [showAdvanced, setShowAdvanced] = useState(false)
  
  const age = watch('age')

  const storyTypes = [
    'Adventure', 'Fantasy', 'Space', 'Animals', 'Nature', 
    'Friendship', 'Courage', 'Kindness', 'Learning', 'Magic'
  ]

  const characterTypes = [
    'Brave Knight', 'Wise Wizard', 'Friendly Dragon', 'Curious Cat', 
    'Adventurous Mouse', 'Magical Unicorn', 'Clever Fox', 'Gentle Giant'
  ]

  const endingTypes = [
    'Happy Ending', 'Learning Moment', 'Friendship', 'Discovery', 
    'Courage Rewarded', 'Kindness Returned', 'New Beginning'
  ]

  const onSubmit = async (data: StoryFormData) => {
    try {
      onGenerationStart()
      
      const response = await fetch('/api/generate-story', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to generate story')
      }

      const story: Story = await response.json()
      onStoryGenerated(story)
    } catch (error) {
      onError(error instanceof Error ? error.message : 'An unexpected error occurred')
    } finally {
      onGenerationComplete()
    }
  }

  const getAgeDescription = (age: number) => {
    if (age <= 3) return 'Simple words, short sentences'
    if (age <= 6) return 'Basic vocabulary, clear themes'
    if (age <= 9) return 'Engaging plots, moral lessons'
    if (age <= 12) return 'Complex characters, deeper themes'
    return 'Mature themes, sophisticated language'
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="story-card space-y-6">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-story-400 to-story-600 rounded-full mb-4">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-night-800 mb-2">Create Your Story</h2>
          <p className="text-night-600">Fill in the details below to generate a magical bedtime story</p>
        </div>

        {/* Age Input - Required */}
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-night-700 mb-2">
            Child's Age <span className="text-red-500">*</span>
          </label>
          <input
            {...register('age', { 
              required: 'Age is required',
              min: { value: 1, message: 'Age must be at least 1' },
              max: { value: 17, message: 'Age must be 17 or younger' }
            })}
            type="number"
            id="age"
            min="1"
            max="17"
            className="story-input"
            placeholder="Enter age (1-17)"
          />
          {errors.age && (
            <p className="mt-1 text-sm text-red-600">{errors.age.message}</p>
          )}
          {age && (
            <p className="mt-2 text-sm text-night-600 bg-night-50 p-3 rounded-lg">
              <BookOpen className="inline w-4 h-4 mr-2" />
              {getAgeDescription(age)}
            </p>
          )}
        </div>

        {/* Advanced Options Toggle */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="text-story-600 hover:text-story-700 text-sm font-medium flex items-center justify-center mx-auto"
          >
            {showAdvanced ? 'Hide' : 'Show'} Advanced Options
            <Lightbulb className={`ml-2 w-4 h-4 transition-transform ${showAdvanced ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Advanced Options */}
        {showAdvanced && (
          <div className="space-y-6 pt-4 border-t border-night-100">
            {/* Language Selection */}
            <div>
              <label htmlFor="language" className="block text-sm font-medium text-night-700 mb-2">
                Story Language
              </label>
              <select
                {...register('language')}
                id="language"
                className="story-input"
                defaultValue="en"
              >
                <option value="en">🇺🇸 English (Default)</option>
                <option value="fr">🇫🇷 French</option>
                <option value="de">🇩🇪 German</option>
                <option value="es">🇪🇸 Spanish</option>
                <option value="ja">🇯🇵 Japanese</option>
                <option value="ar">🇸🇦 Arabic</option>
                <option value="ur">🇵🇰 Urdu</option>
              </select>
              <p className="mt-1 text-xs text-night-500">
                Choose the language for your story
              </p>
            </div>

            {/* Story Type */}
            <div>
              <label htmlFor="storyType" className="block text-sm font-medium text-night-700 mb-2">
                Story Type
              </label>
              <select
                {...register('storyType')}
                id="storyType"
                className="story-input"
              >
                <option value="">Choose a story type (optional)</option>
                {storyTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Character */}
            <div>
              <label htmlFor="character" className="block text-sm font-medium text-night-700 mb-2">
                Main Character
              </label>
              <select
                {...register('character')}
                id="character"
                className="story-input"
              >
                <option value="">Choose a character (optional)</option>
                {characterTypes.map(char => (
                  <option key={char} value={char}>{char}</option>
                ))}
              </select>
            </div>

            {/* Ending Type */}
            <div>
              <label htmlFor="endingType" className="block text-sm font-medium text-night-700 mb-2">
                Ending Type
              </label>
              <select
                {...register('endingType')}
                id="endingType"
                className="story-input"
              >
                <option value="">Choose an ending (optional)</option>
                {endingTypes.map(ending => (
                  <option key={ending} value={ending}>{ending}</option>
                ))}
              </select>
            </div>

            {/* Voice Selection */}
            <div>
              <label htmlFor="voice" className="block text-sm font-medium text-night-700 mb-2">
                Story Voice
              </label>
              <select
                {...register('voice')}
                id="voice"
                className="story-input"
                defaultValue="fable"
              >
                <option value="fable">🎭 Fable - Perfect for storytelling (Default)</option>
                <option value="echo">👨‍👩‍👧‍👦 Echo - Warm & friendly for children</option>
                <option value="alloy">⚖️ Alloy - Neutral & balanced</option>
                <option value="onyx">🎪 Onyx - Deep & dramatic for adventures</option>
                <option value="shimmer">✨ Shimmer - Soft & gentle for lullabies</option>
              </select>
              <p className="mt-1 text-xs text-night-500">
                Choose the voice that will narrate your story
              </p>
            </div>

            {/* Lesson Learned */}
            <div>
              <label htmlFor="lesson" className="block text-sm font-medium text-night-700 mb-2">
                Lesson Learned
              </label>
              <textarea
                {...register('lesson')}
                id="lesson"
                rows={3}
                className="story-input"
                placeholder="What should the child learn from this story? (optional)"
              />
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isGenerating}
          className="story-button w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGenerating ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Generating Story...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              <span>Generate Story</span>
            </>
          )}
        </button>

        <div className="text-center text-sm text-night-500">
          <p>✨ Each story is uniquely crafted for your child's age and preferences</p>
        </div>
      </form>
    </div>
  )
} 