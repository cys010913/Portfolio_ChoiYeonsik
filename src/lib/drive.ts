
export const getEmbedUrl = (url: string) => {
  const match = url.match(/\/d\/([^/]+)/);
  if (match) {
    return `https://drive.google.com/file/d/${match[1]}/preview`;
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
