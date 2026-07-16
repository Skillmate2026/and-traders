"use client";
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    title: "Global Agro Exports",
    subtitle: "Sustainable Global Logistics",
    description: "Sourcing and delivering high-quality onions, potatoes, and garlic worldwide with unmatched freshness standards.",
    image: "/about1.png",
  },
  {
    title: "Premium Products",
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

// Variants for the sliding animation
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

// Variants for text staggering
const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function HeroSlider() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  // We wrap the index so it loops endlessly
  const imageIndex = Math.abs(page % slides.length);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setPage(page + newDirection);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 7000); // Slightly longer for a more relaxed, premium pace
    return () => clearInterval(timer);
  }, [page]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#0a2e1f]">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.8 },
          }}
          className="absolute inset-0"
        >
          {/* Background Image Container with slow continuous zoom */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[imageIndex].image})` }}
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 10, ease: "linear" }}
          />
          
          {/* Moody Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content Wrapper */}
          <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 sm:px-8 pt-20">
            <motion.div 
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.2, delayChildren: 0.4 }}
              className="flex w-full max-w-5xl flex-col items-center text-center space-y-6 sm:space-y-8"
            >
              
              {/* Premium Subtitle Badge */}
              <motion.div variants={textVariants} className="inline-flex items-center justify-center gap-4">
                <span className="h-[1px] w-8 sm:w-12 bg-[#d4af37]"></span>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
                  {slides[imageIndex].subtitle}
                </span>
                <span className="h-[1px] w-8 sm:w-12 bg-[#d4af37]"></span>
              </motion.div>

              {/* Display Title */}
              <motion.h1 variants={textVariants} className="text-4xl sm:text-6xl md:text-8xl font-serif leading-[1.1] text-[#f9f8f6]">
                {slides[imageIndex].title}
              </motion.h1>

              {/* Descriptive Text */}
              <motion.p variants={textVariants} className="max-w-2xl text-sm sm:text-lg text-neutral-300 font-light leading-relaxed">
                {slides[imageIndex].description}
              </motion.p>

              {/* Call-To-Action Buttons */}
              <motion.div variants={textVariants} className="flex w-full flex-col sm:flex-row justify-center items-center gap-4 pt-8">
                <Link 
                  href="/our-products" 
                  className="w-full sm:w-auto flex items-center justify-center rounded-sm bg-[#d4af37] px-10 py-4 text-xs sm:text-sm uppercase tracking-widest font-medium text-[#0a2e1f] transition-colors duration-500 hover:bg-white"
                >
                  Explore Products
                </Link>
                <Link 
                  href="/contact" 
                  className="w-full sm:w-auto flex items-center justify-center rounded-sm border border-white/30 bg-transparent px-10 py-4 text-xs sm:text-sm uppercase tracking-widest font-medium text-white transition-colors duration-500 hover:bg-white hover:text-[#0a2e1f]"
                >
                  Inquire Now
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Elegant Side Controls */}
      <button 
        onClick={() => paginate(-1)} 
        className="absolute left-8 top-1/2 z-30 hidden -translate-y-1/2 p-4 text-white/50 transition-all duration-300 hover:text-white md:block group"
      >
        <ChevronLeft size={40} strokeWidth={1} className="group-hover:-translate-x-2 transition-transform duration-300" />
      </button>
      <button 
        onClick={() => paginate(1)} 
        className="absolute right-8 top-1/2 z-30 hidden -translate-y-1/2 p-4 text-white/50 transition-all duration-300 hover:text-white md:block group"
      >
        <ChevronRight size={40} strokeWidth={1} className="group-hover:translate-x-2 transition-transform duration-300" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 z-30 hidden sm:flex -translate-x-1/2 items-center space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > imageIndex ? 1 : -1);
              setPage(index);
            }}
            className="relative h-1 w-16 overflow-hidden rounded-full bg-white/20"
          >
            {index === imageIndex && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute inset-0 bg-[#d4af37]"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}