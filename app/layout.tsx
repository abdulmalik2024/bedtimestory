import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bedtime Story Generator',
  description: 'Create magical, age-appropriate bedtime stories with AI. Perfect for families looking for engaging stories to read or listen to together.',
  keywords: 'bedtime stories, AI stories, children stories, family stories, audio stories',
  authors: [{ name: 'Bedtime Story Generator' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f2751a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-night-50 via-white to-story-50">
          {children}
        </div>
      </body>
    </html>
  )
} 