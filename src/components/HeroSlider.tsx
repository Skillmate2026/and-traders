"use client";
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const slides = [
  {
    title: "Global Agro Exports",
    subtitle: "Sustainable Global Logistics",
    description: "Sourcing and delivering high-quality onions, potatoes, and garlic worldwide with unmatched freshness standards.",
    image: "/about1.png",
  },
  {
    title: "Premium Quality Products",
    subtitle: "Direct From Farm To Port",
    description: "Connecting local harvest farms directly to global markets. High-grade coconuts and wholesale farm essentials.",
    image: "/hero2.png",
  },
  {
    title: "Trusted Trade Network",
    subtitle: "Dependable Supply Chains",
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
    <div className="relative min-h-dvh w-full overflow-hidden bg-neutral-950 font-sans">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Background Image Container with Cinematic Zoom */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transform: index === current ? 'scale(1)' : 'scale(1.08)',
              transition: 'transform 7000ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          />
          
          {/* Premium Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-neutral-950/40 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />

          {/* Content Wrapper */}
          <div className="relative z-20 flex min-h-dvh flex-col items-center justify-center px-4 sm:px-8 pt-32 pb-28">
            <div className="flex w-full max-w-4xl flex-col items-center text-center space-y-5 sm:space-y-8">
              
              {/* Premium Subtitle Badge */}
              <div className="inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                <span className="h-[2px] w-4 sm:w-6 bg-brand-gold rounded-full"></span>
                <span className="text-[9px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-brand-gold drop-shadow-sm">
                  {slide.subtitle}
                </span>
                <span className="h-[2px] w-4 sm:w-6 bg-brand-gold rounded-full"></span>
              </div>

              {/* Display Title */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black leading-[1.1] tracking-tight text-white drop-shadow-2xl">
                {slide.title}
              </h1>

              {/* Descriptive Text */}
              <p className="max-w-2xl text-sm sm:text-lg md:text-xl text-neutral-300 font-light leading-relaxed drop-shadow-md px-2 sm:px-0">
                {slide.description}
              </p>

              {/* Call-To-Action Buttons */}
              <div className="flex w-full flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 pt-2 sm:pt-4 px-4 sm:px-0">
                <Link 
                  href="/products" 
                  className="w-full sm:w-auto flex items-center justify-center rounded-full bg-brand-green px-8 py-3.5 sm:py-4 text-sm font-bold tracking-wide text-white shadow-[0_0_20px_rgba(var(--brand-green-rgb),0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(var(--brand-green-rgb),0.5)] hover:bg-brand-gold sm:text-base"
                >
                  Explore Products
                </Link>
                <Link 
                  href="/contact" 
                  className="w-full sm:w-auto flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3.5 sm:py-4 text-sm font-bold tracking-wide text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-brand-green hover:shadow-xl sm:text-base"
                >
                  Inquire Now
                </Link>
              </div>

            </div>
          </div>
        </div>
      ))}

      {/* Desktop Side Controls */}
      <button 
        onClick={prevSlide} 
        className="group absolute left-8 top-1/2 z-30 hidden -translate-y-1/2 rounded-full border border-white/10 bg-black/20 p-4 text-white backdrop-blur-md transition-all duration-300 hover:bg-brand-green hover:border-brand-green hover:shadow-[0_0_20px_rgba(var(--brand-green-rgb),0.4)] md:block"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="transition-transform group-hover:-translate-x-0.5" />
      </button>
      <button 
        onClick={nextSlide} 
        className="group absolute right-8 top-1/2 z-30 hidden -translate-y-1/2 rounded-full border border-white/10 bg-black/20 p-4 text-white backdrop-blur-md transition-all duration-300 hover:bg-brand-green hover:border-brand-green hover:shadow-[0_0_20px_rgba(var(--brand-green-rgb),0.4)] md:block"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="transition-transform group-hover:translate-x-0.5" />
      </button>

      {/* Slide Indicators - ADDED: hidden sm:flex to hide on mobile */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 z-30 hidden sm:flex -translate-x-1/2 items-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-500 ease-out ${
              index === current 
                ? "w-10 bg-brand-gold shadow-[0_0_12px_rgba(187,148,57,0.8)]" 
                : "w-2.5 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}