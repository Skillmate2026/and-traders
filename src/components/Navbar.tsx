"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          
          {/* Logo Section */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-4 group">
            <Image 
              src="/logo.png" 
              alt="AND Traders Logo" 
              width={70} 
              height={70} 
              className="object-contain"
            />
            <div className="flex flex-col justify-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-brand-green tracking-wider leading-none group-hover:text-brand-gold transition-colors duration-300">
                AND TRADERS
              </span>
              <span className="text-[9px] sm:text-[11px] text-brand-gold font-bold tracking-[0.2em] mt-1 uppercase hidden sm:block">
                Agriculture | Supply | Production
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-gray-700">
            <Link href="/" className="hover:text-brand-green transition-colors">Home</Link>
            <Link href="/about" className="hover:text-brand-green transition-colors">About Us</Link>
            <Link href="/products" className="hover:text-brand-green transition-colors">Our Products</Link>
            <Link href="/#testimonials" className="hover:text-brand-green transition-colors">Testimonials</Link>
            <Link href="/contact" className="bg-brand-green text-white px-7 py-3 rounded-full hover:bg-brand-gold transition-all duration-300 shadow-md hover:shadow-lg">
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-green focus:outline-none">
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-3 shadow-xl">
          <Link href="/" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 font-medium">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 font-medium">About Us</Link>
          <Link href="/products" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 font-medium">Our Products</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block text-center bg-brand-green text-white py-3 rounded-xl font-medium mt-4 shadow-md">
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
}