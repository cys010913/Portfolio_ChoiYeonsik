/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  Video, 
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
  ArrowRight
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: '프로필', id: 'profile' },
    { name: '데모릴', id: 'demoreel' },
    { name: '언리얼 & 모델링', id: 'technical' },
    { name: '툴 & 스크립트', id: 'scripting' },
    { name: '드로잉', id: 'art' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 border-b border-black/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-baseline">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs uppercase tracking-extrawide font-bold"
        >
          youn_sic / 2026
        </motion.div>
        
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`}
              className="text-[12px] tracking-tight font-medium opacity-50 hover:opacity-100 hover:text-black transition-all"
            >
              {item.name}
            </a>
          ))}
        </div>

        <motion.a 
          whileHover={{ italic: true }}
          href="mailto:cys010913@gmail.com"
          className="text-[10px] uppercase tracking-widest font-bold underline underline-offset-4"
        >
          CONTACT
        </motion.a>
      </div>
    </nav>
  );
};

const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string, icon?: any }) => (
  <div className="mb-12 border-b border-black/10 pb-4">
    <div className="flex items-center justify-between mb-2">
      <span className="text-[10px] font-bold tracking-extrawide uppercase opacity-40">{subtitle}</span>
      <span className="text-[10px] font-mono opacity-40">Archive // 0{Math.floor(Math.random() * 9) + 1}</span>
    </div>
    <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter uppercase break-keep">{title}</h2>
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string, key?: React.Key }) => (
  <div className={`bg-white border border-black/5 p-8 transition-all duration-500 hover:border-black/20 ${className}`}>
    {children}
  </div>
);

// --- Sections ---

const Hero = () => (
  <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-20">
    <div className="max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <h1 className="text-[100px] md:text-[140px] lg:text-[180px] leading-[0.8] font-display font-black uppercase -ml-1 md:-ml-4 tracking-tighter">
          Yeonsik<br/>
          <span className="ml-[10%] md:ml-[25%] block md:inline-block">Choi</span>
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end border-t border-black/10 pt-12">
        <div className="md:col-span-5">
           <p className="text-sm uppercase tracking-widest font-bold mb-4 opacity-30">Selected Works 26</p>
           <p className="text-xl md:text-2xl font-display font-medium leading-tight text-black/80 max-w-sm md:max-w-none break-keep">
             <span className="whitespace-nowrap">최연식</span> <span className="mx-2 opacity-20">/</span> <span className="whitespace-nowrap">youn_sic</span> <span className="mx-2 opacity-20">/</span> <span className="whitespace-nowrap">3D animator</span> <span className="mx-2 opacity-20">/</span> <span className="whitespace-nowrap">illustrator</span>
           </p>
        </div>
        
        <div className="hidden md:block md:col-span-1 border-l border-black/10 h-32 mx-auto"></div>

        <div className="md:col-span-6 flex flex-col gap-6 justify-end">
          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-widest opacity-40 mb-1">LOCATION</span>
            <span className="text-sm font-bold">Icheon, KR</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-widest opacity-40 mb-1">CONTACT</span>
            <span className="text-sm font-bold underline underline-offset-4 decoration-black/20 font-display">cys010913@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Profile = () => {
  const experiences = [
    { company: "펄어비스 PA 모션팀 2026 하계 현장실습 2개월 과정 수료", role: "", period: "2026", desc: "" },
    { company: "체코 Adler(의류 제조 및 유통) 인턴십 3개월 과정 수료", role: "", period: "2024", desc: "" },
    { company: "Poradna pro integraci 어학원 체코어 2개월 과정 수료", role: "", period: "2023", desc: "" },
    { company: "UJEP IT class 2개월 과정 수료", role: "", period: "2023", desc: "" },
    { company: "2026 CKAF 사무국원", role: "", period: "2026", desc: "" }
  ];

  return (
    <section id="profile" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Biographical Profile" subtitle="ABOUT" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-4">Profile</p>
              <h3 className="text-3xl font-display font-bold mb-6 leading-tight uppercase">
                최연식 (Yeonsik Choi)
              </h3>
              <div className="text-black/60 leading-relaxed break-keep space-y-1">
                <p className="text-lg font-medium break-keep leading-tight">
                  <span className="whitespace-nowrap">청강문화산업대학교 애니메이션 스쿨 4학년</span><br className="sm:hidden" />
                  <span className="mx-2 opacity-20 hidden sm:inline">/</span>
                  <span className="whitespace-nowrap">게임콘텐츠 스쿨 부전공</span>
                </p>
                <div className="flex gap-4 text-sm font-bold opacity-40">
                   <span>GPA 3.79 / 4.0</span>
                   <span className="italic">3D animator & Layout artist</span>
                </div>
                <div className="pt-4 border-t border-black/5 mt-4">
                  <p className="text-[9px] uppercase tracking-widest font-bold opacity-40 mb-2 font-mono">Certification</p>
                  <ul className="text-[11px] grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 opacity-70 font-medium break-keep">
                    <li className="whitespace-nowrap">워드프로세서 / 컴퓨터 활용능력 2급</li>
                    <li className="whitespace-nowrap">GTQ 그래픽기술자격 2급</li>
                    <li className="whitespace-nowrap">ITQ 아래한글 A / MS워드 A</li>
                    <li className="whitespace-nowrap">ITQ 한글엑셀 A / 파워포인트 A</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-black/5">
              <div>
                <p className="text-[9px] uppercase tracking-widest font-bold opacity-40 mb-3 font-mono">Tools</p>
                <p className="text-xs font-bold font-mono text-black/70 leading-relaxed">
                  MAYA <span className="opacity-20">/</span> 3DS MAX<br/>
                  UE5 <span className="opacity-20">/</span> ADOBE SUITE
                </p>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-widest font-bold opacity-40 mb-3 font-mono">Languages</p>
                <p className="text-xs font-bold font-mono text-black/70 italic leading-relaxed">
                  JLPT N1 <span className="opacity-20">/</span> JPT 800<br/>
                  TOEIC 750
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
             <p className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-6 font-mono">Experience & Archive</p>
             <div className="space-y-4">
               {experiences.map((exp, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row justify-between items-baseline border-b border-black/5 pb-4 group gap-2">
                    <div className="flex items-baseline flex-1 min-w-0">
                      <span className="text-[10px] uppercase font-bold tracking-widest opacity-40 mr-4 font-mono flex-shrink-0">0{idx+1}</span>
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-x-3">
                        <span className="text-base md:text-lg font-display font-bold uppercase transition-all group-hover:pl-2 break-keep">{exp.company}</span>
                        {exp.role && <span className="text-[10px] uppercase font-bold opacity-30 font-sans break-keep">{exp.role}</span>}
                      </div>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-bold opacity-40 whitespace-nowrap">{exp.period}</span>
                  </div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = ({ id, title, subtitle, items }: { id: string, title: string, subtitle: string, icon?: any, items: any[] }) => (
  <section id={id} className="py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <SectionTitle title={title} subtitle={subtitle} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {items.map((item, idx) => (
          <motion.div 
            key={idx}
            className="group relative flex flex-col pt-6 border-t border-black/5"
          >
            <div className="aspect-video bg-[#EAEAEA] mb-6 overflow-hidden relative">
               {item.image ? (
                 item.image.endsWith('.mp4') ? (
                   <video 
                     src={item.image} 
                     autoPlay 
                     muted 
                     loop 
                     playsInline 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                 ) : (
                   <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                 )
               ) : (
                 <div className="absolute inset-0 flex items-center justify-center opacity-20">
                   <Video size={48} />
                 </div>
               )}
            </div>
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-xl font-display font-bold uppercase">{item.title}</h4>
              <span className="text-[10px] font-mono opacity-20">0{idx+1}</span>
            </div>
            <p className="text-sm text-black/60 mb-6 leading-relaxed flex-1">{item.desc}</p>
            <div className="flex flex-wrap gap-2">
              {item.tags?.map((tag: string) => (
                <span key={tag} className="text-[9px] font-mono tracking-wider uppercase opacity-30">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 px-6 border-t border-black/10 mt-32">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8">
      <div className="flex gap-12 items-center">
        <a href="mailto:cys010913@gmail.com" className="text-[10px] uppercase tracking-extrawide hover:text-black transition-all">Email</a>
        <a href="#" className="text-[10px] uppercase tracking-extrawide hover:text-black transition-all">Instagram</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
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
        <Hero />
        <Profile />
        
        <Projects 
          id="demoreel"
          title="Demoreel & Personal work"
          subtitle="MOTION"
          items={[
            { 
              title: "Animation Reel", 
              desc: "2026 Animation highlights showcase. 3D Animation / Layout / Rendering", 
              image: "https://www.w3schools.com/html/mov_bbb.mp4", 
              tags: ["Maya", "Arnold"] 
            },
            { 
              title: "Personal Work", 
              desc: "개인 캐릭터 애니메이션 및 비주얼 테크니컬 작업물 아카이브입니다.", 
              image: "https://picsum.photos/id/102/800/450",
              tags: ["3D", "Animation"] 
            }
          ]}
        />

        <Projects 
          id="technical"
          title="Unreal & Modeling"
          subtitle="ENGINE"
          items={[
            { 
              title: "Environmental Work", 
              desc: "언리얼 엔진 5를 활용한 실시간 환경 제작 및 라이팅 작업입니다.", 
              image: "https://www.w3schools.com/html/movie.mp4",
              tags: ["Unreal Engine", "3ds Max"] 
            },
            { 
              title: "Modeling Studies", 
              desc: "하드서페이싱 및 캐릭터 모델링 연구 자료입니다.", 
              image: "https://picsum.photos/id/111/800/450",
              tags: ["3D Modeling"] 
            }
          ]}
        />


        <Projects 
          id="scripting"
          title="Tool & Script"
          subtitle="WORKFLOW"
          items={[
            { 
              title: "Maya Scripting", 
              desc: "Python과 PyMel을 활용한 애니메이터용 워크플로우 효율화 스크립트 제작.", 
              image: "https://picsum.photos/id/201/800/450",
              tags: ["Python", "PyMel"] 
            },
            { 
              title: "3ds Max Tools", 
              desc: "MaxScript를 이용한 단순 반복 작업 자동화 툴 세트.", 
              image: "https://picsum.photos/id/202/800/450",
              tags: ["MaxScript"] 
            }
          ]}
        />

        <Projects 
          id="art"
          title="Drawing & Croquis"
          subtitle="CREATIVE"
          items={[
            { title: "Digital Painting", desc: "", tags: ["Photoshop", "Clip Studio"] },
            { title: "Urban Croquis", desc: "", tags: ["Traditional", "Digital"] }
          ]}
        />
      </main>

      <Footer />
    </div>
  );
}
