
import React from 'react';
import { motion } from 'motion/react';
import { SectionTitle } from './SectionTitle';
import { VideoPlayer } from './VideoPlayer';

export const FeaturedReel: React.FC = () => {
  const videoUrl = "https://youtu.be/x4YE-KHAx-0";

  return (
    <section id="featured-reel" className="pt-32 pb-12 md:pt-40 md:pb-16 px-6 border-b border-black/[0.05] bg-black/[0.01] scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="2026 GAME ANIMATION REEL" subtitle="Main Showcase" />
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-video w-full bg-black shadow-2xl overflow-hidden border border-black/5 group"
        >
          <VideoPlayer url={videoUrl} title="2026 GAME ANIMATION REEL" thumbnailSize={1920} />
        </motion.div>
        
        <div className="mt-10 md:mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <p className="text-xl md:text-xl font-display font-bold uppercase tracking-tight max-w-xl">
            RIGGING & ANIMATION
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 border border-black/10">3DS MAX</span>
            <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 border border-black/10">MAYA</span>
          </div>
        </div>
      </div>
    </section>
  );
};
