import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertConsultationSchema, type InsertConsultation } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const form = useForm<InsertConsultation>({
    resolver: zodResolver(insertConsultationSchema),
    defaultValues: {
      brideName: "",
      groomName: "",
      email: "",
      phone: "",
      weddingDate: "",
      budget: "",
      packageInterest: "",
      message: "",
    },
  });

  const submitConsultation = useMutation({
    mutationFn: async (data: InsertConsultation) => {
      return apiRequest("POST", "/api/consultations", data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your consultation request has been submitted. We'll contact you within 24 hours.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/consultations"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit consultation request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertConsultation) => {
    submitConsultation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-accent mb-4">Book Your Consultation</h2>
          <p className="text-xl text-gray-600">Let's start planning your perfect day together</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-cream rounded-xl p-8">
            <h3 className="font-display text-2xl font-bold text-accent mb-6">Free Consultation Form</h3>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="brideName">Bride's Name</Label>
                  <Input
                    id="brideName"
                    {...form.register("brideName")}
                    className="mt-2"
                  />
                  {form.formState.errors.brideName && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.brideName.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="groomName">Groom's Name</Label>
                  <Input
                    id="groomName"
                    {...form.register("groomName")}
                    className="mt-2"
                  />
                  {form.formState.errors.groomName && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.groomName.message}</p>
                  )}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    {...form.register("email")}
                    className="mt-2"
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...form.register("phone")}
                    className="mt-2"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="weddingDate">Preferred Wedding Date</Label>
                  <Input
                    id="weddingDate"
                    type="date"
                    {...form.register("weddingDate")}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select onValueChange={(value) => form.setValue("budget", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select Budget Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-5k">Under $5,000</SelectItem>
                      <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                      <SelectItem value="10k-20k">$10,000 - $20,000</SelectItem>
                      <SelectItem value="20k-50k">$20,000 - $50,000</SelectItem>
                      <SelectItem value="over-50k">Over $50,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="package">Interested Package</Label>
                <Select onValueChange={(value) => form.setValue("packageInterest", value)}>
                  <SelectTrigger className="mt-2" id="package">
                    <SelectValue placeholder="Select a Package" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="silver-bloom">Silver Bloom - From $750</SelectItem>
                    <SelectItem value="gold-grace">Gold Grace - From $1,500</SelectItem>
                    <SelectItem value="aminah-pearl">Aminah Pearl - From $3,000</SelectItem>
                    <SelectItem value="golden-touch">Golden Touch - From $1,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message">Tell us about your vision</Label>
                <Textarea
                  id="message"
                  placeholder="Share your wedding vision, special requirements, or any questions..."
                  {...form.register("message")}
                  className="mt-2"
                  rows={4}
                />
              </div>
              
              <Button
                type="submit"
                disabled={submitConsultation.isPending}
                className="w-full bg-primary hover:bg-secondary text-white py-4 text-lg font-semibold"
              >
                {submitConsultation.isPending ? "Submitting..." : "Book Free Consultation"}
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8">
              <h3 className="font-display text-2xl font-bold text-accent mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-envelope text-primary mr-4 text-xl"></i>
                  <div>
                    <div className="font-semibold text-accent">Email</div>
                    <div className="text-gray-600">hello@acvowsplanner.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-phone text-primary mr-4 text-xl"></i>
                  <div>
                    <div className="font-semibold text-accent">Phone</div>
                    <div className="text-gray-600">+250 (0) 78 xxx xxxx</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-primary mr-4 text-xl"></i>
                  <div>
                    <div className="font-semibold text-accent">Location</div>
                    <div className="text-gray-600">Kigali, Rwanda</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <i className="fab fa-instagram text-primary mr-4 text-xl"></i>
                  <div>
                    <div className="font-semibold text-accent">Instagram</div>
                    <a 
                      href="https://instagram.com/ac-vows-planner" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-secondary transition-colors duration-200"
                    >
                      @ac-vows-planner
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-accent text-white rounded-xl p-8">
              <h3 className="font-display text-xl font-bold mb-4">Why Book a Consultation?</h3>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  Discuss your unique vision and requirements
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  Learn about our faith-conscious approach
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  Get personalized package recommendations
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  No obligation - completely free
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
