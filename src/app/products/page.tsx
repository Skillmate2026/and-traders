"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

const products = [
  // Updated image to /about2.png
  { id: "onion", name: "Export-Grade Onions", desc: "Premium red and pink onions sourced directly from the finest farms, sorted for consistent size and extended shelf life.", img: "/about2.png" },
  { id: "potato", name: "Farm-Fresh Potatoes", desc: "High-yield, disease-free potatoes perfect for consumption and industrial processing, available in bulk quantities.", img: "/hero2.png" }, 
  { id: "garlic", name: "Premium Garlic", desc: "Pungent, fully matured white garlic bulbs with tight skins, graded meticulously for international markets.", img: "/Garlic.avif" },
  // Updated image to /Coconut.jpeg
  { id: "coconut", name: "High-Yield Coconuts", desc: "Fresh, semi-husked coconuts rich in water and meat, handpicked from the coastal belts for maximum freshness.", img: "/Coconut.jpeg" } 
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Header - Updated with background image */}
        <section className="relative py-24 lg:py-32 text-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('/about1.png')] bg-cover bg-center" />
          
          {/* Deep Dark Overlay for Premium Look & Text Readability */}
          <div className="absolute inset-0 bg-neutral-950/80 bg-gradient-to-b from-brand-green/20 to-neutral-950/90" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-sm mb-4 block drop-shadow-md">
              Our Catalog
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-lg">
              Global Agricultural <span className="text-brand-green">Commodities</span>
            </h1>
            <p className="mt-6 text-lg text-neutral-300 font-light max-w-2xl mx-auto">
              Explore our range of premium export-quality products, rigorously graded and packed to meet international standards.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {products.map((product) => (
              // Reduced height for a more uniform, premium card size (h-[380px] lg:h-[420px])
              // Added subtle hover:-translate-y-2 for an elegant lift effect
              <div 
                key={product.id} 
                className="group relative rounded-3xl overflow-hidden h-[380px] lg:h-[420px] shadow-lg hover:shadow-2xl flex flex-col justify-end border border-neutral-200 transition-all duration-500 hover:-translate-y-2 bg-neutral-900"
              >
                
                {/* Background Image with Zoom Effect */}
                <div className="absolute inset-0">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                  {/* Premium Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                {/* Content - Adjusted padding to match the new smaller size */}
                <div className="relative z-20 p-6 lg:p-10 transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3 drop-shadow-md">
                    {product.name}
                  </h2>
                  <p className="text-sm lg:text-base text-neutral-300 font-light leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 hidden sm:block">
                    {product.desc}
                  </p>
                  
                  <Link 
                    href={`/products/${product.id}`}
                    className="inline-flex items-center gap-3 bg-brand-gold text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-white hover:text-brand-green transition-colors duration-300 shadow-lg"
                  >
                    View Details
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}