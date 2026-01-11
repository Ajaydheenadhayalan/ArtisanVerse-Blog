import { ArrowRight, Brain, Globe, Heart, Image as ImageIcon, Layout, Mic, ShieldCheck, Tag, Zap, Smartphone, Server, Container, Database, Cloud, Code, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SectionHeader from '../components/SectionHeader';
import FeatureCard from '../components/FeatureCard';

const Home = () => {
  return (
    <div className="bg-white dark:bg-slate-950">
      <HeroSection />

      {/* 1. WHY ARTISANVERSE EXISTS */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-amber-600 dark:text-amber-500 font-bold tracking-wide uppercase text-sm mb-3">
                The Digital Gap No One Talks About
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Millions of artisans create extraordinary products, yet most are excluded from the digital economy.
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                The problem is not talent — it is access.
              </p>
              <ul className="space-y-4">
                {[
                  "Struggle to explain their product value online",
                  "Depend on middlemen for pricing and visibility",
                  "Lack access to digital marketing tools",
                  "Face language and literacy barriers"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700 dark:text-slate-300">
                    <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mr-3 text-red-500 dark:text-red-400">
                      <Zap size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1657225028961-d583a578b682?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0" 
                alt="Artisan at work" 
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR APPROACH */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeader 
            title="Technology That Works For Artisans, Not Against Them" 
            subtitle="ArtisanVerse is built on one simple idea: Artisans should focus on craftsmanship. Technology should handle everything else."
          />
        </div>
      </section>

      {/* 3. CORE PLATFORM CAPABILITIES */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Core Platform Capabilities" centered={true} />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <FeatureCard 
              icon={Layout}
              title="Intelligent Product Content" 
              description="AI-generated titles and descriptions optimized for discovery and authentic storytelling."
              benefits={[
                "AI‑generated titles optimized for online discovery",
                "Clear, simple descriptions written for real buyers",
                "Cultural storytelling that highlights heritage"
              ]}
            />
            <FeatureCard 
              icon={ImageIcon}
              title="Smart Image Enhancement" 
              description="Professional-quality product image generation and background cleanup."
              benefits={[
                "Professional‑quality product image generation",
                "Background cleanup and visual consistency",
                "AI‑guided improvements for marketplace standards"
              ]}
            />
            <FeatureCard 
              icon={Tag}
              title="Fair Pricing Intelligence" 
              description="Pricing suggestions based on effort, materials, and demand preventing undervaluation."
              benefits={[
                "Pricing suggestions based on effort & materials",
                "Prevents undervaluation of handcrafted work",
                "Transparent and explainable logic"
              ]}
            />
            <FeatureCard 
              icon={Globe}
              title="Language & Accessibility First" 
              description="Multi-language content generation and voice-ready outputs for low literacy users."
              benefits={[
                "Multi‑language content generation",
                "Voice‑ready outputs for narration",
                "Designed for users with low digital literacy"
              ]}
            />
          </div>
        </div>
      </section>

      {/* 4. MODERN TECH STACK */}
      <section id="tech-stack" className="py-24 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Modern Tech Stack" 
            subtitle="We are building a comprehensive ecosystem including a Flutter Android app and a robust microservices backend."
          />

          <div className="flex flex-wrap justify-center gap-8 text-center">
            {[
              { name: "Flutter", icon: "flutter" },
              { name: "Dart", icon: "dart" },
              { name: "Spring Boot", icon: "springboot" },
              { name: "FastAPI", icon: "fastapi" },
              { name: "Docker", icon: "docker" },
            ].map((tech, i) => (
              <div key={i} className="w-40 p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col items-center hover:border-amber-500 transition-colors group">
                <img 
                  src={`https://cdn.simpleicons.org/${tech.icon}`} 
                  alt={tech.name}
                  className="w-10 h-10 mb-4 dark:invert group-hover:scale-110 transition-transform" 
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="hidden w-10 h-10 mb-4 bg-slate-100 rounded-full flex items-center justify-center">
                   <Code size={20} className="text-slate-500" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">{tech.name}</h4>
              </div>
            ))}
          </div>
          
           <div className="mt-8 text-center bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl max-w-2xl mx-auto border border-slate-100 dark:border-slate-800">
              <h4 className="font-bold text-slate-800 dark:text-white mb-2 flex items-center justify-center gap-2">
                 <Container size={20} className="text-blue-500" /> Architecture Highlights
              </h4>
             <p className="text-slate-600 dark:text-slate-400 text-sm">
                Microservices communication via <strong>HTTP & Docker DNS</strong>. 
                Containerized deployment for consistency across environments.
             </p>
           </div>
        </div>
      </section>

      {/* 5. HACKATHON TRACK INTEGRATION */}
      <section id="hackathon" className="py-24 bg-amber-600 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hackathon Track Integration</h2>
            <p className="text-amber-100 text-lg">Powering ArtisanVerse with best-in-class developer tools.</p>
           </div>

           <div className="grid md:grid-cols-3 gap-6">
             <TrackCard 
                title="OpenRouter" 
                desc="Unified interface for top-tier LLMs." 
                icon="openrouter" 
                fallbackIcon={Bot}
             />

             <TrackCard 
                title="Google Gemini" 
                desc="Visual intelligence for product analysis." 
                icon="google" 
             />
             <TrackCard 
                title="ElevenLabs" 
                desc="Voice synthesis for accessibility." 
                icon="elevenlabs" // Likely generic, will fallback
                fallbackIcon={Mic}
             />
             <TrackCard 
                title="Cloudflare" 
                desc="Performance, security & caching." 
                icon="cloudflare" 
             />
             <TrackCard 
                title="Requestly" 
                desc="API testing & mocking workflow." 
                icon="requestly" // Check availability
                fallbackIcon={Globe}
             />
             <TrackCard 
                title="Insforge" 
                desc="Developer acceleration & deployment." 
                icon="insforge" // Not available
                fallbackIcon={Zap}
             />
           </div>
        </div>
      </section>

      {/* 6. IMPACT & VISION */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Our Vision" 
            subtitle="A World Where Craftsmanship Thrives Digitally"
            centered={true}
          />
          
          <div className="grid md:grid-cols-2 gap-12 mt-12 bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 md:p-12">
            <div>
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Impact Beyond Technology</h3>
               <ul className="space-y-4">
                {[
                  "Fair income for artisans",
                  "Cultural preservation through storytelling",
                  "Digital inclusion for underserved communities",
                  "Ethical consumer engagement"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700 dark:text-slate-300">
                    <Heart size={18} className="mr-3 text-amber-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center">
               <blockquote className="text-xl font-medium text-slate-600 dark:text-slate-300 italic border-l-4 border-amber-600 pl-6 my-6">
                 "Technology should amplify culture — not erase it."
               </blockquote>
               <p className="text-slate-500 dark:text-slate-400">
                 We envision a future where every artisan owns their digital identity and reaches global audiences without losing their heritage.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL ACTION */}
      <section className="py-32 bg-slate-900 text-center px-4">
         <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
           Supporting Artisans is Supporting Heritage
         </h2>
         <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
           ArtisanVerse stands at the intersection of innovation, culture, and fairness.
         </p>
         <div className="flex justify-center space-x-8 text-white/50 text-sm font-medium tracking-widest uppercase">
            <span>Built for Artisans</span>
            <span>•</span>
            <span>Powered by AI</span>
            <span>•</span>
            <span>Driven by Purpose</span>
         </div>
      </section>
    </div>
  );
};

const TrackCard = ({ title, desc, icon, isColored = false, fallbackIcon: FallbackIcon }) => (
  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors flex items-center space-x-4">
     <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
        <img 
          src={isColored ? `https://cdn.simpleicons.org/${icon}` : `https://cdn.simpleicons.org/${icon}/white`} 
          alt={title}
          className="w-8 h-8" 
          onError={(e) => {
            e.target.onerror = null; 
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <div className="hidden">
           {FallbackIcon ? <FallbackIcon className="w-8 h-8 text-white" /> : <div className="w-8 h-8 bg-amber-500 rounded-full"></div>}
        </div>
     </div>
     <div>
       <h3 className="text-lg font-bold text-white">{title}</h3>
       <p className="text-amber-100 text-sm leading-snug">{desc}</p>
     </div>
  </div>
);

export default Home;
