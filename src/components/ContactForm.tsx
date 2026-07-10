"use client";
import { MapPin, Phone, Mail, Building2 } from 'lucide-react';
import LeadForm from './LeadForm'; // Make sure the path matches where you saved LeadForm.tsx

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Text and Form Component */}
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

            {/* Imported Reusable Form */}
            <LeadForm />
            
          </div>

          {/* Right Side: Map and Info */}
          <div className="space-y-8 flex flex-col justify-between">
            {/* Contact Details - Updated to a 2x2 grid for branches */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-neutral-900 p-8 rounded-3xl border border-neutral-800">
              
              {/* Head Office */}
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

              {/* Branches */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3">
                <div className="p-3 bg-neutral-800 rounded-full text-brand-gold"><Building2 size={24} /></div>
                <div>
                  <h4 className="text-white font-semibold">Our Branches</h4>
                  <p className="text-neutral-400 text-sm mt-1 leading-relaxed">
                    Udupi, Bangalore, Madurai, Nasik, Indore
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3">
                <div className="p-3 bg-neutral-800 rounded-full text-brand-gold"><Phone size={24} /></div>
                <div>
                  <h4 className="text-white font-semibold">Call Us</h4>
                  <p className="text-neutral-400 text-sm mt-1">+91 93530 67700</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3">
                <div className="p-3 bg-neutral-800 rounded-full text-brand-gold"><Mail size={24} /></div>
                <div>
                  <h4 className="text-white font-semibold">Email Us</h4>
                  <p className="text-neutral-400 text-sm mt-1 break-all">andtraders7700@gmail.com</p>
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