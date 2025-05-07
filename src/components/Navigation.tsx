import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Image, Settings } from 'lucide-react';
import AdminLogin from './admin/AdminLogin';
import { useAdminStore } from '../store/adminStore';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const isAuthenticated = useAdminStore((state) => state.isAuthenticated);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <>
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center justify-center gap-6 py-3 px-6 rounded-full glass-dark shadow-lg">
          <Link 
            to="/" 
            className={`relative transition-all duration-300 ${
              isActive('/') ? 'text-white scale-110' : 'text-neutral-400 hover:text-white'
            }`}
          >
            {isActive('/') && (
              <span className="absolute inset-0 bg-neutral-800/20 rounded-full blur-md -z-10"></span>
            )}
            <Home size={20} className="transition-transform hover:scale-110" />
          </Link>
          
          <Link 
            to="/articles" 
            className={`relative transition-all duration-300 ${
              isActive('/articles') ? 'text-white scale-110' : 'text-neutral-400 hover:text-white'
            }`}
          >
            {isActive('/articles') && (
              <span className="absolute inset-0 bg-neutral-800/20 rounded-full blur-md -z-10"></span>
            )}
            <BookOpen size={20} className="transition-transform hover:scale-110" />
          </Link>
          
          <Link 
            to="/gallery" 
            className={`relative transition-all duration-300 ${
              isActive('/gallery') ? 'text-white scale-110' : 'text-neutral-400 hover:text-white'
            }`}
          >
            {isActive('/gallery') && (
              <span className="absolute inset-0 bg-neutral-800/20 rounded-full blur-md -z-10"></span>
            )}
            <Image size={20} className="transition-transform hover:scale-110" />
          </Link>
          
          <button 
            onClick={() => setShowAdminLogin(true)}
            className={`relative transition-all duration-300 ${
              isAuthenticated ? 'text-white scale-110' : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Settings size={20} className="transition-transform hover:scale-110" />
          </button>
        </div>
      </nav>

      {showAdminLogin && (
        <AdminLogin onClose={() => setShowAdminLogin(false)} />
      )}
    </>
  );
};

export default Navigation;
