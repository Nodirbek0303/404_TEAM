/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, TeamMember, Project, Intern } from './types';

export const servicesData: Service[] = [
  {
    id: 'web-dev',
    title: 'Zamonaviy Veb Platformalar',
    description: 'Framer-motion animatsiyalari, yuqori tezlik (Vite/React) va mukammal SEO optimallashuviga ega korporativ va e-commerce veb-saytlar.',
    iconName: 'Globe',
    tag: 'Eng ommabop',
    features: [
      'Responsive (mobil va planshet moslashuvchanlik)',
      'SEO optimallashtirilgan tuzilish',
      'Tezkor yuklanish (Next.js / Vite)',
      'Boshqaruv paneli (Admin dashboard)'
    ]
  },
  {
    id: 'mobile-dev',
    title: 'Smartfon Ilovalari',
    description: 'iOS va Android tizimlari uchun Flutter va React Native asosidagi tezkor, chiroyli va qulay mobil ilovalar yaratish.',
    iconName: 'Smartphone',
    tag: 'Premium xizmat',
    features: [
      'App Store va Google Play\'da chop etish',
      'Offline rejimda ishlash imkoniyati',
      'Push xabarnomalar integratsiyasi',
      'Biometrik (FaceID/Fingerprint) xavfsizlik'
    ]
  },
  {
    id: 'bot-dev',
    title: 'Telegram Ekotizimlari',
    description: 'Biznesingizni avtomatlashtiruvchi, WebApp interfeysli, to\'lov tizimlari ulangan, murakkab operatsiyalarni bajaruvchi botlar.',
    iconName: 'MessageSquare',
    tag: 'Tezkor & Qulay',
    features: [
      'Click va Payme to\'lov integratsiyasi',
      'Foydalanuvchi bilan interaktiv WebApp interfeysi',
      'Admin uchun statistika va boshqaruv paneli',
      'Mijozlar bilan avtomatlashtirilgan muloqot'
    ]
  },
  {
    id: 'crm-dev',
    title: 'CRM va Biznes Avtomatlashtirish',
    description: 'Sotuvlarni, xodimlarni va moliyaviy hisob-kitoblarni real vaqt rejimida nazorat qilish imkonini beruvchi individual ERP tizimlari.',
    iconName: 'Cpu',
    tag: 'Katta Biznes uchun',
    features: [
      'Xodimlar KPI tizimini hisoblash',
      'Sotuv voronkasi va mijozlar kartotekasi',
      'Avtomatik PDF hisobotlar va eksport',
      'IP-telefoniya va SMS-provayderlar integratsiyasi'
    ]
  }
];

