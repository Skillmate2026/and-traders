"use client";
import React from 'react';
import Navbar from '../../components/Navbar'; // Adjust path if needed
import Footer from '../../components/Footer'; // Adjust path if needed
import { ShieldCheck, Globe, Leaf, TrendingUp, Target, Eye, Mail } from 'lucide-react';

const team = [
  {
    name: "Dhanush Salian",
    role: "Founder & CEO",
    image: "/Founder.avif",
    bio: "Driving the global vision of AND Traders. Dhanush is dedicated to bridging the gap between sustainable local agriculture and high-demand international markets, ensuring uncompromising quality at every step.",
  },
  {
    name: "Anand N Kalal", 
    role: "Co-Founder",
    image: "/Cofounder.jpeg",
    bio: "Overseeing our vast international logistics network. Ensuring that our supply chain remains seamless, efficient, and perfectly compliant with global trade standards from farm to port.",
  }
];

const values = [
  { icon: <ShieldCheck className="w-8 h-8 text-brand-gold" />, title: "Certified Quality", desc: "Rigorous grading and export-ready processing for every shipment." },
  { icon: <Globe className="w-8 h-8 text-brand-gold" />, title: "Global Network", desc: "Seamless logistics connecting local farms to international markets." },
  { icon: <Leaf className="w-8 h-8 text-brand-gold" />, title: "Sustainable Sourcing", desc: "Direct partnerships with trusted, eco-conscious local growers." },
  { icon: <TrendingUp className="w-8 h-8 text-brand-gold" />, title: "Reliable Supply", desc: "Consistent, dependable fulfillment for high-volume wholesale orders." },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar Component */}
      <Navbar />

      <main className="flex-grow pt-24 bg-neutral-50">
        
        {/* Page Header */}
        <section className="bg-neutral-950 py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/about1.png')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-neutral-950/40" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
              Discover Our Roots
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight">
              About <span className="text-brand-green">AND Traders</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-neutral-300 font-light">
              We don't just export commodities; we export trust, quality, and the rich agricultural heritage of our local farmers to the world.
            </p>
          </div>
        </section>

        {/* Our Story & Mission Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 leading-tight">
                    Bridging the Gap Between <span className="text-brand-green">Farms</span> and the <span className="text-brand-gold">World.</span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-neutral-600 font-light leading-relaxed text-lg">
                  <p>
                    AND Traders began with a simple but powerful idea: to ensure that the hard work of local farmers reaches global markets without compromising on quality or fairness. Based in Udupi with a network stretching across India, we have built a supply chain that prioritizes freshness, compliance, and reliability.
                  </p>
                  <p>
                    Our expertise lies in sourcing premium onions, garlic, potatoes, and coconuts directly from the growers. By eliminating unnecessary middlemen, we not only ensure better returns for farmers but also guarantee competitive pricing and unmatched quality for our international buyers.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                  <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-100">
                    <Target className="w-8 h-8 text-brand-green mb-4" />
                    <h4 className="text-xl font-bold text-neutral-900 mb-2">Our Mission</h4>
                    <p className="text-sm text-neutral-500">To provide seamless, high-quality agricultural exports while fostering sustainable and profitable relationships with our farming partners.</p>
                  </div>
                  <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-100">
                    <Eye className="w-8 h-8 text-brand-gold mb-4" />
                    <h4 className="text-xl font-bold text-neutral-900 mb-2">Our Vision</h4>
                    <p className="text-sm text-neutral-500">To be the most trusted global trading partner, recognized for our integrity, efficiency, and commitment to agricultural excellence.</p>
                  </div>
                </div>
              </div>

              {/* Story Image Grid */}
              <div className="relative">
                <img 
                  src="/hero2.png" 
                  alt="Farm to Port Logistics" 
                  className="rounded-3xl w-full h-[600px] object-cover shadow-2xl"
                />
                <div className="absolute -bottom-10 -left-10 bg-brand-green p-8 rounded-3xl shadow-xl hidden md:block max-w-xs text-white">
                  <span className="block text-5xl font-black mb-2">100%</span>
                  <span className="text-sm font-semibold uppercase tracking-wider opacity-90">Commitment to Global Standards</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 bg-neutral-950 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm">The AND Traders Difference</span>
              <h2 className="text-4xl font-extrabold">Our Core <span className="text-brand-green">Values</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((val, idx) => (
                <div key={idx} className="bg-neutral-900 p-8 rounded-3xl border border-neutral-800 hover:border-brand-gold transition-colors duration-300">
                  <div className="p-4 bg-black/50 rounded-2xl inline-block mb-6">
                    {val.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                  <p className="text-neutral-400 font-light text-sm leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership / Founders Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm">Leadership</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900">
                Meet Our <span className="text-brand-green">Founders</span>
              </h2>
              <p className="text-lg text-neutral-600 font-light">
                The visionaries dedicated to elevating global agricultural trade through trust, quality, and strong farmer relationships.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
              {team.map((leader, idx) => (
                <div key={idx} className="group flex flex-col items-center text-center bg-neutral-50 p-10 rounded-3xl border border-neutral-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  
                  <div className="relative w-56 h-56 mb-8 overflow-hidden rounded-full border-4 border-white shadow-xl group-hover:border-brand-gold transition-colors duration-500">
                    <div className="absolute inset-0 bg-brand-green/10 group-hover:bg-transparent transition-colors z-10" />
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-neutral-900 mb-1">{leader.name}</h3>
                  <p className="text-brand-green font-semibold tracking-wide uppercase text-sm mb-6">
                    {leader.role}
                  </p>
                  <p className="text-neutral-600 font-light leading-relaxed mb-8">
                    {leader.bio}
                  </p>
                  
                  <div className="flex gap-4 mt-auto">
                    <button className="p-3 bg-white border border-neutral-200 rounded-full text-neutral-500 hover:bg-brand-green hover:text-white hover:border-brand-green transition-all duration-300 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </button>
                    <button className="p-3 bg-white border border-neutral-200 rounded-full text-neutral-500 hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all duration-300 shadow-sm">
                      <Mail size={20} />
                    </button>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>
        
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}