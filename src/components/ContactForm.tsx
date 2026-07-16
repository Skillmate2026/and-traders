'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Building2 } from 'lucide-react';
import LeadForm from './LeadForm'; // Ensure this matches your path

export default function ContactForm() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0a2e1f] text-[#f9f8f6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          
          {/* --- Left Side: Text and Form Component --- */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-10"
          >
            <div className="space-y-6">
              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <span className="w-12 h-[1px] bg-[#d4af37]"></span>
                <span className="text-[#d4af37] font-semibold tracking-[0.25em] uppercase text-xs">
                  Global Inquiries
                </span>
              </motion.div>
              
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
                Request a <span className="italic font-light text-[#d4af37]">Quote.</span>
              </motion.h2>
              
              <motion.p variants={itemVariants} className="text-white/70 font-light leading-relaxed max-w-md">
                Looking for bulk export pricing? Fill out the form below and our dedicated global sales team will respond within 24 hours.
              </motion.p>
            </div>

            {/* Imported Reusable Form */}
            <motion.div variants={itemVariants}>
              {/* Note: You may want to update the inputs inside LeadForm.tsx to have sharp corners (rounded-sm) and match the dark theme! */}
              <LeadForm />
            </motion.div>
            
          </motion.div>

          {/* --- Right Side: Map and Info --- */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-8 flex flex-col"
          >
            {/* Contact Details - Premium Glassmorphic Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-white/5 backdrop-blur-md p-10 rounded-sm border border-white/10">
              
              {/* Head Office */}
              <div className="flex flex-col items-start gap-4">
                <div className="text-[#d4af37]"><MapPin strokeWidth={1.5} size={28} /></div>
                <div>
                  <h4 className="text-[#f9f8f6] font-serif text-xl mb-2">Head Office</h4>
                  <p className="text-white/60 text-sm leading-relaxed font-light">
                    Shop No. 21<br />
                    Adi Udupi, Udupi - 576103<br />
                    Karnataka, India
                  </p>
                </div>
              </div>

              {/* Branches */}
              <div className="flex flex-col items-start gap-4">
                <div className="text-[#d4af37]"><Building2 strokeWidth={1.5} size={28} /></div>
                <div>
                  <h4 className="text-[#f9f8f6] font-serif text-xl mb-2">Our Branches</h4>
                  <p className="text-white/60 text-sm leading-relaxed font-light">
                    Udupi, Bangalore, Madurai, Nasik, Indore
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-start gap-4 mt-4 sm:mt-0">
                <div className="text-[#d4af37]"><Phone strokeWidth={1.5} size={28} /></div>
                <div>
                  <h4 className="text-[#f9f8f6] font-serif text-xl mb-2">Direct Line</h4>
                  <p className="text-white/60 text-sm font-light tracking-wide">+91 93530 67700</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col items-start gap-4 mt-4 sm:mt-0">
                <div className="text-[#d4af37]"><Mail strokeWidth={1.5} size={28} /></div>
                <div>
                  <h4 className="text-[#f9f8f6] font-serif text-xl mb-2">Email Desk</h4>
                  <p className="text-white/60 text-sm font-light break-all hover:text-[#d4af37] transition-colors cursor-pointer">
                    andtraders7700@gmail.com
                  </p>
                </div>
              </div>

            </motion.div>

            {/* Google Map */}
            <motion.div variants={itemVariants} className="w-full h-[350px] rounded-sm overflow-hidden border border-white/10 relative group">
              <div className="absolute inset-0 bg-[#0a2e1f]/20 group-hover:bg-transparent transition-colors duration-700 pointer-events-none z-10" />
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.564755866187!2d74.730248!3d13.344445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca4a6566cbced%3A0x8e826b0f92b70f0!2sAdi%20Udupi%2C%20Udupi%2C%20Karnataka%20576103!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              ></iframe>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}