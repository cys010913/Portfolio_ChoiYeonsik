
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { getImageUrl } from '../lib/drive';

export const FeaturedReel: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl = "https://drive.google.com/file/d/1txE1XHNnk4jzUrmbnNpC9w9TXGrwmwBc/preview";
  const thumbnailUrl = getImageUrl(videoUrl, 1920);

  return (
    <section id="featured-reel" className="py-20 md:py-40 px-6 border-b border-black/[0.05] bg-black/[0.01] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="2026 GAME ANIMATION REEL" subtitle="Main Showcase" />
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-video w-full bg-black shadow-2xl overflow-hidden border border-black/5 group cursor-pointer"
          onClick={() => !isPlaying && setIsPlaying(true)}
        >
          {isPlaying ? (
            <iframe 
              src={getEmbedUrl(videoUrl, true)}
              className="w-full h-full border-0 absolute inset-0 z-10 bg-black"
              allow="autoplay; fullscreen"
              allowFullScreen
              title="Featured Demo Reel"
            />
          ) : (
            <div className="absolute inset-0 z-0">
              <img 
                src={thumbnailUrl} 
                alt="2026 GAME ANIMATION REEL" 
                className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 shadow-2xl">
                  <Play size={32} className="text-white fill-white ml-1" />
                </div>
              </div>
            </div>
          )}
        </motion.div>
        
        <div className="mt-8 md:mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-lg md:text-xl font-display font-bold uppercase tracking-tight max-w-xl">
            RIGGING & ANIMATION
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 border border-black/10">3DS MAX</span>
            <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 border border-black/10">Unreal Engine</span>
          </div>
        </div>
      </div>
    </section>
  );
};
