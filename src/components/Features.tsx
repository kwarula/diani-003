import React from 'react';
import { MessageSquare, Compass, Users, Gift } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: "AI-Powered Search",
    description: "Search using natural language through chat or voice."
  },
  {
    icon: Compass,
    title: "Comprehensive Listings",
    description: "From local services to activities and properties, find it all in one place."
  },
  {
    icon: Users,
    title: "For Locals & Visitors",
    description: "Tailored for everyone in Diani Beach – residents and tourists alike."
  },
  {
    icon: Gift,
    title: "Exclusive Offers",
    description: "Get access to special promotions and deals."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Why Choose Discover Diani?
          </h2>
          <p className="text-gray-600 text-lg">
            Experience the easiest way to discover everything Diani Beach has to offer
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl transform scale-0 group-hover:scale-100 transition-transform" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}