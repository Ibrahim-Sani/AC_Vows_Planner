export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-accent text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-display text-2xl font-bold text-primary mb-4">AC Vows Planner</div>
            <p className="text-gray-300 mb-4">
              Creating elegant, faith-conscious wedding celebrations that honor your values and traditions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/ac-vows-planner" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors duration-200"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><button onClick={() => scrollToSection("#packages")} className="hover:text-primary transition-colors duration-200">Packages</button></li>
              <li><button onClick={() => scrollToSection("#about")} className="hover:text-primary transition-colors duration-200">About</button></li>
              <li><button onClick={() => scrollToSection("#gallery")} className="hover:text-primary transition-colors duration-200">Gallery</button></li>
              <li><button onClick={() => scrollToSection("#testimonials")} className="hover:text-primary transition-colors duration-200">Testimonials</button></li>
              <li><button onClick={() => scrollToSection("#contact")} className="hover:text-primary transition-colors duration-200">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Faith-Conscious Planning</li>
              <li>Modest Wedding Design</li>
              <li>Halal Vendor Network</li>
              <li>Day-of Coordination</li>
              <li>International Planning</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 AC Vows Planner. All rights reserved. | 
             <a href="#" className="hover:text-primary transition-colors duration-200 ml-1">Privacy Policy</a> | 
             <a href="#" className="hover:text-primary transition-colors duration-200 ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
