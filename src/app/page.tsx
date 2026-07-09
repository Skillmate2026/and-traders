import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import AboutSection from '@/components/AboutSection';
import ProductSection from '@/components/ProductSection';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import TeamSection from '@/components/TeamSection';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <HeroSlider />
      <AboutSection />
      <TeamSection />
      <ProductSection />
      <Testimonials />
      <ContactForm />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}