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

/** 404-TEAM amaliyotchisi */
export interface Intern {
  id: string;
  name: string;
  direction: string;
  avatar: string;
  bio?: string;
  startedAt?: string;
  curator: {
    name: string;
    avatar: string;
    role?: string;
  };
  /** Hozir ishlayotgan loyihalar */
  activeProjects: { title: string; role?: string; note?: string }[];
  /** Tugatilgan / ishlagan loyihalar */
  completedProjects: { title: string; period?: string; note?: string }[];
  /**
   * Kurator qo'ygan ballar.
   * `max` — shu loyiha uchun ajratilgan maksimal ball (standart 100).
   * `pending: true` — loyiha davom etmoqda, ball hali qo'yilmagan (kutilmoqda).
   */
  curatorGrades: { category: string; score: number; max?: number; pending?: boolean }[];
  curatorComment?: string;
  /** Hozirgacha to'plangan umumiy ball */
  overallGrade?: number;
  /** Davom etayotgan loyihalardan kutilayotgan qo'shimcha ball */
  expectedGrade?: number;
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
  /** Jonli loyihaning manzili — mavjud bo'lsa kartada va modalda havola chiqadi */
  link?: string;
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
