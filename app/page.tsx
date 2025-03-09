"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
  BarChart, 
  Link as LinkIcon, 
  Shield, 
  Headphones, 
  Twitter, 
  Linkedin, 
  Github, 
  Facebook,
  Instagram,
  Target,
  Paintbrush,
  FileText,
  Search,
  Share2,
  Monitor,
  Video,
  ChevronDown,
  Star,
  ArrowRight,
  Menu,
  X
} from "lucide-react";

// Import JSON data directly
import landingPageData from '../app_data.json';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Function to get icon component by name
const getIconByName = (iconName: string) => {
  const icons: Record<string, React.ReactNode> = {
    BarChart: <BarChart className="h-8 w-8" />,
    Link: <LinkIcon className="h-8 w-8" />,
    Shield: <Shield className="h-8 w-8" />,
    HeadphonesIcon: <Headphones className="h-8 w-8" />,
    Twitter: <Twitter className="h-6 w-6" />,
    Linkedin: <Linkedin className="h-6 w-6" />,
    Github: <Github className="h-6 w-6" />,
    Facebook: <Facebook className="h-6 w-6" />,
    Instagram: <Instagram className="h-6 w-6" />,
    Target: <Target className="h-8 w-8" />,
    Paintbrush: <Paintbrush className="h-8 w-8" />,
    FileText: <FileText className="h-8 w-8" />,
    Search: <Search className="h-8 w-8" />,
    Share2: <Share2 className="h-8 w-8" />,
    Monitor: <Monitor className="h-8 w-8" />,
    Video: <Video className="h-8 w-8" />,
    Star: <Star className="h-4 w-4 fill-current" />,
    Headphones: <Headphones className="h-8 w-8" />
  };
  
  return icons[iconName] || null;
};

// Define types for our JSON data
interface Feature {
  title: string;
  description: string;
  icon: string;
  link: string;
}

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  avatar: string;
}

interface Service {
  title: string;
  description: string;
  icon: string;
  link: string;
}

interface SocialLink {
  platform: string;
  icon: string;
  url: string;
}

interface FooterLink {
  title: string;
  items: {
    text: string;
    url: string;
  }[];
}

interface NavigationLink {
  text: string;
  url: string;
  hasDropdown?: boolean;
  dropdownItems?: {
    text: string;
    url: string;
  }[];
}

