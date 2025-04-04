import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';

export function SalePopup() {
  const [isVisible, setIsVisible] = useState(true);
  const [hasTimerEnded, setHasTimerEnded] = useState(false);

  useEffect(() => {
    if (hasTimerEnded) {
      const timeout = setTimeout(() => {
        setIsVisible(true);
        setHasTimerEnded(false);
      }, 7 * 60 * 1000); // 7 minutes

      return () => clearTimeout(timeout);
    }
  }, [hasTimerEnded]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-xl p-6 max-w-sm border-2 border-red-500 z-50">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        <X size={20} />
      </button>
      
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">🔥 Flash Sale!</h3>
        <div className="mb-4">
          <span className="text-gray-500 line-through text-lg">$19.99</span>
          <span className="text-2xl font-bold text-red-600 ml-2">$9.99</span>
        </div>
        
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2">Offer ends in:</p>
          <CountdownTimer 
            initialMinutes={10} 
            onComplete={() => {
              setIsVisible(false);
              setHasTimerEnded(true);
            }} 
          />
        </div>
        
        <a
          href="/checkout"
          className="block w-full bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors"
        >
          BUY NOW
        </a>
      </div>
    </div>
  );
}
