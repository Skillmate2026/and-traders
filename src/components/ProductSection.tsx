import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const products = [
  {
    name: "Export-Grade Onions",
    desc: "Carefully sorted and packed to retain natural freshness, aroma, and flavor. Meeting strict global sizing standards.",
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Premium Garlic",
    desc: "Handpicked from fertile farms, packed with care to retain rich essential oils and authentic pungent flavor.",
    image: "/garlic.avif",
  },
  {
    name: "Farm-Fresh Potatoes",
    desc: "Graded for consistency in size and quality. Ideal for bulk international culinary and wholesale processing needs.",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "High-Yield Coconuts",
    desc: "Sourced from premier coastal belts. Known for thick meat and rich water content, perfect for retail and extraction.",
    image: "/Coconut.jpeg",
  }
];

export default function ProductSection() {
  return (
    <section id="products" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm">Our Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900">
            Premium Commodity <span className="text-brand-green">Supply</span>
          </h2>
          <p className="text-lg text-neutral-600 font-light">
            We supply a diverse range of top-tier agricultural products, meticulously processed and packaged for international transit.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <div key={idx} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-neutral-100 flex flex-col h-full">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-brand-green/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
              
              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{product.name}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-6 flex-grow">
                  {product.desc}
                </p>
                <button className="flex items-center text-brand-green font-bold text-sm group/btn hover:text-brand-gold transition-colors w-fit">
                  Inquire Bulk Order
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}