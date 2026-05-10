
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-xl py-4 border-b border-black/[0.05]' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[10px] uppercase font-bold tracking-[0.3em] font-mono mr-4"
        >
          youn_sic
        </motion.div>
        
        {/* Desktop Menu */}
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

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 -mr-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-black/5 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-2">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xs uppercase font-bold tracking-[0.4em] py-5 border-b border-black/[0.03] text-black/60 hover:text-black transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
