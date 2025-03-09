"use client";

import Image from "next/image";
import Link from "next/link";
import PageTemplate from "@/components/PageTemplate";
import pageData from "@/page_data.json";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Mock blog posts data (in a real app, this would come from a CMS or API)
const blogPosts = [
  {
    title: "The Future of Customer Service: AI and Human Collaboration",
    excerpt: "Discover how the most successful businesses are combining AI chatbots with human agents to create superior customer experiences.",
    date: "2023-05-15",
    author: "Sarah Johnson",
    image: "/blog/featured-post.jpg",
    slug: "future-of-customer-service",
    category: "AI Technology"
  },
  {
    title: "5 Ways AI Chatbots Are Transforming E-commerce",
    excerpt: "Learn how online retailers are using conversational AI to boost sales, improve customer satisfaction, and reduce cart abandonment.",
    date: "2023-04-22",
    author: "Michael Chen",
    image: "/blog/ecommerce-post.jpg",
    slug: "ai-chatbots-transforming-ecommerce",
    category: "Industry Trends"
  },
  {
    title: "Case Study: How TechCorp Reduced Support Costs by 43%",
    excerpt: "An in-depth look at how TechCorp implemented our AI chatbot solution and achieved remarkable ROI within just three months.",
    date: "2023-03-10",
    author: "Jessica Williams",
    image: "/blog/case-study-post.jpg",
    slug: "techcorp-case-study",
    category: "Case Studies"
  },
  {
    title: "Designing Conversational Flows That Convert",
    excerpt: "Best practices for creating chatbot conversations that guide users toward conversion while maintaining a natural, helpful tone.",
    date: "2023-02-28",
    author: "David Rodriguez",
    image: "/blog/conversational-flows-post.jpg",
    slug: "designing-conversational-flows",
    category: "Customer Experience"
  },
  {
    title: "ChatScale Platform: New Features Announcement",
    excerpt: "Explore the latest updates to our platform, including enhanced analytics, multilingual support, and improved integration options.",
    date: "2023-01-15",
    author: "Alex Thompson",
    image: "/blog/product-update-post.jpg",
    slug: "new-features-announcement",
    category: "Product Updates"
  }
];

export default function BlogPage() {
  const data = pageData.blog;
  
  return (
    <PageTemplate>
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{data.hero.title}</h1>
            <p className="text-xl text-gray-300">{data.hero.description}</p>
          </div>
          
          {/* Featured Post */}
          <Card className="bg-[#1a1a1a] border-gray-800 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-[300px] lg:h-auto">
                <Image
                  src={data.featuredPost.image}
                  alt={data.featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">Featured</span>
                  <span className="text-gray-400 text-sm">{data.featuredPost.date}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{data.featuredPost.title}</h2>
                <p className="text-gray-300 mb-6">{data.featuredPost.excerpt}</p>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gray-700"></div>
                  <span className="text-gray-300">{data.featuredPost.author}</span>
                </div>
                <Button asChild variant="default" className="bg-blue-600 hover:bg-blue-700 w-fit">
                  <Link href={`/blog/${data.featuredPost.slug}`}>
                    Read Article
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
      
      {/* Categories */}
      <section className="py-8 px-4 md:px-6 lg:px-8 bg-[#0f0f0f]">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant="ghost" className="text-white hover:bg-[#1a1a1a]">All</Button>
            {data.categories.map((category, index) => (
              <Button key={index} variant="ghost" className="text-gray-400 hover:text-white hover:bg-[#1a1a1a]">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-[#1a1a1a] border-gray-800 overflow-hidden flex flex-col h-full">
                <div className="relative h-[200px]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs">{post.category}</span>
                    <span className="text-gray-400 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                    <span className="text-gray-400 text-sm">{post.author}</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0 px-6 pb-6">
                  <Button asChild variant="ghost" className="text-blue-400 hover:text-blue-300 p-0 gap-2">
                    <Link href={`/blog/${post.slug}`}>
                      Read More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-12">
            <Button variant="outline" className="border-gray-800 text-gray-400 hover:text-white hover:bg-[#1a1a1a]" disabled>
              Previous
            </Button>
            <Button variant="outline" className="border-gray-800 bg-[#1a1a1a] text-white">1</Button>
            <Button variant="outline" className="border-gray-800 text-gray-400 hover:text-white hover:bg-[#1a1a1a]">2</Button>
            <Button variant="outline" className="border-gray-800 text-gray-400 hover:text-white hover:bg-[#1a1a1a]">3</Button>
            <Button variant="outline" className="border-gray-800 text-gray-400 hover:text-white hover:bg-[#1a1a1a]">
              Next
            </Button>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-[#0f0f0f]">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Subscribe to our newsletter</h2>
          <p className="text-xl text-gray-300 mb-8">Get the latest insights on AI chatbots and customer experience delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-white"
            />
            <Button className="bg-blue-600 hover:bg-blue-700">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
} 