export const teamMembersData: TeamMember[] = [
  {
    id: 'nodirbek',
    name: 'Xayrullayev Nodirbek Abdujamolovich',
    role: 'Asoschi & CEO',
    avatar: '/team/nodirbek-card.png',
    modalAvatar: '/team/nodirbek-modal.png',
    bio: '7 yillik tajribaga ega arxitektor. Yuqori yuklamali (high-load) tizimlar, xavfsizlik va kompaniya faoliyatini boshqarish bo\'yicha yetakchi.',
    skills: [
      { name: 'Tizim Arxitekturasi', level: 98 },
      { name: 'Backend (Node.js/Go)', level: 95 },
      { name: 'DevOps & AWS', level: 90 },
      { name: 'Sun\'iy Intellekt integratsiyasi', level: 88 }
    ],
    socials: {
      telegram: 'https://t.me/evanshar03'
    }
  },
  {
    id: 'dilshod',
    name: 'Anarboyev Dilshod',
    role: 'Kompaniya asoschilaridan biri · Kiberxavfsizlik bo\'limi Boshlig\'i',
    avatar: '/team/dilshod-card.png',
    modalAvatar: '/team/dilshod-modal.png',
    bio: 'Kiberxavfsizlik bo\'limini boshqaradi. Kiber hujumlarga qarshi kurashadi va har bir kod, har bir loyiha himoya ostida bo\'lishini ta\'minlaydi.',
    skills: [
      { name: 'Penetration Testing', level: 97 },
      { name: 'Secure Code Review', level: 96 },
      { name: 'Network & Cloud Security', level: 94 },
      { name: 'Incident Response', level: 93 }
    ],
    socials: {}
  },
  {
    id: 'umar',
    name: 'Umar Muradov',
    role: 'Kompaniya asoschilaridan biri · Full-Stack koding bo\'limi Boshlig\'i',
    avatar: '/team/umar-card.png',
    bio: 'Full-stack koding bo\'limini boshqaradi. Frontend va backend arxitekturasini birlashtirib, tezkor, barqaror va masshtablanuvchan dasturiy yechimlar yaratadi.',
    skills: [
      { name: 'React & TypeScript', level: 97 },
      { name: 'Node.js & API dizayn', level: 96 },
      { name: 'Full-Stack arxitektura', level: 95 },
      { name: 'Kod sifati va DevOps', level: 92 }
    ],
    socials: {}
  },
  {
    id: 'shaxlo',
    name: 'Shaxlo Sherzodova',
    role: 'Dizayn bo\'limi Boshlig\'i · CEO bosh yordamchisi',
    avatar: '/team/shaxlo-card.png',
    modalAvatar: '/team/shaxlo-modal.png',
    bio: 'Dizayn bo\'limini boshqaradi, brend identitetini shakllantiradi va CEO operatsion ishlariga yordam beradi. Foydalanuvchi tajribasi va vizual estetikani uyg\'unlashtiruvchi yetakchi.',
    skills: [
      { name: 'Figma & UI Prototyping', level: 97 },
      { name: 'Brand Identity', level: 95 },
      { name: 'Creative Direction', level: 93 },
      { name: 'Loyiha muvofiqlashtirish', level: 92 }
    ],
    socials: {}
  },
  {
    id: 'munisa',
    name: 'Munisa Abdusattorovna',
    role: 'Sun\'iy intellekt bo\'limi Boshlig\'i · AI mutaxassisi',
    avatar: '/team/munisa-card.png',
    modalAvatar: '/team/munisa-modal.png',
    bio: 'Sun\'iy intellekt bo\'limini boshqaradi, ML modellari va computer vision yechimlarini ishlab chiqadi. Ilmiy-aniq tadqiqotlar va AI for Social Impact loyihalarida faol ishtirok etadi.',
    skills: [
      { name: 'Machine Learning', level: 96 },
      { name: 'Computer Vision', level: 94 },
      { name: 'LLM & NLP integratsiyasi', level: 92 },
      { name: 'AI for Social Impact', level: 95 }
    ],
    socials: {}
  },
  {
    id: 'ulzada',
    name: 'Jaqsimuratova Ulzada',
    role: 'SMM bo\'limi Boshlig\'i',
    avatar: '/team/ulzada-card.png',
    bio: 'SMM bo\'limini boshqaradi. Har qanday loyiha, hamkor va mijoz uchun brendga mos, samarali va ijodiy reklama kampaniyalarini ishlab chiqadi — auditoriyani jalb qiladi, ishonchni mustahkamlaydi va biznes natijasini oshiradi.',
    skills: [
      { name: 'Reklama strategiyasi', level: 96 },
      { name: 'SMM & Targeting', level: 95 },
      { name: 'Kreativ kontent', level: 94 },
      { name: 'Brend kommunikatsiyasi', level: 93 }
    ],
    socials: {}
  },
  {
    id: 'aynur',
    name: 'Aynur Azamatova',
    role: 'SMM target mutaxassisi',
    avatar: '/team/aynur-card.png',
    bio: 'Ijtimoiy tarmoqlarda maqsadli auditoriyaga yo\'naltirilgan reklama kampaniyalarini boshqaradi. Kontent strategiyasi, targeting va konversiya optimallashtirish bo\'yicha mutaxassis.',
    skills: [
      { name: 'Meta & Instagram Ads', level: 94 },
      { name: 'Target auditoriya tahlili', level: 92 },
      { name: 'Kontent strategiyasi', level: 90 },
      { name: 'ROI va analitika', level: 88 }
    ],
    socials: {}
  },
  {
    id: 'behruz',
    name: 'Behruz Muhiddinov',
    role: 'Frontend mutaxassisi',
    avatar: '/team/behruz-card.png',
    bio: 'Zamonaviy va tezkor foydalanuvchi interfeyslarini yaratadi. React, animatsiyalar va responsive dizayn bo\'yicha tajribali frontend dasturchi.',
    skills: [
      { name: 'React & Next.js', level: 96 },
      { name: 'TailwindCSS & Framer Motion', level: 95 },
      { name: 'TypeScript', level: 93 },
      { name: 'Performance Optimization', level: 91 }
    ],
    socials: {}
  },
  {
    id: 'jamshed',
    name: 'Shomurodov Jamshed',
    role: 'Backend mutaxassisi',
    avatar: '/team/jamshed-card.png',
    bio: 'Server tomoni arxitekturasi, ma\'lumotlar bazasi va API yaratish bo\'yicha mutaxassis. Tezkor, xavfsiz va barqaror backend tizimlarini ishlab chiqadi.',
    skills: [
      { name: 'Node.js & Express', level: 95 },
      { name: 'PostgreSQL & MongoDB', level: 94 },
      { name: 'API dizayn va integratsiya', level: 93 },
      { name: 'Redis & keshlash', level: 90 }
    ],
    socials: {}
  }
];

