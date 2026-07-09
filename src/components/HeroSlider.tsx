"use client";
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: "Premium Global Agro Exports",
    subtitle: "SUSTAINABLE HARVESTS • GLOBAL LOGISTICS",
    description: "Sourcing and delivering high-quality onions, potatoes, and garlic worldwide with unmatched freshness standards.",
    image: "/about1.png",
  },
  {
    title: "Premium Quality Products",
    subtitle: "DIRECT FROM THE FARM TO THE PORT",
    description: "Connecting local harvest farms directly to global markets. High-grade coconuts and wholesale farm essentials.",
    image: "/hero2.png",
  },
  {
    title: "Trusted Trade Network",
    subtitle: "DEPENDABLE SUPPLY CHAINS",
    description: "Reliable international supply chain operations ensuring seamless import and export transitions across borders.",
    image: "/hero1.png",
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-neutral-950">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image Container */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transform: index === current ? 'scale(1)' : 'scale(1.05)',
              transition: 'transform 6000ms ease-out'
            }}
          />
          {/* Dark Overlay Gradient - Darker on mobile for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/70 to-neutral-950/40 sm:from-neutral-950/90 sm:via-neutral-950/60" />

          {/* CORE FIX: Flex Layout 
            Instead of absolute centering with hard padding, we use a flex column 
            that takes up the full height, pushes content down past the navbar, 
            and naturally centers the content within the remaining space above the dots.
          */}
          <div className="relative z-20 h-full flex flex-col justify-center pt-24 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            
            {/* Content Container */}
            <div className="w-full text-center space-y-6 sm:space-y-8">
              
              {/* Top Subtitle */}
              <div className="flex items-center justify-center gap-2 sm:gap-4 w-full px-2">
                <span className="h-[1px] flex-grow max-w-[2rem] sm:max-w-[3rem] bg-brand-gold"></span>
                <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.2em] sm:tracking-[0.3em] text-brand-gold uppercase text-center whitespace-nowrap">
                  {slide.subtitle}
                </span>
                <span className="h-[1px] flex-grow max-w-[2rem] sm:max-w-[3rem] bg-brand-gold"></span>
              </div>

              {/* Display Title */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.15] md:leading-[1.1] drop-shadow-lg px-2">
                {slide.title}
              </h1>

              {/* Descriptive Text */}
              <p className="text-sm sm:text-lg md:text-xl text-neutral-200 font-light leading-relaxed max-w-2xl mx-auto px-4 sm:px-0 drop-shadow-sm">
                {slide.description}
              </p>

              {/* Call-To-Action Buttons */}
              <div className="pt-2 sm:pt-6 flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto px-6 sm:px-0 mx-auto max-w-md sm:max-w-none">
                <a 
                  href="#products" 
                  className="w-full sm:w-auto bg-brand-green text-white font-semibold tracking-wide px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 shadow-xl hover:bg-brand-gold transform hover:-translate-y-0.5 text-center text-sm sm:text-base flex-shrink-0"
                >
                  Explore Products
                </a>
                <a 
                  href="#contact" 
                  className="w-full sm:w-auto border border-white/30 sm:border-white/20 bg-white/10 sm:bg-white/5 text-white font-semibold tracking-wide px-8 py-3.5 sm:py-4 rounded-full backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-brand-green transform hover:-translate-y-0.5 text-center text-sm sm:text-base flex-shrink-0"
                >
                  Inquire Now
                </a>
              </div>

            </div>
          </div>
        </div>
      ))}

      {/* Desktop Side Controls */}
      <button 
        onClick={prevSlide} 
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/20 hover:bg-brand-green border border-white/20 text-white backdrop-blur-md transition-all duration-300 group hidden md:block"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/20 hover:bg-brand-green border border-white/20 text-white backdrop-blur-md transition-all duration-300 group hidden md:block"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators - Safely anchored to the bottom */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-500 rounded-full ${
              index === current 
                ? "w-8 h-2 bg-brand-gold shadow-[0_0_10px_rgba(187,148,57,0.5)]" 
                : "w-2 h-2 bg-white/40 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}