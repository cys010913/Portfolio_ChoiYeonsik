
import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import { getEmbedUrl, getImageUrl } from '../lib/drive';

interface VideoPlayerProps {
  url: string;
  title: string;
  thumbnailSize?: number;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, title, thumbnailSize = 1280 }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const isDirectVideo = url?.toLowerCase().endsWith('.mp4');
  const thumbnailUrl = getImageUrl(url, thumbnailSize);
  const embedUrl = getEmbedUrl(url, isMobile);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Use standard video tag for direct .mp4 files
  const renderDirectVideo = (autoPlay: boolean) => (
    <video 
      src={url} 
      className="w-full h-full object-cover bg-black"
      controls={isPlaying || !isMobile}
      autoPlay={autoPlay}
      muted={!isPlaying}
      loop
      playsInline
    />
  );

  // Use iframe for Drive links
  const renderDriveVideo = (autoplay: boolean) => (
    <div className="absolute inset-0 w-full h-full bg-black overflow-hidden">
      <iframe 
        src={autoplay ? `${embedUrl}${embedUrl.includes('?') ? '&' : '?'}autoplay=1` : embedUrl}
        className="w-full h-[115%] -top-[7.5%] border-0 absolute inset-0 bg-black z-10"
        allow="autoplay; fullscreen"
        allowFullScreen
        title={title}
      />
    </div>
  );

  // Desktop: High performance direct access
  if (!isMobile) {
    return (
      <div className="w-full h-full bg-black relative">
        {isDirectVideo ? renderDirectVideo(true) : renderDriveVideo(false)}
      </div>
    );
  }

  // Mobile: Show thumbnail with a direct link button
  return (
    <div className="w-full h-full relative bg-black overflow-hidden group">
      <img 
        src={thumbnailUrl} 
        alt={title} 
        className="w-full h-full object-cover opacity-50"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 p-6">
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-[0.2em] text-xs transition-all active:scale-95 shadow-2xl"
        >
          <Play size={16} className="fill-black" />
          Watch Video
        </a>
      </div>
    </div>
  );
};
