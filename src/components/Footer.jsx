import { Github, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 dark:bg-slate-900 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
              ArtisanVerse
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Empowering Artisans with AI
            </p>
          </div>

          <div className="flex items-center space-x-6 text-sm text-slate-500 dark:text-slate-400">
            <span>Open Innovation</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
            <span>Hackathon Project</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
            <span>2025</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