export interface TeamGroup {
  id: string;
  labelUz: string;
  labelEn: string;
  labelRu: string;
  memberIds: string[];
}

/** Jamoa ierarxiyasi: rahbariyat → asoschilar → bo'lim boshliqlari → mutaxassislar */
export const teamGroups: TeamGroup[] = [
  {
    id: 'leadership',
    labelUz: 'Rahbariyat',
    labelEn: 'Leadership',
    labelRu: 'Руководство',
    memberIds: ['nodirbek', 'shaxlo'],
  },
  {
    id: 'founders',
    labelUz: 'Asoschilar',
    labelEn: 'Co-Founders',
    labelRu: 'Сооснователи',
    memberIds: ['dilshod', 'umar'],
  },
  {
    id: 'heads',
    labelUz: "Bo'lim boshliqlari",
    labelEn: 'Department Heads',
    labelRu: 'Руководители отделов',
    memberIds: ['munisa', 'ulzada'],
  },
  {
    id: 'specialists',
    labelUz: 'Mutaxassislar',
    labelEn: 'Specialists',
    labelRu: 'Специалисты',
    memberIds: ['aynur', 'behruz', 'jamshed'],
  },
];

/**
 * Amaliyotchilar — ma'lumot qo'shish:
 * 1. Rasmlar: public/interns/{id}-card.png va public/interns/{id}-curator.png
 * 2. Quyidagi massivga yangi obyekt qo'shing
 *
 * @example
 * {
 *   id: 'ali-valiyev',
 *   name: 'Valiyev Ali',
 *   direction: 'Frontend dasturlash',
 *   avatar: '/interns/ali-valiyev-card.png',
 *   bio: '...',
 *   startedAt: '2025-yil mart',
 *   curator: { name: '...', avatar: '/interns/ali-curator.png', role: '...' },
 *   activeProjects: [{ title: 'Loyiha nomi', role: 'Vazifasi' }],
 *   completedProjects: [{ title: 'Loyiha', period: '2025 Q1' }],
 *   curatorGrades: [{ category: 'React', score: 90 }],
 *   curatorComment: '...',
 *   overallGrade: 88,
 * },
 */
export const internsData: Intern[] = [
  {
    id: 'zafarjon',
    name: 'Zoidov Zafarjon',
    direction: 'Kiberxavfsizlik',
    avatar: '/interns/zafarjon-card.png',
    bio: '404-TEAM kampaniyasida kiberxavfsizlik yo\'nalishida yangi amaliyotchi. Hozircha loyihalarda ishtirok etmaydi — ballar va loyihalar amaliyot jarayonida qo\'shiladi.',
    startedAt: '2025-yil yanvar',
    curator: {
      name: 'Anarboyev Dilshod',
      avatar: '/team/dilshod-card.png',
      role: 'Kiberxavfsizlik bo\'limi Boshlig\'i',
    },
    activeProjects: [],
    completedProjects: [],
    curatorGrades: [],
    curatorComment: 'Yangi amaliyotchi. Loyihalarda ishlagach kurator tomonidan ballar va izohlar yangilanadi.',
    overallGrade: 0,
  },
];

