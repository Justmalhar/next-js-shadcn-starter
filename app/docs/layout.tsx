"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import appData from "@/app_data.json";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Find the docs dropdown items from the navigation
  const docsNavItem = appData.navigation.links.find(link => link.text === "Docs");
  const docsPages = docsNavItem?.dropdownItems || [];

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#0f0f0f] p-6 md:min-h-screen">
        <div className="sticky top-24">
          <h3 className="text-xl font-bold text-white mb-6">Documentation</h3>
          <nav>
            <ul className="space-y-3">
              {docsPages.map((page, index) => (
                <li key={index}>
                  <Link 
                    href={page.url} 
                    className={`block py-2 px-3 rounded-md transition-colors ${
                      pathname === page.url 
                        ? "bg-blue-900/30 text-blue-400" 
                        : "text-gray-300 hover:bg-[#1a1a1a] hover:text-white"
                    }`}
                  >
                    {page.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-w-0">
        {children}
      </main>
    </div>
  );
} 