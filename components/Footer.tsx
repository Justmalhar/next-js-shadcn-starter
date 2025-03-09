"use client";

import Link from "next/link";
import appData from '../app_data.json';
import { getIconByName } from "@/lib/utils";

interface FooterLink {
  title: string;
  items: {
    text: string;
    url: string;
  }[];
}

interface SocialLink {
  platform: string;
  icon: string;
  url: string;
}

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800 py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-white text-lg mb-4">{appData.companyName}</h3>
            <p className="text-gray-400 mb-6 max-w-xs">{appData.tagline}</p>
            <div className="flex items-center gap-4">
              {appData.footer.socialLinks.map((social: SocialLink, index: number) => (
                <Link 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">{social.platform}</span>
                  {getIconByName(social.icon)}
                </Link>
              ))}
            </div>
          </div>
          
          {appData.footer.links.map((section: FooterLink, index: number) => (
            <div key={index}>
              <h3 className="font-bold text-white text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.url} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">{appData.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 