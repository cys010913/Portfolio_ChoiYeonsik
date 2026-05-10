
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedReel } from './components/FeaturedReel';
import { Profile } from './components/Profile';
import { Projects } from './components/Projects';
import { Lightbox } from './components/Lightbox';
import { Footer } from './components/Footer';
import { PROJECTS_DATA } from './constants';
import { ProjectItem } from './types';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen bg-[#F9F9F7] flex items-center justify-center">
        <motion.div 
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-xs uppercase tracking-[0.5em] font-bold"
        >
          Loading
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative selection:bg-black selection:text-white bg-[#F9F9F7]">
      <Navbar />
      
      <main>
        <FeaturedReel />
        <Hero />
        <Profile />
        
        {Object.entries(PROJECTS_DATA).map(([id, data]) => (
          <Projects 
            key={id}
            id={id}
            title={data.title}
            subtitle={data.subtitle}
            onImageClick={setSelectedItem}
            items={data.items}
          />
        ))}
      </main>

      <Footer />

      <AnimatePresence>
        {selectedItem && (
          <Lightbox 
            item={selectedItem} 
            onClose={() => setSelectedItem(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
