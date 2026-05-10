
import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { ProjectItem } from '../types';
import { getEmbedUrl, getImageUrl, isDriveVideo } from '../lib/drive';

interface ProjectsProps {
  id: string;
  title: string;
  subtitle: string;
  items: ProjectItem[];
  onImageClick?: (item: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ id, title, subtitle, items, onImageClick }) => {
  return (
    <section id={id} className="py-24 md:py-40 px-6 border-b border-black/[0.03] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title={title} subtitle={subtitle} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-32">
          {items.map((item, idx) => {
            const videoMode = isDriveVideo(item.image, id, item.title);
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group flex flex-col"
              >
                <div 
                  className={`aspect-video bg-black/[0.03] mb-8 overflow-hidden relative border border-black/[0.05] group/media ${!videoMode ? 'cursor-zoom-in' : ''}`}
                  onClick={() => {
                    if (!videoMode) {
                      onImageClick?.(item);
                    }
                  }}
                >
                  {videoMode ? (
                    item.image?.endsWith('.mp4') ? (
                      <video 
                        src={item.image} 
                        autoPlay 
                        muted 
                        loop 
                        playsInline 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full relative">
                        <iframe 
                          src={getEmbedUrl(item.image)}
                          className="w-full h-full border-0 absolute inset-0 bg-transparent z-10"
                          allow="autoplay; fullscreen"
                          allowFullScreen
                          title={item.title}
                        />
                      </div>
                    )
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-black/[0.01]">
                      <img 
                        src={getImageUrl(item.image)} 
                        alt={item.title} 
                        className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105" 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono opacity-20">PROJECT_{idx+1}</span>
                    <div className="h-px w-8 bg-black/10"></div>
                    <div className="flex gap-2">
                      {item.tags?.map((tag: string, i: number) => (
                        <span key={i} className="text-[9px] font-bold tracking-widest uppercase opacity-40 px-2 py-0.5 border border-black/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h4 className="text-2xl font-display font-bold uppercase tracking-tight">{item.title}</h4>
                  {item.desc && (
                    <p className="text-sm text-black/60 leading-relaxed max-w-md break-keep">
                      {item.desc}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
