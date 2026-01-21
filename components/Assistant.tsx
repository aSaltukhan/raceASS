
import { GoogleGenAI } from "@google/genai";
import React, { useEffect, useRef, useState } from 'react';
import { RACES } from '../constants';

export const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleAsk = async () => {
    if (!query.trim() || isLoading) return;

    const userMessage = query;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setQuery('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const context = `
        Sen raceASS uygulamasının uzman Yarış Asistanısın. 
        Sadece 2026 sezonuna odaklısın. Veriler:
        ${JSON.stringify(RACES)}
        
        Kullanıcının sorularını bu verilere göre, teknik kuralları (2026 F1 hibrit motor, aktif aero, sürdürülebilir yakıt) bilerek yanıtla.
        Dil: Türkçe. Üslup: Profesyonel, merak uyandırıcı, sakin ve motorsporlarını bilen bir motorsporları tutkunu.
        
        KRİTİK DİL KURALLARI:
        1. Grand Prix, Prix, Qualifying, Practice, Sprint, Race gibi terimleri çevirme, olduğu gibi kullan.
        2. "İ/I" hatası yapma. Özel adlarda yabancı harf kurallarını koru. (Örn: PRIX yazarken PRİX deme).
        3. Metinlerin doğal olsun, bir motorsporları fanatiği gibi konuş.
      `;

      const response = await ai.models.generateContent({
        model: "gemini-3-pro-preview",
        contents: [
          { role: 'user', parts: [{ text: context }] },
          { role: 'model', parts: [{ text: "Anlaşıldı. raceASS dil prensiplerine ve 2026 sezonu teknik detaylarına tam hakimiyetle analiz yapmaya hazırım." }] },
          ...messages.map(m => ({
            role: m.role === 'user' ? 'user' : 'model' as any,
            parts: [{ text: m.text }]
          })),
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          thinkingConfig: { thinkingBudget: 32768 }
        },
      });

      const aiText = response.text || "Şu an bağlantıda bir parazit var, tekrar deneyebilir misin?";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'ai', text: "Yarış kontrolüyle bağlantı kesildi. Lütfen tekrar dene." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-[60] h-14 w-14 sm:h-16 sm:w-16 rounded-full text-white shadow-2xl transition-all duration-500 flex items-center justify-center border ${
          isOpen 
            ? 'bg-slate-900 border-slate-700 rotate-90' 
            : 'bg-red-600 border-red-500 shadow-red-600/40 hover:scale-105 active:scale-95'
        }`}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )}
      </button>

      <div className={`fixed inset-0 sm:inset-y-0 sm:right-0 sm:left-auto w-full sm:w-[450px] bg-slate-950 z-[55] shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full safe-bottom">
          {/* Header */}
          <div className="pt-20 sm:pt-24 pb-6 px-6 sm:px-8 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-red-600/10 text-red-500 border border-red-500/10">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                 </svg>
              </div>
              <div>
                <h3 className="font-brand italic text-xl sm:text-2xl uppercase tracking-tighter text-white">Yarış Zekası</h3>
                <p className="text-[9px] text-slate-500 font-black uppercase tracking-[0.2em] mt-1">AI Analiz Motoru</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 text-slate-600 hover:text-white sm:hidden">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
               </svg>
            </button>
          </div>

          {/* Chat area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-6 px-6 sm:px-8 py-8 scrollbar-hide">
            {messages.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                <div className="p-6 rounded-full bg-slate-900/50 border border-white/5">
                   <svg className="w-10 h-10 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                   </svg>
                </div>
                <div className="space-y-2">
                   <p className="text-slate-400 text-sm italic px-4">"2026'daki yeni aktif aero kuralları yarışları nasıl etkileyecek?"</p>
                   <p className="text-slate-600 text-[9px] uppercase font-black tracking-widest">Öneri: Motor Kuralları, Takvim Yoğunluğu</p>
                </div>
              </div>
            )}
            
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-5 rounded-3xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-red-600 text-white rounded-tr-none' 
                    : 'bg-slate-900 border border-white/5 text-slate-200 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-900/50 p-5 rounded-3xl rounded-tl-none border border-white/5 flex items-center gap-4">
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce [animation-duration:1s]"></div>
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce [animation-duration:1s] [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce [animation-duration:1s] [animation-delay:0.4s]"></div>
                  </div>
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Düşünüyor...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input container */}
          <div className="p-6 sm:p-8 bg-slate-950 border-t border-white/5 pb-[env(safe-area-inset-bottom,24px)]">
            <div className="relative flex items-center">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
                placeholder="Bir şeyler sor..."
                className="w-full bg-slate-900 border border-slate-800 text-white rounded-2xl py-5 pl-6 pr-14 text-sm focus:outline-none focus:border-red-600/50 transition-all shadow-inner"
              />
              <button
                onClick={handleAsk}
                disabled={isLoading || !query.trim()}
                className="absolute right-3 p-3 text-red-500 disabled:opacity-10 transition-all hover:scale-110 active:scale-90"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
