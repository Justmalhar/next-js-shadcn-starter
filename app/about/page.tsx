"use client";

import Image from "next/image";
import PageTemplate from "@/components/PageTemplate";
import pageData from "@/page_data.json";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  const data = pageData.about;
  
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
                alt="About ChatScale"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 bg-[#0f0f0f]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {data.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Content Sections */}
      {data.sections.map((section, index) => (
        <section key={index} className={`py-16 md:py-24 px-4 md:px-6 lg:px-8 ${index % 2 === 1 ? 'bg-[#0f0f0f]' : ''}`}>
          <div className="container mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{section.title}</h2>
                <p className="text-gray-300 mb-8">{section.content}</p>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}
      
      {/* Team Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-[#0f0f0f]">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.team.map((member, index) => (
              <Card key={index} className="bg-[#1a1a1a] border-gray-800">
                <div className="relative h-[300px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 mb-3">{member.position}</p>
                  <Separator className="mb-4 bg-gray-800" />
                  <p className="text-gray-400">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageTemplate>
  );
} 