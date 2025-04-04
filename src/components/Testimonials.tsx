import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah M.",
    age: 34,
    text: "This ebook completely changed my approach to online dating. I met my fiancé three months after applying these principles!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "John D.",
    age: 37,
    text: "Finally, a Christian perspective on modern dating that actually works. Worth every penny!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Rachel K.",
    age: 32,
    text: "The practical advice and spiritual insights helped me navigate online dating while staying true to my faith.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-16">
      <div className="flex items-center">
        <button
          onClick={prev}
          className="absolute left-0 p-2 text-gray-600 hover:text-gray-900"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="w-full">
          <div className="text-center">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="text-xl italic mb-4">"{testimonials[currentIndex].text}"</p>
            <p className="font-semibold">
              {testimonials[currentIndex].name}, {testimonials[currentIndex].age}
            </p>
          </div>
        </div>

        <button
          onClick={next}
          className="absolute right-0 p-2 text-gray-600 hover:text-gray-900"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
