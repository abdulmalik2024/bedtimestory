# Bedtime Story Generator

A magical web application that generates age-appropriate bedtime stories using AI. Perfect for families looking for engaging stories to read or listen to together.

## ✨ Features

- **AI Story Generation**: Create unique stories tailored to your child's age
- **Multi-Language Support**: Stories in 7 languages (English, French, German, Spanish, Japanese, Arabic, Urdu)
- **AI-Generated Illustrations**: DALL-E creates custom images for each story
- **Age-Appropriate Content**: Stories automatically adjust vocabulary and complexity
- **Text-to-Speech Audio**: Listen to stories with high-quality TTS
- **Customizable Options**: Choose story type, characters, endings, lessons, and language
- **Beautiful UI**: Clean, family-friendly interface with smooth animations
- **Mobile Responsive**: Works perfectly on all devices
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- OpenAI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd bedtime-story-webapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` and add your OpenAI API key:
   ```env
   OPENAI_API_KEY=your_actual_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 How It Works

### Story Generation Process

1. **User Input**: Enter child's age (required) and optional preferences
2. **AI Processing**: OpenAI GPT-4 generates a 3-page story with age-appropriate content
3. **Audio Creation**: TTS converts the story to audio using OpenAI's voice models
4. **Story Display**: View the story with page navigation and audio controls

### Age Guidelines

- **Ages 1-3**: Simple words, short sentences, repetitive patterns (150 words)
- **Ages 4-6**: Basic vocabulary, clear themes, simple plots (250 words)
- **Ages 7-9**: Engaging plots, character development, moral lessons (400 words)
- **Ages 10-12**: Complex characters, deeper themes, sophisticated language (600 words)
- **Ages 13-17**: Mature themes, sophisticated language, complex character arcs (800 words)

## 🛠️ Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: TailwindCSS with custom design system
- **AI Integration**: OpenAI GPT-4, TTS, and DALL-E APIs
- **Forms**: React Hook Form with validation
- **Icons**: Lucide React
- **Audio**: HTML5 Audio API with custom controls

## 📁 Project Structure

```
bedtime-story-webapp/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── generate-story/ # Story generation endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── StoryForm.tsx      # Story generation form
│   └── StoryDisplay.tsx   # Story display and audio player
├── types/                  # TypeScript type definitions
│   └── story.ts           # Story and form interfaces
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # TailwindCSS configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `OPENAI_API_KEY` | Your OpenAI API key | Yes | - |
| `TTS_VOICE` | TTS voice selection | No | `alloy` |
| `AI_MODEL` | TTS voice selection | No | `gpt-4o-mini` |

### Available TTS Voices

- `fable` - **Perfect for storytelling** (Default) - Designed for narratives
- `echo` - **Warm & friendly** - Great for children, very approachable
- `alloy` - **Neutral & balanced** - Good all-around voice
- `onyx` - **Deep & dramatic** - Perfect for adventure stories
- `shimmer` - **Soft & gentle** - Ideal for lullabies and soothing stories

### Supported Languages

- 🇺🇸 **English** - Default language with rich vocabulary
- 🇫🇷 **French** - Beautiful, melodic storytelling
- 🇩🇪 **German** - Clear, structured narratives
- 🇪🇸 **Spanish** - Warm, expressive stories
- 🇯🇵 **Japanese** - Gentle, respectful storytelling
- 🇸🇦 **Arabic** - Rich cultural narratives
- 🇵🇰 **Urdu** - Poetic, traditional stories

## 🎨 Customization

### Styling

The app uses a custom TailwindCSS design system with:

- **Story Colors**: Warm orange and brown tones
- **Night Colors**: Cool blue and gray tones
- **Custom Fonts**: Georgia for stories, Inter for UI
- **Animations**: Smooth transitions and hover effects

### Story Types

Available story categories:
- Adventure, Fantasy, Space, Animals, Nature
- Friendship, Courage, Kindness, Learning, Magic

### Characters

Pre-defined character options:
- Brave Knight, Wise Wizard, Friendly Dragon
- Curious Cat, Adventurous Mouse, Magical Unicorn
- Clever Fox, Gentle Giant

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔒 Security & Privacy

- **API Keys**: Never commit API keys to version control
- **User Data**: No personal data is stored or logged
- **Content Safety**: AI prompts ensure age-appropriate, non-violent content
- **HTTPS**: Always use HTTPS in production

## 🧪 Testing

```bash
# Run linting
npm run lint

# Type checking
npm run type-check

# Build for production
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
- Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- OpenAI for providing the AI and TTS APIs
- Next.js team for the amazing framework
- TailwindCSS for the utility-first CSS framework
- All contributors and users of this project

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) page
2. Create a new issue with detailed information
3. Contact: support@storytime.ai

---

**Made with ❤️ for families around the world**

*Every story is a new adventure waiting to be discovered.*
