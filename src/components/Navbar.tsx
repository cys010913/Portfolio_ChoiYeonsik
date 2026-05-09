
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { NAV_ITEMS } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl py-4 border-b border-black/[0.05]' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[10px] uppercase font-bold tracking-[0.3em] font-mono mr-4"
        >
          youn_sic
        </motion.div>
        
        <div className="hidden md:flex gap-6 lg:gap-10 overflow-x-auto no-scrollbar scroll-smooth px-2">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`}
              className="text-[11px] tracking-widest font-bold opacity-40 hover:opacity-100 hover:tracking-tight transition-all duration-300 whitespace-nowrap py-1"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
