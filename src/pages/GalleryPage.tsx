import React, { useState, useEffect } from 'react';
import GalleryGrid from '../components/gallery/GalleryGrid';
import { galleryImages } from '../data';

const GalleryPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={`container mx-auto max-w-6xl px-4 py-10 transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
      <div className="mb-12">
        <h1 className="text-3xl font-serif text-neutral-800 mb-2">Gallery</h1>
        <p className="text-neutral-600">A collection of beautiful moments captured in time.</p>
      </div>
      
      <GalleryGrid images={galleryImages} />
    </div>
  );
};

export default GalleryPage;