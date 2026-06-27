import { Language } from './translations';

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
  features: string[];
}

export const servicesByLang: Record<Language, ServiceDetail[]> = {
  uz: [
    {
      id: 'web',
      title: "Web saytlar",
      description: "Biznesingiz uchun yuqori tezlikda ishlovchi, mukammal dizaynga ega bo'lgan zamonaviy veb-saytlar va platformalar.",
      iconName: 'Globe',
      tag: "Eng ommabop",
      features: ["Responsive moslashuvchanlik", "SEO optimallashtirilgan kod", "Tezkor Vite & React karkasi", "Admin boshqaruv paneli"]
    },
    {
      id: 'mobile',
      title: "Android & iOS ilovalari",
      description: "Mobil qurilmalar uchun zamonaviy dizaynli, tezkor va barqaror ishlovchi native hamda cross-platform ilovalar.",
      iconName: 'Smartphone',
      tag: "Premium loyihalar",
      features: ["App Store & Google Play", "Offline rejimda ishlash", "Push-xabarlar tizimi", "Biometrik FaceID integratsiyasi"]
    },
    {
      id: 'bot',
      title: "Telegram botlar",
      description: "Telegram platformasida WebApp yechimlari bilan jihozlangan, to'lov tizimlariga ulangan avtomatlashtirilgan botlar.",
      iconName: 'MessageSquare',
      tag: "Tezkor ishga tushirish",
      features: ["WebApp interfeyslari", "Click & Payme integratsiyasi", "Statistika va guruh boshqaruvi", "Avtomatlashgan savdo voronkasi"]
    },
    {
      id: 'crm',
      title: "CRM / ERP tizimlari",
      description: "Biznes jarayonlarini raqamlashtirish, xodimlar KPI va savdo boshqaruvini avtomatlashtiruvchi individual tizimlar.",
      iconName: 'Cpu',
      tag: "Biznes uchun",
      features: ["Sotuvlar nazorati (Pipeline)", "Xodimlar unumdorligi", "PDF hisobotlar generatsiyasi", "Buxgalteriya integratsiyasi"]
    },
    {
      id: 'ai',
      title: "Sun'iy intellekt (AI)",
      description: "Gemini API, LLM va neyrotarmoqlarni biznes jarayonlariga integratsiya qilish, aqlli chatbotlar va maslahatchilar.",
      iconName: 'BrainCircuit',
      tag: "Kelajak texnologiyasi",
      features: ["Gemini LLM integratsiyasi", "Avtomatik kontent generatsiyasi", "Aqlli tavsiya berish tizimlari", "Hujjatlarni tahlil qilish (OCR)"]
    },
    {
      id: 'cv',
      title: "Computer Vision",
      description: "Tasvirlar va videolarni real vaqt rejimida tahlil qilish, yuzni va obyektlarni daxshatli aniqlikda aniqlash.",
      iconName: 'Eye',
      tag: "Yuqori Aniqlik",
      features: ["Obyektlarni tahlil qilish", "Yuzlarni tanish tizimi", "Shtrixkod va OCR o'quvchi", "Harakatlarni kuzatish (Tracking)"]
    },
    {
      id: 'camera',
      title: "AI Camera tizimlari",
      description: "Mavjud videokuzatuv kameralarini aqlli neyrotarmoqlarga ulash va xavfsizlikni to'liq avtomatlashtirish.",
      iconName: 'Video',
      tag: "Xavfsizlik",
      features: ["Harakatlarni aniqlash", "Xodimlar keldi-ketdi nazorati", "Avtomobil raqamlarini o'qish", "Xavf aniqlanganda Telegram xabar"]
    },
    {
      id: 'robot',
      title: "Robototexnika",
      description: "Sanoat robotlari, kontrollerlar va sensorlarni boshqarish uchun barqaror va past darajali dasturiy yechimlar.",
      iconName: 'Wrench',
      tag: "Sanoat 4.0",
      features: ["IoT sensorlar integratsiyasi", "Servo-motorlarni boshqarish", "Mikrokontroller dasturlash", "Real-vaqt koordinatalari"]
    },
    {
      id: 'automation',
      title: "Biznesni avtomatlashtirish",
      description: "Qog'ozbozlik va qo'lda bajariladigan ishlarni yo'q qilib, integratsiyalashgan avtomatik oqimlar yaratish.",
      iconName: 'Zap',
      tag: "Samaradorlik",
      features: ["Tizimlararo integratsiya", "Avtomatik SMS va xat yuborish", "Hujjatlar aylanmasi", "Integratsiyalashgan triggerlar"]
    },
    {
      id: 'cyber',
      title: "Cybersecurity",
      description: "Veb-saytlar va serverlaringizni DDoS hamda xakerlar hujumidan to'liq va mukammal tarzda daxshatli himoyalash.",
      iconName: 'ShieldAlert',
      tag: "Xavfsiz Tizim",
      features: ["Doimiy zaifliklar monitoringi", "WAF (Firewall) o'rnatish", "Penetration testing (Sindirib ko'rish)", "Ma'lumotlar shifrlash (SSL/TLS)"]
    },
    {
      id: 'smm',
      title: "SMM & Digital Marketing",
      description: "Ijtimoiy tarmoqlar uchun professional strategiyalar, kreativ dizayn va maqsadli reklama (Target) sozlash.",
      iconName: 'Megaphone',
      tag: "Marketing",
      features: ["Kreativ postlar va dizayn", "Targeting reklama sozlamalari", "SEO & Copywriting xizmati", "ROI va konversiya o'sishi"]
    },
    {
      id: 'design',
      title: "UI/UX Dizayn",
      description: "Foydalanuvchilar daxshatli zavq oladigan interfeyslar, batafsil prototiplar va interaktiv UX tadqiqotlar.",
      iconName: 'Palette',
      tag: "Estetika",
      features: ["Figma interaktiv prototip", "Foydalanuvchi tadqiqotlari", "Simmatrik bento-grid arxitektura", "Brend logotipi va vizual uslub"]
    }
  ],
  en: [
    {
      id: 'web',
      title: "Websites",
      description: "High-performance, beautifully crafted websites and platforms custom designed for your business.",
      iconName: 'Globe',
      tag: "Most Popular",
      features: ["Responsive Adaptability", "SEO-optimized Code", "Fast Vite & React Framework", "Admin Management Panel"]
    },
    {
      id: 'mobile',
      title: "Android & iOS Apps",
      description: "High-speed, stable native and cross-platform mobile apps featuring gorgeous and sleek designs.",
      iconName: 'Smartphone',
      tag: "Premium Projects",
      features: ["App Store & Google Play", "Offline support enabled", "Push notifications network", "Biometric FaceID integration"]
    },
    {
      id: 'bot',
      title: "Telegram Bots",
      description: "Automated bots integrated with WebApp interfaces and multiple payment systems in Telegram.",
      iconName: 'MessageSquare',
      tag: "Fast Launch",
      features: ["Interactive WebApp windows", "Click & Payme API payments", "Stats & group administration", "Automated marketing funnel"]
    },
    {
      id: 'crm',
      title: "CRM / ERP Systems",
      description: "Tailored software to digitize business processes, calculate employee KPIs, and automate sales management.",
      iconName: 'Cpu',
      tag: "For Business",
      features: ["Sales Pipeline Management", "Employee Performance Tracking", "PDF Report Generation Engine", "Accounting integrations"]
    },
    {
      id: 'ai',
      title: "Artificial Intelligence (AI)",
      description: "Integrating Gemini API, LLM, and neural networks into your workflows with smart virtual assistants.",
      iconName: 'BrainCircuit',
      tag: "Future Tech",
      features: ["Gemini LLM orchestration", "Automated AI copywriter", "Smart recommendation matrix", "Secure Document analysis (OCR)"]
    },
    {
      id: 'cv',
      title: "Computer Vision",
      description: "Real-time analysis of image and video streams for high-precision object and face detection.",
      iconName: 'Eye',
      tag: "High Precision",
      features: ["Real-time Object Analysis", "Biometric Face Recognition", "Barcode & Optical OCR readers", "Intelligent motion tracking"]
    },
    {
      id: 'camera',
      title: "AI Camera Systems",
      description: "Connect existing CCTV feeds to smart neural network agents to automate security surveillance.",
      iconName: 'Video',
      tag: "Security",
      features: ["Active Motion Alerts", "Staff attendance logs", "Vehicle license plate readers", "Instant Telegram alert router"]
    },
    {
      id: 'robot',
      title: "Robotics",
      description: "Low-level, reliable software frameworks for industrial robotic arms, microcontrollers, and IoT sensor arrays.",
      iconName: 'Wrench',
      tag: "Industry 4.0",
      features: ["IoT sensor networking", "Servo-motor controllers", "Firmware development", "Real-time coordinate calculations"]
    },
    {
      id: 'automation',
      title: "Business Automation",
      description: "Connect third-party apps and orchestrate triggers to banish manual paperwork forever.",
      iconName: 'Zap',
      tag: "Productivity",
      features: ["Cross-platform system flow", "Automated SMS/Email loops", "Workflow document automation", "Intelligent webhooks triggers"]
    },
    {
      id: 'cyber',
      title: "Cybersecurity",
      description: "Ironclad defense strategies protecting your websites and servers from DDoS and hacking vectors.",
      iconName: 'ShieldAlert',
      tag: "Secure Core",
      features: ["Vulnerabilities scanning", "WAF (Web Application Firewall)", "Authorized penetration testing", "Strong SSL/TLS encrypt layers"]
    },
    {
      id: 'smm',
      title: "SMM & Digital Marketing",
      description: "Creative digital marketing campaigns, gorgeous branding posts, and targeted high-converting social ads.",
      iconName: 'Megaphone',
      tag: "Marketing",
      features: ["Astonishing Graphic posts", "Precision Target settings", "SEO & conversion copy", "ROI and conversion scaling"]
    },
    {
      id: 'design',
      title: "UI/UX Design",
      description: "Visually spectacular wireframes, clickable Figma mockups, and empathetic user research studies.",
      iconName: 'Palette',
      tag: "Aesthetics",
      features: ["Interactive Figma layouts", "Empathetic User Research", "Bento-grid symmetric wireframes", "Corporate style guides & logos"]
    }
  ],
  ru: [
    {
      id: 'web',
      title: "Веб-сайты",
      description: "Высокопроизводительные, превосходно оформленные веб-сайты и платформы, разработанные для вашего бизнеса.",
      iconName: 'Globe',
      tag: "Самое популярное",
      features: ["Адаптивность кода", "SEO-оптимизированная разметка", "Быстрый каркас Vite & React", "Панель администратора"]
    },
    {
      id: 'mobile',
      title: "Приложения Android & iOS",
      description: "Быстрые и стабильные нативные и кроссплатформенные мобильные приложения с великолепным дизайном.",
      iconName: 'Smartphone',
      tag: "Премиум проекты",
      features: ["Публикация App Store & Google Play", "Поддержка автономного режима", "Push-уведомления", "Биометрическая интеграция FaceID"]
    },
    {
      id: 'bot',
      title: "Telegram боты",
      description: "Автоматизированные боты с интерфейсами WebApp и приемом онлайн платежей внутри Telegram.",
      iconName: 'MessageSquare',
      tag: "Быстрый запуск",
      features: ["Интерактивный интерфейс WebApp", "Интеграция Click & Payme", "Статистика и админ-панель", "Автоматическая воронка продаж"]
    },
    {
      id: 'crm',
      title: "CRM / ERP системы",
      description: "Индивидуальные ERP-системы для оцифровки бизнеса, расчета KPI сотрудников и контроля продаж в реальном времени.",
      iconName: 'Cpu',
      tag: "Для бизнеса",
      features: ["Управление воронкой продаж", "Производительность персонала", "Генерация отчетов в PDF", "Интеграция с бухгалтерией"]
    },
    {
      id: 'ai',
      title: "Искусственный интеллект (ИИ)",
      description: "Интеграция Gemini API, больших языковых моделей (LLM) и нейросетей для умных консультантов и чат-ботов.",
      iconName: 'BrainCircuit',
      tag: "Будущее рядом",
      features: ["Интеграция Gemini LLM", "Автоматическая генерация контента", "Умные рекомендательные системы", "Анализ документов (OCR)"]
    },
    {
      id: 'cv',
      title: "Компьютерное зрение",
      description: "Анализ изображений и видеопотоков в реальном времени с высокой точностью распознавания лиц и объектов.",
      iconName: 'Eye',
      tag: "Высокая точность",
      features: ["Распознавание объектов", "Идентификация лиц", "Считывание штрихкодов и OCR", "Интеллектуальный трекинг"]
    },
    {
      id: 'camera',
      title: "AI Камеры и аналитика",
      description: "Подключение существующих камер наблюдения к нейросетям для полной автоматизации безопасности предприятия.",
      iconName: 'Video',
      tag: "Безопасность",
      features: ["Определение активности", "Контроль посещаемости сотрудников", "Распознавание автономеров", "Мгновенные Telegram-оповещения"]
    },
    {
      id: 'robot',
      title: "Робототехника",
      description: "Стабильные программные решения низкого уровня для промышленных роботов-манипуляторов и датчиков IoT.",
      iconName: 'Wrench',
      tag: "Индустрия 4.0",
      features: ["Интеграция датчиков IoT", "Управление сервоприводами", "Программирование микроконтроллеров", "Координаты в реальном времени"]
    },
    {
      id: 'automation',
      title: "Автоматизация бизнеса",
      description: "Связывание сторонних приложений и настройка триггеров для избавления от ручной бумажной работы.",
      iconName: 'Zap',
      tag: "Эффективность",
      features: ["Межсистемная интеграция", "Автоматические SMS/Email рассылки", "Электронный документооборот", "Интеллектуальные вебхуки"]
    },
    {
      id: 'cyber',
      title: "Кибербезопасность",
      description: "Надежные стратегии защиты ваших веб-ресурсов и серверов от DDoS-атак и попыток взлома.",
      iconName: 'ShieldAlert',
      tag: "Безопасное ядро",
      features: ["Сканирование уязвимостей", "Установка WAF (Firewall)", "Проведение тестов на проникновение", "Шифрование SSL/TLS"]
    },
    {
      id: 'smm',
      title: "SMM & Маркетинг",
      description: "Креативные кампании в соцсетях, великолепный визуальный контент и таргетированная реклама с высокой конверсией.",
      iconName: 'Megaphone',
      tag: "Маркетинг",
      features: ["Потрясающий графический контент", "Точная настройка таргета", "SEO и копирайтинг", "Масштабирование продаж ROI"]
    },
    {
      id: 'design',
      title: "UI/UX Дизайн",
      description: "Визуально великолепные прототипы интерфейсов в Figma, обеспечивающие максимальный комфорт пользователям.",
      iconName: 'Palette',
      tag: "Эстетика",
      features: ["Кликабельные макеты Figma", "Исследование пользовательского опыта", "Симметричная сетка Bento-grid", "Разработка логотипов и брендбуков"]
    }
  ],
  tr: [
    {
      id: 'web',
      title: "Web Siteleri",
      description: "İşletmeniz için yüksek performanslı, mükemmel tasarıma sahip modern web siteleri ve platformlar.",
      iconName: 'Globe',
      tag: "En Popüler",
      features: ["Duyarlı Tasarım (Mobil/Tablet)", "SEO Uyumlu Altyapı", "Hızlı Vite & React Altyapısı", "Yönetici Paneli (Dashboard)"]
    },
    {
      id: 'mobile',
      title: "Android & iOS Uygulamaları",
      description: "Mobil cihazlar için modern tasarımlı, hızlı ve kararlı çalışan yerel ve hibrit uygulamalar.",
      iconName: 'Smartphone',
      tag: "Seçkin Projeler",
      features: ["App Store & Google Play", "Çevrimdışı Çalışma Özelliği", "Push Bildirim Entegrasyonu", "Biyometrik FaceID Koruması"]
    },
    {
      id: 'bot',
      title: "Telegram Botları",
      description: "Telegram üzerinde WebApp pencereleri ve çeşitli ödeme sistemleri ile donatılmış otomasyon botları.",
      iconName: 'MessageSquare',
      tag: "Hızlı Kurulum",
      features: ["Etkileşimli WebApp Arayüzü", "Click & Payme Entegrasyonu", "İstatistik ve Grup Yönetimi", "Otomatik Satış Hunisi"]
    },
    {
      id: 'crm',
      title: "CRM / ERP Sistemleri",
      description: "İş süreçlerini dijitalleştirmek, personel KPI takibi yapmak ve satış yönetimini otomatikleştirmek için özel sistemler.",
      iconName: 'Cpu',
      tag: "İşletmeler İçin",
      features: ["Satış Hunisi Takibi", "Personel Performans Analizi", "Otomatik PDF Raporlama", "Muhasebe Entegrasyonları"]
    },
    {
      id: 'ai',
      title: "Yapay Zeka (AI)",
      description: "Gemini API, LLM ve sinir ağlarını iş süreçlerinize entegre eden akıllı sohbet robotları ve asistanlar.",
      iconName: 'BrainCircuit',
      tag: "Geleceğin Teknolojisi",
      features: ["Gemini LLM Entegrasyonu", "Otomatik İçerik Üretimi", "Akıllı Öneri Algoritmaları", "Doküman Analizi (OCR)"]
    },
    {
      id: 'cv',
      title: "Bilgisayarlı Görü (CV)",
      description: "Yüksek doğrulukla yüz ve nesne algılama amacıyla görüntü ve video akışlarının gerçek zamanlı analizi.",
      iconName: 'Eye',
      tag: "Yüksek Hassasiyet",
      features: ["Gerçek Zamanlı Nesne Analizi", "Biyometrik Yüz Tanıma", "Barkod & Optik OCR Okuyucular", "Akıllı Hareket Takibi"]
    },
    {
      id: 'camera',
      title: "AI Kamera Sistemleri",
      description: "Mevcut CCTV kamera yayınlarını akıllı yapay zeka ajanlarına bağlayarak güvenlik izlemeyi otomatikleştirin.",
      iconName: 'Video',
      tag: "Güvenlik",
      features: ["Aktif Hareket Uyarıları", "Personel Devamsızlık Takibi", "Plaka Tanıma Sistemi", "Anında Telegram Bildirimi"]
    },
    {
      id: 'robot',
      title: "Robotik",
      description: "Endüstriyel robotik kollar, mikrodenetleyiciler ve IoT sensör dizileri için düşük seviyeli, güvenilir yazılımlar.",
      iconName: 'Wrench',
      tag: "Endüstri 4.0",
      features: ["IoT Sensör Entegrasyonu", "Servo Motor Kontrolü", "Gömülü Sistem Programlama", "Gerçek Zamanlı Koordinat Hesabı"]
    },
    {
      id: 'automation',
      title: "İş Otomasyonu",
      description: "Süreçleri otomatikleştirmek ve manuel kağıt işlerini sonsuza kadar ortadan kaldırmak için entegre akışlar.",
      iconName: 'Zap',
      tag: "Verimlilik",
      features: ["Sistemler Arası Entegrasyon", "Otomatik SMS/E-posta Döngüleri", "Dijital Belge Akışı", "Akıllı Webhook Tetikleyicileri"]
    },
    {
      id: 'cyber',
      title: "Siber Güvenlik",
      description: "Web sitelerinizi ve sunucularınızı DDoS ve bilgisayar korsanlığı girişimlerinden korumak için güçlü çözümler.",
      iconName: 'ShieldAlert',
      tag: "Güvenli Çekirdek",
      features: ["Güvenlik Açığı Taraması", "WAF (Güvenlik Duvarı) Kurulumu", "Sızma Testleri (Penetrasyon)", "Güçlü SSL/TLS Şifreleme"]
    },
    {
      id: 'smm',
      title: "SMM & Dijital Pazarlama",
      description: "Sosyal medya için yaratıcı stratejiler, göz alıcı tasarımlar ve yüksek dönüşümlü hedefli reklamlar.",
      iconName: 'Megaphone',
      tag: "Pazarlama",
      features: ["Harika Grafik Gönderileri", "Hassas Hedefleme Ayarları", "SEO ve Metin Yazarlığı", "ROI ve Dönüşüm Ölçekleme"]
    },
    {
      id: 'design',
      title: "UI/UX Tasarımı",
      description: "Kullanıcıların harika bir deneyim yaşayacağı etkileşimli Figma prototipleri ve kullanıcı araştırmaları.",
      iconName: 'Palette',
      tag: "Estetik",
      features: ["Etkileşimli Figma Düzenleri", "Kullanıcı Deneyimi Araştırmaları", "Simetrik Bento Grid Yapısı", "Kurumsal Kimlik ve Logolar"]
    }
  ],
  de: [
    {
      id: 'web',
      title: "Websites",
      description: "Leistungsstarke, ansprechend gestaltete Websites und Plattformen, maßgeschneidert für Ihr Unternehmen.",
      iconName: 'Globe',
      tag: "Beliebtest",
      features: ["Responsive Anpassungsfähigkeit", "SEO-optimierter Code", "Schnelles Vite & React-Framework", "Admin-Verwaltungspanel"]
    },
    {
      id: 'mobile',
      title: "Android & iOS Apps",
      description: "Schnelle, stabile native und plattformübergreifende mobile Apps mit elegantem, modernem Design.",
      iconName: 'Smartphone',
      tag: "Premium-Projekte",
      features: ["App Store & Google Play", "Offline-Support aktiviert", "Push-Benachrichtigungen", "Biometrische FaceID-Integration"]
    },
    {
      id: 'bot',
      title: "Telegram-Bots",
      description: "Automatisierte Bots, integriert mit WebApp-Schnittstellen und Zahlungssystemen in Telegram.",
      iconName: 'MessageSquare',
      tag: "Schneller Start",
      features: ["Interaktive WebApp-Fenster", "Click & Payme API-Zahlungen", "Statistiken & Gruppenverwaltung", "Automatisierter Marketing-Funnel"]
    },
    {
      id: 'crm',
      title: "CRM / ERP-Systeme",
      description: "Maßgeschneiderte Software zur Digitalisierung von Geschäftsprozessen, Mitarbeiter-KPIs und Verkaufssteuerung.",
      iconName: 'Cpu',
      tag: "Für Unternehmen",
      features: ["Verkaufspipeline-Management", "Mitarbeiterleistung messen", "PDF-Berichterstellung", "Buchhaltungsintegration"]
    },
    {
      id: 'ai',
      title: "Künstliche Intelligenz (KI)",
      description: "Integration von Gemini API, LLM und neuronalen Netzen in Ihre Arbeitsabläufe mit intelligenten Assistenten.",
      iconName: 'BrainCircuit',
      tag: "Zukunftstechnologie",
      features: ["Gemini LLM-Orchestrierung", "Automatische KI-Texterstellung", "Smarte Empfehlungsalgorithmen", "Dokumentenanalyse (OCR)"]
    },
    {
      id: 'cv',
      title: "Computer Vision",
      description: "Echtzeitanalyse von Bild- und Videoströmen für hochpräzise Objekt- und Gesichtserkennung.",
      iconName: 'Eye',
      tag: "Hohe Präzision",
      features: ["Echtzeit-Objektanalyse", "Biometrische Gesichtserkennung", "Barcode- & optische OCR-Leser", "Intelligente Bewegungsverfolgung"]
    },
    {
      id: 'camera',
      title: "AI-Kamerasysteme",
      description: "Verbinden Sie CCTV-Feeds mit intelligenten neuronalen Netzen, um die Sicherheitsüberwachung zu automatisieren.",
      iconName: 'Video',
      tag: "Sicherheit",
      features: ["Aktive Bewegungswarnungen", "Anwesenheitsprotokolle", "Kennzeichenerkennung", "Sofortiger Telegram-Alarm-Router"]
    },
    {
      id: 'robot',
      title: "Robotik",
      description: "Zuverlässige Software-Frameworks für industrielle Roboterarme, Mikrocontroller und IoT-Sensor-Arrays.",
      iconName: 'Wrench',
      tag: "Industrie 4.0",
      features: ["IoT-Sensor-Vernetzung", "Servomotor-Steuerungen", "Firmware-Entwicklung", "Echtzeit-Koordinatenberechnung"]
    },
    {
      id: 'automation',
      title: "Geschäftsautomatisierung",
      description: "Automatisieren Sie Prozesse und eliminieren Sie manuellen Papierkram durch integrierte Datenströme.",
      iconName: 'Zap',
      tag: "Effizienz",
      features: ["Systemübergreifende Integration", "Automatische SMS/E-Mail-Schleifen", "Digitale Dokumentenverwaltung", "Intelligente Webhooks"]
    },
    {
      id: 'cyber',
      title: "Cybersicherheit",
      description: "Robuste Sicherheitsstrategien zum Schutz Ihrer Websites und Server vor DDoS- und Hacking-Angriffen.",
      iconName: 'ShieldAlert',
      tag: "Sicherer Kern",
      features: ["Schwachstellen-Scans", "WAF (Firewall)-Installation", "Autorisierte Penetrationstests", "Starke SSL/TLS-Verschlüsselung"]
    },
    {
      id: 'smm',
      title: "SMM & Digital Marketing",
      description: "Kreative Kampagnen in sozialen Netzwerken, großartiger visueller Content und zielgerichtete Werbung.",
      iconName: 'Megaphone',
      tag: "Marketing",
      features: ["Großartige Grafikposts", "Präzises Werbe-Targeting", "SEO & Copywriting-Dienst", "ROI- und Umsatzskalierung"]
    },
    {
      id: 'design',
      title: "UI/UX-Design",
      description: "Visuell spektakuläre interaktive Figma-Prototypen und empathische UX-Forschungsstudien.",
      iconName: 'Palette',
      tag: "Ästhetik",
      features: ["Interaktive Figma-Layouts", "Nutzerforschung & Befragungen", "Symmetrische Bento-Grid-Struktur", "Corporate Design & Logos"]
    }
  ],
  ko: [
    {
      id: 'web',
      title: "Web saytlar",
      description: "귀하의 비즈니스를 위해 설계된 고성능, 맞춤형 명품 웹사이트 및 핵심 플랫폼 개발.",
      iconName: 'Globe',
      tag: "가장 인기",
      features: ["반응형 적응성 및 최적화", "SEO 마크업 최적화 코드", "빠른 Vite & React 프레임워크", "어드민 통합 관리 패널"]
    },
    {
      id: 'mobile',
      title: "Android & iOS ilovalari",
      description: "스마트폰을 위한 고속, 초안정성 네이티브 및 크로스 플랫폼 고품격 앱 개발.",
      iconName: 'Smartphone',
      tag: "프리미엄 프로젝트",
      features: ["App Store & Google Play 배포", "오프라인 모드 기본 지원", "푸시 알림 실시간 발송 시스템", "FaceID 생체 인식 보안 연동"]
    },
    {
      id: 'bot',
      title: "Telegram botlar",
      description: "텔레그램 웹앱(WebApp) 인터페이스와 강력한 온라인 결제 시스템이 융합된 자동화 봇 구축.",
      iconName: 'MessageSquare',
      tag: "빠른 서비스 배포",
      features: ["인터랙티브 웹앱 창 제공", "Click 및 Payme API 결제 연결", "그룹 관리 및 어드민 통계 대시보드", "자동화된 마케팅 세일즈 퍼널"]
    },
    {
      id: 'crm',
      title: "CRM / ERP tizimlari",
      description: "비즈니스 프로세스 전산화, 직원별 KPI 지표 분석, 매출 증대용 판매 통합 관리 시스템.",
      iconName: 'Cpu',
      tag: "비즈니스 솔루션",
      features: ["영업 세일즈 파이프라인 관리", "직원 근무 생산성 트래커", "클릭 한번으로 PDF 보고서 생성", "자동 회계 전산 연동 시스템"]
    },
    {
      id: 'ai',
      title: "Sun'iy intellekt (AI)",
      description: "Gemini API, 대형언어모델(LLM) 및 신경망 모듈을 비즈니스 흐름에 심는 지능형 비서 시스템.",
      iconName: 'BrainCircuit',
      tag: "인공지능",
      features: ["Gemini LLM 오케스트레이션", "지능형 자동 카피라이터", "맞춤형 AI 추천 알고리즘 엔진", "문서 보안 디지털 인식 (OCR)"]
    },
    {
      id: 'cv',
      title: "Computer Vision",
      description: "실시간 비디오 분석 및 이미지 정밀 스캔 기술 기반의 독보적인 얼굴 및 사물 탐지 기술.",
      iconName: 'Eye',
      tag: "초정밀 분석",
      features: ["실시간 사물 인식 탐지", "생체 특징점 얼굴 매칭", "바코드 및 광학 OCR 스캔 장치", "자율 추적형 모션 트래커"]
    },
    {
      id: 'camera',
      title: "AI Camera tizimlari",
      description: "기존의 CCTV 카메라 장치를 인공지능 지능형 코어에 연결하여 전례 없는 보안 감시 자동화 실현.",
      iconName: 'Video',
      tag: "보안 시스템",
      features: ["액티브 모션 경고 전송", "직원 실시간 출퇴근 자동 기록", "차량 번호판 스캔 식별", "텔레그램 경보 알림 채널"]
    },
    {
      id: 'robot',
      title: "Robototexnika",
      description: "공장 하드웨어 제어, 모터 콘트롤, 아두이노/라즈베리파이 등의 정밀 임베디드 코딩 기술.",
      iconName: 'Wrench',
      tag: "인더스트리 4.0",
      features: ["IoT 센서 네트워크 무선 연동", "서보모터 회전각 제어", "정밀 저준위 펌웨어 코딩", "실시간 모터 좌표 자동 연산"]
    },
    {
      id: 'automation',
      title: "Biznesni avtomatlashtirish",
      description: "서로 다른 다양한 소프트웨어를 연결해 수작업 업무 프로세스를 완전 자동화하는 워크플로우.",
      iconName: 'Zap',
      tag: "생산성 혁명",
      features: ["시스템 통합 연동 구축", "자동 메세지/이메일 발송", "자동 업무 문서 전산화", "스마트 웹훅 이벤트 연동"]
    },
    {
      id: 'cyber',
      title: "Cybersecurity",
      description: "웹사이트와 핵심 메인 데이터베이스 서버를 디도스(DDoS) 및 악의적 해킹으로부터 철통 방어.",
      iconName: 'ShieldAlert',
      tag: "철통 보안 코어",
      features: ["시스템 보안 취약점 사전 스캔", "WAF(웹 방화벽) 이중화 구성", "공식 가상 침투 테스트", "글로벌 표준 SSL/TLS 전송 암호화"]
    },
    {
      id: 'smm',
      title: "SMM & Digital Marketing",
      description: "타겟 고객 맞춤 마케팅 전략 수립, 눈길을 사로잡는 그래픽 디자인 포스팅, 타겟 인피드 광고 집행.",
      iconName: 'Megaphone',
      tag: "마케팅 솔루션",
      features: ["바이럴 최고 포스팅 디자인", "정밀 오디언스 타게팅 조율", "SEO 검색 엔진 광고 문구", "ROI 투자대비 매출 스케일링"]
    },
    {
      id: 'design',
      title: "UI/UX Dizayn",
      description: "사용하기에 편리하고 보기에 고급스러운 피그마(Figma) 반응형 프로토타입 및 사용자 동선 연구.",
      iconName: 'Palette',
      tag: "미학 설계",
      features: ["Figma 고충실도 목업 제공", "사용자 맞춤 흐름 테스트", "Bento-grid 감각적 그리드 배치", "브랜드 시그니처 로고 및 가이드"]
    }
  ],
  ja: [
    {
      id: 'web',
      title: "Web saytlar",
      description: "高速動作、卓越したデザイン、強力なSEOを備えたコーポレートサイト及びECサイト開発。",
      iconName: 'Globe',
      tag: "人気トップ",
      features: ["レスポンシブ最適化", "SEOを考慮したコーディング", "高速Vite & Reactフレームワーク", "管理画面・ダッシュボード"]
    },
    {
      id: 'mobile',
      title: "Android & iOS ilovalari",
      description: "スマートフォン向け、デザイン性に優れ、サクサク動作するネイティブ/クロスプラットフォームアプリ開発。",
      iconName: 'Smartphone',
      tag: "プレミアム開発",
      features: ["App Store & Google Play申請", "オフライン対応・同期", "プッシュ通知システム", "FaceID生体認証統合"]
    },
    {
      id: 'bot',
      title: "Telegram botlar",
      description: "Telegramプラットフォームにて、WebAppや複数の決済システムを統合した高性能チャットボット。",
      iconName: 'MessageSquare',
      tag: "スピード構築",
      features: ["双方向WebAppインターフェース", "決済API連携", "管理用統計ダッシュボード", "オートマーケティングフロー"]
    },
    {
      id: 'crm',
      title: "CRM / ERP tizimlari",
      description: "ビジネスプロセスの電子化、従業員KPIの視覚化、及び売上業務の自動化を実現する統合システム。",
      iconName: 'Cpu',
      tag: "ビジネス向け",
      features: ["売上パイプライン管理", "作業員稼働効率トラッカー", "クリックでPDFレポート出力", "会計ソフト連動システム"]
    },
    {
      id: 'ai',
      title: "Sun'iy intellekt (AI)",
      description: "Gemini API、大規模言語モデル(LLM)、ニューラルネットワークをお客様の業務フローに組み込むサービス。",
      iconName: 'BrainCircuit',
      tag: "最先端AI",
      features: ["Gemini LLMオーケストレーション", "AI搭載コピーライター", "インテリジェントレコメンド", "光学OCRドキュメント解析"]
    },
    {
      id: 'cv',
      title: "Computer Vision",
      description: "画像や動画ストリームをリアルタイムで解析し、高精度で顔やオブジェクトを検出するシステム。",
      iconName: 'Eye',
      tag: "高精度検出",
      features: ["リアルタイム物体検出", "バイオメトリクス顔識別", "バーコード＆OCR読み取り", "インテリジェント追跡"]
    },
    {
      id: 'camera',
      title: "AI Camera tizimlari",
      description: "既設の防犯監視カメラにAIエンジンを連携させ、不審者や不法侵入を自動で検知・通報。",
      iconName: 'Video',
      tag: "セキュリティ",
      features: ["動体アクティブアラート", "従業員勤怠ログの自動収集", "ナンバープレート自動認識", "不審時Telegram瞬時通知"]
    },
    {
      id: 'robot',
      title: "Robototexnika",
      description: "産業用ロボット、サーボモーター制御、組み込みマイコンなどのファームウェア開発・通信ソフト。",
      iconName: 'Wrench',
      tag: "インダストリー 4.0",
      features: ["IoTセンサー無線通信連携", "サーボモータ高精度制御", "マイコン・ファームウェア書き込み", "リアルタイム座標軌跡計算"]
    },
    {
      id: 'automation',
      title: "Biznesni avtomatlashtirish",
      description: "複数ツールのAPIを連携させ、退屈な日常業務の手動フローを完全自動化するソリューション。",
      iconName: 'Zap',
      tag: "生産性革命",
      features: ["複数プラットフォームシステム統合", "自動通知メール/SMS配信", "業務ドキュメント電算処理", "Webhooksイベント処理"]
    },
    {
      id: 'cyber',
      title: "Cybersecurity",
      description: "Webサイトや中核サーバーを悪質なハッキング（DDoS、インジェクション等）から鉄壁防衛。",
      iconName: 'ShieldAlert',
      tag: "鉄壁コア防衛",
      features: ["脆弱性診断スキャン", "WAF(Web壁)導入構成", "模擬ペネトレーションテスト", "TLS/SSL通信の強力暗号化"]
    },
    {
      id: 'smm',
      title: "SMM & Digital Marketing",
      description: "クリエイティブなSNSブランディング戦略、魅力的なバナーデザイン、高コンバージョン広告運用。",
      iconName: 'Megaphone',
      tag: "マーケティング",
      features: ["目を引くコンテンツバナー", "高精度広告セグメント調整", "SEO集客用検索キーワード作成", "ROI効率・売上成長最大化"]
    },
    {
      id: 'design',
      title: "UI/UX Dizayn",
      description: "操作しやすく見ていて心躍るような、Figmaプロトタイプ作成及び人間工学的UX設計。",
      iconName: 'Palette',
      tag: "美学設計",
      features: ["Figmaインタラクティブモックアップ", "ユーザー行動分析・テスト", "Bento-grid美しい画面レイアウト", "ロゴ作成＆VIガイドライン策定"]
    }
  ],
  zh: [
    {
      id: 'web',
      title: "Web saytlar",
      description: "专为企业量身打造的高性能、设计精美且具有极佳SEO搜索引擎优化的企业官网与电商平台。",
      iconName: 'Globe',
      tag: "最受欢迎",
      features: ["自适应响应式布局", "SEO代码级别优化", "高速 Vite & React 架构", "全功能后台管理面板"]
    },
    {
      id: 'mobile',
      title: "Android & iOS ilovalari",
      description: "采用先进的跨平台及原生开发技术，为手机端打造极致流畅、界面豪华的移动端应用。",
      iconName: 'Smartphone',
      tag: "高端定制开发",
      features: ["应用商店(App Store/Google)上架", "离线缓存工作模式", "实时消息通知推送网络", "FaceID 生体虹膜安全识别"]
    },
    {
      id: 'bot',
      title: "Telegram botlar",
      description: "集成新型网页端小程序(WebApp)和跨国在线支付API的 Telegram 自动化机器人。",
      iconName: 'MessageSquare',
      tag: "极速交付上线",
      features: ["小程序 WebApp 窗口无缝打开", "极速支付 Click & Payme 接口", "群控与超级管理员统计看板", "智能营销自动化销售漏斗"]
    },
    {
      id: 'crm',
      title: "CRM / ERP tizimlari",
      description: "全面数字化企业办公流程、实时衡量员工 KPI、提升销售业绩的企业资源计划系统。",
      iconName: 'Cpu',
      tag: "数字化赋能",
      features: ["销售漏斗跟进管理", "员工工时生产力追踪", "一键生成PDF业务报告", "财税数据自动化清算"]
    },
    {
      id: 'ai',
      title: "Sun'iy intellekt (AI)",
      description: "无缝融入 Gemini API、前沿LLM大语言模型及神经网络，实现真正的智能客服和业务助理。",
      iconName: 'BrainCircuit',
      tag: "人工智能",
      features: ["Gemini LLM大模型统筹规划", "智能AI自动文案撰写", "精细化 AI 智能推荐机制", "高保密文档数字化 OCR 解析"]
    },
    {
      id: 'cv',
      title: "Computer Vision",
      description: "基于先进卷积神经网络(CNN)的高精度实时图像、视频流人脸识别及物体探测定位系统。",
      iconName: 'Eye',
      tag: "高精确识别",
      features: ["实时视频物体探测定位", "人脸骨骼生体特征比对", "条形码与纸质OCR高速扫描", "动态目标自动轨迹追踪"]
    },
    {
      id: 'camera',
      title: "AI Camera tizimlari",
      description: "通过AI智脑代理改造您现有的CCTV监控摄像头网络，实现无人化智能安全巡防监测。",
      iconName: 'Video',
      tag: "智能防安防",
      features: ["越界入侵报警", "人脸考勤统计自动记录", "车辆车牌自动光学捕捉", "Telegram 危险瞬时警报推"]
    },
    {
      id: 'robot',
      title: "Robototexnika",
      description: "精密的工业级机器臂、低级硬件传感器模块，及阿杜伊诺、树莓派等嵌入式驱动系统开发。",
      iconName: 'Wrench',
      tag: "工业 4.0",
      features: ["IoT 传感器超低耗无线组网", "高精度伺服电机闭环控制", "嵌入式微控制器底层汇编", "空间物理坐标动态矩阵解算"]
    },
    {
      id: 'automation',
      title: "Biznesni avtomatlashtirish",
      description: "打破多款孤立办公软件的信息壁垒，通过无代码智能流程，彻底消除枯燥的手工录入。",
      iconName: 'Zap',
      tag: "效率奇迹",
      features: ["多平台数据流打通集成", "自动化邮件及SMS短信推流", "无纸化业务审批自动运转", "Webhooks 回调自动化接头"]
    },
    {
      id: 'cyber',
      title: "Cybersecurity",
      description: "为网站、主服务器、大型关系型数据库保驾护航，全力抵抗大流量DDoS以及黑客恶意入侵。",
      iconName: 'ShieldAlert',
      tag: "安全防护盾",
      features: ["安全漏洞例行全面扫描", "高防 WAF (应用防火墙) 部署", "白帽级渗透攻击防御演练", "国际标准传输SSL/TLS加密层"]
    },
    {
      id: 'smm',
      title: "SMM & Digital Marketing",
      description: "高吸睛度的社交网络形象定制、原创文案和创意海报设计，以及高转化的精细化投放运营。",
      iconName: 'Megaphone',
      tag: "精准引流营销",
      features: ["极富视觉冲击力的海报企划", "精准用户画像靶向广告投流", "SEO 搜索霸屏竞价推广", "ROI 投资回报率全链路监测"]
    },
    {
      id: 'design',
      title: "UI/UX Dizayn",
      description: "美轮美奂、符合人机工程交互标准的 Figma 全案点击原型图与多套视觉VI规范制定。",
      iconName: 'Palette',
      tag: "高端美学设计",
      features: ["Figma 动态可交互保真图", "用户心智习惯与动线测试", "Bento-grid 结构化黄金比例排版", "品牌标志、画册与VI规范建立"]
    }
  ],
  fr: [
    {
      id: 'web',
      title: "Sites Web",
      description: "Des sites web et plateformes à haute performance, conçus avec esthétisme et personnalisés pour votre entreprise.",
      iconName: 'Globe',
      tag: "Populaire",
      features: ["Adaptabilité responsive", "Code optimisé pour le SEO", "Framework rapide Vite & React", "Panneau d'administration complet"]
    },
    {
      id: 'mobile',
      title: "Applications Android & iOS",
      description: "Des applications mobiles natives et cross-platform ultra-rapides, stables et dotées de designs élégants.",
      iconName: 'Smartphone',
      tag: "Projets Premium",
      features: ["Déploiement App Store & Play Store", "Mode hors-ligne entièrement supporté", "Système de notifications Push", "Authentification biométrique FaceID"]
    },
    {
      id: 'bot',
      title: "Bots Telegram",
      description: "Des bots automatisés équipés d'interfaces WebApp et intégrés à de multiples passerelles de paiement dans Telegram.",
      iconName: 'MessageSquare',
      tag: "Lancement Rapide",
      features: ["Fenêtres WebApp interactives", "Paiements par API Click & Payme", "Statistiques & administration de groupes", "Tunnel de conversion marketing"]
    },
    {
      id: 'crm',
      title: "Systèmes CRM / ERP",
      description: "Logiciels sur mesure pour digitaliser vos processus, calculer les KPI de vos employés et piloter vos ventes.",
      iconName: 'Cpu',
      tag: "Pour Entreprises",
      features: ["Gestion du pipeline de ventes", "Suivi des performances des équipes", "Génération automatique de PDF", "Intégration avec la comptabilité"]
    },
    {
      id: 'ai',
      title: "Intelligence Artificielle (AI)",
      description: "Intégration de l'API Gemini, de LLM et de réseaux neuronaux avec des assistants de conseil virtuels intelligents.",
      iconName: 'BrainCircuit',
      tag: "Technologie Future",
      features: ["Orchestration de Gemini LLM", "Générateur de contenu IA automatique", "Algorithmes de recommandation", "Analyse documentaire sécurisée (OCR)"]
    },
    {
      id: 'cv',
      title: "Computer Vision",
      description: "Analyse en temps réel de flux d'images et de vidéos pour une détection d'objets et de visages de haute précision.",
      iconName: 'Eye',
      tag: "Haute Précision",
      features: ["Analyse d'objets en direct", "Reconnaissance faciale biométrique", "Lecteurs de codes-barres et OCR", "Suivi de mouvement intelligent"]
    },
    {
      id: 'camera',
      title: "Systèmes AI Caméra",
      description: "Connectez vos flux CCTV existants à des agents IA neuronaux intelligents pour automatiser la vidéosurveillance.",
      iconName: 'Video',
      tag: "Sécurité",
      features: ["Alertes de mouvement actives", "Logs d'assiduité du personnel", "Lecture de plaques d'immatriculation", "Routage d'alertes Telegram instantané"]
    },
    {
      id: 'robot',
      title: "Robotique",
      description: "Frameworks logiciels bas niveau pour bras robotiques industriels, microcontrôleurs et réseaux de capteurs IoT.",
      iconName: 'Wrench',
      tag: "Industrie 4.0",
      features: ["Réseau de capteurs IoT", "Contrôleurs de servomoteurs", "Développement de firmware", "Calculs de coordonnées en temps réel"]
    },
    {
      id: 'automation',
      title: "Automatisation d'Entreprise",
      description: "Connectez vos applications tierces et orchestrez vos processus pour éliminer définitivement la paperasse.",
      iconName: 'Zap',
      tag: "Efficacité",
      features: ["Flux système multi-plateformes", "Boucles d'envoi SMS/Email automatiques", "Automatisation des documents", "Déclencheurs webhooks intelligents"]
    },
    {
      id: 'cyber',
      title: "Cybersécurité",
      description: "Stratégies de défense impénétrables pour protéger vos sites web et serveurs contre les DDoS et le piratage.",
      iconName: 'ShieldAlert',
      tag: "Cœur Sécurisé",
      features: ["Analyse régulière des failles", "Installation de pare-feu WAF", "Tests d'intrusion professionnels", "Chiffrement des données SSL/TLS"]
    },
    {
      id: 'smm',
      title: "SMM & Marketing Digital",
      description: "Campagnes de marketing digital créatives, bannières soignées et publicités ciblées à fort taux de conversion.",
      iconName: 'Megaphone',
      tag: "Marketing",
      features: ["Bannières graphiques créatives", "Paramétrage précis du ciblage", "Rédaction web & référencement SEO", "Amélioration du ROI publicitaire"]
    },
    {
      id: 'design',
      title: "Design UI/UX",
      description: "Maquettes Figma interactives et ergonomiques garantissant un plaisir d'utilisation maximal.",
      iconName: 'Palette',
      tag: "Esthétique",
      features: ["Maquettes dynamiques Figma", "Recherche utilisateur empathique", "Structure en grille Bento symétrique", "Logo de marque et chartes visuelles"]
    }
  ]
};
