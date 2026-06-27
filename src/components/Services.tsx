import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, Smartphone, MessageSquare, Cpu, Brain, Eye, Video, Wrench, 
  Zap, ShieldAlert, Megaphone, Palette, Check, Sparkles, X, Send, 
  Terminal, Sliders, RefreshCw, Play, Shield, Key, Camera, EyeOff, 
  Settings, Bot, Radio, Compass, BarChart2, Layers, CheckCircle, Flame
} from 'lucide-react';
import { servicesByLang, ServiceDetail } from '../servicesData';
import { translations, Language } from '../translations';

// Icon map helper
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe: Globe,
  Smartphone: Smartphone,
  MessageSquare: MessageSquare,
  Cpu: Cpu,
  BrainCircuit: Brain,
  Eye: Eye,
  Video: Video,
  Wrench: Wrench,
  Zap: Zap,
  ShieldAlert: ShieldAlert,
  Megaphone: Megaphone,
  Palette: Palette,
};

interface ServicesProps {
  onNavigate: (sectionId: string) => void;
  lang: Language;
}

export default function Services({ onNavigate, lang }: ServicesProps) {
  const [activeService, setActiveService] = useState<ServiceDetail | null>(null);
  const t = translations[lang] || translations.uz;
  const currentServicesList = servicesByLang[lang] || servicesByLang.uz;

  // ==========================================
  // STATE DEFINITIONS FOR THE 12 SIMULATORS
  // ==========================================

  // 1. Website Sandbox State
  const [webCols, setWebCols] = useState<number>(3);
  const [webColor, setWebColor] = useState<string>('#00f0ff');
  const [webRadius, setWebRadius] = useState<string>('0px');
  const [webShadow, setWebShadow] = useState<boolean>(true);

  // 2. Mobile App Simulator State
  const [appTheme, setAppTheme] = useState<'light' | 'dark' | 'cyber'>('cyber');
  const [appTab, setAppTab] = useState<'home' | 'chat' | 'settings'>('home');
  const [appMsgs, setAppMsgs] = useState<Array<{ sender: 'user' | 'bot'; text: string }>>([
    { sender: 'bot', text: 'Salom! Ilovamizga xush kelibsiz.' }
  ]);
  const [appInput, setAppInput] = useState<string>('');
  const [appNotification, setAppNotification] = useState<string | null>(null);

  // 3. Telegram Bot State
  const [botMsgs, setBotMsgs] = useState<Array<{ sender: 'user' | 'bot'; text: string; time: string }>>([
    { sender: 'bot', text: '🤖 Salomu alaykum! Men 404-TEAM aqlli botiman. /start tugmasini bosing.', time: '12:00' }
  ]);
  const [botTyping, setBotTyping] = useState<boolean>(false);

  // 4. CRM / ERP Pipeline State
  const [crmDeals, setCrmDeals] = useState([
    { id: 1, name: 'Loyiha #201 (Alisher)', amount: 1500, stage: 'new' },
    { id: 2, name: 'Korporativ veb-sayt', amount: 3200, stage: 'progress' },
    { id: 3, name: 'AI Telegram WebApp', amount: 800, stage: 'progress' },
    { id: 4, name: 'Kiber-Xavfsizlik Auditi', amount: 4500, stage: 'done' },
  ]);
  const [crmNewName, setCrmNewName] = useState<string>('');
  const [crmNewAmount, setCrmNewAmount] = useState<number>(1000);

  // 5. Sun'iy Intellekt Prompt State
  const [aiPrompt, setAiPrompt] = useState<string>('Tadbirkorlikni boshlash uchun eng muhim 3 ta qadamni yoz.');
  const [aiTemp, setAiTemp] = useState<number>(0.7);
  const [aiOutput, setAiOutput] = useState<string>('');
  const [aiStreaming, setAiStreaming] = useState<boolean>(false);
  const [aiProgress, setAiProgress] = useState<number>(0);

  // 6. Computer Vision State
  const [cvImage, setCvImage] = useState<string>('traffic'); // 'traffic', 'office', 'store'
  const [cvThreshold, setCvThreshold] = useState<number>(75);

  // 7. AI Camera State
  const [camNightMode, setCamNightMode] = useState<boolean>(false);
  const [camAlerts, setCamAlerts] = useState<string[]>([
    '05:14:23 — [INFO] Tizim ishga tushirildi',
    '05:15:02 — [OK] Kamera #1 ulandi (FullHD)'
  ]);

  // 8. Robototexnika State
  const [robotBase, setRobotBase] = useState<number>(45);
  const [robotReach, setRobotReach] = useState<number>(60);
  const [robotClaw, setRobotClaw] = useState<number>(50);

  // 9. Biznesni Avtomatlashtirish State
  const [flowTrigger, setFlowTrigger] = useState<string>('order_paid');
  const [flowAction, setFlowAction] = useState<string>('send_telegram');
  const [flowStatus, setFlowStatus] = useState<'idle' | 'running' | 'completed'>('idle');

  // 10. Cybersecurity Shield State
  const [shieldActive, setShieldActive] = useState<boolean>(true);
  const [cyberLog, setCyberLog] = useState<string[]>(['Firewall faol', 'Xavf aniqlanmadi.']);
  const [ddosBlockedCount, setDdosBlockedCount] = useState<number>(142);
  const [scanning, setScanning] = useState<boolean>(false);

  // 11. SMM Budget Estimator State
  const [smmBudget, setSmmBudget] = useState<number>(1500);
  const [smmChannel, setSmmChannel] = useState<'meta' | 'google' | 'tiktok'>('meta');

  // 12. UI/UX Figma State
  const [uiDesignTheme, setUiDesignTheme] = useState<'cyberpunk' | 'glassmorphism' | 'brutalist'>('cyberpunk');
  const [uiBorderRadius, setUiBorderRadius] = useState<number>(0);

  // Handles custom bot triggers
  const triggerBotReply = (userText: string) => {
    setBotTyping(true);
    setTimeout(() => {
      let reply = "Menga bunday buyruq berilmagan. Iltimos quyidagi buyruqlarni sinab ko'ring: /start, /price, /order";
      const clean = userText.trim().toLowerCase();
      
      if (clean.includes('/start')) {
        reply = "🤖 Xush kelibsiz! Biznesingizni avtomatlashtirish bo'yicha eng zo'r Telegram WebApp va Botlarni taklif etamiz. Sizga qanday loyiha kerak?";
      } else if (clean.includes('/price')) {
        reply = "💳 Bizda Telegram Botlar $600 dan, WebApp integratsiyalari esa $900 dan boshlanadi. Har doim bepul kesh va optimallashuv sovg'a qilinadi!";
      } else if (clean.includes('/order')) {
        reply = "🔥 Ajoyib tanlov! Aloqa sahifasidan formani to'ldiring yoki bizga @evanshar03 orqali yozing. Biz zudlik bilan loyihani boshlaymiz!";
      } else if (clean.includes('salom') || clean.includes('hello')) {
        reply = "👋 Salom! Sizga qanday yordam bera olaman? Bot buyruqlari: /price, /order, /help";
      }

      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
      
      setBotMsgs(prev => [...prev, { sender: 'bot', text: reply, time: timeStr }]);
      setBotTyping(false);
    }, 1200);
  };

  // Run AI simulated streaming
  const handleAiGenerate = () => {
    if (aiStreaming) return;
    setAiStreaming(true);
    setAiOutput('');
    setAiProgress(0);

    const fullResponses: Record<string, string> = {
      'Tadbirkorlikni boshlash uchun eng muhim 3 ta qadamni yoz.': 
        "🚀 Sun'iy Intellekt Javobi:\n\n1. Bozor tahlili va muammoni aniqlash: Odamlarning qaysi daxshatli og'riqli muammosini hal qilayotganingizni aniqlang.\n2. MVP (Minimal ishlovchi mahsulot) yaratish: Katta xarajat qilmasdan, eng sodda shaklni sinab ko'ring.\n3. Mijozlar fikrini o'rganish va masshtablashtirish: Birinchi daromaddan so'ng tizimni avtomatlashtiring.",
      'Explain quantum theory': 
        "🌌 Quantum Theory Explanation:\n\nQuantum mechanics is the branch of physics that studies extremely small scales (atoms, subatomic particles). Unlike classical physics, energy in quantum mechanics exists in discrete packets called 'quanta'. Superposition allows particles to be in multiple states simultaneously until measured.",
      'Write a marketing email for shoes':
        "👟 Subject: Qadamlaringizga Kuch Bering! 🔥\n\nSalom!\nBiznesingiz yoki sport mashg'ulotlaringiz uchun daxshatli darajada chiroyli va qulay krossovkalarni kutib oling. Ultra-moslashuvchan taglik, terlatmaydigan mato va cheksiz qulaylik. Hoziroq buyurtma bering va 20% chegirmaga ega bo'ling!",
    };

    const targetText = fullResponses[aiPrompt] || "Ajoyib matn sun'iy intellekt tomonidan tahlil qilinmoqda. Harorat (temperature): " + aiTemp;
    let index = 0;
    
    const interval = setInterval(() => {
      setAiOutput(prev => prev + targetText.charAt(index));
      index++;
      setAiProgress(Math.floor((index / targetText.length) * 100));
      
      if (index >= targetText.length) {
        clearInterval(interval);
        setAiStreaming(false);
      }
    }, 25);
  };

  // Cybersecurity log simulation ticker
  useEffect(() => {
    if (!shieldActive) return;
    const interval = setInterval(() => {
      const logs = [
        `[OK] Firewall blocked IP: ${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.12.98`,
        `[INFO] Tarmoq so'rovlari barqaror. Paketlar soni: ${Math.floor(Math.random() * 300)} p/s`,
        `[BLOCKED] Port Scan urinishi to'sildi`,
        `[SHIELD] SQL Injection so'rovi xavfsiz filtrlandi`
      ];
      const randomLog = logs[Math.floor(Math.random() * logs.length)];
      setCyberLog(prev => [randomLog, ...prev.slice(0, 5)]);
      setDdosBlockedCount(prev => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(interval);
  }, [shieldActive]);

  // Biznes avtomatlashtirish flow trigger runner
  const handleRunFlow = () => {
    if (flowStatus === 'running') return;
    setFlowStatus('running');
    setTimeout(() => {
      setFlowStatus('completed');
    }, 2500);
  };

  return (
    <section id="services" className="py-24 bg-[#080808] relative overflow-hidden border-t border-white/5 text-left">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00f0ff]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-black border border-[#00f0ff] px-4 py-2 rounded-none text-xs font-mono font-bold text-[#00f0ff] tracking-widest uppercase"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.servicesBadge}</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tighter italic uppercase text-white"
          >
            {t.servicesTitle}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto"
          >
            {t.servicesSub}
          </motion.p>
        </div>

        {/* Services Grid (12 core items as requested) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentServicesList.map((service, index) => {
            const Icon = iconMap[service.iconName] || Globe;
            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setActiveService(service)}
                className="bg-[#111111] p-6 rounded-none border border-white/5 hover:border-[#00f0ff] hover:bg-[#151515] transition-all duration-300 relative group flex flex-col justify-between cursor-pointer"
              >
                {/* Visual Top Highlight Line */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#00f0ff] group-hover:w-full transition-all duration-300" />
                
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-black border border-[#00f0ff]/30 text-[#00f0ff] group-hover:bg-[#00f0ff] group-hover:text-black transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-mono font-bold px-2 py-1 bg-black text-[#00f0ff] border border-[#00f0ff]/20 uppercase tracking-wider">
                      {service.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-display font-black uppercase italic tracking-tight text-white group-hover:text-[#00f0ff] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-light mt-1.5 line-clamp-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Tiny bullets */}
                  <ul className="space-y-1.5 pt-3 border-t border-white/5 text-[11px] text-gray-400">
                    {service.features.slice(0, 2).map((f, i) => (
                      <li key={i} className="flex items-center space-x-1.5">
                        <span className="w-1 h-1 bg-[#00f0ff] shrink-0" />
                        <span className="truncate">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card footer trigger */}
                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-widest text-[#00f0ff] group-hover:text-white transition-colors">
                  <span>SINOVCHIda o'ynash</span>
                  <span>→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Simulation Dashboard modal popup */}
        <AnimatePresence>
          {activeService && (
            <div
              id="service-simulation-overlay"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md overflow-y-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-5xl bg-[#0d0d0d] border border-white/10 rounded-none overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
              >
                
                {/* Console Header bar */}
                <div className="bg-black/80 px-6 py-4 border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-[#00f0ff] text-black">
                      {React.createElement(iconMap[activeService.iconName] || Globe, { className: 'w-4 h-4' })}
                    </div>
                    <div>
                      <h3 className="text-sm font-mono font-bold text-white uppercase tracking-widest">
                        {activeService.title} — {t.interactiveConsoleTitle}
                      </h3>
                      <p className="text-[10px] text-gray-500 font-mono">
                        {t.interactiveConsoleSub}
                      </p>
                    </div>
                  </div>
                  <button
                    id="close-simulation-modal-btn"
                    onClick={() => setActiveService(null)}
                    className="p-2 bg-white/5 hover:bg-red-500 hover:text-white text-gray-400 transition-colors border border-white/10 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Console content layout divided into control panel & rendering window */}
                <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12">
                  
                  {/* Left Controls column */}
                  <div className="lg:col-span-5 p-6 bg-black/40 border-r border-white/5 space-y-6 text-xs text-gray-300">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono font-bold text-[#00f0ff] uppercase tracking-widest block">Tavsif va xususiyatlari</span>
                      <p className="text-gray-400 font-light leading-relaxed">{activeService.description}</p>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-white/5">
                      <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest block">Loyiha karkasi afzalliklari:</span>
                      <div className="grid grid-cols-1 gap-2">
                        {activeService.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-xs bg-black/60 p-2 border border-white/5">
                            <Check className="w-3.5 h-3.5 text-[#00f0ff] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* DYNAMIC INTERACTIVE CONTROLS ROOT ACCORDING TO CURRENT ID */}
                    <div className="pt-6 border-t border-white/5 space-y-4">
                      <h4 className="text-[10px] font-mono font-bold text-[#00f0ff] uppercase tracking-widest">
                        BOSHQRUV PULTI (CONTROLS)
                      </h4>

                      {/* 1. Website Sandbox controls */}
                      {activeService.id === 'web' && (
                        <div className="space-y-4 font-mono text-[11px]">
                          <div className="space-y-1.5">
                            <label className="text-gray-400 block">KOLONKALAR SONI: {webCols}</label>
                            <input 
                              type="range" min="1" max="4" value={webCols} 
                              onChange={(e) => setWebCols(Number(e.target.value))}
                              className="w-full accent-[#00f0ff] bg-gray-950 border border-white/5"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-gray-400 block">AKCENT RANGI:</label>
                            <div className="flex gap-2">
                              {['#00f0ff', '#a855f7', '#84cc16', '#ef4444', '#eab308'].map(c => (
                                <button 
                                  key={c} onClick={() => setWebColor(c)}
                                  className={`w-6 h-6 border cursor-pointer`}
                                  style={{ backgroundColor: c, borderColor: webColor === c ? '#fff' : 'transparent' }}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-gray-400 block">BORDER RADIUS: {webRadius}</label>
                            <select 
                              value={webRadius} onChange={(e) => setWebRadius(e.target.value)}
                              className="w-full bg-black border border-white/10 px-2 py-1 text-white text-xs"
                            >
                              <option value="0px">To'g'ri burchak (0px)</option>
                              <option value="8px">Yumshoq burchak (8px)</option>
                              <option value="16px">Katlashtirilgan (16px)</option>
                              <option value="9999px">To'liq oval (Oval)</option>
                            </select>
                          </div>
                          <div className="flex items-center justify-between">
                            <label className="text-gray-400">NEON VIZUAL SOHALAR:</label>
                            <input 
                              type="checkbox" checked={webShadow} 
                              onChange={(e) => setWebShadow(e.target.checked)}
                              className="w-4 h-4 accent-[#00f0ff]"
                            />
                          </div>
                        </div>
                      )}

                      {/* 2. Mobile App Controls */}
                      {activeService.id === 'mobile' && (
                        <div className="space-y-4 font-mono text-[11px]">
                          <div className="space-y-1.5">
                            <label className="text-gray-400 block">ILOVA MAQSADLI TIZIMI (OS):</label>
                            <div className="grid grid-cols-3 gap-2">
                              {['light', 'dark', 'cyber'].map(t => (
                                <button
                                  key={t} onClick={() => setAppTheme(t as any)}
                                  className={`py-2 text-center uppercase border cursor-pointer ${appTheme === t ? 'border-[#00f0ff] bg-black text-[#00f0ff]' : 'border-white/5 bg-black/40'}`}
                                >
                                  {t}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-gray-400 block">PUSH BILDIRISHNOMA YUBORISH:</label>
                            <button
                              onClick={() => {
                                setAppNotification("Daxshat! Yangi integratsiya muvaffaqiyatli o'rnatildi!");
                                setTimeout(() => setAppNotification(null), 4000);
                              }}
                              className="w-full py-2.5 bg-[#00f0ff] text-black font-bold uppercase tracking-wider text-[10px]"
                            >
                              Push Habarni Trigger Qilish
                            </button>
                          </div>
                        </div>
                      )}

                      {/* 3. Telegram Bot Controls */}
                      {activeService.id === 'bot' && (
                        <div className="space-y-4 font-mono text-[11px]">
                          <label className="text-gray-400 block">TEZKOR BUYRUQLARNI TRIGGER QILING:</label>
                          <div className="grid grid-cols-2 gap-2">
                            {['/start', '/price', '/order', 'Salom'].map(cmd => (
                              <button
                                key={cmd}
                                onClick={() => {
                                  const now = new Date();
                                  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
                                  setBotMsgs(prev => [...prev, { sender: 'user', text: cmd, time: timeStr }]);
                                  triggerBotReply(cmd);
                                }}
                                className="py-2.5 bg-black text-gray-300 border border-white/5 hover:border-[#00f0ff] uppercase text-[10px] text-center"
                              >
                                {cmd}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* 4. CRM / ERP Controls */}
                      {activeService.id === 'crm' && (
                        <div className="space-y-3 font-mono text-[11px]">
                          <div className="space-y-1">
                            <label className="text-gray-400 block">MIJOZ ISMI:</label>
                            <input 
                              type="text" value={crmNewName} placeholder="Masalan: G'ayratbek"
                              onChange={(e) => setCrmNewName(e.target.value)}
                              className="w-full bg-black border border-white/10 p-2 text-white"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-gray-400 block">LOYIHA BAXOSI ($):</label>
                            <input 
                              type="number" value={crmNewAmount} 
                              onChange={(e) => setCrmNewAmount(Number(e.target.value))}
                              className="w-full bg-black border border-white/10 p-2 text-white"
                            />
                          </div>
                          <button
                            onClick={() => {
                              if (!crmNewName) return;
                              setCrmDeals(prev => [
                                ...prev, 
                                { id: Date.now(), name: crmNewName, amount: crmNewAmount, stage: 'new' }
                              ]);
                              setCrmNewName('');
                            }}
                            className="w-full py-2 bg-[#00f0ff] text-black font-bold uppercase"
                          >
                            Tizimga Yangi Kelishuv Qo'shish
                          </button>
                        </div>
                      )}

                      {/* 5. Artificial Intelligence AI Prompt Controls */}
                      {activeService.id === 'ai' && (
                        <div className="space-y-4 font-mono text-[11px]">
                          <div className="space-y-1.5">
                            <label className="text-gray-400 block font-bold">PROMPT SHABLONINI TANLANG:</label>
                            <div className="space-y-1">
                              {[
                                'Tadbirkorlikni boshlash uchun eng muhim 3 ta qadamni yoz.',
                                'Explain quantum theory',
                                'Write a marketing email for shoes'
                              ].map(p => (
                                <button
                                  key={p} onClick={() => setAiPrompt(p)}
                                  className={`w-full text-left p-2 border truncate block ${aiPrompt === p ? 'border-[#00f0ff] bg-black text-[#00f0ff]' : 'border-white/5 bg-black/40 text-gray-400'}`}
                                >
                                  {p}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div className="space-y-1">
                            <label className="text-gray-400 block">HARORAT (TEMPERATURE): {aiTemp}</label>
                            <input 
                              type="range" min="0.1" max="1.0" step="0.1" value={aiTemp} 
                              onChange={(e) => setAiTemp(Number(e.target.value))}
                              className="w-full accent-[#00f0ff] bg-gray-950 border border-white/5"
                            />
                          </div>
                          <button
                            onClick={handleAiGenerate}
                            disabled={aiStreaming}
                            className="w-full py-2.5 bg-[#00f0ff] text-black font-black uppercase text-[10px] disabled:opacity-50"
                          >
                            {aiStreaming ? 'Matn Generatsiya Qilinmoqda...' : "Neyrotarmoqdan Javob O'qish"}
                          </button>
                        </div>
                      )}

                      {/* 6. Computer Vision Controls */}
                      {activeService.id === 'cv' && (
                        <div className="space-y-4 font-mono text-[11px]">
                          <div className="space-y-1.5">
                            <label className="text-gray-400 block">KAMERA KANALINI TANLANG:</label>
                            <div className="grid grid-cols-3 gap-2">
                              {['traffic', 'office', 'store'].map(feed => (
                                <button
                                  key={feed} onClick={() => setCvImage(feed)}
                                  className={`py-2 text-center uppercase border ${cvImage === feed ? 'border-[#00f0ff] bg-black text-[#00f0ff]' : 'border-white/5 bg-black/40'}`}
                                >
                                  {feed}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-gray-400 block">ISHONCH CHEGARASI (CONFIDENCE): {cvThreshold}%</label>
                            <input 
                              type="range" min="10" max="99" value={cvThreshold} 
                              onChange={(e) => setCvThreshold(Number(e.target.value))}
                              className="w-full accent-[#00f0ff] bg-gray-950 border border-white/5"
                            />
                          </div>
                        </div>
                      )}

                      {/* 7. AI Camera Controls */}
                      {activeService.id === 'camera' && (
                        <div className="space-y-4 font-mono text-[11px]">
                          <div className="flex items-center justify-between">
                            <label className="text-gray-400">TUNGI REJIM (NIGHT VISION):</label>
                            <input 
                              type="checkbox" checked={camNightMode} 
                              onChange={(e) => setCamNightMode(e.target.checked)}
                              className="w-4 h-4 accent-[#00f0ff]"
                            />
                          </div>
                          <button
                            onClick={() => {
                              const now = new Date();
                              const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
                              setCamAlerts(prev => [
                                `${timeStr} — [HAUFT] Harakat aniqlandi! Segment: Zone-C`, 
                                ...prev
                              ]);
                            }}
                            className="w-full py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold uppercase tracking-wider text-[10px]"
                          >
                            Sun'iy Xavf (Motion Alert) Yuborish
                          </button>
                        </div>
                      )}

                      {/* 8. Robot arm Controls */}
                      {activeService.id === 'robot' && (
                        <div className="space-y-4 font-mono text-[11px]">
                          <div className="space-y-1.5">
                            <label className="text-gray-400 block">BASE JOINT ANGLE: {robotBase}°</label>
                            <input 
                              type="range" min="0" max="180" value={robotBase} 
                              onChange={(e) => setRobotBase(Number(e.target.value))}
                              className="w-full accent-[#00f0ff] bg-gray-950 border border-white/5"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-gray-400 block">REACH ARM RANGE: {robotReach}%</label>
                            <input 
                              type="range" min="10" max="99" value={robotReach} 
                              onChange={(e) => setRobotReach(Number(e.target.value))}
                              className="w-full accent-[#00f0ff] bg-gray-950 border border-white/5"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-gray-400 block">CLAW GRIP STR: {robotClaw}%</label>
                            <input 
                              type="range" min="0" max="100" value={robotClaw} 
                              onChange={(e) => setRobotClaw(Number(e.target.value))}
                              className="w-full accent-[#00f0ff] bg-gray-950 border border-white/5"
                            />
                          </div>
                        </div>
                      )}

                      {/* 9. Automations Flows Controls */}
                      {activeService.id === 'automation' && (
                        <div className="space-y-4 font-mono text-[11px]">
                          <div className="space-y-1">
                            <label className="text-gray-400 block">TRIGGER HODISA:</label>
                            <select 
                              value={flowTrigger} onChange={(e) => setFlowTrigger(e.target.value)}
                              className="w-full bg-black border border-white/10 px-2 py-1.5 text-white"
                            >
                              <option value="order_paid">💳 Mijoz to'lov amalga oshirganda</option>
                              <option value="new_lead">👤 Yangi murojaat kelganda</option>
                              <option value="system_error">🚨 Serverda xatolik yuz berganda</option>
                            </select>
                          </div>
                          <div className="space-y-1">
                            <label className="text-gray-400 block">AVTOMATIK AMAL:</label>
                            <select 
                              value={flowAction} onChange={(e) => setFlowAction(e.target.value)}
                              className="w-full bg-black border border-white/10 px-2 py-1.5 text-white"
                            >
                              <option value="send_telegram">🤖 Telegramga xabar berish</option>
                              <option value="add_crm">🏢 CRM Pipelinega kelishuv qo'shish</option>
                              <option value="send_sms">📱 Mijozga SMS tabrik yuborish</option>
                            </select>
                          </div>
                          <button
                            onClick={handleRunFlow}
                            className="w-full py-2.5 bg-[#00f0ff] text-black font-bold uppercase tracking-wider"
                          >
                            Integratsiya Zanjirini Ishga tushirish
                          </button>
                        </div>
                      )}

                      {/* 10. Cybersecurity firewall Controls */}
                      {activeService.id === 'cyber' && (
                        <div className="space-y-4 font-mono text-[11px]">
                          <div className="flex items-center justify-between">
                            <label className="text-gray-400">WAF AKTIFF (FIREWALL):</label>
                            <input 
                              type="checkbox" checked={shieldActive} 
                              onChange={(e) => setShieldActive(e.target.checked)}
                              className="w-4 h-4 accent-[#00f0ff]"
                            />
                          </div>
                          <button
                            onClick={() => {
                              setScanning(true);
                              setCyberLog(prev => ['[SYSTEM] To\'liq zaifliklar tahlili boshlandi...', ...prev]);
                              setTimeout(() => {
                                setScanning(false);
                                setCyberLog(prev => [
                                  '[OK] Skan yakunlandi. Barcha portlar yopiq, SSL sertifikati mukammal!', 
                                  ...prev
                                ]);
                              }, 2000);
                            }}
                            className="w-full py-2 bg-[#00f0ff] text-black font-bold uppercase text-[10px]"
                          >
                            {scanning ? 'Zaifliklar skan qilinmoqda...' : 'Serverni Skan Qilish'}
                          </button>
                        </div>
                      )}

                      {/* 11. SMM Budget controls */}
                      {activeService.id === 'smm' && (
                        <div className="space-y-4 font-mono text-[11px]">
                          <div className="space-y-1.5">
                            <label className="text-gray-400 block">OYLIK REKLAMA BYUDJETI: ${smmBudget}</label>
                            <input 
                              type="range" min="200" max="15000" step="100" value={smmBudget} 
                              onChange={(e) => setSmmBudget(Number(e.target.value))}
                              className="w-full accent-[#00f0ff] bg-gray-950 border border-white/5"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-gray-400 block">REKLAMA PLATFORMASI:</label>
                            <div className="grid grid-cols-3 gap-2">
                              {['meta', 'google', 'tiktok'].map(ch => (
                                <button
                                  key={ch} onClick={() => setSmmChannel(ch as any)}
                                  className={`py-2 text-center uppercase border ${smmChannel === ch ? 'border-[#00f0ff] bg-black text-[#00f0ff]' : 'border-white/5 bg-black/40'}`}
                                >
                                  {ch}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 12. UI/UX Figma Design controls */}
                      {activeService.id === 'design' && (
                        <div className="space-y-4 font-mono text-[11px]">
                          <div className="space-y-1.5">
                            <label className="text-gray-400 block">VIZUAL DIZAYN USLUBI (THEME):</label>
                            <div className="grid grid-cols-3 gap-2">
                              {['cyberpunk', 'glassmorphism', 'brutalist'].map(th => (
                                <button
                                  key={th} onClick={() => setUiDesignTheme(th as any)}
                                  className={`py-2 text-center text-[10px] uppercase border ${uiDesignTheme === th ? 'border-[#00f0ff] bg-black text-[#00f0ff]' : 'border-white/5 bg-black/40'}`}
                                >
                                  {th}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-gray-400 block">BORDER CORNER RADIUS: {uiBorderRadius}px</label>
                            <input 
                              type="range" min="0" max="32" value={uiBorderRadius} 
                              onChange={(e) => setUiBorderRadius(Number(e.target.value))}
                              className="w-full accent-[#00f0ff] bg-gray-950 border border-white/5"
                            />
                          </div>
                        </div>
                      )}

                    </div>

                  </div>

                  {/* Right Real-time Simulation Sandbox Window */}
                  <div className="lg:col-span-7 p-6 bg-[#090909] flex flex-col justify-between min-h-[350px] lg:min-h-0 relative">
                    
                    <div className="absolute top-4 right-4 z-20 flex items-center space-x-2 text-[9px] font-mono text-gray-500 uppercase tracking-widest bg-black/40 px-3 py-1.5 border border-white/5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                      <span>Simulyator oynasi (REALTIME-PREVIEW)</span>
                    </div>

                    {/* CORE LIVE RENDER CONTAINER */}
                    <div className="flex-1 flex items-center justify-center p-4">

                      {/* 1. Website Live Render Output */}
                      {activeService.id === 'web' && (
                        <div className="w-full max-w-md bg-black border border-white/10 p-5 font-sans space-y-4 shadow-xl relative transition-all duration-300" style={{ borderRadius: webRadius }}>
                          {/* Inner Header */}
                          <div className="flex items-center justify-between border-b border-white/5 pb-2">
                            <span className="font-bold text-xs" style={{ color: webColor }}>LOGO BRAND</span>
                            <div className="flex space-x-2 text-[8px] text-gray-500">
                              <span>MENU</span>
                              <span>CONTACT</span>
                            </div>
                          </div>
                          {/* Inner Hero text */}
                          <div className="space-y-2">
                            <div className="h-4 bg-white/5 rounded w-2/3" />
                            <div className="h-2 bg-white/5 rounded w-full" />
                            <div className="h-2 bg-white/5 rounded w-5/6" />
                          </div>
                          {/* Inner columns grid */}
                          <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${webCols}, minmax(0, 1fr))` }}>
                            {Array.from({ length: 4 }).map((_, idx) => (
                              <div 
                                key={idx} 
                                className="bg-[#111] p-3 border border-white/5 flex flex-col items-center justify-center text-center relative overflow-hidden"
                                style={{ 
                                  borderRadius: webRadius,
                                  boxShadow: webShadow ? `0 0 10px ${webColor}15` : 'none',
                                  borderColor: webShadow ? `${webColor}30` : 'rgba(255,255,255,0.05)'
                                }}
                              >
                                <span className="text-[10px] font-bold text-white block">Modul #{idx+1}</span>
                                <span className="text-[7px] text-gray-500 font-mono mt-1">VITE SPEED</span>
                              </div>
                            ))}
                          </div>
                          {/* Action Button inside */}
                          <button className="w-full py-2 text-center text-xs text-black font-bold uppercase transition-all" style={{ backgroundColor: webColor, borderRadius: webRadius }}>
                            Buyurtma berish (Mock)
                          </button>
                        </div>
                      )}

                      {/* 2. Mobile App Live Render */}
                      {activeService.id === 'mobile' && (
                        <div className={`w-64 h-[420px] rounded-[36px] border-4 border-gray-800 p-3 shadow-2xl relative overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                          appTheme === 'dark' ? 'bg-[#0f0f0f] text-white' : appTheme === 'light' ? 'bg-white text-black border-gray-300' : 'bg-black text-[#00f0ff] border-[#00f0ff]/30'
                        }`}>
                          {/* Notch */}
                          <div className="w-24 h-4 bg-gray-800 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl z-20 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-black" />
                          </div>

                          {/* App Top Push notification slider */}
                          <AnimatePresence>
                            {appNotification && (
                              <motion.div 
                                initial={{ y: -60, opacity: 0 }}
                                animate={{ y: 8, opacity: 1 }}
                                exit={{ y: -60, opacity: 0 }}
                                className="absolute top-2 left-2 right-2 bg-[#00f0ff] text-black text-[9px] font-bold p-2 z-30 flex items-center space-x-1.5 shadow-lg border border-white/20"
                              >
                                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                                <span>{appNotification}</span>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* App Inner Body Layout */}
                          <div className="flex-1 flex flex-col justify-between pt-6 pb-2 overflow-y-auto">
                            
                            {appTab === 'home' && (
                              <div className="space-y-4 p-2 text-left">
                                <div className="space-y-1">
                                  <h4 className="text-xs font-bold font-mono">DASHBOARD</h4>
                                  <p className="text-[9px] text-gray-500">Figma UI Mockup o'ynovchi qism</p>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                  <div className="p-2.5 bg-white/5 border border-white/10 rounded text-center">
                                    <span className="text-[8px] text-gray-500 uppercase block">Yuklanishlar</span>
                                    <span className="text-sm font-bold block mt-0.5 font-mono">14.8k</span>
                                  </div>
                                  <div className="p-2.5 bg-white/5 border border-white/10 rounded text-center">
                                    <span className="text-[8px] text-gray-500 uppercase block">Faoliyatt</span>
                                    <span className="text-sm font-bold block mt-0.5 font-mono">99.9%</span>
                                  </div>
                                </div>
                                <div className="p-3 bg-[#00f0ff]/10 border border-[#00f0ff]/30 rounded text-center">
                                  <span className="text-[10px] font-bold block" style={{ color: appTheme === 'light' ? '#000' : '#00f0ff' }}>Premium Rejim Faol</span>
                                </div>
                              </div>
                            )}

                            {appTab === 'chat' && (
                              <div className="flex-1 flex flex-col justify-between p-2">
                                <div className="space-y-1.5 overflow-y-auto max-h-[220px] text-[10px] pr-1">
                                  {appMsgs.map((m, i) => (
                                    <div key={i} className={`p-2 rounded max-w-[80%] ${m.sender === 'user' ? 'bg-[#00f0ff] text-black ml-auto' : 'bg-white/10 text-white mr-auto'}`}>
                                      {m.text}
                                    </div>
                                  ))}
                                </div>
                                <div className="flex mt-2 border-t border-white/5 pt-2">
                                  <input 
                                    type="text" value={appInput} placeholder="Yozing..."
                                    onChange={(e) => setAppInput(e.target.value)}
                                    onKeyDown={(e) => {
                                      if (e.key === 'Enter' && appInput) {
                                        setAppMsgs(p => [...p, { sender: 'user', text: appInput }]);
                                        const typed = appInput;
                                        setAppInput('');
                                        setTimeout(() => {
                                          setAppMsgs(p => [...p, { sender: 'bot', text: `Rahmat! "${typed}" qabul qilindi.` }]);
                                        }, 1000);
                                      }
                                    }}
                                    className="flex-1 bg-black/40 text-[9px] px-2 py-1 border border-white/10 focus:outline-none"
                                  />
                                </div>
                              </div>
                            )}

                            {appTab === 'settings' && (
                              <div className="p-2 space-y-3 text-left">
                                <span className="text-[10px] font-bold font-mono uppercase block">Soffiy Sozlamalar</span>
                                <div className="space-y-2 text-[9px]">
                                  <div className="flex justify-between border-b border-white/5 pb-1">
                                    <span>Biometrika (FaceID)</span>
                                    <span className="text-emerald-500">FAOL</span>
                                  </div>
                                  <div className="flex justify-between border-b border-white/5 pb-1">
                                    <span>Kesh Tozalash</span>
                                    <span>14.2 MB</span>
                                  </div>
                                  <div className="flex justify-between border-b border-white/5 pb-1">
                                    <span>Ilova Versiyasi</span>
                                    <span className="font-mono">v4.0.4-beta</span>
                                  </div>
                                </div>
                              </div>
                            )}

                          </div>

                          {/* Navigation Menu in Phone */}
                          <div className="border-t border-white/10 pt-2 flex justify-around text-[9px] font-mono text-gray-500">
                            {['home', 'chat', 'settings'].map(t => (
                              <button 
                                key={t} onClick={() => setAppTab(t as any)}
                                className={`uppercase cursor-pointer ${appTab === t ? 'text-[#00f0ff]' : ''}`}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* 3. Telegram Bot Chat Live Render */}
                      {activeService.id === 'bot' && (
                        <div className="w-full max-w-sm bg-[#161d25] border border-white/10 h-[380px] rounded-none flex flex-col justify-between font-sans shadow-xl">
                          {/* Bot header info */}
                          <div className="bg-[#1e2c3a] p-3 border-b border-black/20 flex items-center space-x-2 text-left">
                            <div className="w-8 h-8 rounded-full bg-[#00f0ff] flex items-center justify-center text-black font-bold text-xs shrink-0">
                              404
                            </div>
                            <div>
                              <span className="text-xs font-bold text-white block">404-TEAM Bot</span>
                              <span className="text-[9px] text-gray-400 block">bot status: online</span>
                            </div>
                          </div>
                          {/* Messages frame */}
                          <div className="flex-1 p-3 space-y-3 overflow-y-auto max-h-[260px] text-xs">
                            {botMsgs.map((m, i) => (
                              <div key={i} className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}>
                                <div className={`p-2.5 rounded-lg max-w-[85%] text-left relative ${
                                  m.sender === 'user' 
                                    ? 'bg-[#2b5278] text-white rounded-tr-none' 
                                    : 'bg-[#182533] text-gray-100 rounded-tl-none border border-white/5'
                                }`}>
                                  <p>{m.text}</p>
                                  <span className="text-[7px] text-gray-400 block text-right mt-1 font-mono">{m.time}</span>
                                </div>
                              </div>
                            ))}
                            {botTyping && (
                              <div className="flex items-center space-x-1.5 text-gray-400 font-mono text-[9px]">
                                <span className="animate-bounce">●</span>
                                <span className="animate-bounce delay-75">●</span>
                                <span className="animate-bounce delay-150">●</span>
                                <span>bot yozmoqda...</span>
                              </div>
                            )}
                          </div>
                          {/* Telegram Quick-action footer webapp triggers */}
                          <div className="bg-[#1e2c3a] p-2 flex items-center justify-between border-t border-black/20">
                            <span className="text-[10px] font-mono font-bold text-[#00f0ff] uppercase ml-1.5 animate-pulse">WebApp Menyusi ochish</span>
                            <div className="w-32 h-7 bg-[#2b5278] hover:bg-[#34628f] text-white text-[9px] font-bold uppercase rounded flex items-center justify-center cursor-pointer">
                              🔗 Menu WebApp
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 4. CRM / ERP Live columns visualizer */}
                      {activeService.id === 'crm' && (
                        <div className="w-full max-w-lg bg-black/60 p-4 border border-white/10 font-mono text-[10px] text-left space-y-4 shadow-xl">
                          <div className="flex justify-between items-center border-b border-white/5 pb-2">
                            <span className="text-[#00f0ff] font-bold">SAVDO VORONKASI (SALES PIPELINE)</span>
                            <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 border border-emerald-500/20 text-[9px]">KPI: 99.4%</span>
                          </div>
                          <div className="grid grid-cols-3 gap-3">
                            
                            {/* NEW COLUMN */}
                            <div className="space-y-2 bg-[#111] p-2 border border-white/5 min-h-[180px]">
                              <span className="text-gray-500 block border-b border-white/5 pb-1 uppercase font-bold text-[8px] tracking-wider">YANGI KELISHUV</span>
                              {crmDeals.filter(d => d.stage === 'new').map(deal => (
                                <div 
                                  key={deal.id} onClick={() => setCrmDeals(prev => prev.map(p => p.id === deal.id ? { ...p, stage: 'progress' } : p))}
                                  className="p-2 bg-black border border-white/10 hover:border-[#00f0ff] cursor-pointer transition-colors space-y-1 relative group"
                                >
                                  <span className="text-white font-bold block truncate">{deal.name}</span>
                                  <span className="text-[#00f0ff] font-bold font-mono">${deal.amount}</span>
                                  <span className="absolute right-1 bottom-1 text-[7px] text-gray-500 opacity-0 group-hover:opacity-100">YUBORISH →</span>
                                </div>
                              ))}
                            </div>

                            {/* PROGRESS COLUMN */}
                            <div className="space-y-2 bg-[#111] p-2 border border-white/5 min-h-[180px]">
                              <span className="text-gray-500 block border-b border-white/5 pb-1 uppercase font-bold text-[8px] tracking-wider">JARAYONDA</span>
                              {crmDeals.filter(d => d.stage === 'progress').map(deal => (
                                <div 
                                  key={deal.id} onClick={() => setCrmDeals(prev => prev.map(p => p.id === deal.id ? { ...p, stage: 'done' } : p))}
                                  className="p-2 bg-black border border-white/10 hover:border-[#00f0ff] cursor-pointer transition-colors space-y-1 relative group"
                                >
                                  <span className="text-white font-bold block truncate">{deal.name}</span>
                                  <span className="text-violet-400 font-bold font-mono">${deal.amount}</span>
                                  <span className="absolute right-1 bottom-1 text-[7px] text-gray-500 opacity-0 group-hover:opacity-100">YOPISH →</span>
                                </div>
                              ))}
                            </div>

                            {/* DONE COLUMN */}
                            <div className="space-y-2 bg-[#111] p-2 border border-white/5 min-h-[180px]">
                              <span className="text-gray-500 block border-b border-white/5 pb-1 uppercase font-bold text-[8px] tracking-wider">YAKUNLANDI</span>
                              {crmDeals.filter(d => d.stage === 'done').map(deal => (
                                <div 
                                  key={deal.id} onClick={() => setCrmDeals(prev => prev.map(p => p.id === deal.id ? { ...p, stage: 'new' } : p))}
                                  className="p-2 bg-black border border-emerald-500/20 bg-emerald-950/5 cursor-pointer space-y-1 relative group"
                                >
                                  <span className="text-emerald-400 font-bold block truncate line-through">{deal.name}</span>
                                  <span className="text-emerald-400 font-mono font-bold">${deal.amount}</span>
                                  <span className="absolute right-1 bottom-1 text-[7px] text-gray-500 opacity-0 group-hover:opacity-100">QAYTARISH ↺</span>
                                </div>
                              ))}
                            </div>

                          </div>
                        </div>
                      )}

                      {/* 5. AI Prompt Generator output panel */}
                      {activeService.id === 'ai' && (
                        <div className="w-full max-w-md bg-black border border-white/10 p-4 font-mono text-[10px] text-left space-y-3 relative shadow-xl min-h-[220px] flex flex-col justify-between">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between border-b border-white/5 pb-2">
                              <span className="text-[#00f0ff] font-bold">GEMINI EXPERT CONSOLE</span>
                              <span>TEMP: {aiTemp}</span>
                            </div>
                            <div className="space-y-1 bg-[#111] p-2.5 border border-white/5 rounded-none min-h-[140px] max-h-[180px] overflow-y-auto">
                              {aiOutput ? (
                                <p className="text-gray-200 leading-relaxed whitespace-pre-wrap">{aiOutput}</p>
                              ) : (
                                <span className="text-gray-600 italic">"Neyrotarmoqdan Javob O'qish" tugmasini bosing va sun'iy intellekt daxshatli matn yozishini jonli tomosha qiling...</span>
                              )}
                            </div>
                          </div>
                          {aiStreaming && (
                            <div className="space-y-1">
                              <div className="flex justify-between text-[9px] text-gray-500">
                                <span>PROSESSOR: 404-NEURAL NETWORK</span>
                                <span>{aiProgress}%</span>
                              </div>
                              <div className="w-full h-1 bg-gray-950 rounded-none overflow-hidden">
                                <div className="h-full bg-[#00f0ff] transition-all" style={{ width: `${aiProgress}%` }} />
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* 6. Computer vision detector output overlay */}
                      {activeService.id === 'cv' && (
                        <div className="w-full max-w-sm bg-black border border-white/10 p-2 relative shadow-xl overflow-hidden group">
                          {/* Mock Image backgrounds with bounding boxes */}
                          <div className="relative aspect-video bg-gray-900 overflow-hidden flex items-center justify-center">
                            
                            {cvImage === 'traffic' && (
                              <>
                                <img src="https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=400&q=80" alt="traffic" className="w-full h-full object-cover opacity-80" />
                                {/* Vehicle box */}
                                {cvThreshold <= 80 && (
                                  <div className="absolute top-[20%] left-[15%] w-[45%] h-[50%] border-2 border-[#00f0ff] animate-pulse">
                                    <span className="absolute top-0 left-0 bg-[#00f0ff] text-black font-mono font-bold text-[8px] px-1 py-0.5">CAR: 89%</span>
                                  </div>
                                )}
                                {/* Person box */}
                                {cvThreshold <= 60 && (
                                  <div className="absolute top-[40%] left-[70%] w-[15%] h-[40%] border-2 border-purple-500 animate-pulse">
                                    <span className="absolute top-0 left-0 bg-purple-500 text-white font-mono font-bold text-[8px] px-1 py-0.5">PEDESTRIAN: 65%</span>
                                  </div>
                                )}
                              </>
                            )}

                            {cvImage === 'office' && (
                              <>
                                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80" alt="office" className="w-full h-full object-cover opacity-80" />
                                {cvThreshold <= 95 && (
                                  <div className="absolute top-[30%] left-[40%] w-[30%] h-[50%] border-2 border-[#00f0ff] animate-pulse">
                                    <span className="absolute top-0 left-0 bg-[#00f0ff] text-black font-mono font-bold text-[8px] px-1 py-0.5">CHAIR: 97%</span>
                                  </div>
                                )}
                                {cvThreshold <= 70 && (
                                  <div className="absolute top-[10%] left-[10%] w-[25%] h-[35%] border-2 border-yellow-500 animate-pulse">
                                    <span className="absolute top-0 left-0 bg-yellow-500 text-black font-mono font-bold text-[8px] px-1 py-0.5">MONITOR: 74%</span>
                                  </div>
                                )}
                              </>
                            )}

                            {cvImage === 'store' && (
                              <>
                                <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80" alt="store" className="w-full h-full object-cover opacity-80" />
                                {cvThreshold <= 90 && (
                                  <div className="absolute top-[25%] left-[30%] w-[20%] h-[40%] border-2 border-[#00f0ff] animate-pulse">
                                    <span className="absolute top-0 left-0 bg-[#00f0ff] text-black font-mono font-bold text-[8px] px-1 py-0.5">APPLE: 92%</span>
                                  </div>
                                )}
                                {cvThreshold <= 80 && (
                                  <div className="absolute top-[40%] left-[55%] w-[25%] h-[45%] border-2 border-lime-500 animate-pulse">
                                    <span className="absolute top-0 left-0 bg-lime-500 text-black font-mono font-bold text-[8px] px-1 py-0.5">BOTTLE: 85%</span>
                                  </div>
                                )}
                              </>
                            )}

                            {/* Center Target finder line overlay */}
                            <div className="absolute inset-0 border border-white/5 pointer-events-none" />
                            <div className="absolute w-8 h-8 border-t border-l border-[#00f0ff] top-4 left-4" />
                            <div className="absolute w-8 h-8 border-t border-r border-[#00f0ff] top-4 right-4" />
                            <div className="absolute w-8 h-8 border-b border-l border-[#00f0ff] bottom-4 left-4" />
                            <div className="absolute w-8 h-8 border-b border-r border-[#00f0ff] bottom-4 right-4" />
                          </div>
                        </div>
                      )}

                      {/* 7. AI Camera logs Visual output */}
                      {activeService.id === 'camera' && (
                        <div className="w-full max-w-md bg-black border border-white/10 p-4 font-mono text-[10px] text-left space-y-4 shadow-xl">
                          <div className="relative aspect-video bg-gray-950 border border-white/5 rounded-none flex items-center justify-center overflow-hidden">
                            {/* Outer Scan Line sweep effect */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#00f0ff] animate-scan-sweep pointer-events-none opacity-40" />
                            
                            {/* Cam Grid Overlay */}
                            <div className="absolute inset-0 bg-radar-grid pointer-events-none opacity-25" />

                            <div className={`w-full h-full absolute transition-colors ${camNightMode ? 'bg-[#002200]/30 text-emerald-400' : 'bg-transparent text-gray-500'}`} />
                            
                            <div className="absolute top-3 left-3 text-[9px] font-bold uppercase tracking-widest bg-black/80 px-2 py-1 border border-white/5">
                              🔴 CAM-01 [ACTIVE]
                            </div>
                            <div className="absolute top-3 right-3 text-[9px] font-bold text-gray-500">
                              REC 1080P
                            </div>

                            <div className="text-center z-10 space-y-2">
                              {camNightMode ? (
                                <span className="text-emerald-400 text-xs font-bold animate-pulse">NIGHT VISION MODE (IR ACTIVE)</span>
                              ) : (
                                <span className="text-gray-400 text-xs">STANDBY MONITORING FEED</span>
                              )}
                              <p className="text-[8px] text-gray-500">NEURAL DETECTION MATRIX ACTIVE</p>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <span className="text-gray-500 block text-[8px] border-b border-white/5 pb-1 uppercase tracking-widest">Kamera Hodisalar jurnali:</span>
                            <div className="max-h-[80px] overflow-y-auto space-y-1 text-gray-400">
                              {camAlerts.map((log, i) => (
                                <p key={i} className="truncate">{log}</p>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 8. Robotic Arm Angle coordinates and visual simulation */}
                      {activeService.id === 'robot' && (
                        <div className="w-full max-w-md bg-black border border-white/10 p-4 font-mono text-[10px] text-left space-y-4 shadow-xl">
                          <div className="flex items-center justify-between border-b border-white/5 pb-2">
                            <span className="text-[#00f0ff] font-bold">ROBOT ARMATURE DRIVER</span>
                            <span>STATUS: ONLINE</span>
                          </div>
                          
                          {/* Live Mechanical Robotic Vector Graphics using SVG */}
                          <div className="h-44 bg-gray-950 border border-white/5 flex items-center justify-center relative overflow-hidden">
                            <svg className="w-full h-full" viewBox="0 0 200 120">
                              {/* Grid lines */}
                              <line x1="0" y1="100" x2="200" y2="100" stroke="#111" strokeWidth="2" />
                              
                              {/* Base Rotate joint */}
                              <circle cx="100" cy="100" r="12" fill="#222" stroke="#00f0ff" strokeWidth="2" />
                              
                              {/* Joint Arm lines calculated statically using angles props to look beautiful */}
                              {/* Joint 1 Arm */}
                              <line 
                                x1="100" y1="100" 
                                x2={100 + Math.cos((robotBase * Math.PI) / 180) * (robotReach * 0.4)} 
                                y2={100 - Math.sin((robotBase * Math.PI) / 180) * (robotReach * 0.4)} 
                                stroke="#00f0ff" strokeWidth="4" strokeLinecap="round" 
                              />
                              
                              {/* Joint 2 Angle node */}
                              <circle 
                                cx={100 + Math.cos((robotBase * Math.PI) / 180) * (robotReach * 0.4)} 
                                cy={100 - Math.sin((robotBase * Math.PI) / 180) * (robotReach * 0.4)} 
                                r="5" fill="#a855f7" 
                              />

                              {/* Target point indicator */}
                              <circle cx="150" cy="50" r="2" fill="#ef4444" className="animate-ping" />
                            </svg>

                            <div className="absolute bottom-2 left-2 text-[8px] text-gray-500">
                              X: {Math.floor(robotBase * 1.5)}mm | Y: {Math.floor(robotReach * 1.2)}mm | CLAW: {robotClaw}%
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 9. Business trigger automation animation workflow block */}
                      {activeService.id === 'automation' && (
                        <div className="w-full max-w-sm bg-black border border-white/10 p-5 font-mono text-[10px] text-left space-y-4 shadow-xl">
                          <div className="flex items-center justify-between border-b border-white/5 pb-2">
                            <span className="text-[#00f0ff] font-bold">FLOW BUILDER RUNNER</span>
                            <span className="text-gray-500 uppercase">PROD: CONFLICTS 0</span>
                          </div>

                          <div className="space-y-3 relative">
                            {/* Trigger module block */}
                            <div className="p-3 bg-[#111] border border-white/5 flex items-center justify-between relative">
                              <div>
                                <span className="text-[8px] text-gray-500 uppercase block">1. TRIGGER (HODISA)</span>
                                <span className="text-white font-bold">{flowTrigger === 'order_paid' ? '💳 To\'lov Muvaffaqiyatli' : flowTrigger === 'new_lead' ? '👤 Yangi Lead Arizasi' : '🚨 Server xatoligi'}</span>
                              </div>
                              <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-black" />
                            </div>

                            {/* Connecting Visual Path */}
                            <div className="h-6 w-[2px] bg-white/10 mx-auto relative overflow-hidden">
                              {flowStatus === 'running' && (
                                <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#00f0ff] animate-pulse" />
                              )}
                            </div>

                            {/* Action module block */}
                            <div className="p-3 bg-[#111] border border-white/5 flex items-center justify-between">
                              <div>
                                <span className="text-[8px] text-gray-500 uppercase block">2. ACTION (AMAL)</span>
                                <span className="text-white font-bold">{flowAction === 'send_telegram' ? '🤖 Telegram xabarnoma' : flowAction === 'add_crm' ? '🏢 Pipeline Deal qo\'shish' : '📱 Mijozga tabrik SMS'}</span>
                              </div>
                              <div className={`w-3.5 h-3.5 rounded-full border-2 border-black transition-colors ${flowStatus === 'completed' ? 'bg-[#00f0ff]' : 'bg-gray-800'}`} />
                            </div>
                          </div>

                          {flowStatus !== 'idle' && (
                            <div className="text-center pt-2">
                              {flowStatus === 'running' ? (
                                <span className="text-yellow-400 animate-pulse">FLOW ZANJIRI TEST RUN QILINMOQDA... ⚡</span>
                              ) : (
                                <span className="text-emerald-400 font-bold">✓ TEST RUN MUVAFFAQIYATLI YAKUNLANDI!</span>
                              )}
                            </div>
                          )}
                        </div>
                      )}

                      {/* 10. Cybersecurity threat protection feed and scanner */}
                      {activeService.id === 'cyber' && (
                        <div className="w-full max-w-sm bg-black border border-white/10 p-4 font-mono text-[9px] text-left space-y-4 shadow-xl">
                          <div className="flex items-center justify-between border-b border-white/5 pb-2">
                            <span className="text-red-500 font-black tracking-widest">CORE-SHIELD STATUS</span>
                            <span className="bg-red-500/10 text-red-400 px-2 py-0.5 border border-red-500/20 font-bold">BLOCKED: {ddosBlockedCount}</span>
                          </div>

                          <div className="space-y-3">
                            <div className="flex items-center justify-between bg-black/60 p-3 border border-white/5">
                              <div>
                                <span className="text-gray-500 block">DDoS Xujumlar himoya devori</span>
                                <span className="text-white font-bold text-xs">{shieldActive ? 'ON — TIZIM XAVFSIZ' : 'OFF — ZAIFLIK MAVJUD'}</span>
                              </div>
                              <div className={`w-3.5 h-3.5 rounded-full ${shieldActive ? 'bg-[#00f0ff] animate-ping' : 'bg-red-500'}`} />
                            </div>

                            <div className="space-y-1">
                              <span className="text-gray-500 block">REALTIME LOGS FLOW:</span>
                              <div className="bg-[#0c0c0c] p-2 border border-white/5 h-20 overflow-y-auto space-y-1 text-gray-400 font-mono text-[8px]">
                                {cyberLog.map((log, i) => (
                                  <p key={i} className="truncate">{log}</p>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 11. SMM and digital marketing budget estimator and reach display */}
                      {activeService.id === 'smm' && (
                        <div className="w-full max-w-sm bg-black border border-white/10 p-4 font-mono text-[10px] text-left space-y-4 shadow-xl">
                          <div className="flex items-center justify-between border-b border-white/5 pb-2">
                            <span className="text-[#00f0ff] font-bold">DIGITAL ROI CALCULATOR</span>
                            <span className="text-gray-500 uppercase">ESTIMATE TRAFFIC</span>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 bg-[#111] border border-white/5 rounded text-center space-y-1">
                              <span className="text-[8px] text-gray-500 uppercase block">Taxminiy Reach (Ko'rishlar)</span>
                              <span className="text-base font-bold text-white block">{(smmBudget * (smmChannel === 'meta' ? 85 : smmChannel === 'google' ? 50 : 120)).toLocaleString()}+</span>
                            </div>
                            <div className="p-3 bg-[#111] border border-white/5 rounded text-center space-y-1">
                              <span className="text-[8px] text-gray-500 uppercase block">Konversiya (Sales)</span>
                              <span className="text-base font-bold text-[#00f0ff] block">{Math.floor(smmBudget * 0.12).toLocaleString()} ta xarid</span>
                            </div>
                          </div>

                          <div className="p-3 bg-black border border-white/10 space-y-2">
                            <span className="text-[8px] text-gray-500 uppercase block">Kanal samaradorligi (Conversion Index)</span>
                            <div className="w-full h-2 bg-gray-950 rounded-none overflow-hidden">
                              <div 
                                className="h-full bg-[#00f0ff]" 
                                style={{ width: smmChannel === 'meta' ? '85%' : smmChannel === 'google' ? '65%' : '90%' }} 
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 12. UI/UX Figma component designer mockup visual output */}
                      {activeService.id === 'design' && (
                        <div className="w-full max-w-sm bg-black border border-white/10 p-5 shadow-xl text-left space-y-4 relative overflow-hidden transition-all duration-300">
                          
                          {/* Aesthetic Theme renderer */}
                          {uiDesignTheme === 'cyberpunk' && (
                            <div className="space-y-3 font-mono text-xs text-[#00f0ff]" style={{ borderRadius: `${uiBorderRadius}px` }}>
                              <div className="p-3 bg-black border border-[#00f0ff] space-y-2" style={{ borderRadius: `${uiBorderRadius}px` }}>
                                <span className="text-[9px] font-bold tracking-widest block text-white uppercase">CYBERPUNK CARD</span>
                                <p className="text-[10px] text-gray-400 font-light">Biznesingiz uchun eng so'nggi neon uslubi va futuristik simmetriya.</p>
                                <button className="px-4 py-1.5 bg-[#00f0ff] text-black font-bold uppercase text-[9px]" style={{ borderRadius: `${uiBorderRadius}px` }}>
                                  Batafsil
                                </button>
                              </div>
                            </div>
                          )}

                          {uiDesignTheme === 'glassmorphism' && (
                            <div className="space-y-3 font-sans text-xs text-white" style={{ borderRadius: `${uiBorderRadius}px` }}>
                              <div className="p-3 bg-white/5 border border-white/10 backdrop-blur-md space-y-2" style={{ borderRadius: `${uiBorderRadius}px` }}>
                                <span className="text-[9px] font-bold tracking-widest block text-gray-300 uppercase">SOFT GLASS PANEL</span>
                                <p className="text-[10px] text-gray-400 font-light">Zamonaviy va ko'zga chiroyli ko'rinadigan estetik yumshoq dizayn.</p>
                                <button className="px-4 py-1.5 bg-white/10 hover:bg-white/20 text-white border border-white/10 text-[9px]" style={{ borderRadius: `${uiBorderRadius}px` }}>
                                  Batafsil
                                </button>
                              </div>
                            </div>
                          )}

                          {uiDesignTheme === 'brutalist' && (
                            <div className="space-y-3 font-sans text-xs text-white" style={{ borderRadius: `${uiBorderRadius}px` }}>
                              <div className="p-3 bg-[#e2e8f0] border-4 border-black text-black space-y-2" style={{ borderRadius: `${uiBorderRadius}px` }}>
                                <span className="text-[9px] font-extrabold tracking-widest block uppercase font-mono">NEO-BRUTALISM UNIT</span>
                                <p className="text-[10px] font-bold">Xaqiqiy san'at asari: yo'g'on qora hoshiyalar va yorqin ranglar kontrasti.</p>
                                <button className="px-4 py-1.5 bg-black text-white font-extrabold uppercase text-[9px]" style={{ borderRadius: `${uiBorderRadius}px` }}>
                                  Batafsil
                                </button>
                              </div>
                            </div>
                          )}

                        </div>
                      )}

                    </div>

                    {/* Bottom CTA to start project */}
                    <div className="bg-black/40 p-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
                      <div className="space-y-0.5">
                        <span className="text-[9px] font-mono text-gray-500 uppercase block">Loyiha g'oyangiz bormi?</span>
                        <span className="text-xs font-bold text-white">404-TEAM bilan uni daxshatli tarzda amalga oshiring!</span>
                      </div>
                      <button
                        onClick={() => {
                          setActiveService(null);
                          onNavigate('contact');
                        }}
                        className="px-5 py-2.5 bg-[#00f0ff] hover:bg-white text-black text-xs font-mono font-bold uppercase tracking-widest cursor-pointer"
                      >
                        Loyihani Boshlash
                      </button>
                    </div>

                  </div>

                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Dynamic bottom banner (Redirecting to Contact Section) */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex flex-col sm:flex-row items-center gap-6 p-6 rounded-none bg-[#111111] border border-white/5 max-w-2xl mx-auto text-left"
          >
            <span className="text-xs text-gray-400 font-light text-center sm:text-left leading-relaxed">
              O'z loyihangiz bo'yicha aniq daxshatli yechim va muddatlarni hoziroq mutaxassislarimiz bilan kelishing!
            </span>
            <button
              id="services-bottom-cta-btn"
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-none bg-[#00f0ff] text-black hover:bg-white text-xs font-mono font-bold tracking-widest uppercase transition-colors duration-300 cursor-pointer shrink-0"
            >
              MUTAXASSIS BILAN ALOQA
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
