import Link from 'next/link';
import { MapPin, Building2, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-50 pt-20 pb-10 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <span className="text-2xl font-extrabold text-brand-green tracking-wider block">
              AND TRADERS
            </span>
            <p className="text-neutral-500 text-sm leading-relaxed pr-4">
              Connecting farmers and growing together. Your trusted partner for high-quality global agricultural exports and supply chain logistics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-neutral-900 font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-neutral-500 hover:text-brand-green transition-colors text-sm">Home</Link></li>
              <li><Link href="/about" className="text-neutral-500 hover:text-brand-green transition-colors text-sm">About Us</Link></li>
              <li><Link href="/products" className="text-neutral-500 hover:text-brand-green transition-colors text-sm">Our Products</Link></li>
              <li><Link href="/#testimonials" className="text-neutral-500 hover:text-brand-green transition-colors text-sm">Testimonials</Link></li>
              <li><Link href="/contact" className="text-neutral-500 hover:text-brand-green transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-neutral-900 font-bold mb-6 uppercase tracking-wider text-sm">Our Products</h4>
            <ul className="space-y-4">
              <li><Link href="/products/onion" className="text-neutral-500 hover:text-brand-green transition-colors text-sm">Export-Grade Onions</Link></li>
              <li><Link href="/products/garlic" className="text-neutral-500 hover:text-brand-green transition-colors text-sm">Premium Garlic</Link></li>
              <li><Link href="/products/potato" className="text-neutral-500 hover:text-brand-green transition-colors text-sm">Farm-Fresh Potatoes</Link></li>
              <li><Link href="/products/coconut" className="text-neutral-500 hover:text-brand-green transition-colors text-sm">High-Yield Coconuts</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-neutral-900 font-bold mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              
              <li className="flex flex-col gap-1.5">
                <span className="text-neutral-900 font-medium flex items-center gap-2">
                  <MapPin size={16} className="text-brand-gold" /> Head Office
                </span>
                <span className="pl-6">Shop No. 21, Adi Udupi,<br />Udupi - 576103</span>
              </li>
              
              <li className="flex flex-col gap-1.5">
                <span className="text-neutral-900 font-medium flex items-center gap-2">
                  <Building2 size={16} className="text-brand-gold" /> Branches
                </span>
                <span className="pl-6 leading-relaxed">Udupi, Bangalore, Madurai, Nasik, Indore</span>
              </li>

              <li className="pt-2">
                <a href="tel:+919353067700" className="flex items-center gap-2 hover:text-brand-green transition-colors">
                  <Phone size={16} className="text-brand-gold" /> +91 93530 67700
                </a>
              </li>

              <li>
                <a href="mailto:andtraders7700@gmail.com" className="flex items-center gap-2 hover:text-brand-green transition-colors">
                  <Mail size={16} className="text-brand-gold" /> andtraders7700@gmail.com
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-400 text-sm">
            © {new Date().getFullYear()} AND Traders International. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-neutral-400 hover:text-brand-green transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-neutral-400 hover:text-brand-green transition-colors">Terms of Service</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}