export const projectsData: Project[] = [
  {
    id: 'cyberaqua',
    title: 'CYBERAQUA — AI Sug\'orish Tizimi',
    category: 'system',
    categoryLabel: 'IoT / AI Tizim',
    description: 'Daraxt, dala va dehqonchilik maydonlari uchun mukammal aqlli sug\'orish tizimi. Inson aralashuvisiz AI namlik va quruqlikni aniqlaydi, kerakli zonaga avtomatik suv beradi — sun\'iy yo\'ldosh tahlili, sensorlar va web boshqaruv paneli bilan.',
    image: '/projects/cyberaqua.png',
    technologies: ['Python', 'TensorFlow', 'React', 'Flask', 'MQTT', 'Raspberry Pi', 'AI'],
    stats: {
      label: 'Sug\'orilgan maydon',
      value: '128.5 gektar'
    },
    features: [
      'Sun\'iy yo\'ldosh va AI orqali namlik/quruqlik tahlili',
      'Quruq zonani avtomatik aniqlash va sug\'orishni ishga tushirish',
      'Web va mobil orqali masofadan real vaqt monitoring',
      'Sensorlar, nasoslar va ma\'lumotlar bazasi integratsiyasi',
      'Avtomatik va qo\'lda rejim — inson omilisiz ishlash'
    ],
    duration: '4 oy',
    clientFeedback: {
      text: 'CYBERAQUA tufayli sug\'orish to\'liq avtomatlashtirildi. AI qayerda suv kerakligini aniq ko\'rsatadi, biz esa faqat natijani kuzatamiz — vaqt, suv va mehnat sezilarli darajada tejaldi.',
      author: '404-TEAM',
      position: 'CEO: Xayrullayev Nodirbek · @evanshar03'
    }
  },
  {
    id: 'aquaguard',
    title: 'AquaGuard — Suv Sifati va Tozalash Tizimi',
    category: 'system',
    categoryLabel: 'IoT / AI Laboratoriya',
    description: 'Daryo, ko\'l, dengiz va boshqa suv manbalarining tarkibini real vaqtda o\'rganuvchi to\'liq laboratoriya va qurilma kompleksi. AI va sensorlar orqali H₂O, zarralar va ifloslantiruvchilarni aniqlaydi, suvni ichimlik darajasiga tozalash va masofadan monitoring qilish imkonini beradi.',
    image: '/projects/aquaguard.png',
    technologies: ['Python', 'AI', 'IoT', 'MQTT', 'React', 'Raspberry Pi', 'TensorFlow'],
    stats: {
      label: 'Suv sifati monitoring',
      value: '24/7 Real vaqt'
    },
    features: [
      'Suv tarkibini tahlil: pH, turbidlik, harorat, kislorod, o\'tkazuvchanlik',
      'H₂O, zarralar va ifloslantiruvchilarni AI orqali aniqlash',
      'To\'liq laboratoriya stantsiyasi va filtrlash qurilmalari',
      'Quyosh paneli bilan avtonom ish — daryo va uzoq hududlarda',
      'Bulut va mobil ilova orqali masofadan boshqarish',
      'Suvni ichimlik suviga aylantirish va sifat nazorati'
    ],
    duration: '5 oy',
    clientFeedback: {
      text: 'AquaGuard tabiiy suv manbalarini real vaqtda kuzatadi va tozalash jarayonini avtomatlashtiradi. Laboratoriya natijalari va mobil monitoring bir tizimda — ishonchli va zamonaviy yechim.',
      author: '404-TEAM',
      position: 'CEO: Xayrullayev Nodirbek · @evanshar03'
    }
  },
  {
    id: 'smart-city-404',
    title: '404 SMART CITY — Aqlli Shahar Tizimi',
    category: 'system',
    categoryLabel: 'IoT / AI Shahar',
    description: 'AI asosidagi yagona aqlli shahar boshqaruv platformasi: svetofor, parkovka, EV zaryadlash, favqulodda yashil koridor, yo\'l holati va markaziy boshqaruv markazi — barchasi real vaqt xaritasi va mobil ilova orqali.',
    image: '/projects/smart-city-404.png',
    technologies: ['AI', 'Computer Vision', 'React', 'Python', 'IoT', '5G', 'MQTT'],
    stats: {
      label: 'Shahar infratuzilmasi',
      value: '1024 kamera'
    },
    features: [
      'Aqlli svetfor — AI orqali tirbandlikni kamaytirish',
      'Aqlli parkovka — bo\'sh joylarni aniqlash va onlayn bron',
      'EV zaryadlash stansiyalarini real vaqt monitoring',
      'Tez yordam uchun avtomatik yashil koridor',
      'Mobil ilova va markaziy boshqaruv markazi (NOC)',
      'Yo\'l holati, qurilish zonasi va AI statistika tahlili'
    ],
    duration: '6 oy',
    clientFeedback: {
      text: '404 SMART CITY butun shahar infratuzilmasini bitta AI miya orqali boshqaradi — tirbandlik 70% ga kamaydi, ekologiya va fuqaro qulayligi sezilarli yaxshilandi.',
      author: '404-TEAM',
      position: 'CEO: Xayrullayev Nodirbek · @evanshar03'
    }
  },
  {
    id: 'express-bozor',
    title: 'Express Bozor — Milliy E-Commerce',
    category: 'web',
    categoryLabel: 'Veb Saytlar',
    description: 'O\'zbekiston bozorlari uchun maxsus tayyorlangan, oyiga 100,000 dan ortiq faol foydalanuvchiga ega, zamonaviy onlayn gipermarket platformasi.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'PostgreSQL', 'Redis'],
    stats: {
      label: 'Sotuvlar hajmi',
      value: '+140% O\'sish'
    },
    features: [
      'Kombinatsiyalangan to\'lovlar (Payme, Click, Naqd)',
      'Real vaqtda kuryer harakatini kuzatish',
      'Sotuvchilar uchun qulay shaxsiy kabinet',
      'AI asosidagi tovar tavsiyalari tizimi'
    ],
    duration: '2.5 oy',
    clientFeedback: {
      text: '404-TEAM bilan ishlash bizning biznesimizni butunlay o\'zgartirdi. Ularning professionalligi va yuqori tezlikdagi yechimlari hayratlanarli.',
      author: 'Jamshid Ismoilov',
      position: 'Express Bozor bosh direktori'
    }
  },
  {
    id: 'medline-app',
    title: 'Medline — Onlayn Shifokor Telemeditsina',
    category: 'mobile',
    categoryLabel: 'Mobil Ilovalar',
    description: 'Bemorlar va professional shifokorlarni bir lahzada bog\'lovchi, video/audio chatlar, elektron retseptlar va onlayn navbat tizimiga ega mobil ilova.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    technologies: ['Flutter', 'Firebase', 'WebRTC', 'Go', 'MongoDB'],
    stats: {
      label: 'Konsultatsiyalar',
      value: '45k + Shifo'
    },
    features: [
      'WebRTC orqali uzluksiz video va audio muloqot',
      'Shifokorlar ish jadvali va onlayn bronlash',
      'Kasalliklar tarixi va retseptlar xavfsiz arxivi',
      'Tez yordam chaqirish uchun tezkor geolokatsiya'
    ],
    duration: '3 oy',
    clientFeedback: {
      text: 'Ilovaning barqarorligi va UI dizayni ajoyib darajada. Mijozlarimiz shifokorlar bilan bog\'lanish juda osonlashganidan juda xursand.',
      author: 'Dr. Shahlo Rahmonova',
      position: 'Medline Klinikasi asoschisi'
    }
  },
  {
    id: 'soliqchi-bot',
    title: 'Soliqchi Maslahatchi — Telegram WebApp',
    category: 'bot',
    categoryLabel: 'Telegram Botlar',
    description: 'Tadbirkorlar va jismoniy shaxslar uchun soliq hisob-kitoblarini avtomatlashtiruvchi, Telegram ichida ochiladigan to\'liq interaktiv WebApp.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'TypeScript', 'Node.js', 'Telegraf API', 'Express'],
    stats: {
      label: 'Bot foydalanuvchilari',
      value: '95,000+ faol'
    },
    features: [
      'Telegram interfeysida to\'liq interaktiv kalkulyatorlar',
      'Yillik daromad hisobotlarini avtomatik PDF formatda yuklash',
      'Soliq muddatlari yaqinlashganda avtomatik xabarnoma',
      'Soliq inspeksiyasi bazasi bilan xavfsiz sinxronizatsiya'
    ],
    duration: '3 hafta',
    clientFeedback: {
      text: 'Bunday murakkab WebApp tizimini bor-yo\'g\'i 3 haftada tayyorlab berishdi! Bot barqaror va xatosiz ishlamoqda. Ofarin!',
      author: 'Akmal Raufov',
      position: 'Moliya Maslahatchilari Uyushmasi'
    }
  },
  {
    id: 'edu404-crm',
    title: 'Edu404 — Akademiyani boshqarish ERP',
    category: 'system',
    categoryLabel: 'CRM / Tizimlar',
    description: 'O\'quv markazlari uchun talabalarni ro\'yxatga olish, to\'lovlar nazorati, dars jadvallari va SMS-xabarnomalarni birlashtiruvchi universal bulutli tizim.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    technologies: ['Vue.js', 'TailwindCSS', 'Django REST', 'PostgreSQL', 'Docker'],
    stats: {
      label: 'Avtomatlashtirish',
      value: '99.4% aniqlik'
    },
    features: [
      'Guruhlar va dars jadvallarining qulay kalendar ko\'rinishi',
      'Talabalar davomati va oylik to\'lovlarni qulay monitoringi',
      'Avtomatik balans ogohlantiruvchi SMS integratsiyasi',
      'Ota-onalar uchun shaxsiy kuzatuv portal sahifasi'
    ],
    duration: '2 oy',
    clientFeedback: {
      text: 'Avvallari hisob-kitob va jadvallarni Excelda qiynalib yuritardik. Edu404 o\'quv markazimiz tizimini mutlaqo yangi darajaga olib chiqdi.',
      author: 'Zilola Karimboyeva',
      position: 'Bright Academy direktori'
    }
  }
];

