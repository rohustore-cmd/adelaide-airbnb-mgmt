export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover_image_url: string | null;
  author: string;
  category: string;
  published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface ContactLead {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  suburb?: string;
  bedrooms?: string;
  message?: string;
  created_at?: string;
}
