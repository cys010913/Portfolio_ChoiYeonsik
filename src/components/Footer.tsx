
import React from 'react';

export const Footer: React.FC = () => (
  <footer className="py-32 px-6 bg-black text-white">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
      <div className="space-y-6">
        <h2 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter">youn_sic</h2>
        <p className="text-lg opacity-50 font-mono">3D animator / illustrator</p>
      </div>
      <div className="flex flex-col items-end gap-4 uppercase font-mono">
        <a href="mailto:cys010913@gmail.com" className="text-xl md:text-2xl border-b border-white/20 pb-2 hover:border-white transition-all">cys010913@gmail.com</a>
        <div className="flex gap-8 text-[10px] tracking-widest pt-4 opacity-50">
          <a href="https://www.instagram.com/youn_sic/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">Instagram</a>
          <a href="https://www.youtube.com/@yeon.illust" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">Youtube</a>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto pt-20 mt-20 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-[9px] font-mono opacity-20 tracking-widest uppercase">
      <span>©2024 BY YOUN_SIC. ALL RIGHTS RESERVED.</span>
      <span>KOR / ENG / JAPANESE</span>
    </div>
  </footer>
);
