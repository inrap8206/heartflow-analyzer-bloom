
import React from 'react';
import { Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-6">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-purple animate-pulse-slow" />
            <h1 className="text-2xl font-bold text-gray-800">하트플로우</h1>
          </div>
          <div className="text-sm text-gray-500">감정·관계 분석</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
