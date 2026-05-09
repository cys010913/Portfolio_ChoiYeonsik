
import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export const FeaturedReel: React.FC = () => {
  const videoUrl = "https://drive.google.com/file/d/1txE1XHNnk4jzUrmbnNpC9w9TXGrwmwBc/preview";

  return (
    <section id="featured-reel" className="py-32 md:py-40 px-6 border-b border-black/[0.05] bg-black/[0.01] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="2026 GAME ANIMATION REEL" subtitle="Main Showcase" />
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-video w-full bg-black shadow-2xl group overflow-hidden border border-black/5"
        >
          <div className="absolute inset-0 flex items-center justify-center bg-black/5 pointer-events-none">
             <Play size={48} className="text-white/20" />
          </div>
          <iframe 
            src={videoUrl}
            className="w-full h-full border-0 absolute inset-0 z-10 bg-transparent"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="2026 Featured Demo Reel"
          />
          
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none border-[10px] md:border-[20px] border-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
        </motion.div>
        
        <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
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
