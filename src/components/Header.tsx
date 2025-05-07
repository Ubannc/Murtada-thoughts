import React from 'react';
import { Link } from 'react-router-dom';
import { Feather } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-center">
        <Link 
          to="/" 
          className="flex items-center gap-2 group"
        >
          <Feather 
            className={`w-5 h-5 transition-all ${
              isScrolled ? 'text-neutral-800' : 'text-neutral-700'
            } group-hover:scale-110 duration-300`} 
          />
          <h1 
            className={`text-lg font-serif tracking-wide transition-all ${
              isScrolled ? 'text-neutral-800' : 'text-neutral-700'
            }`}
          >
            M - thoughts
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;