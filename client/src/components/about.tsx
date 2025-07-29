export default function About() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-accent mb-6">Meet Aminah Clarke</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Founder of AC Vows Planner, Aminah brings faith-conscious elegance to every wedding she touches. 
              Based in Kigali, she offers tailored planning for modest, respectful celebrations around the world.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <i className="fas fa-heart text-primary mr-3"></i>
                <span className="text-gray-700">5+ years of wedding planning experience</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-star text-primary mr-3"></i>
                <span className="text-gray-700">100+ successful faith-conscious celebrations</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-globe text-primary mr-3"></i>
                <span className="text-gray-700">International planning services</span>
              </div>
            </div>
            <button
              onClick={scrollToContact}
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors duration-200"
            >
              Work With Aminah
            </button>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000" 
              alt="Aminah Clarke - Professional Wedding Planner" 
              className="rounded-xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm">Happy Couples</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
