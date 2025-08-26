# Story Time Magic 🌙

A magical AI-powered bedtime story generator that creates personalized stories with beautiful illustrations and soothing audio narration for children of all ages.

**🌐 Live Demo:** [storytimemagic.app](https://storytimemagic.app)

## ✨ Features

### 🎭 **AI-Powered Story Generation**
- **Personalized Stories:** Tailored to your child's age, interests, and learning goals
- **Multiple Languages:** Support for English, French, German, Spanish, Japanese, Arabic, and Urdu
- **Story Types:** Adventure, Fantasy, Space, Animals, Nature, Friendship, Courage, Kindness, Learning, Magic
- **Character Selection:** Brave Knights, Wise Wizards, Friendly Dragons, and more
- **Custom Endings:** Happy endings, learning moments, friendship themes, and discovery

### 🎨 **AI-Generated Illustrations**
- **DALL-E 3 Integration:** Beautiful, age-appropriate artwork for each story
- **Story-Based Images:** Illustrations that match the story content and themes
- **Age-Appropriate Styles:** Visual styles tailored to different age groups
- **No Text on Images:** Pure visual storytelling without written elements

### 🎧 **Audio Narration**
- **Multiple TTS Voices:** Choose from 5 different voices including Fable (default storyteller)
- **High-Quality Audio:** OpenAI's advanced text-to-speech technology
- **Perfect for Bedtime:** Soothing voices designed for evening listening
- **Multi-Language Support:** Audio narration in the selected story language

### 🌙 **Bedtime Perfect Design**
- **Deep Night Sky Theme:** Cozy, magical atmosphere perfect for bedtime
- **High Contrast Colors:** Excellent readability with proper accessibility
- **Responsive Design:** Works perfectly on all devices
- **Glass Morphism:** Modern, elegant interface with backdrop blur effects

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- OpenAI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abdulmalik2024/bedtimestory.git
   cd bedtimestory
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
   OPENAI_API_KEY=your_openai_api_key_here
   TTS_VOICE=fable
   AI_MODEL=gpt-4o-mini
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 How to Use

1. **Enter Child's Age:** Specify the age (1-17) for age-appropriate content
2. **Choose Language:** Select from 7 supported languages
3. **Customize Story:** Pick story type, character, ending, and voice
4. **Generate:** Click "Generate Story" and watch the magic happen
5. **Enjoy:** Read, listen, and admire the beautiful illustrations

## 🔧 Technology Stack

- **Frontend:** Next.js 14, React 18, TypeScript
- **Styling:** TailwindCSS with custom dark theme
- **AI Integration:** OpenAI GPT-4o-mini, DALL-E 3, Text-to-Speech
- **Forms:** React Hook Form with validation
- **Deployment:** Railway.app with GitHub integration

## 🌍 Supported Languages

| Language | Code | Flag | Status |
|----------|------|------|--------|
| English | `en` | 🇺🇸 | ✅ Default |
| French | `fr` | 🇫🇷 | ✅ Supported |
| German | `de` | 🇩🇪 | ✅ Supported |
| Spanish | `es` | 🇪🇸 | ✅ Supported |
| Japanese | `ja` | 🇯🇵 | ✅ Supported |
| Arabic | `ar` | 🇸🇦 | ✅ Supported |
| Urdu | `ur` | 🇵🇰 | ✅ Supported |

## 🎭 Available TTS Voices

| Voice | Description | Best For |
|-------|-------------|----------|
| **Fable** | Perfect for storytelling | ✅ **Default - Recommended** |
| Echo | Warm & friendly for children | Young children |
| Alloy | Neutral & balanced | General use |
| Onyx | Deep & dramatic for adventures | Action stories |
| Shimmer | Soft & gentle for lullabies | Bedtime stories |

## 💰 Cost Estimation

**Approximate cost per story:**
- **Story Generation (GPT-4o-mini):** $0.001-0.003
- **Image Generation (DALL-E 3):** $0.040
- **Audio Narration (TTS):** $0.015
- **Total per story:** ~$0.056-0.058

*Prices based on OpenAI's current pricing (subject to change)*

## 🗄️ Database Integration (Planned)

Future versions will include:
- **User Accounts:** Save and manage favorite stories
- **Story Library:** Access to previously generated stories
- **Sharing:** Share stories with family and friends
- **Offline Access:** Download stories for offline reading

## 🚀 Deployment

### Railway Deployment
1. Connect your GitHub repository to Railway
2. Set environment variables in Railway dashboard
3. Deploy automatically on every push to main branch

### Environment Variables
```env
OPENAI_API_KEY=your_openai_api_key_here
TTS_VOICE=fable
AI_MODEL=gpt-4o-mini
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenAI** for providing the AI models and APIs
- **Next.js Team** for the amazing framework
- **TailwindCSS** for the utility-first CSS framework
- **Lucide** for the beautiful icons

## 📞 Contact

- **Website:** [storytimemagic.app](https://storytimemagic.app)
- **Email:** hello@storytimemagic.app
- **GitHub:** [@abdulmalik2024](https://github.com/abdulmalik2024)

---

**Made with ❤️ for children everywhere** 🌟

*Story Time Magic - Where every bedtime becomes an adventure*
