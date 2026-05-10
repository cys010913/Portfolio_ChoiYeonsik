
import React, { useState, useEffect } from 'react';
import { Play, Loader2 } from 'lucide-react';
import { getEmbedUrl, getImageUrl } from '../lib/drive';

interface VideoPlayerProps {
  url: string;
  title: string;
  thumbnailSize?: number;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, title, thumbnailSize = 1280 }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const thumbnailUrl = getImageUrl(url, thumbnailSize);
  const embedUrl = getEmbedUrl(url, isMobile); // Autoplay enabled on mobile since it's user-triggered

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePlay = () => {
    setIsPlaying(true);
    setIsLoading(true);
  };

  // On Desktop, show iframe immediately as requested ("Desktop has no issues")
  if (!isMobile) {
    return (
      <div className="w-full h-full bg-black relative">
        <iframe 
          src={getEmbedUrl(url, false)}
          className="w-full h-full border-0 absolute inset-0 bg-transparent z-10"
          allow="autoplay; fullscreen"
          allowFullScreen
          title={title}
        />
      </div>
    );
  }

  // On Mobile, show thumbnail + play button to ensure one-tap playback experience
  return (
    <div 
      className="w-full h-full relative cursor-pointer bg-black group"
      onClick={() => !isPlaying && handlePlay()}
    >
      {isPlaying ? (
        <>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <Loader2 className="w-8 h-8 text-white/20 animate-spin" />
            </div>
          )}
          <iframe 
            src={embedUrl}
            className="w-full h-full border-0 absolute inset-0 bg-transparent z-10"
            allow="autoplay; fullscreen"
            allowFullScreen
            title={title}
            onLoad={() => setIsLoading(false)}
          />
        </>
      ) : (
        <div className="absolute inset-0">
          <img 
            src={thumbnailUrl} 
            alt={title} 
            className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 shadow-2xl">
              <Play size={24} className="text-white fill-white ml-1" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
