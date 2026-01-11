import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-950 py-24 lg:py-32">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-lighten animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-sm font-medium mb-8">
          AI-Powered Digital Growth for Traditional Artisans
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
          Empowering Artisans. <br/>
          Preserving Culture. <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Scaling with AI.</span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
          ArtisanVerse is a modern AI‑driven platform that helps traditional artisans transform handcrafted products into market‑ready digital listings using intelligent content creation, image enhancement, and fair pricing tools.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#tech-stack"
            className="cursor-pointer inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-lg text-white bg-amber-600 hover:bg-amber-700 transition-all hover:scale-105"
          >
            Modern Tech Stack
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </a>
          <a 
            href="#hackathon"
            className="cursor-pointer inline-flex items-center justify-center px-8 py-4 border border-slate-300 dark:border-slate-700 text-lg font-medium rounded-full text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
          >
            Hackathon Tracks
            <BookOpen className="ml-2 -mr-1 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
