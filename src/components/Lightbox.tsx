
import React from 'react';
import { motion } from 'motion/react';
import { ProjectItem } from '../types';
import { getImageUrl } from '../lib/drive';

interface LightboxProps {
  item: ProjectItem;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ item, onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center cursor-zoom-out"
      onClick={onClose}
    >
      <div className="absolute top-6 right-6 md:top-8 md:right-8 cursor-pointer group z-50 p-2" onClick={onClose}>
        <div className="text-[10px] uppercase font-bold tracking-widest text-white/50 group-hover:text-white transition-opacity">
          <span className="md:inline hidden">Close / [ESC]</span>
          <span className="md:hidden inline">Close</span>
        </div>
      </div>
      
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full h-full flex items-center justify-center overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={getImageUrl(item.image, 1600)} 
          alt={item.title} 
          className="w-full h-full object-contain select-none" 
          onClick={onClose}
          referrerPolicy="no-referrer"
        />
        
        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent text-white pointer-events-none">
          <div className="max-w-7xl mx-auto">
            <h4 className="text-xl md:text-3xl font-display font-bold uppercase tracking-tighter mb-2">{item.title}</h4>
            <div className="flex gap-2">
              {item.tags?.map((tag: string, i: number) => (
                <span key={i} className="text-[9px] font-bold tracking-widest uppercase text-white/40">#{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
