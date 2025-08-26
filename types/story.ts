export interface StoryFormData {
  age: number
  storyType?: string
  character?: string
  endingType?: string
  lesson?: string
  voice?: string
}

export interface Story {
  id: string
  title: string
  content: string
  age: number
  storyType?: string
  character?: string
  endingType?: string
  lesson?: string
  voice?: string
  createdAt: Date
  audioUrl?: string
  imageUrl?: string
}

export interface StoryPage {
  pageNumber: number
  content: string
  heading: string
}

export interface AudioPlayerState {
  isPlaying: boolean
  currentTime: number
  duration: number
  isLoaded: boolean
} 