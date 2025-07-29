export default function WhyChooseUs() {
  const features = [
    {
      icon: "fas fa-heart",
      title: "Faith-Conscious Planning",
      description: "Elegant celebrations that honor your values and traditions"
    },
    {
      icon: "fas fa-users",
      title: "Halal-Friendly Network",
      description: "Curated vendors who understand and respect your requirements"
    },
    {
      icon: "fas fa-gem",
      title: "Luxury with Values",
      description: "Premium service that maintains modest and respectful approach"
    },
    {
      icon: "fas fa-globe",
      title: "All Backgrounds Welcome",
      description: "Supporting couples of all faiths with understanding and respect"
    },
    {
      icon: "fas fa-calendar",
      title: "Free Consultation",
      description: "Start with a complimentary planning session to discuss your vision"
    },
    {
      icon: "fas fa-credit-card",
      title: "Flexible Payment",
      description: "Payment plans designed to work with your budget and timeline"
    }
  ];

  return (
    <section className="py-20 bg-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Why Couples Choose Us</h2>
          <p className="text-xl text-gray-200">Experience the difference of faith-conscious planning</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${feature.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
