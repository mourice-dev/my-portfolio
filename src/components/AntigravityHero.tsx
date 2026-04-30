import React from 'react';
import ParticleBackground from './ParticleBackground';


const AntigravityHero: React.FC = () => {
  return (
    <main id="home" className="relative py-12 lg:py-16 overflow-hidden flex flex-col items-center justify-center">
      <ParticleBackground />
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center flex flex-col items-center">
        
        {/* Center Tag / Label */}
        <div className="flex items-center gap-2 mb-8 animate-fade-in-up bg-white/50 backdrop-blur-sm border border-gray-200 px-3.5 py-1.5 rounded-full" style={{ animationDelay: '200ms' }}>
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="font-medium text-[14px] text-gray-700">
            Available for new opportunities
          </span>
        </div>

        {/* Intro */}
        <p className="text-[18px] md:text-[20px] font-medium text-[#6e6e73] mb-4 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          Hi, I'm <span className="font-bold text-[#1a1a1c]">Maurice Nshuti</span>.
        </p>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl lg:text-[44px] font-medium tracking-tight text-[#1a1a1c] leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          Crafting digital experiences with precision
        </h1>
        
        <p className="text-[15px] md:text-[17px] text-[#6e6e73] max-w-2xl mx-auto mb-8 animate-fade-in-up leading-relaxed" style={{ animationDelay: '1100ms' }}>
          I am intensely passionate about turning complex problems into elegant, minimalist digital solutions. I thrive on continuous learning, building impactful products, and pushing the boundaries of what's possible on the web. Welcome to my personal space!
        </p>


      </div>
    </main>
  );
};

export default AntigravityHero;
