"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import { MapPin, Phone, Mail, Building2 } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 font-sans">
      <Navbar />

      <main className="flex-grow pt-24">
        
        {/* Premium Page Header with Background */}
        <section className="relative bg-neutral-950 pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
          {/* Subtle Background Image */}
          <div className="absolute inset-0 bg-[url('/about1.png')] bg-cover bg-center opacity-30" />
          {/* Deep Gradient to fade image naturally */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-gold/10 text-brand-gold font-bold tracking-[0.2em] uppercase text-xs mb-6 border border-brand-gold/20">
              Reach Out To Us
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-2xl">
              Let's Talk <span className="text-brand-green">Business</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-neutral-400 font-light leading-relaxed">
              Whether you are looking to place a bulk order or inquire about our global supply chain, our executive team is ready to assist you.
            </p>
          </div>
        </section>

        {/* Contact Info Cards (Overlapping the header for a premium "floating" effect) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 md:-mt-32 relative z-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Head Office */}
            <div className="bg-white p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-neutral-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-neutral-50 flex items-center justify-center rounded-2xl mb-6 group-hover:bg-brand-green group-hover:scale-110 transition-all duration-500">
                <MapPin size={28} className="text-brand-green group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-neutral-900 text-lg mb-2">Head Office</h3>
              <p className="text-neutral-500 text-sm font-light leading-relaxed">Shop No. 21, Adi Udupi,<br />Udupi - 576103, Karnataka</p>
            </div>

            {/* Branches */}
            <div className="bg-white p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-neutral-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-neutral-50 flex items-center justify-center rounded-2xl mb-6 group-hover:bg-brand-green group-hover:scale-110 transition-all duration-500">
                <Building2 size={28} className="text-brand-green group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-neutral-900 text-lg mb-2">Our Branches</h3>
              <p className="text-neutral-500 text-sm font-light leading-relaxed">Udupi, Bangalore, Madurai, Nasik, Indore</p>
            </div>

            {/* Phone (Clickable) */}
            <Link href="tel:+919353067700" className="bg-white p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-neutral-100 flex flex-col items-center text-center group hover:-translate-y-2 hover:border-brand-gold/30 transition-all duration-500 cursor-pointer">
              <div className="w-16 h-16 bg-neutral-50 flex items-center justify-center rounded-2xl mb-6 group-hover:bg-brand-gold group-hover:scale-110 transition-all duration-500">
                <Phone size={28} className="text-brand-gold group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-neutral-900 text-lg mb-2">Call Us</h3>
              <p className="text-brand-green font-semibold text-sm group-hover:text-brand-gold transition-colors">+91 93530 67700</p>
            </Link>

            {/* Email (Clickable) */}
            <Link href="mailto:andtraders7700@gmail.com" className="bg-white p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-neutral-100 flex flex-col items-center text-center group hover:-translate-y-2 hover:border-brand-gold/30 transition-all duration-500 cursor-pointer">
              <div className="w-16 h-16 bg-neutral-50 flex items-center justify-center rounded-2xl mb-6 group-hover:bg-brand-gold group-hover:scale-110 transition-all duration-500">
                <Mail size={28} className="text-brand-gold group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-neutral-900 text-lg mb-2">Email Us</h3>
              <p className="text-brand-green font-semibold text-sm group-hover:text-brand-gold transition-colors break-all">andtraders7700@gmail.com</p>
            </Link>

          </div>
        </section>

        {/* Map and Form Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-neutral-100">
            
            {/* Left: Huge Map (Fills entire left side beautifully) */}
            <div className="h-[400px] lg:h-auto w-full relative">
              <div className="absolute inset-0 bg-brand-green/10 pointer-events-none z-10 mix-blend-multiply" /> {/* Subtle tint over map */}
              <iframe 
                src="https://maps.google.com/maps?q=Shop%20no%2021,%20Adi%20Udupi,%20Udupi%20576103&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-1000 object-cover"
              ></iframe>
            </div>

            {/* Right: Dark Form Container */}
            <div className="relative bg-neutral-950 p-8 sm:p-12 md:p-16 flex flex-col justify-center overflow-hidden">
              {/* Decorative Glow Elements */}
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-green/10 blur-[100px] rounded-full pointer-events-none" />
              <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-gold/10 blur-[100px] rounded-full pointer-events-none" />

              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">Send an Inquiry</h3>
                <p className="text-neutral-400 mb-10 font-light text-sm md:text-base leading-relaxed">
                  Fill out the details below and our global sales team will respond with your personalized quote within 24 hours.
                </p>
                
                {/* Reused Form Component inserted here! */}
                <div className="form-wrapper">
                  <LeadForm />
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}