
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  Video,
  Play,
  Box, 
  Code, 
  PenTool, 
  Mail, 
  ExternalLink, 
  ChevronRight,
  GraduationCap,
  Award,
  Languages,
  Briefcase,
  Layers,
  ArrowRight,
  ArrowDown
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: '2026 reel', id: 'featured-reel' },
    { name: 'profile', id: 'profile' },
    { name: 'motion', id: 'demoreel' },
    { name: 'engine', id: 'technical' },
    { name: 'tool', id: 'scripting' },
    { name: 'drawing', id: 'art' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl py-4 border-b border-black/[0.05]' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[10px] uppercase font-bold tracking-[0.3em] font-mono mr-4"
        >
          youn_sic
        </motion.div>
        
        <div className="hidden md:flex gap-6 lg:gap-10 overflow-x-auto no-scrollbar scroll-smooth px-2">
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`}
              className="text-[11px] tracking-widest font-bold opacity-40 hover:opacity-100 hover:tracking-tight transition-all duration-300 whitespace-nowrap py-1"
            >
              {item.name}
            </a>
          ))}
        </div>

        <motion.a 
          href="mailto:cys010913@gmail.com"
          className="text-[10px] uppercase tracking-widest font-bold bg-black text-white px-4 py-2 hover:invert transition-all"
        >
          CONTACT
        </motion.a>
      </div>
    </nav>
  );
};

const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-20">
    <div className="flex items-center gap-4 mb-4">
      <div className="h-px w-8 bg-black/20"></div>
      <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-30 font-mono">{subtitle}</span>
    </div>
    <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase leading-none">{title}</h2>
  </div>
);

const Hero = () => (
  <section className="relative min-h-[90vh] flex flex-col justify-center px-6 border-b border-black/[0.03] py-20">
    <div className="max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-[10px] font-bold tracking-[0.5em] opacity-30 font-mono block mb-8">PORTFOLIO COLLECTION 26</span>
        <h1 className="text-[10vw] leading-[0.85] font-display font-black uppercase tracking-tighter mb-16">
          Yeonsik<br/>Choi
        </h1>
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
          <div className="text-lg md:text-xl font-medium max-w-sm leading-tight text-black/80 font-mono">
            KOR / ENG / JAPANESE<br/>
            3D animator / illustrator
          </div>
          <button 
            onClick={() => {
              const el = document.getElementById('demoreel');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-3 md:gap-4 group cursor-pointer w-fit max-w-full"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300 shrink-0">
              <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform md:w-4 md:h-4" />
            </div>
            <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase truncate">Scroll to work</span>
          </button>
        </div>
      </motion.div>
    </div>
    <div className="absolute bottom-12 left-6 text-[9px] font-mono opacity-20 uppercase tracking-widest vertical-rl rotate-180 hidden lg:block">
      3D Animator / Layout Artist
    </div>
  </section>
);

const FeaturedReel = () => {
  const videoUrl = "https://drive.google.com/file/d/1txE1XHNnk4jzUrmbnNpC9w9TXGrwmwBc/preview"; // 2026 데모릴 영상 주소

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

const Profile = () => {
  const experiences = [
    { company: "펄어비스 PA 모션팀 2025 하계 현장실습 2개월 과정 수료", period: "2025" },
    { company: "2025 CKAF 사무국원", period: "2025" },
    { company: "UJEP(체코 우스티나트라벰 소재 대학교) 체코어 class 2개월 과정 수료", period: "2019" },
    { company: "UJEP(체코 우스티나트라벰 소재 대학교) IT class 2개월 과정 수료", period: "2019" },
    { company: "Poradna pro integraci 어학원 체코어 2개월 과정 수료", period: "2019" },
    { company: "체코 Adler(의류 제조 및 유통) 인턴십 3개월 과정 수료", period: "2019" }
  ];

  const certifications = [
    { title: "워드프로세서", category: "Computing" },
    { title: "GTQ 그래픽기술자격 2급", category: "Graphic Arts" },
    { title: "컴퓨터 활용능력 2급", category: "Computing" },
    { title: "ITQ 아래한글 A", category: "Business Tools" },
    { title: "ITQ MS워드 A", category: "Business Tools" },
    { title: "ITQ 한글엑셀 A", category: "Business Tools" },
    { title: "ITQ 파워포인트 A", category: "Business Tools" }
  ];

  return (
    <section id="profile" className="py-40 px-6 border-b border-black/[0.05] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="about me." subtitle="Profile" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4">
            <div className="space-y-12">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-x-8 gap-y-4 mb-8">
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-display font-bold tracking-tighter uppercase"
                  >
                    최연식
                  </motion.h3>
                  <p className="text-base font-mono font-bold opacity-40">2001. 09. 13</p>
                </div>
                <div className="space-y-4">
                  <p className="text-xl font-medium text-black/90 break-keep leading-snug">
                    청강문화산업대학교 애니메이션 스쿨 4학년 게임콘텐츠 스쿨 부전공
                  </p>
                  <p className="text-base font-medium text-black/50 break-keep">
                    GPA 3.79 / 4.0
                  </p>
                </div>
                <div className="mt-8 inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-[10px] font-bold tracking-widest uppercase">
                  3D animator / 3D layout artist
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10 pt-12 border-t border-black/10">
                <div className="space-y-4">
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-30 font-mono">tools</p>
                  <ul className="text-sm font-bold text-black/70 font-mono space-y-1 lowercase">
                    <li>maya</li>
                    <li>3ds max</li>
                    <li>unreal engine</li>
                    <li>photoshop</li>
                    <li>illustrator</li>
                    <li>premiere pro</li>
                    <li>clip studio</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-30 font-mono">language</p>
                  <ul className="text-sm font-bold text-black/70 font-mono italic space-y-1">
                    <li>JLPT N1 150</li>
                    <li>JPT 800</li>
                    <li>TOEIC 750</li>
                  </ul>
                </div>
                <div className="sm:col-span-2 lg:col-span-1 space-y-4 pt-4">
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-30 font-mono">Contact Info</p>
                  <p className="text-base font-bold text-black/90 font-mono border-b border-black/10 pb-1 w-fit">
                    cys010913@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-20">
            <div>
              <div className="flex items-center justify-between mb-12">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-30 font-mono">experience</p>
                <div className="h-px flex-1 bg-black/[0.08] ml-6"></div>
              </div>
              <div className="divide-y divide-black/[0.08]">
                {experiences.map((exp: any, idx: number) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group py-8 flex flex-col md:flex-row md:items-baseline justify-between items-start transition-all hover:bg-black/[0.01] px-4 -mx-4 gap-8"
                  >
                    <span className="text-lg md:text-xl font-display font-medium uppercase break-keep transition-all group-hover:translate-x-2 leading-tight max-w-2xl">
                      {exp.company}
                    </span>
                    <span className="text-xs font-mono font-bold opacity-30 whitespace-nowrap mt-2 md:mt-0 tracking-[0.2em]">
                      // {exp.period}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-12">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-30 font-mono">certification</p>
                <div className="h-px flex-1 bg-black/[0.08] ml-6"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {certifications.map((cert, i) => (
                  <div key={i} className="group border-l border-black/10 pl-6 hover:border-black transition-colors py-1">
                    <p className="text-lg font-bold text-black/80 leading-snug mb-2 break-keep group-hover:text-black transition-colors">
                      {cert.title}
                    </p>
                    <div className="flex items-center gap-3">
                      <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40 font-mono italic">{cert.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Lightbox = ({ item, onClose }: { item: any, onClose: () => void }) => {
  const getImageUrl = (url: string) => {
    const match = url.match(/\/d\/([^/?]+)/);
    return match ? `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1600` : url;
  };

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
          src={getImageUrl(item.image)} 
          alt={item.title} 
          className="w-full h-full object-contain select-none" 
          onClick={onClose}
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

const Projects = ({ id, title, subtitle, items, onImageClick }: { id: string, title: string, subtitle: string, items: any[], onImageClick?: (item: any) => void }) => {
  const getEmbedUrl = (url: string) => {
    const match = url.match(/\/d\/([^/?]+)/);
    if (match) {
      // 구글 드라이브 프리뷰의 가장 안정적인 기본 주소
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
    return url;
  };

  const getImageUrl = (url: string) => {
    const match = url.match(/\/d\/([^/?]+)/);
    return match ? `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1000` : url;
  };

  const isVideo = (item: any) => {
    const driveVideoKeywords = ['reel', 'project', 'motion', 'technical', 'anim', 'tracker', 'script', 'tool'];
    const videoSections = ['demoreel', 'technical', 'scripting'];
    const isDriveVideo = (videoSections.includes(id) || driveVideoKeywords.some(k => item.title.toLowerCase().includes(k)));
    return item.image?.endsWith('.mp4') || (item.image?.includes('drive.google.com') && isDriveVideo);
  };

  return (
    <section id={id} className="py-40 px-6 border-b border-black/[0.03] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title={title} subtitle={subtitle} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-32">
          {items.map((item, idx) => {
            const videoMode = isVideo(item);
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
                        <div className="absolute inset-0 flex items-center justify-center bg-black/[0.02] pointer-events-none">
                          <Play size={32} className="text-black/10" />
                        </div>
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

const Footer = () => (
  <footer className="py-32 px-6 bg-black text-white">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
      <div className="space-y-6">
        <h2 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter">youn_sic</h2>
        <p className="text-lg opacity-50 font-mono">3D animator / illustrator</p>
      </div>
      <div className="flex flex-col items-end gap-4 uppercase font-mono">
        <a href="mailto:cys010913@gmail.com" className="text-xl md:text-2xl border-b border-white/20 pb-2 hover:border-white transition-all">cys010913@gmail.com</a>
        <div className="flex gap-8 text-[10px] tracking-widest pt-4 opacity-50">
          <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Youtube</a>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto pt-20 mt-20 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-[9px] font-mono opacity-20 tracking-widest uppercase">
      <span>©2024 BY YOUN_SIC. ALL RIGHTS RESERVED.</span>
      <span>KOR / ENG / JAPANESE</span>
    </div>
  </footer>
);

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen bg-[#F9F9F7] flex items-center justify-center">
        <motion.div 
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-xs uppercase tracking-[0.5em] font-bold"
        >
          Loading / 26
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative selection:bg-black selection:text-white">
      <Navbar />
      
      <main>
        <FeaturedReel />
        <Hero />
        <Profile />
        
        <Projects 
          id="demoreel"
          title="demoreel & personal work"
          subtitle="MOTION"
          onImageClick={setSelectedItem}
          items={[
            { 
              title: "2026 GAME ANIMATION REEL", 
              desc: "rigging&animation(3ds max)", 
              image: "https://drive.google.com/file/d/1txE1XHNnk4jzUrmbnNpC9w9TXGrwmwBc/view?usp=drive_link", 
              tags: ["3DS MAX", "Unreal Engine"] 
            },
            { 
              title: "demo reel ( 2025 )", 
              desc: "attack, run, walk, fly, facial(maya, 3ds max)", 
              image: "https://drive.google.com/file/d/1txE1XHNnk4jzUrmbnNpC9w9TXGrwmwBc/view?usp=drive_link", 
              tags: ["Maya", "3ds Max"] 
            },
            { 
              title: "personal work ( 2025 )", 
              desc: "treasure hunter(maya)", 
              image: "https://drive.google.com/file/d/19e5RQfqkPdPAqmGjAXjd_MtZwJ916lPh/view?usp=sharing",
              tags: ["Maya"] 
            }
          ]}
        />

        <Projects 
          id="technical"
          title="unreal & modeling"
          subtitle="ENGINE"
          onImageClick={setSelectedItem}
          items={[
            { 
              title: "unreal project: cave", 
              desc: "personal work", 
              image: "https://drive.google.com/file/d/1P6YqvjsN7S2FMxFKPY49o5ZrrgQBSjSy/view?usp=drive_link",
              tags: ["Unreal Engine"] 
            },
            { 
              title: "unreal project: red riding hood", 
              desc: "background design / look dev / shooting & editing", 
              image: "https://drive.google.com/file/d/1lXq68T1f5J7r9qFrMLzpnVdfDcHfyctA/view?usp=drive_link",
              tags: ["Unreal Engine"] 
            },
            { 
              title: "modeling", 
              desc: "mechanic and temple(maya)", 
              image: "https://drive.google.com/file/d/1mVphAMz5dhaSHt1a3nQivT3u2jm2X6Tv/view?usp=drive_link",
              tags: ["Modeling"] 
            }
          ]}
        />

        <Projects 
          id="scripting"
          title="tool & script"
          subtitle="TOOL"
          onImageClick={setSelectedItem}
          items={[
            { 
              title: "COM tracker", 
              desc: "part selection / 2D trajectory map / playback speed / range selection / scrubbing / loop playback / sketch and onion skin", 
              image: "https://drive.google.com/file/d/1zA3_-gDAoPlae9xn3ZPBdvwbEGI873js/view?usp=drive_link",
              tags: ["Tool", "Script"] 
            },
            { 
              title: "motion lab", 
              desc: "key copy & paste / anim align / key decimation / preset & memo / scripts collector", 
              image: "https://drive.google.com/file/d/1zA3_-gDAoPlae9xn3ZPBdvwbEGI873js/view?usp=drive_link",
              tags: ["Tool", "Script"] 
            }
          ]}
        />


        <Projects 
          id="art"
          title="drawing & croquis"
          subtitle="drawing"
          onImageClick={setSelectedItem}
          items={[
            { 
              title: "florist", 
              image: "https://drive.google.com/file/d/1CJ_pBXy1spZH84ckkqgph2scyUxn91Xp/view?usp=drive_link",
              tags: ["drawing"] 
            },
            { 
              title: "violinist", 
              image: "https://drive.google.com/file/d/1wzRvRokTehGbNZxa3x_R2owRopT7a_C0/view?usp=drive_link",
              tags: ["drawing"] 
            },
            { 
              title: "singer", 
              image: "https://drive.google.com/file/d/1CtHNY2mEUrsqcy0yFVDhaz2L7hzWWj6R/view?usp=drive_link",
              tags: ["drawing"] 
            },
            { 
              title: "mini", 
              image: "https://drive.google.com/file/d/16n-M86CTc31_tpHqboYOyxEsIhJTJgTg/view?usp=drive_link",
              tags: ["croquis"] 
            },
            { 
              title: "winter", 
              image: "https://drive.google.com/file/d/1hleNYGIOaS3CBpR_sDORbGrMSGgzhIc1/view?usp=drive_link",
              tags: ["drawing"] 
            },
            { 
              title: "moon", 
              image: "https://drive.google.com/file/d/11AKn0rYAgzsaBJijCK4EACiUOt0R5NSp/view?usp=sharing",
              tags: ["drawing"] 
            }
          ]}
        />
      </main>

      <Footer />

      <AnimatePresence>
        {selectedItem && (
          <Lightbox 
            item={selectedItem} 
            onClose={() => setSelectedItem(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
