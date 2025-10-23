"use client"

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const handleGetStarted = () => {
    window.open("https://koalendar.com/e/meet-with-hamza-4", "_blank");
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-blue-500/10 py-2' 
          : 'bg-transparent py-4'
      }`}
      style={{
        transform: isScrolled ? 'translateY(0)' : 'translateY(0)',
        borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.1)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-14' : 'h-16 sm:h-20'
        }`}>
          {/* Logo Section */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-slow"></div>
              <img 
                src='/headerLogo.png' 
                alt="Forth Labs Logo" 
                className="relative w-[120] h-[30] transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#services"
              onClick={(e) => handleLinkClick(e, 'services')}
              className="relative text-gray-300 hover:text-white transition-all duration-300 group text-sm font-medium"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#about"
              onClick={(e) => handleLinkClick(e, 'about')}
              className="relative text-gray-300 hover:text-white transition-all duration-300 group text-sm font-medium"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="relative text-gray-300 hover:text-white transition-all duration-300 group text-sm font-medium"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <button
              onClick={handleGetStarted}
              className="relative px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Get Started</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 touch-manipulation relative group"
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <div className="relative w-6 h-6">
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white transform transition-all duration-300 rotate-90 scale-110" />
              ) : (
                <Menu className="w-6 h-6 text-gray-300 group-hover:text-white transform transition-all duration-300" />
              )}
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-t border-white/10 transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4 pointer-events-none'
        }`}
        style={{
          overflow: 'hidden'
        }}
      >
        <div className="px-4 py-6 space-y-4">
          <a 
            href="#services"
            onClick={(e) => handleLinkClick(e, 'services')}
            className="block text-gray-300 hover:text-white transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/5 transform hover:translate-x-2 border-l-2 border-transparent hover:border-blue-400"
          >
            Services
          </a>
          <a 
            href="#about"
            onClick={(e) => handleLinkClick(e, 'about')}
            className="block text-gray-300 hover:text-white transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/5 transform hover:translate-x-2 border-l-2 border-transparent hover:border-cyan-400"
          >
            About
          </a>
          <a 
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="block text-gray-300 hover:text-white transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/5 transform hover:translate-x-2 border-l-2 border-transparent hover:border-blue-400"
          >
            Contact
          </a>
          <button 
            onClick={handleGetStarted}
            className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Header;
