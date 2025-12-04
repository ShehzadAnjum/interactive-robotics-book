// Shared TypeScript types between frontend and backend

export interface User {
  id: string;
  email: string;
  name: string | null;
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  slug: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Bookmark {
  id: string;
  userId: string;
  chapterId: string;
  sectionId: string | null;
  title: string;
  createdAt: Date;
}

export interface Progress {
  id: string;
  userId: string;
  chapterId: string;
  completed: boolean;
  percentage: number;
  lastReadAt: Date;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatResponse {
  message: string;
  sources?: string[];
}
