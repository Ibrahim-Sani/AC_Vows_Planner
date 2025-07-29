import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import type { Testimonial } from "@shared/schema";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  useEffect(() => {
    if (testimonials && testimonials.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [testimonials]);

  if (isLoading) {
    return (
      <section id="testimonials" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-accent mb-4">What Couples Say</h2>
            <p className="text-xl text-gray-600">Real testimonials from our happy couples</p>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex-none w-full md:w-1/2 lg:w-1/3 bg-white rounded-xl p-8 shadow-lg animate-pulse">
                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                <div className="h-20 bg-gray-200 rounded mb-6"></div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <div className="h-4 bg-gray-200 rounded mb-1 w-24"></div>
                    <div className="h-3 bg-gray-200 rounded w-16"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-accent mb-4">What Couples Say</h2>
          <p className="text-xl text-gray-600">Real testimonials from our happy couples</p>
        </div>
        
        <div className="flex gap-6 overflow-x-auto pb-6 scroll-smooth" style={{ scrollSnapType: 'x mandatory' }}>
          {testimonials?.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="flex-none w-full md:w-1/2 lg:w-1/3 bg-white rounded-xl p-8 shadow-lg"
              style={{ scrollSnapAlign: 'center' }}
            >
              <div className="flex items-center mb-4">
                <div className="flex text-primary">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.review}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatarUrl || "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"}
                  alt={testimonial.coupleName}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-accent">{testimonial.coupleName}</div>
                  <div className="text-sm text-gray-600">{testimonial.packageUsed}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
