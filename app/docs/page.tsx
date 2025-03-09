"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageTemplate from "@/components/PageTemplate";
import appData from "@/app_data.json";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DocsPage() {
  // Find the docs dropdown items from the navigation
  const docsNavItem = appData.navigation.links.find(link => link.text === "Docs");
  const docsPages = docsNavItem?.dropdownItems || [];

  // Add error handling for images
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "/hero-gradient.png"; // Fallback image
  };

  return (
    <PageTemplate>
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Documentation</h1>
            <p className="text-xl text-gray-300">
              Everything you need to know about our AI chatbot platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {docsPages.map((page, index) => (
              <Link href={page.url} key={index}>
                <Card className="bg-[#1a1a1a] border-gray-800 hover:border-blue-500 transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">{page.text}</CardTitle>
                    <CardDescription className="text-gray-400">
                      {getDescriptionForPage(page.text)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-between items-center">
                    <span className="text-blue-400">Read more</span>
                    <ArrowRight className="h-5 w-5 text-blue-400" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}

// Helper function to get descriptions for each page
function getDescriptionForPage(pageTitle: string): string {
  switch (pageTitle) {
    case "Getting Started":
      return "Learn how to set up and configure your ChatScale AI chatbot";
    case "API Reference":
      return "Detailed documentation for integrating with our API";
    case "Guides":
      return "Step-by-step tutorials for common use cases";
    case "FAQ":
      return "Answers to frequently asked questions";
    default:
      return "Documentation and resources";
  }
} 