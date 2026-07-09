import { Globe, ShieldCheck, Leaf, TrendingUp } from 'lucide-react';

export default function AboutSection() {
  const features = [
    { icon: <ShieldCheck className="w-6 h-6 text-brand-gold" />, title: "Certified Quality", desc: "Rigorous grading and export-ready processing." },
    { icon: <Globe className="w-6 h-6 text-brand-gold" />, title: "Global Network", desc: "Seamless logistics to international markets." },
    { icon: <Leaf className="w-6 h-6 text-brand-gold" />, title: "Farm to Port", desc: "Direct sourcing from trusted local growers." },
    { icon: <TrendingUp className="w-6 h-6 text-brand-gold" />, title: "Reliable Supply", desc: "Consistent fulfillment for high-volume orders." },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Copywriting */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm flex items-center gap-4">
                <span className="w-12 h-[2px] bg-brand-gold"></span>
                About AND Traders
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 leading-tight">
                Commitment to <span className="text-brand-green">Quality</span> & Global Excellence.
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed font-light">
                AND Traders is a premier export-import enterprise dedicated to bridging the gap between fertile farms and international markets. We specialize in sourcing, grading, and exporting high-grade agricultural commodities, ensuring that every shipment meets stringent global standards.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-neutral-50 transition-colors border border-transparent hover:border-neutral-100">
                  <div className="p-3 bg-brand-green/10 rounded-xl">
                    {feat.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900">{feat.title}</h3>
                    <p className="text-sm text-neutral-500 mt-1">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/about1.png" 
                alt="Agricultural fields" 
                className="rounded-3xl w-full h-72 object-cover shadow-lg"
              />
              <img 
                src="/about2.png" 
                alt="Harvest sorting" 
                className="rounded-3xl w-full h-72 object-cover shadow-lg mt-12"
              />
            </div>
            
            {/* Floating Experience Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-2xl border border-neutral-100 text-center w-48">
              <span className="block text-4xl font-black text-brand-green mb-1">100%</span>
              <span className="text-sm font-bold text-neutral-500 uppercase tracking-wider">Export Grade</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}