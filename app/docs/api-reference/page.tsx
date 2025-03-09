"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Code } from "@/components/ui/code";

export default function ApiReferencePage() {
  return (
    <div className="py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">API Reference</h1>
        <p className="text-gray-300 text-lg mb-8">
          Integrate ChatScale AI chatbots with your applications using our comprehensive API.
        </p>

        <Separator className="my-8 bg-gray-800" />

        {/* Authentication */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Authentication</h2>
          <p className="text-gray-300 mb-6">
            All API requests require authentication using an API key. You can generate an API key in your ChatScale dashboard.
          </p>
          
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-md p-4 mb-6">
            <p className="text-gray-300 font-mono mb-2">HTTP Request Header:</p>
            <Code className="bg-[#0f0f0f] text-gray-300 p-3 rounded">
              Authorization: Bearer YOUR_API_KEY
            </Code>
          </div>
        </section>

        {/* Base URL */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Base URL</h2>
          <p className="text-gray-300 mb-6">
            All API requests should be made to the following base URL:
          </p>
          
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-md p-4 mb-6">
            <Code className="bg-[#0f0f0f] text-gray-300 p-3 rounded">
              https://api.chatscale.ai/v1
            </Code>
          </div>
        </section>

        {/* Endpoints */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Endpoints</h2>
          
          <Tabs defaultValue="chatbots" className="w-full">
            <TabsList className="bg-[#1a1a1a] border-gray-800">
              <TabsTrigger value="chatbots">Chatbots</TabsTrigger>
              <TabsTrigger value="conversations">Conversations</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="chatbots" className="pt-6">
              <div className="space-y-8">
                {/* GET Chatbots */}
                <div>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded mr-3">GET</span>
                    <h3 className="text-xl font-semibold text-white">/chatbots</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Returns a list of all chatbots in your account.
                  </p>
                  
                  <div className="bg-[#1a1a1a] border border-gray-800 rounded-md p-4 mb-4">
                    <p className="text-gray-300 font-mono mb-2">Example Response:</p>
                    <Code className="bg-[#0f0f0f] text-gray-300 p-3 rounded">
{`{
  "chatbots": [
    {
      "id": "chat_123456",
      "name": "Support Bot",
      "status": "active",
      "created_at": "2023-01-15T12:00:00Z",
      "updated_at": "2023-02-20T15:30:00Z"
    },
    {
      "id": "chat_789012",
      "name": "Sales Assistant",
      "status": "inactive",
      "created_at": "2023-03-10T09:15:00Z",
      "updated_at": "2023-03-10T09:15:00Z"
    }
  ],
  "total": 2,
  "page": 1,
  "per_page": 10
}`}
                    </Code>
                  </div>
                </div>
                
                {/* GET Chatbot by ID */}
                <div>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded mr-3">GET</span>
                    <h3 className="text-xl font-semibold text-white">/chatbots/:id</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Returns details for a specific chatbot.
                  </p>
                  
                  <div className="bg-[#1a1a1a] border border-gray-800 rounded-md p-4 mb-4">
                    <p className="text-gray-300 font-mono mb-2">Example Response:</p>
                    <Code className="bg-[#0f0f0f] text-gray-300 p-3 rounded">
{`{
  "id": "chat_123456",
  "name": "Support Bot",
  "status": "active",
  "created_at": "2023-01-15T12:00:00Z",
  "updated_at": "2023-02-20T15:30:00Z",
  "settings": {
    "welcome_message": "Hello! How can I help you today?",
    "fallback_message": "I'm sorry, I couldn't understand that. Could you rephrase?",
    "working_hours": {
      "enabled": true,
      "timezone": "UTC",
      "schedule": [
        {"day": "monday", "start": "09:00", "end": "17:00"},
        {"day": "tuesday", "start": "09:00", "end": "17:00"},
        {"day": "wednesday", "start": "09:00", "end": "17:00"},
        {"day": "thursday", "start": "09:00", "end": "17:00"},
        {"day": "friday", "start": "09:00", "end": "17:00"}
      ]
    }
  }
}`}
                    </Code>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="conversations" className="pt-6">
              <div className="space-y-8">
                {/* POST Message */}
                <div>
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded mr-3">POST</span>
                    <h3 className="text-xl font-semibold text-white">/conversations/:id/messages</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Send a message to an existing conversation.
                  </p>
                  
                  <div className="bg-[#1a1a1a] border border-gray-800 rounded-md p-4 mb-4">
                    <p className="text-gray-300 font-mono mb-2">Request Body:</p>
                    <Code className="bg-[#0f0f0f] text-gray-300 p-3 rounded mb-4">
{`{
  "message": "How do I reset my password?",
  "user_id": "user_12345"
}`}
                    </Code>
                    
                    <p className="text-gray-300 font-mono mb-2">Example Response:</p>
                    <Code className="bg-[#0f0f0f] text-gray-300 p-3 rounded">
{`{
  "id": "msg_67890",
  "conversation_id": "conv_12345",
  "content": "To reset your password, please go to the login page and click on 'Forgot Password'. You'll receive an email with instructions to create a new password.",
  "created_at": "2023-04-10T14:22:33Z",
  "sender_type": "bot"
}`}
                    </Code>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="analytics" className="pt-6">
              <div className="space-y-8">
                {/* GET Analytics */}
                <div>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded mr-3">GET</span>
                    <h3 className="text-xl font-semibold text-white">/analytics</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Retrieve analytics data for your chatbots.
                  </p>
                  
                  <div className="bg-[#1a1a1a] border border-gray-800 rounded-md p-4 mb-4">
                    <p className="text-gray-300 font-mono mb-2">Query Parameters:</p>
                    <Code className="bg-[#0f0f0f] text-gray-300 p-3 rounded mb-4">
{`start_date=2023-01-01
end_date=2023-01-31
chatbot_id=chat_123456 (optional)
metrics=conversations,messages,satisfaction (optional)`}
                    </Code>
                    
                    <p className="text-gray-300 font-mono mb-2">Example Response:</p>
                    <Code className="bg-[#0f0f0f] text-gray-300 p-3 rounded">
{`{
  "period": {
    "start": "2023-01-01",
    "end": "2023-01-31"
  },
  "metrics": {
    "conversations": {
      "total": 1250,
      "daily": [
        {"date": "2023-01-01", "count": 42},
        {"date": "2023-01-02", "count": 38},
        // ...more dates
      ]
    },
    "messages": {
      "total": 8750,
      "average_per_conversation": 7
    },
    "satisfaction": {
      "average_rating": 4.7,
      "response_rate": 0.35
    }
  }
}`}
                    </Code>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Rate Limits */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Rate Limits</h2>
          <p className="text-gray-300 mb-6">
            API requests are subject to the following rate limits:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1a1a1a]">
                  <th className="border border-gray-800 p-3 text-left text-white">Plan</th>
                  <th className="border border-gray-800 p-3 text-left text-white">Rate Limit</th>
                  <th className="border border-gray-800 p-3 text-left text-white">Burst Limit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-800 p-3 text-gray-300">Free</td>
                  <td className="border border-gray-800 p-3 text-gray-300">100 requests/hour</td>
                  <td className="border border-gray-800 p-3 text-gray-300">20 requests/minute</td>
                </tr>
                <tr className="bg-[#1a1a1a]">
                  <td className="border border-gray-800 p-3 text-gray-300">Pro</td>
                  <td className="border border-gray-800 p-3 text-gray-300">1,000 requests/hour</td>
                  <td className="border border-gray-800 p-3 text-gray-300">100 requests/minute</td>
                </tr>
                <tr>
                  <td className="border border-gray-800 p-3 text-gray-300">Enterprise</td>
                  <td className="border border-gray-800 p-3 text-gray-300">10,000 requests/hour</td>
                  <td className="border border-gray-800 p-3 text-gray-300">500 requests/minute</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <Separator className="my-8 bg-gray-800" />

        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need help with integration?</h2>
          <p className="text-gray-300 mb-6">
            Our developer support team is ready to assist you with any API integration questions.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors">
              Contact Developer Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 