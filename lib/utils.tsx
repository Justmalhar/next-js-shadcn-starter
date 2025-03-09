import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";
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
  Video
} from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to get icon component by name
export const getIconByName = (iconName: string): React.ReactNode => {
  const icons: Record<string, React.ReactNode> = {
    BarChart: <BarChart className="h-8 w-8" />,
    Link: <LinkIcon className="h-8 w-8" />,
    Shield: <Shield className="h-8 w-8" />,
    Headphones: <Headphones className="h-8 w-8" />,
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
    Video: <Video className="h-8 w-8" />
  };
  
  return icons[iconName] || <div className="h-8 w-8 bg-gray-800 rounded-md" />;
}; 