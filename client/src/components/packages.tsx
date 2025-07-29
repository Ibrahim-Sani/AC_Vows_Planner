import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Package } from "@shared/schema";

export default function Packages() {
  const { data: packages, isLoading } = useQuery<Package[]>({
    queryKey: ["/api/packages"],
  });

  const scrollToContact = (packageName: string) => {
    const element = document.querySelector("#contact");
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      
      // Pre-fill package selection after scrolling
      setTimeout(() => {
        const packageSelect = document.getElementById('package') as HTMLSelectElement;
        if (packageSelect) {
          const packageValue = packageName.toLowerCase().replace(/\s+/g, '-');
          for (let option of packageSelect.options) {
            if (option.value.includes(packageValue)) {
              option.selected = true;
              break;
            }
          }
        }
      }, 1000);
    }
  };

  const getPackageColors = (color: string, popular: number) => {
    if (popular) {
      return {
        gradient: "from-primary/20 to-primary/30",
        border: "border-primary",
        text: "text-accent",
        button: "bg-primary hover:bg-secondary",
        icon: "text-primary",
        check: "text-primary",
      };
    }

    switch (color) {
      case "gray":
        return {
          gradient: "from-gray-50 to-gray-100",
          border: "border-gray-400",
          text: "text-accent",
          button: "bg-gray-500 hover:bg-gray-600",
          icon: "text-gray-400",
          check: "text-gray-400",
        };
      case "yellow":
        return {
          gradient: "from-yellow-50 to-yellow-100",
          border: "border-secondary",
          text: "text-accent",
          button: "bg-secondary hover:bg-yellow-600",
          icon: "text-secondary",
          check: "text-secondary",
        };
      case "orange":
        return {
          gradient: "from-orange-50 to-orange-100",
          border: "border-orange-400",
          text: "text-accent",
          button: "bg-orange-500 hover:bg-orange-600",
          icon: "text-orange-400",
          check: "text-orange-400",
        };
      default:
        return {
          gradient: "from-primary/20 to-primary/30",
          border: "border-primary",
          text: "text-accent",
          button: "bg-primary hover:bg-secondary",
          icon: "text-primary",
          check: "text-primary",
        };
    }
  };

  if (isLoading) {
    return (
      <section id="packages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-accent mb-4">Our Wedding Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Choose the perfect planning package for your special day</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-8">
                  <div className="h-32 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-accent mb-4">Our Wedding Packages</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Choose the perfect planning package for your special day</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages?.map((pkg) => {
            const colors = getPackageColors(pkg.color, pkg.popular);
            const isPopular = pkg.popular === 1;
            
            return (
              <div
                key={pkg.id}
                className={`package-card bg-gradient-to-br ${colors.gradient} rounded-xl p-8 border-l-4 ${colors.border} relative ${isPopular ? 'transform scale-105' : ''}`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <i className={`${pkg.icon} ${colors.icon} text-2xl`}></i>
                </div>
                <h3 className={`font-display text-2xl font-bold ${colors.text} mb-2`}>{pkg.name}</h3>
                <div className={`text-3xl font-bold ${isPopular ? 'text-primary' : colors.icon} mb-4`}>{pkg.price}</div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <i className={`fas fa-check ${colors.check} mr-2`}></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => scrollToContact(pkg.name)}
                  className={`w-full ${colors.button} text-white py-3 rounded-lg transition-colors duration-200`}
                >
                  Select Package
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
