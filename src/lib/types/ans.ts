// ANS (Arc Native Specification) type definitions
export interface ANSImage {
  _id: string;
  type: 'image';
  version: string;
  url: string;
  caption?: string;
  subtitle?: string;
  width: number;
  height: number;
}

export interface ANSAuthor {
  _id: string;
  type: 'author';
  name: string;
  image?: ANSImage;
  bio?: string;
  url?: string;
}

export interface ANSHeadline {
  basic: string;
  mobile?: string;
  web?: string;
  seo?: string;
}

export interface ANSImage {
  _id: string;
  type: 'image';
  version: string;
  url: string;
  caption?: string;
  width: number;
  height: number;
}

export interface ANSArticle {
  _id: string;
  type: string;
  version: string;
  created_date: string;
  last_updated_date: string;
  headlines: {
    basic: string;
    seo?: string;
  };
  description: {
    basic: string;
  };
  content_elements: ANSContentElement[];
  taxonomy: {
    tags: Array<{
      text: string;
      slug: string;
    }>;
    sections: Array<{
      name: string;
      path: string;
    }>;
  };
  promo_items?: {
    basic: ANSImage;
  };
  credits: {
    by: ANSAuthor[];
  };
  canonical_url: string;
  website_url: string;
}

export interface ANSBaseContentElement {
  type: string;
}

export interface ANSTextElement extends ANSBaseContentElement {
  type: 'text';
  text: string;
}

export interface ANSHeaderElement extends ANSBaseContentElement {
  type: 'header';
  text: string;
  level: number;
}

export interface ANSListElement extends ANSBaseContentElement {
  type: 'list';
  list_type: 'ordered' | 'unordered';
  items: string[];
}

export interface ANSImageReferent {
  id: string;
  type: 'image';
  referent_properties: {
    url: string;
    caption?: string;
    alt_text?: string;
    width: number;
    height: number;
  };
}

export interface ANSImageElement extends ANSBaseContentElement {
  type: 'image';
  referent: ANSImageReferent;
}

export interface ANSQuoteElement extends ANSBaseContentElement {
  type: 'quote';
  text: string;
  citation: string;
  role?: string;
}

export interface ANSTableElement extends ANSBaseContentElement {
  type: 'table';
  header: string[];
  rows: string[][];
}

export type ANSContentElement = 
  | ANSTextElement 
  | ANSHeaderElement 
  | ANSListElement 
  | ANSImageElement 
  | ANSQuoteElement 
  | ANSTableElement;

// View API Response types
export interface ViewAPIResponse<T> {
  count: number;
  next?: string;
  previous?: string;
  content_elements: T[];
}

// Navigation item interface
export interface ANSNavigationItem {
  _id: string;
  display_name: string;
  url: string;
  node_type: string;
  children?: ANSNavigationItem[];
  node_class?: string;
  display?: boolean;
}

// Navigation interface - Based on Arc XP View API schema
export interface ANSNavigation {
  _id: string;
  version: string;
  site_id: string;
  name: string;
  navigation_title: string;
  last_updated_date: string;
  created_date: string;
  items: ANSNavigationItem[];
}

// Navigation API Response
export interface NavigationAPIResponse {
  _id: string;
  navigation: ANSNavigation;
}

// Collection interface
export interface ANSCollection {
  _id: string;
  name: string;
  description?: string;
  content_elements: ANSArticle[];
}

// Collection API Response
export interface CollectionAPIResponse {
  _id: string;
  collection: ANSCollection;
}

// View API interface
export interface IViewAPI {
  getLatestArticles(): Promise<ViewAPIResponse<ANSArticle>>;
  getArticlesBySection(section: string, excludeIds?: string[]): Promise<ViewAPIResponse<ANSArticle>>;
  getArticleById(id: string): Promise<ANSArticle | null>;
  getNavigationById(id: string): Promise<NavigationAPIResponse | null>;
  getCollectionById(id: string, website?: string): Promise<CollectionAPIResponse | null>;
  getAllArticles(): Promise<ANSArticle[]>;
  getArticleByUrl(url: string): Promise<ANSArticle | null>;
}
