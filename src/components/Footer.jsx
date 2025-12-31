import { Sparkles, Mail, Linkedin, Twitter } from 'lucide-react';
const Footer = () => {
  return (
      <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">Cities App</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              The Next-Gen AI-Powered Social Economy Built for Every County, City, and Community.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button className="hover:text-white transition-colors">Features</button></li>
              <li><button className="hover:text-white transition-colors">Pricing</button></li>
              <li><button className="hover:text-white transition-colors">Security</button></li>
              <li><button className="hover:text-white transition-colors">Roadmap</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button className="hover:text-white transition-colors">About</button></li>
              <li><button className="hover:text-white transition-colors">Blog</button></li>
              <li><button className="hover:text-white transition-colors">Careers</button></li>
              <li><button className="hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button className="hover:text-white transition-colors">Privacy</button></li>
              <li><button className="hover:text-white transition-colors">Terms</button></li>
              <li><button className="hover:text-white transition-colors">Cookies</button></li>
              <li><button className="hover:text-white transition-colors">Compliance</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-6 md:mb-0">
              &copy; 2025 Cities App. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <button className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