export default function Home() {
  // Use the imported JSON data directly
  const data = landingPageData;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: 'var(--brand-dark)' }}>
      {/* Navigation */}
      <header className="py-4 px-4 md:px-6 lg:px-8 border-b border-gray-800 sticky top-0 z-50 backdrop-blur-md bg-black/80">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2">
                <Image 
                  src={data.navigation.logo} 
                  alt={`${data.companyName} Logo`} 
                  width={32} 
                  height={32}
                  className="text-white"
                />
                <span className="font-bold text-lg text-white hidden sm:inline-block">{data.companyName}</span>
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                {data.navigation.links.map((link: NavigationLink, index: number) => (
                  <div key={index} className="relative">
                    {link.hasDropdown ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors group">
                            {link.text}
                            <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-[#1a1a1a] border-gray-800 p-1 rounded-lg shadow-lg shadow-black/50 w-48 animate-in fade-in-80 slide-in-from-top-5">
                          {link.dropdownItems ? (
                            link.dropdownItems.map((item, itemIndex) => (
                              <DropdownMenuItem key={itemIndex} className="text-gray-300 hover:text-white focus:text-white hover:bg-[#252525] rounded-md py-2 px-3 cursor-pointer">
                                <Link href={item.url} className="w-full">
                                  {item.text}
                                </Link>
                              </DropdownMenuItem>
                            ))
                          ) : (
                            <>
                              <DropdownMenuItem className="text-gray-300 hover:text-white focus:text-white hover:bg-[#252525] rounded-md py-2 px-3 cursor-pointer">
                                <Link href={`${link.url}/option1`} className="w-full">Option 1</Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-gray-300 hover:text-white focus:text-white hover:bg-[#252525] rounded-md py-2 px-3 cursor-pointer">
                                <Link href={`${link.url}/option2`} className="w-full">Option 2</Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-gray-300 hover:text-white focus:text-white hover:bg-[#252525] rounded-md py-2 px-3 cursor-pointer">
                                <Link href={`${link.url}/option3`} className="w-full">Option 3</Link>
                              </DropdownMenuItem>
                            </>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <Link 
                        href={link.url}
                        className="text-gray-300 hover:text-white transition-colors relative group"
                      >
                        {link.text}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--brand-red)] transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Button 
                size="sm" 
                className="btn-brand-primary hidden sm:flex"
                asChild
              >
                <Link href={data.navigation.ctaButton.url}>
                  {data.navigation.ctaButton.text}
                </Link>
              </Button>
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden text-white p-1 focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-800 animate-in slide-in-from-top-5">
              <nav className="flex flex-col space-y-4">
                {data.navigation.links.map((link: NavigationLink, index: number) => (
                  <div key={index} className="py-2">
                    {link.hasDropdown ? (
                      <div className="space-y-2">
                        <div className="font-medium text-white">{link.text}</div>
                        <div className="pl-4 space-y-2 border-l border-gray-800">
                          {link.dropdownItems ? (
                            link.dropdownItems.map((item, itemIndex) => (
                              <Link 
                                key={itemIndex} 
                                href={item.url}
                                className="block text-gray-300 hover:text-white py-1"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {item.text}
                              </Link>
                            ))
                          ) : (
                            <>
                              <Link href={`${link.url}/option1`} className="block text-gray-300 hover:text-white py-1" onClick={() => setMobileMenuOpen(false)}>
                                Option 1
                              </Link>
                              <Link href={`${link.url}/option2`} className="block text-gray-300 hover:text-white py-1" onClick={() => setMobileMenuOpen(false)}>
                                Option 2
                              </Link>
                              <Link href={`${link.url}/option3`} className="block text-gray-300 hover:text-white py-1" onClick={() => setMobileMenuOpen(false)}>
                                Option 3
                              </Link>
                            </>
                          )}
                        </div>
                      </div>
                    ) : (
                      <Link 
                        href={link.url}
                        className="block text-gray-300 hover:text-white font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.text}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 mt-4 border-t border-gray-800">
                  <Button 
                    className="btn-brand-primary w-full"
                    asChild
                  >
                    <Link href={data.navigation.ctaButton.url} onClick={() => setMobileMenuOpen(false)}>
                      {data.navigation.ctaButton.text}
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 relative overflow-hidden gradient-bg">
        {/* Floating chat bubbles */}
        <div className="absolute top-1/4 left-[10%] animate-float-slow animation-delay-200 opacity-60 hidden md:block">
          <div className="chat-bubble chat-bubble-left">
            How can I help you today?
          </div>
        </div>
        <div className="absolute top-1/3 right-[15%] animate-float animation-delay-300 opacity-60 hidden md:block">
          <div className="chat-bubble chat-bubble-right">
            I need customer support
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[20%] animate-float animation-delay-500 opacity-60 hidden md:block">
          <div className="chat-bubble chat-bubble-right">
            Thanks for the quick response!
          </div>
        </div>
        <div className="absolute bottom-1/3 right-[10%] animate-float-slow animation-delay-100 opacity-60 hidden md:block">
          <div className="chat-bubble chat-bubble-left">
            <div className="typing-indicator">
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
            </div>
          </div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          {/* Client count badge */}
          <div className="inline-flex items-center gap-2 mb-8 bg-[#1a1a1a]/70 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-800 animate-fade-in">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-700 border-2 border-[#0a0a0a]"></div>
              ))}
            </div>
            <div className="flex items-center gap-1">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-[var(--brand-red)] fill-[var(--brand-red)]" />
                ))}
              </div>
              <span className="text-sm font-medium ml-1">{data.hero.clientCount}</span>
            </div>
          </div>
          
          {/* Company name above main heading */}
          <div className="mb-4 animate-fade-in-up">
            <span className="text-xl md:text-2xl font-semibold text-[var(--brand-red)]">{data.companyName}</span>
          </div>
          
          {/* Main heading with styled text */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto animate-fade-in-up animation-delay-100">
            {data.hero.title.includes("transform") ? (
              <>
                Ready to{" "}
                <span className="italic font-light text-gradient">transform</span>{" "}
                your business with AI chatbots?
              </>
            ) : (
              data.hero.title
            )}
          </h1>
          
          <p className="text-lg text-[var(--brand-text-muted)] max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200">
            {data.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-fade-in-up animation-delay-300">
            <Button 
              size="lg" 
              className="btn-brand-primary group"
              asChild
            >
              <Link href={data.hero.ctaLink} className="flex items-center gap-2">
                {data.hero.ctaText}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="btn-brand-secondary"
              asChild
            >
              <Link href={data.hero.secondaryCtaLink}>{data.hero.secondaryCtaText}</Link>
            </Button>
          </div>
          
          {/* Gradient effect with chat icon */}
          <div className="relative h-40 w-full max-w-3xl mx-auto animate-fade-in animation-delay-400">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4F46E5]/20 via-[#818CF8]/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-[#0a0a0a] flex items-center justify-center border-2 border-[var(--brand-red)] animate-float">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path d="M18 10C18 6.68629 14.4183 4 10 4C5.58172 4 2 6.68629 2 10C2 11.5367 2.8 12.9385 4.13192 14C3.4 15.5 2 16 2 16C2 16 5 16 7 14.5C7.92373 14.8273 8.93917 15 10 15C14.4183 15 18 12.7614 18 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 9H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M8 12H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[var(--brand-red)] glow-effect"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">Our Services</h2>
            <p className="text-[var(--brand-text-muted)] max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
              We offer comprehensive AI chatbot solutions to help your business grow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.services.map((service: Service, index: number) => (
              <Card key={index} className={`bg-[var(--brand-dark-card)] border-gray-800 h-full card-hover animate-fade-in-up animation-delay-${(index + 1) * 100}`}>
                <CardHeader>
                  <div className="mb-4 text-[var(--brand-red)]">
                    {getIconByName(service.icon)}
                  </div>
                  <CardTitle className="text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[var(--brand-text-muted)]">
                    {service.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="px-0 text-[var(--brand-red)] group" asChild>
                    <Link href={service.link} className="flex items-center gap-1">
                      Learn more
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Feature Comparison Table */}
          <div className="mt-24 overflow-hidden rounded-xl border border-gray-800 bg-[var(--brand-dark-card)] animate-fade-in-up">
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Compare Chatbot Features</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="py-4 px-4 text-left font-medium text-white">Feature</th>
                      <th className="py-4 px-4 text-center font-medium text-white">Basic</th>
                      <th className="py-4 px-4 text-center font-medium text-white">Professional</th>
                      <th className="py-4 px-4 text-center font-medium text-white">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800">
                      <td className="py-4 px-4 text-[var(--brand-text-muted)]">24/7 Customer Support</td>
                      <td className="py-4 px-4 text-center text-green-500">✓</td>
                      <td className="py-4 px-4 text-center text-green-500">✓</td>
                      <td className="py-4 px-4 text-center text-green-500">✓</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-4 px-4 text-[var(--brand-text-muted)]">Multi-language Support</td>
                      <td className="py-4 px-4 text-center text-[var(--brand-text-muted)]">Limited</td>
                      <td className="py-4 px-4 text-center text-green-500">✓</td>
                      <td className="py-4 px-4 text-center text-green-500">✓</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-4 px-4 text-[var(--brand-text-muted)]">Custom AI Training</td>
                      <td className="py-4 px-4 text-center text-red-500">✗</td>
                      <td className="py-4 px-4 text-center text-green-500">✓</td>
                      <td className="py-4 px-4 text-center text-green-500">✓</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-4 px-4 text-[var(--brand-text-muted)]">Advanced Analytics</td>
                      <td className="py-4 px-4 text-center text-red-500">✗</td>
                      <td className="py-4 px-4 text-center text-green-500">✓</td>
                      <td className="py-4 px-4 text-center text-green-500">✓</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-4 px-4 text-[var(--brand-text-muted)]">API Integration</td>
                      <td className="py-4 px-4 text-center text-red-500">✗</td>
                      <td className="py-4 px-4 text-center text-[var(--brand-text-muted)]">Limited</td>
                      <td className="py-4 px-4 text-center text-green-500">✓</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 text-[var(--brand-text-muted)]">Dedicated Account Manager</td>
                      <td className="py-4 px-4 text-center text-red-500">✗</td>
                      <td className="py-4 px-4 text-center text-red-500">✗</td>
                      <td className="py-4 px-4 text-center text-green-500">✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-[#0c0c0c] p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-[var(--brand-text-muted)]">Find the perfect plan for your business needs</p>
              <Button className="btn-brand-primary" asChild>
                <Link href="/pricing">View Pricing Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-[#0c0c0c] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-gradient-start)] via-transparent to-transparent opacity-30"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-[var(--brand-text-muted)] max-w-2xl mx-auto">
              Our proven process delivers results for your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.features.map((feature: Feature, index: number) => (
              <Card key={index} className="bg-[var(--brand-dark-card)] border-gray-800 h-full card-hover">
                <CardHeader>
                  <div className="mb-4 text-[var(--brand-red)]">
                    {getIconByName(feature.icon)}
                  </div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[var(--brand-text-muted)]">
                    {feature.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="px-0 text-[var(--brand-red)] group" asChild>
                    <Link href={feature.link} className="flex items-center gap-1">
                      Learn more
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-[var(--brand-text-muted)] max-w-2xl mx-auto">
              See what our clients have to say about working with us.
            </p>
          </div>
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {data.testimonials.map((testimonial: Testimonial, index: number) => (
                <CarouselItem key={index}>
                  <Card className="bg-[var(--brand-dark-card)] border-gray-800 h-full">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden mb-2 border-2 border-[var(--brand-red)]">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex mb-2">
                          {[1, 2, 3, 4, 5].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-[var(--brand-red)] fill-[var(--brand-red)]" />
                          ))}
                        </div>
                        <p className="text-lg italic text-gray-300">&quot;{testimonial.quote}&quot;</p>
                        <div>
                          <p className="font-semibold text-white">{testimonial.author}</p>
                          <p className="text-sm text-[var(--brand-text-muted)]">{testimonial.position}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-[var(--brand-dark-card)] text-white border-gray-800 hover:bg-[var(--brand-gray)]" />
            <CarouselNext className="right-0 bg-[var(--brand-dark-card)] text-white border-gray-800 hover:bg-[var(--brand-gray)]" />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-[#0c0c0c] relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-gradient-start)] via-transparent to-transparent opacity-30"></div>
        <div className="container mx-auto text-center max-w-3xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.cta.title}</h2>
          <p className="text-lg mb-8 text-[var(--brand-text-muted)]">{data.cta.description}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="btn-brand-primary group"
              asChild
            >
              <Link href={data.cta.buttonLink} className="flex items-center gap-2">
                {data.cta.buttonText}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="btn-brand-secondary"
              asChild
            >
              <Link href={data.cta.secondaryLink}>{data.cta.secondaryText}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-6 lg:px-8 bg-[#0c0c0c] border-t border-gray-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Image 
                  src={data.navigation.logo} 
                  alt={`${data.companyName} Logo`} 
                  width={32} 
                  height={32}
                  className="text-white"
                />
                <h3 className="text-xl font-bold text-white">{data.companyName}</h3>
              </div>
              <p className="text-[var(--brand-text-muted)] mb-4 max-w-md">
                {data.footer.tagline}
              </p>
              <div className="flex space-x-4">
                {data.footer.socialLinks.map((social: SocialLink, index: number) => (
                  <Link 
                    key={index} 
                    href={social.url}
                    className="text-[var(--brand-text-muted)] hover:text-[var(--brand-red)] transition-colors"
                  >
                    {getIconByName(social.icon)}
                    <span className="sr-only">{social.platform}</span>
                  </Link>
                ))}
              </div>
            </div>
            
            {data.footer.links.map((linkGroup: FooterLink, index: number) => (
              <div key={index}>
                <h4 className="font-medium mb-4 text-white">{linkGroup.title}</h4>
                <ul className="space-y-2">
                  {linkGroup.items.map((item: { text: string; url: string }, itemIndex: number) => (
                    <li key={itemIndex}>
                      <Link 
                        href={item.url}
                        className="text-[var(--brand-text-muted)] hover:text-[var(--brand-red)] transition-colors"
                      >
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <Separator className="my-8 bg-gray-800" />
          
          <div className="text-center text-gray-500 text-sm">
            {data.footer.copyright}
          </div>
        </div>
      </footer>

      {/* Floating Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className={`bg-[#1a1a1a] rounded-lg shadow-lg transition-all duration-300 mb-4 ${chatOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`} style={{ width: '300px' }}>
          <div className="p-4 border-b border-gray-800 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[var(--brand-red)] flex items-center justify-center text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 10C18 6.68629 14.4183 4 10 4C5.58172 4 2 6.68629 2 10C2 11.5367 2.8 12.9385 4.13192 14C3.4 15.5 2 16 2 16C2 16 5 16 7 14.5C7.92373 14.8273 8.93917 15 10 15C14.4183 15 18 12.7614 18 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="font-medium text-white">{data.companyName} Assistant</div>
            </div>
            <button 
              onClick={() => setChatOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="p-4 h-64 overflow-y-auto flex flex-col space-y-3">
            <div className="chat-bubble chat-bubble-left">
              Hi there! 👋 How can I help you today?
            </div>
            <div className="chat-bubble chat-bubble-left">
              I can answer questions about our AI chatbot solutions or help you get started with a demo.
            </div>
            <div className="flex justify-start">
              <div className="typing-indicator mt-2">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-gray-800">
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 bg-[#252525] border border-gray-700 rounded-full px-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] focus:border-transparent"
              />
              <button className="bg-[var(--brand-red)] text-white rounded-full w-8 h-8 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <button 
          onClick={() => setChatOpen(!chatOpen)}
          className="bg-[var(--brand-red)] hover:bg-[var(--brand-red-hover)] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        >
          {chatOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 10C18 6.68629 14.4183 4 10 4C5.58172 4 2 6.68629 2 10C2 11.5367 2.8 12.9385 4.13192 14C3.4 15.5 2 16 2 16C2 16 5 16 7 14.5C7.92373 14.8273 8.93917 15 10 15C14.4183 15 18 12.7614 18 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 9H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M8 12H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
