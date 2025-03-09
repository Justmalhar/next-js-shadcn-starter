"use client";

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageTemplateProps {
  children: React.ReactNode;
}

export default function PageTemplate({ children }: PageTemplateProps) {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: 'var(--brand-dark)' }}>
      <Navbar />
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
    </div>
  );
} 