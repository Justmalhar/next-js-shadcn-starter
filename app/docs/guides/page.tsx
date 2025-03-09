"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function GuidesPage() {
  // Sample guides data
  const guides = [
    {
      title: "Building a Customer Support Chatbot",
      description: "Learn how to create an effective customer support chatbot that can handle common inquiries and escalate complex issues.",
      image: "/hero-gradient.png",
      category: "Customer Support",
      readTime: "10 min read",
      url: "/docs/guides/customer-support-chatbot"
    },
    {
      title: "Creating Multi-step Conversations",
      description: "Design complex conversation flows that guide users through multi-step processes like booking appointments or completing forms.",
      image: "/hero-gradient.png",
      category: "Conversation Design",
      readTime: "15 min read",
      url: "/docs/guides/multi-step-conversations"
    },
    {
      title: "Integrating with Your CRM",
      description: "Connect your ChatScale chatbot with popular CRM platforms to sync customer data and provide personalized experiences.",
      image: "/hero-gradient.png",
      category: "Integrations",
      readTime: "12 min read",
      url: "/docs/guides/crm-integration"
    },
    {
      title: "Optimizing Chatbot Performance",
      description: "Learn how to analyze chatbot metrics and make data-driven improvements to enhance user satisfaction and conversion rates.",
      image: "/hero-gradient.png",
      category: "Analytics",
      readTime: "8 min read",
      url: "/docs/guides/performance-optimization"
    },
    {
      title: "Training Your AI with Custom Data",
      description: "Upload and manage custom training data to make your chatbot more knowledgeable about your specific products and services.",
      image: "/hero-gradient.png",
      category: "AI Training",
      readTime: "20 min read",
      url: "/docs/guides/custom-training-data"
    },
    {
      title: "Setting Up Human Handoff",
      description: "Configure your chatbot to seamlessly transfer conversations to human agents when necessary.",
      image: "/hero-gradient.png",
      category: "Customer Support",
      readTime: "10 min read",
      url: "/docs/guides/human-handoff"
    }
  ];

  // Featured guide
  const featuredGuide = guides[0];

  // Add error handling for images
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "/hero-gradient.png"; // Fallback image
  };

  return (
    <div className="py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Guides & Tutorials</h1>
        <p className="text-gray-300 text-lg mb-8">
          Step-by-step instructions to help you get the most out of your ChatScale chatbot.
        </p>

        <Separator className="my-8 bg-gray-800" />

        {/* Featured Guide */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Featured Guide</h2>
          <Card className="bg-[#1a1a1a] border-gray-800 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-[300px] md:h-auto bg-[#0f0f0f]">
                <Image
                  src={featuredGuide.image}
                  alt={featuredGuide.title}
                  fill
                  className="object-cover"
                  onError={handleImageError}
                />
              </div>
              <div className="p-6 md:p-8">
                <span className="inline-block bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full text-sm mb-4">
                  {featuredGuide.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3">{featuredGuide.title}</h3>
                <p className="text-gray-300 mb-6">{featuredGuide.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    {featuredGuide.readTime}
                  </span>
                  <Link href={featuredGuide.url} className="text-blue-400 flex items-center hover:text-blue-300 transition-colors">
                    Read guide <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* All Guides */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">All Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.slice(1).map((guide, index) => (
              <Card key={index} className="bg-[#1a1a1a] border-gray-800 overflow-hidden h-full">
                <div className="relative h-[200px] bg-[#0f0f0f]">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-cover"
                    onError={handleImageError}
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full text-sm">
                      {guide.category}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center">
                      <BookOpen className="h-3 w-3 mr-1" />
                      {guide.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-white">{guide.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 mb-4">
                    {guide.description}
                  </CardDescription>
                  <Link href={guide.url} className="text-blue-400 flex items-center hover:text-blue-300 transition-colors text-sm">
                    Read guide <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="my-12 bg-gray-800" />

        {/* Topic Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Browse by Topic</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {["Getting Started", "Conversation Design", "Integrations", "Analytics", "AI Training", "Customer Support"].map((topic, index) => (
              <Link href={`/docs/guides?topic=${topic.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
                <div className="bg-[#1a1a1a] border border-gray-800 hover:border-blue-500 rounded-lg p-4 text-center transition-colors">
                  <h3 className="text-white font-medium">{topic}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Request Guide */}
        <div className="bg-[#0f0f0f] border border-gray-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Can&apos;t find what you&apos;re looking for?</h2>
          <p className="text-gray-300 mb-6">
            If you need help with a specific topic that isn&apos;t covered in our guides, let us know!
          </p>
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors inline-block">
            Request a Guide
          </Link>
        </div>
      </div>
    </div>
  );
} 