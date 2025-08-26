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
    const { age, storyType, character, endingType, lesson } = body

    // Validate required fields
    if (!age || age < 1 || age > 17) {
      return NextResponse.json(
        { error: 'Age is required and must be between 1 and 17' },
        { status: 400 }
      )
    }

    // Build the prompt based on age and preferences
    const systemPrompt = `You are a master storyteller who creates warm, gentle, and age-appropriate bedtime stories. Your stories should be:
- Gentle and non-violent
- Age-appropriate in vocabulary and complexity
- Engaging and magical
- Structured in exactly 3 pages
- Include a clear moral lesson
- Use warm, comforting language perfect for bedtime

Always format your response with exactly 3 pages using <h2>Page 1</h2>, <h2>Page 2</h2>, <h2>Page 3</h2> tags.
End with a line that starts with "Lesson:" followed by the moral of the story.`

    const userPrompt = `Create a bedtime story for a ${age}-year-old child.
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

    // Generate audio using TTS
    let audioUrl = ''
    try {
      const audioResponse = await openai.audio.speech.create({
        model: "tts-1",
        voice: "alloy",
        input: storyContent.replace(/<[^>]*>/g, ''), // Remove HTML tags for TTS
      })

      // Convert the audio response to base64 for demo purposes
      // In production, you'd save this to a file storage service
      const audioBuffer = Buffer.from(await audioResponse.arrayBuffer())
      audioUrl = `data:audio/mp3;base64,${audioBuffer.toString('base64')}`
    } catch (audioError) {
      console.warn('Audio generation failed:', audioError)
      // Continue without audio if TTS fails
    }

    // Extract title from first few words
    const title = storyContent.split('\n')[0].replace(/<[^>]*>/g, '').trim()

    const story = {
      id: Date.now().toString(),
      title: title || 'Magical Bedtime Story',
      content: storyContent,
      age,
      storyType,
      character,
      endingType,
      lesson,
      createdAt: new Date(),
      audioUrl,
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

function getWordCount(age: number): number {
  if (age <= 3) return 150
  if (age <= 6) return 250
  if (age <= 9) return 400
  if (age <= 12) return 600
  return 800
} 