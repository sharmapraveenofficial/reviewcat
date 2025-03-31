'use client';

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Avoid hydration mismatch by only rendering theme components after mount
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-4 md:p-8 font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg" 
            alt="ReviewCat Logo"
            width={100}
            height={100}
            priority
          />
        </div>
        
        <button 
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors" 
          aria-label="Toggle theme"
          onClick={toggleTheme}
        >
          {mounted && (
            theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )
          )}
        </button>
      </header>
      
      {/* Main Content */}
      <main className="flex flex-col items-center justify-center max-w-3xl mx-auto text-center py-12">
        <div className="mb-8">
          <Image 
            src="/reviewcat-illustration.svg" 
            alt="ReviewCat Illustration" 
            width={200} 
            height={200}
            className="mx-auto mb-8"
          />
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-700 dark:text-emerald-500">
            Coming Soon: ReviewCat
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            Your app reviews watchlist is being built. Monitor your favorite apps and track their reviews in real-time.
          </p>
          <div className="flex flex-col gap-2 max-w-md mx-auto">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Join our waitlist and we&apos;ll notify you as soon as we&apos;re live!
            </p>
            <div className="flex w-full mt-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-r-lg transition-colors">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-emerald-600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Track All Reviews</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">Monitor reviews across app stores in one place</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-emerald-600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Protect Your Brand</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">Get notified of negative reviews instantly</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-emerald-600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Insightful Analytics</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">Discover trends and patterns in your reviews</p>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>© 2023 ReviewCat. All rights reserved.</p>
      </footer>
    </div>
  );
}
