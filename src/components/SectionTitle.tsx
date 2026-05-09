
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => (
  <div className="mb-20">
    <div className="flex items-center gap-4 mb-4">
      <div className="h-px w-8 bg-black/20"></div>
      <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-30 font-mono">{subtitle}</span>
    </div>
    <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase leading-none">{title}</h2>
  </div>
);
