import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Quote } from '../../types';

interface QuoteSliderProps {
  quotes: Quote[];
}

const QuoteSlider: React.FC<QuoteSliderProps> = ({ quotes }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextQuote();
    }, 7000);
    
    return () => clearInterval(interval);
  }, [activeIndex, quotes.length]);

  const nextQuote = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % quotes.length);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 800);
    }, 400);
  };

  if (quotes.length === 0) return null;
  
  const activeQuote = quotes[activeIndex];

  return (
    <div className="relative flex flex-col items-center py-16 px-6 overflow-hidden">
      <h2 className="text-neutral-500 text-sm tracking-widest uppercase mb-2">
        PERSONAL REFLECTIONS
      </h2>
      
      <div 
        className={`relative flex flex-col items-center transition-all duration-800 ${
          isTransitioning ? 'opacity-0 transform translate-y-5' : 'opacity-100'
        }`}
        style={{ height: '16rem' }}
      >
        <div className="text-center mb-4" dir="rtl">
          <p className="font-arabic text-3xl md:text-4xl leading-relaxed text-neutral-800">
            {activeQuote.arabicText}
          </p>
        </div>
        
        <div className="text-center mb-8">
          <p className="font-serif text-lg md:text-xl text-neutral-600 italic">
            {activeQuote.englishText}
          </p>
        </div>
        
        <Link 
          to={`/quote/${activeQuote.id}`}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-neutral-700 hover:text-neutral-900 transition-all duration-300 group"
        >
          <span>Read More</span>
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      
      <div className="flex gap-2 mt-10">
        {quotes.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === activeIndex 
                ? 'bg-neutral-700 w-4' 
                : 'bg-neutral-300 hover:bg-neutral-400'
            }`}
            aria-label={`Go to quote ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default QuoteSlider;