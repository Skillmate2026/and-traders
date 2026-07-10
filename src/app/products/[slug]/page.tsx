"use client";
import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '../../../components/Navbar'; // Adjust paths based on your folder structure
import Footer from '../../../components/Footer';
import { Package, Scale, MapPin, Calendar, ArrowRight, ArrowLeft, ShieldCheck } from 'lucide-react';

// Centralized Data
const productData: Record<string, any> = {
  onion: {
    name: "Export-Grade Onions",
    subtitle: "Premium Red & Pink Onions",
    desc: "Sourced from the most fertile regions, our onions are known for their pungent aroma, uniform size, and crisp texture. Rigorously sorted to remove defects, ensuring high shelf-life for long-distance sea freight.",
    img: "/about2.png", 
    specs: [
      { icon: <Scale size={24} />, title: "Size & Grading", val: "40mm to 60mm+" },
      { icon: <Package size={24} />, title: "Packaging", val: "5kg - 50kg Mesh/Jute Bags" },
      { icon: <MapPin size={24} />, title: "Origin", val: "Maharashtra / Karnataka, India" },
      { icon: <Calendar size={24} />, title: "Shelf Life", val: "3 to 4 Months (in ideal storage)" },
    ]
  },
  potato: {
    name: "Farm-Fresh Potatoes",
    subtitle: "High-Yield Processing & Table Potatoes",
    desc: "Our potatoes are harvested at peak maturity, offering excellent texture and taste. Available in multiple varieties suitable for direct consumption or industrial processing (chips/fries).",
    img: "/hero2.png", 
    specs: [
      { icon: <Scale size={24} />, title: "Size & Grading", val: "50g to 150g+" },
      { icon: <Package size={24} />, title: "Packaging", val: "10kg - 50kg Mesh Bags" },
      { icon: <MapPin size={24} />, title: "Origin", val: "Gujarat / UP, India" },
      { icon: <Calendar size={24} />, title: "Shelf Life", val: "Long-lasting in cold storage" },
    ]
  },
  garlic: {
    name: "Premium Garlic",
    subtitle: "Pungent White Garlic Bulbs",
    desc: "Matured white garlic with tight, unbroken skins and a strong, spicy flavor profile. Carefully cured and dried to prevent sprouting during international transit.",
    img: "/Garlic.avif",
    specs: [
      { icon: <Scale size={24} />, title: "Size & Grading", val: "40mm to 55mm+" },
      { icon: <Package size={24} />, title: "Packaging", val: "10kg Carton / 20kg Mesh Bags" },
      { icon: <MapPin size={24} />, title: "Origin", val: "Madhya Pradesh / Rajasthan, India" },
      { icon: <Calendar size={24} />, title: "Shelf Life", val: "8 to 10 Months" },
    ]
  },
  coconut: {
    name: "High-Yield Coconuts",
    subtitle: "Fresh Semi-Husked Coconuts",
    desc: "Plucked from premium coastal belts, our semi-husked coconuts are heavy, water-filled, and feature thick, sweet meat. Perfect for culinary and industrial coconut derivatives.",
    img: "/Coconut.jpeg", 
    specs: [
      { icon: <Scale size={24} />, title: "Weight", val: "500g to 700g+ per piece" },
      { icon: <Package size={24} />, title: "Packaging", val: "25 Pcs per PP Bag" },
      { icon: <MapPin size={24} />, title: "Origin", val: "Tamil Nadu / Karnataka, India" },
      { icon: <Calendar size={24} />, title: "Shelf Life", val: "50 to 60 Days" },
    ]
  }
};

export default function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const product = productData[resolvedParams.slug];

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 font-sans">
      <Navbar />

      <main className="flex-grow pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb / Back Navigation */}
          <div className="mb-8">
            <Link 
              href="/products" 
              className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 hover:text-brand-green transition-colors duration-300 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Catalog
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left Side: Editorial Sticky Image (Takes 5 columns) */}
            <div className="lg:col-span-5 sticky top-32">
              <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgb(0,0,0,0.1)] border border-neutral-200/50 h-[500px] lg:h-[750px] group bg-white">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Subtle internal shadow for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30 pointer-events-none" />
                
                {/* Premium Floating Badge */}
                <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-xl px-5 py-2.5 rounded-full flex items-center gap-2.5 shadow-xl border border-white/20 text-brand-green font-bold text-xs uppercase tracking-widest">
                  <ShieldCheck size={18} className="text-brand-gold" /> Export Quality
                </div>
              </div>
            </div>

            {/* Right Side: Product Information (Takes 7 columns) */}
            <div className="lg:col-span-7 space-y-16 lg:pt-8">
              
              {/* Header Info */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-brand-gold"></span>
                  <span className="text-brand-gold font-bold tracking-[0.25em] uppercase text-xs">
                    {product.subtitle}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 leading-[1.1] tracking-tight">
                  {product.name}
                </h1>
                <p className="text-lg md:text-xl text-neutral-500 font-light leading-relaxed max-w-2xl">
                  {product.desc}
                </p>
              </div>

              {/* Specifications Grid */}
              <div className="space-y-8">
                <h3 className="text-2xl font-extrabold text-neutral-900 tracking-tight">Technical Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {product.specs.map((spec: any, idx: number) => (
                    <div 
                      key={idx} 
                      className="group relative bg-white p-8 rounded-3xl border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300"
                    >
                      {/* Hover Top Border Gradient */}
                      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-green to-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl" />
                      
                      <div className="flex flex-col gap-4">
                        <div className="w-12 h-12 bg-neutral-50 rounded-2xl flex items-center justify-center text-brand-green group-hover:scale-110 group-hover:bg-brand-green/10 transition-all duration-300">
                          {spec.icon}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-neutral-900 uppercase tracking-wide mb-1.5">{spec.title}</p>
                          <p className="text-base text-neutral-500 font-light leading-relaxed">{spec.val}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Immersive CTA Block */}
              <div className="relative overflow-hidden rounded-[2.5rem] bg-neutral-950 px-8 py-14 sm:px-12 sm:py-16 shadow-2xl mt-8 border border-neutral-800">
                {/* Ambient Blurred Background Lights */}
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-green/20 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-gold/15 blur-[100px] rounded-full pointer-events-none" />
                
                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-10">
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">Ready for bulk ordering?</h3>
                    <p className="text-neutral-400 font-light text-lg">
                      Secure customized FOB/CIF pricing and global shipping timelines for our {product.name}.
                    </p>
                  </div>
                  
                  <div className="flex-shrink-0 w-full sm:w-auto">
                    <Link 
                      href="/contact" 
                      className="flex items-center justify-center gap-3 bg-white text-neutral-950 w-full sm:w-auto px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-green hover:text-white transition-all duration-300 group shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(var(--brand-green-rgb),0.4)]"
                    >
                      Request a Quote
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
