export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-bg min-h-screen flex items-center justify-center text-white">
      <div className="text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Say 'I Do' the <span className="text-primary">Aminah Clarke</span> Way
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          Flawless, Elegant, Modest, and Halal-Friendly Wedding Planning Services
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection("#contact")}
            className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary transition-all duration-300 transform hover:scale-105"
          >
            Book Free Consultation
          </button>
          <button
            onClick={() => scrollToSection("#packages")}
            className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300"
          >
            View Packages
          </button>
        </div>
      </div>
    </section>
  );
}
