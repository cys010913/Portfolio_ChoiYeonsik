
export const getEmbedUrl = (url: string, autoplay: boolean = false) => {
  const match = url.match(/\/d\/([^/?]+)/);
  if (match) {
    let baseUrl = `https://drive.google.com/file/d/${match[1]}/preview`;
    if (autoplay) {
      baseUrl += '?autoplay=1';
    }
    return baseUrl;
  }
  return url;
};

export const getImageUrl = (url: string, size: number = 1000) => {
  const match = url.match(/\/d\/([^/?]+)/);
  return match ? `https://drive.google.com/thumbnail?id=${match[1]}&sz=w${size}` : url;
};

export const isDriveVideo = (url: string) => {
  return url?.includes('drive.google.com') || url?.endsWith('.mp4');
};
