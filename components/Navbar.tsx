"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import appData from '../app_data.json';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface NavigationLink {
  text: string;
  url: string;
  hasDropdown?: boolean;
  dropdownItems?: {
    text: string;
    url: string;
  }[];
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="py-4 px-4 md:px-6 lg:px-8 border-b border-gray-800 sticky top-0 z-50 backdrop-blur-md bg-black/80">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src={appData.navigation.logo} 
                alt={`${appData.companyName} Logo`} 
                width={32} 
                height={32}
                className="text-white"
              />
              <span className="font-bold text-lg text-white hidden sm:inline-block">{appData.companyName}</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              {appData.navigation.links.map((link: NavigationLink, index: number) => (
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
                        ) : null}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link href={link.url} className="text-gray-300 hover:text-white transition-colors">
                      {link.text}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <Button asChild variant="ghost" className=" btn-brand-primary text-gray-300 hover:text-white">
              <Link href={appData.navigation.ctaButton.url}>
                {appData.navigation.ctaButton.text}
              </Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <nav className="flex flex-col gap-4">
              {appData.navigation.links.map((link: NavigationLink, index: number) => (
                <div key={index}>
                  {link.hasDropdown ? (
                    <div className="flex flex-col gap-2">
                      <div className="text-gray-300 font-medium">{link.text}</div>
                      <div className="pl-4 flex flex-col gap-2">
                        {link.dropdownItems ? (
                          link.dropdownItems.map((item, itemIndex) => (
                            <Link 
                              key={itemIndex} 
                              href={item.url}
                              className="text-gray-400 hover:text-white transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.text}
                            </Link>
                          ))
                        ) : null}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      href={link.url} 
                      className="text-gray-300 hover:text-white transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.text}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <Button asChild className="w-full" size="sm">
                  <Link 
                    href={appData.navigation.ctaButton.url}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {appData.navigation.ctaButton.text}
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 