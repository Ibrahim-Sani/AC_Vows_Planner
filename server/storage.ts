import { type Consultation, type InsertConsultation, type Package, type Testimonial } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<any | undefined>;
  getUserByUsername(username: string): Promise<any | undefined>;
  createUser(user: any): Promise<any>;
  
  // Consultation methods
  createConsultation(consultation: InsertConsultation): Promise<Consultation>;
  getConsultations(): Promise<Consultation[]>;
  
  // Package methods
  getPackages(): Promise<Package[]>;
  
  // Testimonial methods
  getTestimonials(): Promise<Testimonial[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, any>;
  private consultations: Map<string, Consultation>;
  private packages: Map<string, Package>;
  private testimonials: Map<string, Testimonial>;

  constructor() {
    this.users = new Map();
    this.consultations = new Map();
    this.packages = new Map();
    this.testimonials = new Map();
    
    // Initialize with default packages
    this.initializePackages();
    this.initializeTestimonials();
  }

  private initializePackages() {
    const packages: Package[] = [
      {
        id: "silver-bloom",
        name: "Silver Bloom",
        price: "From $750",
        description: "Graceful coordination for modest celebrations",
        features: ["30-60 day preparation", "1-2 planning calls", "Day-of execution", "Vendor coordination"],
        icon: "fas fa-medal",
        color: "gray",
        popular: 0,
      },
      {
        id: "gold-grace",
        name: "Gold Grace",
        price: "From $1,500",
        description: "Full modest & halal guidance",
        features: ["Complete planning support", "Vendor sourcing", "Budget management", "Timeline coordination"],
        icon: "fas fa-medal",
        color: "yellow",
        popular: 0,
      },
      {
        id: "aminah-pearl",
        name: "Aminah Pearl",
        price: "From $3,000",
        description: "Luxury full-service planning",
        features: ["Complete theme design", "Modest fashion consult", "RSVP management", "Transport coordination"],
        icon: "fas fa-gem",
        color: "primary",
        popular: 1,
      },
      {
        id: "golden-touch",
        name: "Golden Touch",
        price: "From $1,000",
        description: "Perfect final touch support",
        features: ["Self-planned support", "Vendor referrals", "3 planning calls", "Light coordination"],
        icon: "fas fa-sparkles",
        color: "orange",
        popular: 0,
      },
    ];

    packages.forEach(pkg => this.packages.set(pkg.id, pkg));
  }

  private initializeTestimonials() {
    const testimonials: Testimonial[] = [
      {
        id: "1",
        coupleName: "Sarah & Ahmed",
        packageUsed: "Gold Grace Package",
        rating: 5,
        review: "Aminah made our dream wedding come true while respecting our faith and traditions. Every detail was perfect, and she understood our vision completely.",
        avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      },
      {
        id: "2",
        coupleName: "Fatima & Omar",
        packageUsed: "Aminah Pearl Package",
        rating: 5,
        review: "The Aminah Pearl package exceeded our expectations. Professional, elegant, and completely aligned with our values. Highly recommended!",
        avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      },
      {
        id: "3",
        coupleName: "Zara & Hassan",
        packageUsed: "Silver Bloom Package",
        rating: 5,
        review: "Amazing attention to detail and cultural sensitivity. Our families were impressed with how beautifully everything was coordinated.",
        avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      },
    ];

    testimonials.forEach(testimonial => this.testimonials.set(testimonial.id, testimonial));
  }

  async getUser(id: string): Promise<any | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<any | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: any): Promise<any> {
    const id = randomUUID();
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createConsultation(insertConsultation: InsertConsultation): Promise<Consultation> {
    const id = randomUUID();
    const consultation: Consultation = {
      ...insertConsultation,
      id,
      createdAt: new Date(),
    };
    this.consultations.set(id, consultation);
    return consultation;
  }

  async getConsultations(): Promise<Consultation[]> {
    return Array.from(this.consultations.values());
  }

  async getPackages(): Promise<Package[]> {
    return Array.from(this.packages.values());
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }
}

export const storage = new MemStorage();
