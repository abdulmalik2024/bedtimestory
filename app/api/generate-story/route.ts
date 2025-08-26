import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
})

export async function POST(request: NextRequest) {
  try {
    // Check if OpenAI API key is configured
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { age, storyType, character, endingType, lesson, voice, language = 'en' } = body

    // Validate required fields
    if (!age || age < 1 || age > 17) {
      return NextResponse.json(
        { error: 'Age is required and must be between 1 and 17' },
        { status: 400 }
      )
    }

    // Build the prompt based on age and preferences
    const systemPrompt = `You are a master storyteller who creates warm, gentle, and age-appropriate bedtime stories in ${getLanguageName(language)}. Your stories should be:
- Gentle and non-violent
- Age-appropriate in vocabulary and complexity
- Engaging and magical
- Structured in exactly 3 pages
- Include a clear moral lesson
- Use warm, comforting language perfect for bedtime
- Written entirely in ${getLanguageName(language)} with proper grammar and cultural sensitivity

IMPORTANT: Start your story with an engaging title on the first line, then begin the story content.
Always format your response with exactly 3 pages using <h2>Page 1</h2>, <h2>Page 2</h2>, <h2>Page 3</h2> tags.
End with a line that starts with "Lesson:" followed by the moral of the story.

Example format:
[Engaging Story Title in ${getLanguageName(language)}]
<h2>Page 1</h2>
[Story content in ${getLanguageName(language)}...]
<h2>Page 2</h2>
[Story content in ${getLanguageName(language)}...]
<h2>Page 3</h2>
[Story content in ${getLanguageName(language)}...]
Lesson: [moral of the story in ${getLanguageName(language)}]`

    const userPrompt = `Create a bedtime story for a ${age}-year-old child in ${getLanguageName(language)}.
${storyType ? `Story type: ${storyType}` : ''}
${character ? `Main character: ${character}` : ''}
${endingType ? `Ending type: ${endingType}` : ''}
${lesson ? `Lesson to teach: ${lesson}` : ''}

Requirements:
- Age ${age}: ${getAgeGuidance(age)}
- Exactly 3 pages with clear page breaks
- Word count: ${getWordCount(age)} words total
- Short paragraphs for easy reading
- Engaging and magical tone
- Clear moral lesson at the end
- Language: Write entirely in ${getLanguageName(language)} with proper grammar and cultural sensitivity
- Format: <h2>Page 1</h2> [content] <h2>Page 2</h2> [content] <h2>Page 3</h2> [content] Lesson: [moral]`

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      temperature: 0.8,
      max_tokens: 1500,
    })

    const storyContent = completion.choices[0]?.message?.content || ''

    // Extract title from the first line (before any HTML tags)
    const title = storyContent.split('\n')[0].replace(/<[^>]*>/g, '').trim()

    // Generate image using DALL-E
    let imageUrl = ''
    try {
      // Create a prompt for the image based on the story
      const imagePrompt = `Create a beautiful, child-friendly illustration for a ${getLanguageName(language)} bedtime story titled "${title}". 
      The image should be warm, gentle, and age-appropriate for a ${age}-year-old child. 
      Use soft, dreamy colors and a magical, comforting style. 
      Make it suitable for bedtime viewing - no scary elements, just wonder and imagination.
      Consider cultural elements appropriate for ${getLanguageName(language)} storytelling.`
      
      const imageResponse = await openai.images.generate({
        model: "dall-e-3",
        prompt: imagePrompt,
        size: "1024x1024",
        quality: "standard",
        n: 1,
      })
      
      imageUrl = imageResponse.data?.[0]?.url || ''
    } catch (imageError) {
      console.warn('Image generation failed:', imageError)
      // Continue without image if DALL-E fails
    }

    // Generate audio using TTS
    let audioUrl = ''
    try {
      // Clean story content for TTS: remove HTML tags and page numbers, start with title
      const cleanStoryForTTS = storyContent
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .replace(/Page \d+/g, '') // Remove "Page 1", "Page 2", etc.
        .replace(/\n\s*\s*\n/g, '\n') // Clean up extra line breaks
        .trim()
      
      const audioResponse = await openai.audio.speech.create({
        model: "tts-1",
        voice: voice || process.env.TTS_VOICE || "fable",
        input: cleanStoryForTTS,
      })

          // Convert the audio response to base64 for demo purposes
    // In production, you'd save this to a file storage service
    const audioBuffer = Buffer.from(await audioResponse.arrayBuffer())
    audioUrl = `data:audio/mp3;base64,${audioBuffer.toString('base64')}`
  } catch (audioError) {
    console.warn('Audio generation failed:', audioError)
    // Continue without audio if TTS fails
  }

    const story = {
      id: Date.now().toString(),
      title: title || 'Magical Bedtime Story',
      content: storyContent,
      age,
      storyType,
      character,
      endingType,
      lesson,
      voice: voice || 'fable',
      language: language || 'en',
      createdAt: new Date(),
      audioUrl,
      imageUrl,
    }

    return NextResponse.json(story)
  } catch (error) {
    console.error('Story generation error:', error)
    return NextResponse.json(
      { error: 'Failed to generate story. Please try again.' },
      { status: 500 }
    )
  }
}

function getAgeGuidance(age: number): string {
  if (age <= 3) return 'Use very simple words, short sentences, and repetitive patterns'
  if (age <= 6) return 'Use basic vocabulary, clear themes, and simple plots'
  if (age <= 9) return 'Include engaging plots, character development, and moral lessons'
  if (age <= 12) return 'Add complex characters, deeper themes, and more sophisticated language'
  return 'Use mature themes, sophisticated language, and complex character arcs'
}

function getLanguageName(languageCode: string): string {
  const languages: { [key: string]: string } = {
    'en': 'English',
    'fr': 'French',
    'de': 'German',
    'es': 'Spanish',
    'ja': 'Japanese',
    'ar': 'Arabic',
    'ur': 'Urdu'
  }
  return languages[languageCode] || 'English'
}

function getWordCount(age: number): number {
  if (age <= 3) return 150
  if (age <= 6) return 250
  if (age <= 9) return 400
  if (age <= 12) return 600
  return 800
} 