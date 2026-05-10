
import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => (
  <section className="relative min-h-[90vh] flex flex-col justify-center px-6 border-b border-black/[0.03] pt-40 pb-16 md:pt-48 md:pb-20 lg:py-40">
    <div className="max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-[10px] font-bold tracking-[0.5em] opacity-30 font-mono block mb-10 lg:mb-8">PORTFOLIO COLLECTION</span>
        <h1 className="text-[14vw] sm:text-[12vw] md:text-[10vw] leading-[0.85] font-display font-black uppercase tracking-tighter mb-16 md:mb-16">
          Yeonsik<br/>Choi
        </h1>
        <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16">
          <div className="text-base md:text-xl font-medium max-w-sm leading-tight text-black/80 font-mono">
            KOR / ENG / JP
          </div>
          <button 
            onClick={() => {
              const el = document.getElementById('featured-reel');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-4 md:gap-4 group cursor-pointer w-fit"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300 shrink-0">
              <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform md:w-6 md:h-6" />
            </div>
            <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">Scroll to work</span>
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);
