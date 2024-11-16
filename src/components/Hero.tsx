import React, { useState } from 'react';
import { SearchBar } from './SearchBar';
import { Button } from './Button';
import { BetaSignupModal } from './BetaSignupModal';
import { BusinessRegistrationModal } from './BusinessRegistrationModal';

export function Hero() {
  const [isBetaModalOpen, setBetaModalOpen] = useState(false);
  const [isBusinessModalOpen, setBusinessModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzLTItMi00LTJsLTIgMnYyaDJ2MmgyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/20" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="text-center w-full space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Your Gateway to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient">
                Everything Diani
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Find services, products, activities, properties, and more – effortlessly.
            </p>
          </div>
          
          <SearchBar />

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button variant="primary" size="lg" onClick={() => setBetaModalOpen(true)}>
              Join Our Beta Program
            </Button>
            <Button variant="secondary" size="lg" onClick={() => setBusinessModalOpen(true)}>
              List Your Business – 3 Months Free
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 fill-white" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,100 C30,90 70,90 100,100 L100,100 L0,100 Z" />
        </svg>
      </div>

      <BetaSignupModal isOpen={isBetaModalOpen} onClose={() => setBetaModalOpen(false)} />
      <BusinessRegistrationModal isOpen={isBusinessModalOpen} onClose={() => setBusinessModalOpen(false)} />
    </div>
  );
}