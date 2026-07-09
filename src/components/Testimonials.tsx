import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Procurement Director, Dubai",
    content: "AND Traders has been our most reliable partner for premium onions and garlic. Their grading standards are impeccable, and shipments always arrive on schedule.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Wholesale Distributor, Spain",
    content: "The quality of their farm-fresh potatoes is unmatched. They handle the complex export logistics flawlessly, giving us total peace of mind.",
    rating: 5,
  },
  {
    name: "Mohammed Al-Fayed",
    role: "Supermarket Chain Owner, UAE",
    content: "We source our high-yield coconuts exclusively from AND Traders. Their direct-to-farm network ensures we get the freshest produce at highly competitive rates.",
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm">Global Trust</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900">
            What Our <span className="text-brand-green">Clients</span> Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-neutral-50 p-8 rounded-3xl relative hover:shadow-xl transition-shadow duration-300 border border-neutral-100">
              <Quote className="absolute top-6 right-8 w-12 h-12 text-brand-gold/20" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              
              <p className="text-neutral-700 italic leading-relaxed mb-8 relative z-10">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-neutral-200 pt-6">
                <h4 className="font-bold text-neutral-900">{testimonial.name}</h4>
                <p className="text-sm text-brand-green font-medium mt-1">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}