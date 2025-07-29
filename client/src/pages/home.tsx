import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Packages from "@/components/packages";
import About from "@/components/about";
import Gallery from "@/components/gallery";
import WhyChooseUs from "@/components/why-choose-us";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      <Hero />
      <Packages />
      <About />
      <Gallery />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
      
      {/* Floating Contact Button */}
      <a href="#contact" className="floating-btn bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-secondary transition-colors duration-200">
        <i className="fas fa-comments text-xl"></i>
      </a>
    </div>
  );
}
