import React from 'react';
import { MessageSquare, CheckCircle, Gift, Store, TrendingUp } from 'lucide-react';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          How Does It Work?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div className="relative">
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative">
              <h3 className="text-2xl font-bold mb-8">For Users</h3>
              <div className="space-y-8">
                {[
                  {
                    icon: MessageSquare,
                    title: "Ask us anything via chat or voice",
                    description: "Use natural language to find exactly what you need"
                  },
                  {
                    icon: CheckCircle,
                    title: "Get instant, accurate results",
                    description: "Tailored recommendations based on your preferences"
                  },
                  {
                    icon: Gift,
                    title: "Enjoy your discoveries",
                    description: "Experience the best of Diani Beach"
                  }
                ].map((step, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary text-white transform group-hover:scale-110 transition-transform">
                        <step.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold mb-1">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
            <div className="relative">
              <h3 className="text-2xl font-bold mb-8">For Businesses</h3>
              <div className="space-y-8">
                {[
                  {
                    icon: Store,
                    title: "List your business for free",
                    description: "Get 3 months of premium features at no cost"
                  },
                  {
                    icon: CheckCircle,
                    title: "Get verified",
                    description: "Build trust with our verification process"
                  },
                  {
                    icon: TrendingUp,
                    title: "Grow your business",
                    description: "Reach more customers and increase your revenue"
                  }
                ].map((step, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-secondary text-white transform group-hover:scale-110 transition-transform">
                        <step.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold mb-1">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}