import Link from 'next/link';

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
              <li><Link href="#about" className="text-neutral-500 hover:text-brand-green transition-colors text-sm">About Us</Link></li>
              <li><Link href="#testimonials" className="text-neutral-500 hover:text-brand-green transition-colors text-sm">Testimonials</Link></li>
              <li><Link href="#contact" className="text-neutral-500 hover:text-brand-green transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-neutral-900 font-bold mb-6 uppercase tracking-wider text-sm">Our Products</h4>
            <ul className="space-y-4">
              <li><Link href="#products" className="text-neutral-500 hover:text-brand-green transition-colors text-sm">Export-Grade Onions</Link></li>
              <li><Link href="#products" className="text-neutral-500 hover:text-brand-green transition-colors text-sm">Premium Garlic</Link></li>
              <li><Link href="#products" className="text-neutral-500 hover:text-brand-green transition-colors text-sm">Farm-Fresh Potatoes</Link></li>
              <li><Link href="#products" className="text-neutral-500 hover:text-brand-green transition-colors text-sm">High-Yield Coconuts</Link></li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-neutral-900 font-bold mb-6 uppercase tracking-wider text-sm">Business Hours</h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="text-neutral-900 font-medium">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-neutral-900 font-medium">9:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-brand-green font-medium">Closed</span>
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