export function Footer() {
  return (
    <footer className="bg-night-800 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-story-300 mb-4">StoryTime</h3>
            <p className="text-night-300 mb-4 max-w-md">
              Creating magical bedtime stories for families using AI technology. 
              Every story is crafted to be age-appropriate, engaging, and meaningful.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-night-300 hover:text-story-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-night-300 hover:text-story-300 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-story-300 mb-4">Features</h4>
            <ul className="space-y-2 text-night-300">
              <li>AI Story Generation</li>
              <li>Age-Appropriate Content</li>
              <li>Text-to-Speech Audio</li>
              <li>Customizable Stories</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-story-300 mb-4">Contact</h4>
            <ul className="space-y-2 text-night-300">
              <li>support@storytime.ai</li>
              <li>Feedback</li>
              <li>Bug Reports</li>
              <li>Feature Requests</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-night-700 mt-8 pt-8 text-center text-night-400">
          <p>&copy; 2024 StoryTime. All rights reserved. Made with ❤️ for families.</p>
        </div>
      </div>
    </footer>
  )
} 