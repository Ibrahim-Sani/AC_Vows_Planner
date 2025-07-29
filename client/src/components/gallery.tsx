export default function Gallery() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Elegant outdoor wedding ceremony",
      caption: "Outdoor Ceremony"
    },
    {
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Elegant wedding reception setup",
      caption: "Reception Setup"
    },
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Elegant wedding cake",
      caption: "Wedding Cake"
    },
    {
      src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Wedding ceremony decorations",
      caption: "Ceremony Decor"
    },
    {
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Happy wedding couple",
      caption: "Happy Couples"
    },
    {
      src: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Beautiful bridal bouquet",
      caption: "Bridal Details"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-accent mb-4">Our Wedding Gallery</h2>
          <p className="text-xl text-gray-600">Beautiful moments from our faith-conscious celebrations</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-xl group">
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">{image.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
