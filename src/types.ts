/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
  features: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  modalAvatar?: string;
  bio: string;
  skills: { name: string; level: number }[];
  socials: {
    telegram?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Project {
  id: string;
  title: string;
  category: 'web' | 'mobile' | 'bot' | 'system';
  categoryLabel: string;
  description: string;
  image: string;
  technologies: string[];
  stats: {
    label: string;
    value: string;
  };
  features: string[];
  duration: string;
  clientFeedback?: {
    text: string;
    author: string;
    position: string;
  };
}

export interface BriefProposal {
  id: string;
  clientName: string;
  clientTelegram: string;
  projectType: string;
  featuresSelected: string[];
  timeline: string;
  budgetTier: string;
  estimatedCost: number;
  estimatedDays: number;
  createdAt: string;
  notes?: string;
  status: 'Yuborildi' | 'Ko\'rib chiqilmoqda' | 'Tasdiqlandi';
}
