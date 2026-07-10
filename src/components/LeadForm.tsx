"use client";
import { Send } from 'lucide-react';

export default function LeadForm() {
  return (
    <form className="space-y-6 w-full" onSubmit={(e) => e.preventDefault()}>
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
  );
}