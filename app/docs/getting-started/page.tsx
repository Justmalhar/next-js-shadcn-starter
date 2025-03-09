"use client";

import React from "react";
import Image from "next/image";
import { Check, Info } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function GettingStartedPage() {
  // Add error handling for images
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "/hero-gradient.png"; // Fallback image
  };

  return (
    <div className="py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Getting Started</h1>
        <p className="text-gray-300 text-lg mb-8">
          Welcome to ChatScale! This guide will help you set up and configure your AI chatbot in just a few simple steps.
        </p>

        <Separator className="my-8 bg-gray-800" />

        {/* Step 1 */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</div>
            <h2 className="text-2xl font-bold text-white">Create your account</h2>
          </div>
          <p className="text-gray-300 mb-6 pl-11">
            Sign up for a ChatScale account by visiting our registration page. You&apos;ll need to provide your business email and create a password.
          </p>
          <Card className="bg-[#1a1a1a] border-gray-800 ml-11">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-900/30 p-3 rounded-lg">
                  <Info className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Pro Tip</h3>
                  <p className="text-gray-400">
                    If you&apos;re part of a team, consider using a shared email address that multiple team members can access.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Step 2 */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</div>
            <h2 className="text-2xl font-bold text-white">Set up your chatbot</h2>
          </div>
          <p className="text-gray-300 mb-6 pl-11">
            Once logged in, navigate to the dashboard and click on &quot;Create New Chatbot.&quot; You&apos;ll be prompted to:
          </p>
          <ul className="space-y-3 mb-6 pl-11">
            {[
              "Name your chatbot",
              "Select your industry",
              "Choose a template or start from scratch",
              "Upload your brand assets (logo, colors, etc.)"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
          <div className="relative h-[300px] rounded-lg overflow-hidden ml-11 mb-6 bg-[#1a1a1a]">
            <Image
              src="/hero-gradient.png"
              alt="Dashboard setup screen"
              fill
              className="object-cover"
              onError={handleImageError}
            />
          </div>
        </div>

        {/* Step 3 */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</div>
            <h2 className="text-2xl font-bold text-white">Train your AI</h2>
          </div>
          <p className="text-gray-300 mb-6 pl-11">
            Upload your knowledge base documents to train your chatbot. This can include:
          </p>
          <ul className="space-y-3 mb-6 pl-11">
            {[
              "FAQs",
              "Product documentation",
              "Support articles",
              "Company policies"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
          <Alert className="bg-[#1a1a1a] border-amber-800 text-amber-400 ml-11">
            <AlertDescription>
              The more quality content you provide, the better your chatbot will perform. We recommend at least 20 documents for optimal results.
            </AlertDescription>
          </Alert>
        </div>

        {/* Step 4 */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">4</div>
            <h2 className="text-2xl font-bold text-white">Customize conversations</h2>
          </div>
          <p className="text-gray-300 mb-6 pl-11">
            Design conversation flows that match your customer journey. You can:
          </p>
          <ul className="space-y-3 mb-6 pl-11">
            {[
              "Create welcome messages",
              "Set up fallback responses",
              "Design multi-step conversations",
              "Configure handoff to human agents"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Step 5 */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">5</div>
            <h2 className="text-2xl font-bold text-white">Deploy your chatbot</h2>
          </div>
          <p className="text-gray-300 mb-6 pl-11">
            Once you're satisfied with your chatbot, it's time to deploy it:
          </p>
          <ul className="space-y-3 mb-6 pl-11">
            {[
              "Generate an embed code for your website",
              "Integrate with your existing platforms (optional)",
              "Configure operating hours and availability",
              "Set up notifications for your team"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
          <Card className="bg-[#1a1a1a] border-gray-800 ml-11">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-900/30 p-3 rounded-lg">
                  <Info className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Next Steps</h3>
                  <p className="text-gray-400">
                    After deployment, monitor your chatbot's performance in the analytics dashboard and make adjustments as needed.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need more help?</h2>
          <p className="text-gray-300 mb-6">
            Our support team is available 24/7 to assist you with any questions or issues.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors">
              Contact Support
            </a>
            <a href="/docs/faq" className="bg-[#1a1a1a] hover:bg-[#252525] text-white px-6 py-3 rounded-md transition-colors">
              View FAQs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 