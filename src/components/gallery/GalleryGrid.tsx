import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { GalleryImage } from '../../types';

interface GalleryGridProps {
  images: GalleryImage[];
  isFeatured?: boolean;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images, isFeatured = false }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // For featured gallery, limit to 6 images
  const displayImages = isFeatured ? images.slice(0, 6) : images;

  // Function to handle download (in real implementation, this would download the image)
  const handleDownload = (image: GalleryImage) => {
    // Create an anchor element
    const a = document.createElement('a');
    a.href = image.url;
    a.download = image.title;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div 
      className={`grid gap-4 ${
        isFeatured 
          ? 'grid-cols-2 md:grid-cols-3' 
          : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
      }`}
    >
      {displayImages.map((image) => (
        <div 
          key={image.id}
          className="relative overflow-hidden rounded-lg aspect-[4/3] glass group"
          onMouseEnter={() => setHoveredId(image.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          <div 
            className={`absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent transition-opacity duration-300 ${
              hoveredId === image.id || isFeatured ? 'opacity-100' : 'opacity-0'
            } flex flex-col justify-end p-4`}
          >
            <h3 className="text-white font-serif text-lg">{image.title}</h3>
            
            <div className="flex justify-between items-center mt-2">
              <p className="text-neutral-200 text-sm">{image.date}</p>
              
              <button
                onClick={() => handleDownload(image)}
                className="p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
                aria-label={`Download ${image.title}`}
              >
                <Download size={16} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;