"use client";

import { useState } from "react";
import Image from "next/image";
import PageTemplate from "@/components/PageTemplate";
import pageData from "@/page_data.json";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const data = pageData.contact;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        message: ""
      });
    }, 1500);
  };
  
  return (
    <PageTemplate>
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{data.hero.title}</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">{data.hero.description}</p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src={data.hero.image}
                alt="Contact Us"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form and Info */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-[#0f0f0f]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Send us a message</h2>
              
              {isSubmitted ? (
                <Card className="bg-[#1a1a1a] border-gray-800 p-8">
                  <CardContent className="p-0 text-center">
                    <div className="mb-6 mx-auto w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                    <p className="text-gray-300 mb-6">Thank you for reaching out. We&apos;ll get back to you as soon as possible.</p>
                    <Button onClick={() => setIsSubmitted(false)} className="bg-blue-600 hover:bg-blue-700">
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {data.formFields.map((field, index) => (
                    <div key={index}>
                      <label htmlFor={field.name} className="block text-gray-300 mb-2">
                        {field.label} {field.required && <span className="text-red-500">*</span>}
                      </label>
                      
                      {field.type === 'textarea' ? (
                        <textarea
                          id={field.name}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData] || ''}
                          onChange={handleChange}
                          required={field.required}
                          rows={5}
                          className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-white"
                        />
                      ) : (
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData] || ''}
                          onChange={handleChange}
                          required={field.required}
                          className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-white"
                        />
                      )}
                    </div>
                  ))}
                  
                  <Button 
                    type="submit" 
                    className="bg-blue-600 hover:bg-blue-700 w-full py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <Card className="bg-[#1a1a1a] border-gray-800">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-blue-600/20 p-3 rounded-lg text-blue-400">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">Email</h3>
                      <p className="text-gray-300">{data.contactInfo.email}</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-[#1a1a1a] border-gray-800">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-blue-600/20 p-3 rounded-lg text-blue-400">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">Phone</h3>
                      <p className="text-gray-300">{data.contactInfo.phone}</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-[#1a1a1a] border-gray-800">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-blue-600/20 p-3 rounded-lg text-blue-400">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">Address</h3>
                      <p className="text-gray-300">{data.contactInfo.address}</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-[#1a1a1a] border-gray-800">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-blue-600/20 p-3 rounded-lg text-blue-400">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">Business Hours</h3>
                      <p className="text-gray-300">{data.contactInfo.hours}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section (Placeholder) */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="relative h-[400px] rounded-lg overflow-hidden bg-[#1a1a1a]">
            {/* This would be replaced with an actual map component */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-400">Map placeholder - would integrate with Google Maps or similar</p>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
} 