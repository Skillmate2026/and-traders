"use client";
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Contact Form */}
          <div className="space-y-8">
            <div>
              <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Request a <span className="text-brand-green">Quote</span>
              </h2>
              <p className="text-neutral-400 mt-4 font-light">
                Looking for bulk export pricing? Fill out the form below and our global sales team will respond within 24 hours.
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all text-white placeholder-neutral-500"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all text-white placeholder-neutral-500"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input 
                  type="tel" 
                  placeholder="Phone Number / WhatsApp" 
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all text-white placeholder-neutral-500"
                />
                <select 
                    defaultValue=""
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all text-neutral-400 appearance-none"
                    >
                    <option value="" disabled>Interested Product...</option>
                    <option value="onions">Onions</option>
                    <option value="garlic">Garlic</option>
                    <option value="potatoes">Potatoes</option>
                    <option value="coconuts">Coconuts</option>
                    <option value="other">Other / Mixed Container</option>
                    </select>
              </div>
              <textarea 
                rows={4} 
                placeholder="Message or Order Details" 
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all text-white placeholder-neutral-500 resize-none"
              ></textarea>
              
              <button type="submit" className="w-full bg-brand-green hover:bg-brand-gold text-white font-bold py-4 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 group">
                Send Inquiry
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Right Side: Map and Info */}
          <div className="space-y-8 flex flex-col justify-between">
            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-neutral-900 p-8 rounded-3xl border border-neutral-800">
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3">
                <div className="p-3 bg-neutral-800 rounded-full text-brand-gold"><MapPin size={24} /></div>
                <div>
                  <h4 className="text-white font-semibold">Head Office</h4>
                  <p className="text-neutral-400 text-sm mt-1">
                    Shop No. 21<br />
                    Adi Udupi, Udupi - 576103<br />
                    Karnataka, India
                    </p>
                </div>
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3">
                <div className="p-3 bg-neutral-800 rounded-full text-brand-gold"><Phone size={24} /></div>
                <div>
                  <h4 className="text-white font-semibold">Call Us</h4>
                  <p className="text-neutral-400 text-sm mt-1">+91 93530 67700</p>
                </div>
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3">
                <div className="p-3 bg-neutral-800 rounded-full text-brand-gold"><Mail size={24} /></div>
                <div>
                  <h4 className="text-white font-semibold">Email Us</h4>
                  <p className="text-neutral-400 text-sm mt-1">info@andtraders.com</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="w-full h-72 rounded-3xl overflow-hidden border border-neutral-800">
              <iframe 
                src="https://maps.google.com/maps?q=Shop%20no%2021,%20Adi%20Udupi,%20Udupi%20576103&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700 rounded-3xl"
            ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}