import React from 'react';
import QuoteSlider from '../components/quotes/QuoteSlider';
import { quotes } from '../data';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto max-w-5xl px-4">
      <section className="fade-in">
        <div className="relative">
          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 bg-primary/30 rounded-full filter blur-3xl"></div>
          <QuoteSlider quotes={quotes} />
        </div>
      </section>
    </div>
  );
};

export default HomePage;