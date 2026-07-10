import { Mail } from 'lucide-react';

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

export default function TeamSection() {
  return (
    // Changed py-24 to py-12 md:py-16 to reduce the massive top/bottom gaps
    <section id="team" className="py-6 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        {/* Changed mb-16 to mb-10 to tighten the space between header and images */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm">Leadership</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900">
            Meet Our <span className="text-brand-green">Founders</span>
          </h2>
          <p className="text-lg text-neutral-600 font-light">
            The visionaries dedicated to elevating global agricultural trade through trust, quality, and strong farmer relationships.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {team.map((leader, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center">
              
              {/* Image Container with Premium Hover Effect */}
              {/* Reduced mb-8 to mb-6 to bring text slightly closer to the image */}
              <div className="relative w-64 h-64 mb-6 overflow-hidden rounded-full border-4 border-neutral-50 shadow-lg group-hover:border-brand-gold transition-colors duration-500">
                <div className="absolute inset-0 bg-brand-green/10 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Leader Details */}
              <h3 className="text-2xl font-bold text-neutral-900 mb-1">{leader.name}</h3>
              <p className="text-brand-green font-semibold tracking-wide uppercase text-sm mb-4">
                {leader.role}
              </p>
              <p className="text-neutral-600 font-light leading-relaxed max-w-md mb-6">
                {leader.bio}
              </p>
              
              {/* Social/Contact Links */}
              <div className="flex gap-4">
                <button className="p-2.5 bg-neutral-100 rounded-full text-neutral-500 hover:bg-brand-green hover:text-white transition-all duration-300">
                  {/* Inline SVG for LinkedIn */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </button>
                <button className="p-2.5 bg-neutral-100 rounded-full text-neutral-500 hover:bg-brand-gold hover:text-white transition-all duration-300">
                  <Mail size={18} />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}