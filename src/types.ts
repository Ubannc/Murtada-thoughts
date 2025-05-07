export interface Quote {
  id: string;
  arabicText: string;
  englishText: string;
  fullText?: string;
  date: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  url: string;
  date: string;
}