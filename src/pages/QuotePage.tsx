import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { quotes } from '../data';

const QuotePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  const quote = quotes.find(q => q.id === id);
  
  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!quote) {
    return (
      <div className="container mx-auto max-w-2xl px-4 py-16">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Quote not found</h1>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-neutral-700"
          >
            <ArrowLeft size={16} />
            <span>Back to home</span>
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className={`container mx-auto max-w-2xl px-4 py-8 transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 mb-10 text-neutral-600 hover:text-neutral-900 transition-colors"
      >
        <ArrowLeft size={16} />
        <span>Back</span>
      </button>
      
      <div className="glass rounded-xl p-10 md:p-12">
        <div className="mb-12 flex justify-center">
          <div className="w-20 h-0.5 bg-neutral-400/50"></div>
        </div>
        
        <div className="text-center mb-12" dir="rtl">
          <p className="font-arabic text-3xl md:text-4xl leading-relaxed text-neutral-800">
            {quote.arabicText}
          </p>
        </div>
        
        <div className="text-center mb-16">
          <p className="font-serif text-xl md:text-2xl text-neutral-700 italic leading-relaxed">
            {quote.englishText}
          </p>
        </div>
        
        {quote.fullText && (
          <div className="prose prose-neutral max-w-none">
            <div className="font-serif leading-relaxed text-neutral-700 whitespace-pre-line">
              {quote.fullText}
            </div>
          </div>
        )}
        
        <div className="mt-16 flex justify-center">
          <div className="text-center">
            <p className="font-serif text-neutral-500 text-sm">Written on</p>
            <p className="font-serif text-neutral-700">{quote.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;