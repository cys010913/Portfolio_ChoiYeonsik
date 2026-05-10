
export const NAV_ITEMS = [
  { name: 'reel', id: 'featured-reel' },
  { name: 'profile', id: 'profile' },
  { name: 'motion', id: 'demoreel' },
  { name: 'engine', id: 'technical' },
  { name: 'tool', id: 'scripting' },
  { name: 'drawing', id: 'art' },
];

export const EXPERIENCES = [
  { company: "펄어비스 PA 모션팀 2025 하계 현장실습 2개월 과정 수료", period: "2025" },
  { company: "2025 CKAF 사무국원", period: "2025" },
  { company: "UJEP(체코 우스티나트라벰 소재 대학교) 체코어 class 2개월 과정 수료", period: "2019" },
  { company: "UJEP(체코 우스티나트라벰 소재 대학교) IT class 2개월 과정 수료", period: "2019" },
  { company: "Poradna pro integraci 어학원 체코어 2개월 과정 수료", period: "2019" },
  { company: "체코 Adler(의류 제조 및 유통) 인턴십 3개월 과정 수료", period: "2019" }
];

export const CERTIFICATIONS = [
  { title: "워드프로세서", category: "Computing" },
  { title: "GTQ 그래픽기술자격 2급", category: "Graphic Arts" },
  { title: "컴퓨터 활용능력 2급", category: "Computing" },
  { title: "ITQ 아래한글 A", category: "Business Tools" },
  { title: "ITQ MS워드 A", category: "Business Tools" },
  { title: "ITQ 한글엑셀 A", category: "Business Tools" },
  { title: "ITQ 파워포인트 A", category: "Business Tools" }
];

export const PROJECTS_DATA = {
  demoreel: {
    title: "demoreel & personal work",
    subtitle: "MOTION",
    items: [
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
    ]
  },
  technical: {
    title: "unreal & modeling",
    subtitle: "ENGINE",
    items: [
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
        tags: ["MAYA"] 
      }
    ]
  },
  scripting: {
    title: "tool & script",
    subtitle: "TOOL",
    items: [
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
    ]
  },
  art: {
    title: "drawing & croquis",
    subtitle: "drawing",
    items: [
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
    ]
  }
};
