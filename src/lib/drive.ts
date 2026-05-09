
export const getEmbedUrl = (url: string) => {
  const match = url.match(/\/d\/([^/?]+)/);
  if (match) {
    return `https://drive.google.com/file/d/${match[1]}/preview?autoplay=1`;
  }
  return url;
};

export const getImageUrl = (url: string, size: number = 1000) => {
  const match = url.match(/\/d\/([^/?]+)/);
  return match ? `https://drive.google.com/thumbnail?id=${match[1]}&sz=w${size}` : url;
};

export const isDriveVideo = (url: string, id: string, title: string) => {
  const driveVideoKeywords = ['reel', 'project', 'motion', 'technical', 'anim', 'tracker', 'script', 'tool'];
  const videoSections = ['demoreel', 'technical', 'scripting'];
  const isVideoSection = videoSections.includes(id);
  const titleHasKeyword = driveVideoKeywords.some(k => title.toLowerCase().includes(k));
  return url?.endsWith('.mp4') || (url?.includes('drive.google.com') && (isVideoSection || titleHasKeyword));
};
