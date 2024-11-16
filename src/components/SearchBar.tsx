import React, { useState } from 'react';
import { Search } from 'lucide-react';

const funnyResponses = [
  "🌴 Patience young padawan, we're launching in 2 weeks!",
  "🏖️ Hold your horses! We're still packing our beach bags...",
  "🌊 Surfing through our database... just kidding, we're not live yet!",
  "🐠 Our fish are still learning to swim... check back in 2 weeks!",
  "🌺 Like a flower, we're still blooming... almost there!",
  "🎯 So close, yet so far... launching in 2 weeks!",
  "🚀 T-minus 2 weeks until liftoff!",
  "🎨 Still painting our masterpiece... almost ready!",
  "🎭 Plot twist: we're launching in 2 weeks!",
  "🎪 The show begins in 2 weeks... get ready!"
];

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.length > 2) {
      const randomResponse = funnyResponses[Math.floor(Math.random() * funnyResponses.length)];
      setResponse(randomResponse);
    } else {
      setResponse('');
    }
  };

  return (
    <div className="max-w-3xl mx-auto transform hover:scale-105 transition-transform duration-300">
      <div className="bg-white/95 backdrop-blur-sm p-3 rounded-2xl shadow-xl">
        <div className="flex items-center bg-gray-50 rounded-xl p-3">
          <Search className="h-6 w-6 text-primary" />
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="What are you looking for?"
            className="w-full ml-3 bg-transparent border-none focus:outline-none text-gray-800 placeholder-gray-400"
          />
        </div>
        {response && (
          <div className="mt-2 p-3 text-center text-gray-700 animate-fade-in">
            {response}
          </div>
        )}
      </div>
    </div>
  );
}