export const statisticsData = [
  { id: 'stat-1', label: 'Muvaffaqiyatli Loyihalar', value: '48+' },
  { id: 'stat-2', label: 'Tajribali Xodimlar', value: '12+' },
  { id: 'stat-3', label: 'Mijozlarimiz Bahosi', value: '99.6%' },
  { id: 'stat-4', label: 'Yillik tajriba', value: '5 yil' }
];

export const pricingOptions = {
  projectTypes: [
    { id: 'landing', label: 'Bir sahifali sayt (Landing)', basePrice: 400, baseDays: 7 },
    { id: 'corporate', label: 'Korporativ Sayt (Murakkab)', basePrice: 1200, baseDays: 20 },
    { id: 'ecommerce', label: 'Onlayn Do\'kon (E-commerce)', basePrice: 2000, baseDays: 35 },
    { id: 'mobile', label: 'Mobil Ilova (iOS & Android)', basePrice: 3500, baseDays: 45 },
    { id: 'telegram-bot', label: 'Murakkab Telegram Bot (WebApp)', basePrice: 600, baseDays: 14 },
    { id: 'crm-erp', label: 'Maxsus CRM / ERP Tizim', basePrice: 4500, baseDays: 60 }
  ],
  features: [
    { id: 'auth', label: 'Foydalanuvchilar Kabineti & Kirish', price: 250, days: 3 },
    { id: 'payments', label: 'To\'lov Tizimlari (Click, Payme, Stripe)', price: 300, days: 4 },
    { id: 'admin', label: 'Admin Panel & Boshqaruv Dashboardi', price: 400, days: 5 },
    { id: 'chat', label: 'Muloqot Chatlari (Real-time Video/Audio)', price: 500, days: 7 },
    { id: 'ai', label: 'Sun\'iy Intellekt (AI) & Tavsiyalar integratsiyasi', price: 800, days: 10 },
    { id: 'multilang', label: 'Ko\'p tillilik (Multi-language)', price: 150, days: 2 }
  ],
  timelines: [
    { id: 'express', label: 'Tezlashtirilgan (Ekspress + 25% narx)', multiplier: 1.25, dayReduction: 0.3 },
    { id: 'standard', label: 'Standart Muddat', multiplier: 1.0, dayReduction: 0 },
    { id: 'flexible', label: 'Moslashuvchan (Sokinroq - 10% chegirma)', multiplier: 0.9, dayReduction: -0.2 }
  ]
};
