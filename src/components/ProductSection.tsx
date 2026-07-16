'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const products = [
  {
    name: "Export-Grade Onions",
    desc: "Carefully sorted and packed to retain natural freshness, aroma, and flavor. Meeting strict global sizing standards.",
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&q=80&w=800",
    slug: "onion", 
  },
  {
    name: "Premium Garlic",
    desc: "Handpicked from fertile farms, packed with care to retain rich essential oils and authentic pungent flavor.",
    image: "/Garlic.avif",
    slug: "garlic", 
  },
  {
    name: "Farm-Fresh Potatoes",
    desc: "Graded for consistency in size and quality. Ideal for bulk international culinary and wholesale processing needs.",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=800",
    slug: "potato", 
  },
  {
    name: "High-Yield Coconuts",
    desc: "Sourced from premier coastal belts. Known for thick meat and rich water content, perfect for retail and extraction.",
    image: "/Coconut.jpeg",
    slug: "coconut", 
  }
];

export default function ProductSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section id="products" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8"
        >
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[#d4af37]"></span>
              <span className="text-[#d4af37] font-semibold tracking-[0.25em] uppercase text-xs">Our Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0a2e1f] leading-tight">
              Premium Commodity <br className="hidden md:block"/>
              <span className="italic font-light text-[#d4af37]">Global Supply.</span>
            </h2>
          </div>
          
          <Link 
            href="/our-products" 
            className="hidden md:inline-flex items-center gap-3 text-sm uppercase tracking-widest font-medium text-[#0a2e1f] hover:text-[#d4af37] transition-colors duration-300 group pb-2 border-b border-[#0a2e1f] hover:border-[#d4af37]"
          >
            Explore Full Catalog
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Product Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16"
        >
          {products.map((product, idx) => (
            <motion.div key={idx} variants={itemVariants} className="group flex flex-col h-full">
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-neutral-100 mb-6">
                <div className="absolute inset-0 bg-[#0a2e1f]/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </div>
              
              {/* Content */}
              <div className="flex flex-col flex-grow pr-8">
                <h3 className="text-2xl font-serif text-[#0a2e1f] mb-3">{product.name}</h3>
                <p className="text-neutral-500 text-sm md:text-base font-light leading-relaxed mb-6 flex-grow">
                  {product.desc}
                </p>
                <Link 
                  href={`/our-products/${product.slug}`} 
                  className="inline-flex items-center text-[#d4af37] font-semibold uppercase tracking-widest text-xs group/btn hover:text-[#0a2e1f] transition-colors w-fit"
                >
                  View Specifications
                  <ArrowRight className="w-4 h-4 ml-3 transform group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile CTA */}
        <div className="mt-16 flex justify-center md:hidden">
          <Link 
            href="/our-products" 
            className="inline-flex items-center justify-center gap-4 bg-[#0a2e1f] text-[#f9f8f6] px-10 py-5 w-full text-sm uppercase tracking-widest font-medium hover:bg-[#d4af37] hover:text-[#0a2e1f] transition-all duration-500 rounded-sm group"
          >
            Explore Full Catalog
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
          </Link>
        </div>

      </div>
    </section>
  );
}