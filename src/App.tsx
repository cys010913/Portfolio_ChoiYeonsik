
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
  const [selectedItem, setSelectedItem] = useState<{item: ProjectItem, gallery: ProjectItem[], isScrollMode?: boolean} | null>(null);

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

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = selectedItem.gallery.findIndex(i => i.image === selectedItem.item.image);
    const prevIndex = (currentIndex - 1 + selectedItem.gallery.length) % selectedItem.gallery.length;
    setSelectedItem({ item: selectedItem.gallery[prevIndex], gallery: selectedItem.gallery });
  };

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = selectedItem.gallery.findIndex(i => i.image === selectedItem.item.image);
    const nextIndex = (currentIndex + 1) % selectedItem.gallery.length;
    setSelectedItem({ item: selectedItem.gallery[nextIndex], gallery: selectedItem.gallery });
  };

  const handleLinkClick = (url: string) => {
    if (url.startsWith('#')) {
      const sectionId = url.substring(1);
      const section = PROJECTS_DATA[sectionId as keyof typeof PROJECTS_DATA];
      if (section && (sectionId === 'art' || sectionId === 'storyboard')) {
        setSelectedItem({ 
          item: section.items[0], 
          gallery: section.items,
          isScrollMode: sectionId === 'storyboard'
        });
        return true; // handled
      }
    }
    return false; // not handled
  };

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
    <div className="relative selection:bg-black selection:text-white bg-[#F9F9F7] overflow-x-hidden">
      <Navbar />
      
      <main>
        <FeaturedReel />
        <Hero />
        <Profile />
        
        {Object.entries(PROJECTS_DATA)
          .filter(([id]) => id !== 'storyboard')
          .map(([id, data]) => (
          <Projects 
            key={id}
            id={id}
            title={data.title}
            subtitle={data.subtitle}
            onImageClick={(item) => setSelectedItem({ item, gallery: data.items })}
            onLinkClick={handleLinkClick}
            items={data.items}
          />
        ))}
      </main>

      <Footer />

      <AnimatePresence>
        {selectedItem && (
          <Lightbox 
            item={selectedItem.item} 
            gallery={selectedItem.gallery}
            isScrollMode={selectedItem.isScrollMode}
            onClose={() => setSelectedItem(null)} 
            onPrev={!selectedItem.isScrollMode && selectedItem.gallery.length > 1 ? handlePrev : undefined}
            onNext={!selectedItem.isScrollMode && selectedItem.gallery.length > 1 ? handleNext : undefined}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
