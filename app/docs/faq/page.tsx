"use client";

import React, { useState, ChangeEvent } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

export default function FaqPage() {
  // Sample FAQ data
  const faqCategories = [
    {
      name: "General",
      questions: [
        {
          question: "What is ChatScale?",
          answer: "ChatScale is an AI-powered chatbot platform that helps businesses automate customer interactions, support, and lead generation through intelligent conversational interfaces."
        },
        {
          question: "How does ChatScale differ from other chatbot platforms?",
          answer: "ChatScale combines advanced AI technology with industry-specific training to create chatbots that truly understand your business context. Our platform offers deeper customization, more accurate responses, and better analytics than generic chatbot solutions."
        },
        {
          question: "Do I need technical skills to use ChatScale?",
          answer: "No technical skills are required. Our platform is designed with a user-friendly interface that allows anyone to create, customize, and deploy chatbots without coding knowledge."
        },
        {
          question: "How long does it take to set up a chatbot?",
          answer: "Basic setup can be completed in as little as 30 minutes. More comprehensive chatbots with custom training and integrations typically take 1-2 days to fully configure and optimize."
        }
      ]
    },
    {
      name: "Pricing & Plans",
      questions: [
        {
          question: "How much does ChatScale cost?",
          answer: "ChatScale offers flexible pricing plans starting at $49/month for our Basic plan. We also offer Professional ($149/month) and Enterprise (custom pricing) plans with additional features and capabilities. Visit our pricing page for detailed information."
        },
        {
          question: "Is there a free trial available?",
          answer: "Yes, we offer a 14-day free trial with full access to all features in our Professional plan. No credit card is required to start your trial."
        },
        {
          question: "Can I change plans later?",
          answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, the new features become available immediately. When downgrading, changes take effect at the start of your next billing cycle."
        },
        {
          question: "Do you offer discounts for annual subscriptions?",
          answer: "Yes, we offer a 20% discount when you choose annual billing for any of our plans."
        }
      ]
    },
    {
      name: "Features & Capabilities",
      questions: [
        {
          question: "What languages does ChatScale support?",
          answer: "ChatScale currently supports English, Spanish, French, German, Italian, Portuguese, Dutch, and Japanese. We're continuously adding support for more languages."
        },
        {
          question: "Can ChatScale integrate with my existing systems?",
          answer: "Yes, ChatScale offers integrations with popular CRM platforms, help desk software, e-commerce systems, and more. We also provide a robust API for custom integrations with your proprietary systems."
        },
        {
          question: "How does the AI training work?",
          answer: "You can train your chatbot by uploading documents, FAQs, product information, and other relevant content. Our AI analyzes this information to understand your business context and provide accurate responses to customer inquiries."
        },
        {
          question: "Can I customize the appearance of my chatbot?",
          answer: "Absolutely. You can customize the chatbot's appearance to match your brand, including colors, fonts, avatar, and chat window style. You can also add your logo and create custom welcome messages."
        }
      ]
    },
    {
      name: "Technical & Support",
      questions: [
        {
          question: "What platforms can I deploy my chatbot on?",
          answer: "ChatScale chatbots can be deployed on your website, mobile apps, Facebook Messenger, WhatsApp, Telegram, and other popular messaging platforms."
        },
        {
          question: "How secure is my data with ChatScale?",
          answer: "We take data security very seriously. All data is encrypted both in transit and at rest. We are GDPR compliant and follow industry best practices for data protection. We never share your data with third parties without your explicit permission."
        },
        {
          question: "What kind of support do you offer?",
          answer: "All plans include email support with 24-hour response times. Professional and Enterprise plans include priority email support, and Enterprise plans also include dedicated account management and phone support."
        },
        {
          question: "Can I export my chatbot data?",
          answer: "Yes, you can export conversation logs, analytics data, and customer information in CSV or JSON format at any time."
        }
      ]
    }
  ];

  // State for search and expanded items
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});

  // Toggle question expansion
  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setExpandedQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Filter questions based on search query
  const filteredCategories = searchQuery.trim() === "" 
    ? faqCategories 
    : faqCategories.map(category => ({
        ...category,
        questions: category.questions.filter(q => 
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.questions.length > 0);

  return (
    <div className="py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Frequently Asked Questions</h1>
        <p className="text-gray-300 text-lg mb-8">
          Find answers to common questions about ChatScale and our AI chatbot platform.
        </p>

        {/* Search */}
        <div className="relative mb-12">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            type="text"
            placeholder="Search questions..."
            className="pl-10 bg-[#1a1a1a] border-gray-800 text-white"
            value={searchQuery}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* FAQ Categories */}
        {filteredCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">{category.name}</h2>
            <div className="space-y-4">
              {category.questions.map((item, questionIndex) => {
                const isExpanded = expandedQuestions[`${categoryIndex}-${questionIndex}`];
                return (
                  <div 
                    key={questionIndex} 
                    className="bg-[#1a1a1a] border border-gray-800 rounded-lg overflow-hidden"
                  >
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center"
                      onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                    >
                      <span className="text-white font-medium">{item.question}</span>
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                    {isExpanded && (
                      <div className="px-6 py-4 border-t border-gray-800">
                        <p className="text-gray-300">{item.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-white mb-2">No results found</h3>
            <p className="text-gray-400">
              We couldn&apos;t find any questions matching your search. Try different keywords or browse the categories.
            </p>
          </div>
        )}

        <Separator className="my-12 bg-gray-800" />

        {/* Still have questions */}
        <div className="bg-[#0f0f0f] border border-gray-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
          <p className="text-gray-300 mb-6">
            If you couldn&apos;t find the answer you were looking for, our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors">
              Contact Support
            </a>
            <a href="/docs" className="bg-[#1a1a1a] hover:bg-[#252525] text-white px-6 py-3 rounded-md transition-colors">
              Browse Documentation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 