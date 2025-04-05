
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-8 mt-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-sm text-gray-500">
          <div className="flex items-center space-x-1 mb-2">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-purple fill-purple" />
            <span>by 하트플로우</span>
          </div>
          <p>대화 데이터는 분석 후 저장되지 않습니다.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
