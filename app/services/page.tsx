"use client";

import Image from "next/image";
import Link from "next/link";
import PageTemplate from "@/components/PageTemplate";
import pageData from "@/page_data.json";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getIconByName } from "@/lib/utils";
import { ArrowRight, Check } from "lucide-react";

export default function ServicesPage() {
  const data = pageData.services;
  
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
                alt="Our Services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services List */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-[#0f0f0f]">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.servicesList.map((service, index) => (
              <Card key={index} className="bg-[#1a1a1a] border-gray-800 overflow-hidden">
                <div className="relative h-[200px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-blue-600/20 p-3 rounded-lg text-blue-400">
                      {getIconByName(service.icon)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-400">{service.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mt-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-blue-400" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button asChild variant="ghost" className="text-blue-400 hover:text-blue-300 p-0 gap-2">
                    <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform your customer experience?</h2>
          <p className="text-xl text-gray-300 mb-8">Schedule a demo to see how our AI chatbot solutions can help your business.</p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/book-demo">Book a Demo</Link>
          </Button>
        </div>
      </section>
    </PageTemplate>
  );
} 