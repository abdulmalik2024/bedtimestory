export function Footer() {
  return (
    <footer className="bg-[#0a0a0a]/80 backdrop-blur-sm border-t border-[#2a2a2a] mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">🌙</span>
              </div>
              <h3 className="text-xl font-normal text-[#f8fafc]">
                Story Time Magic
              </h3>
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed max-w-md">
              Creating magical bedtime experiences with AI-powered stories, beautiful illustrations, and soothing narration for children of all ages.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium text-[#f1f5f9] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#94a3b8] hover:text-[#f1f5f9] transition-colors duration-200 text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-[#94a3b8] hover:text-[#f1f5f9] transition-colors duration-200 text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-[#94a3b8] hover:text-[#f1f5f9] transition-colors duration-200 text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-[#94a3b8] hover:text-[#f1f5f9] transition-colors duration-200 text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium text-[#f1f5f9] mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-[#94a3b8] text-sm">
                <span>📧</span>
                <span>hello@storytimemagic.app</span>
              </li>
              <li className="flex items-center space-x-2 text-[#94a3b8] text-sm">
                <span>🌐</span>
                <span>www.storytimemagic.app</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-[#2a2a2a] mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#94a3b8] text-sm">
              © 2024 Story Time Magic. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-[#94a3b8] text-sm">Made with ❤️ for children</span>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#2563eb] rounded-full"></span>
                <span className="text-[#94a3b8] text-sm">AI Powered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 