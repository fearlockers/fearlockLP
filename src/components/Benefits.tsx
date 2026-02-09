"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useLanguage } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";

const LottieAnimation = dynamic(() => import("./LottieAnimation"), {
  ssr: false,
  loading: () => <div className="w-10 h-10" />,
});

const benefitIcons = [
  <svg key="0" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>,
  <svg key="1" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg key="2" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg key="3" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
  </svg>,
];

const personaLottieSrcs = [
  "https://assets-v2.lottiefiles.com/a/c228730a-1169-11ee-9c07-33b85bf9e4b2/QmInoa10nu.lottie",
  "https://assets-v2.lottiefiles.com/a/cd6521c4-1172-11ee-80b1-77c3ebe3a7c8/zkMxjvzaBc.lottie",
  "https://assets-v2.lottiefiles.com/a/5edd70e4-7bc0-11ef-b1d3-8ba9f56519cf/ZvSDNDJyWq.lottie",
];

export default function Benefits() {
  const { locale } = useLanguage();
  const tr = translations.benefits;

  // Benefits cards animation
  const cardsRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);
  const cardsAnimated = useRef(false);

  // Persona cards animation
  const personaRef = useRef<HTMLDivElement>(null);
  const [visiblePersonas, setVisiblePersonas] = useState<boolean[]>([false, false, false]);
  const personaAnimated = useRef(false);

  useEffect(() => {
    const cardsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !cardsAnimated.current) {
            cardsAnimated.current = true;
            [0, 1, 2, 3].forEach((i) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const next = [...prev];
                  next[i] = true;
                  return next;
                });
              }, i * 200);
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    const personaObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !personaAnimated.current) {
            personaAnimated.current = true;
            [0, 1, 2].forEach((i) => {
              setTimeout(() => {
                setVisiblePersonas((prev) => {
                  const next = [...prev];
                  next[i] = true;
                  return next;
                });
              }, i * 250);
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    if (cardsRef.current) {
      cardsObserver.observe(cardsRef.current);
    }
    if (personaRef.current) {
      personaObserver.observe(personaRef.current);
    }

    return () => {
      cardsObserver.disconnect();
      personaObserver.disconnect();
    };
  }, []);

  return (
    <section id="benefits" className="py-28 sm:py-36 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-50 rounded-full blur-[150px] opacity-50" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-200 bg-brand-50 mb-6">
            <span className="text-xs font-bold tracking-widest text-brand uppercase">{t(tr.badge, locale)}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {t(tr.title1, locale)}<span className="text-brand">{t(tr.titleHighlight, locale)}</span>
          </h2>
          <p className="mt-6 text-lg text-slate-500 leading-relaxed">
            {t(tr.subtitle, locale)}
          </p>
        </div>

        {/* Benefits grid - with animation */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tr.items.map((benefit, index) => (
            <div
              key={index}
              className={`group p-8 rounded-3xl bg-white border border-slate-200 hover:border-brand/30 hover:shadow-2xl hover:shadow-brand/5 hover:-translate-y-2 relative overflow-hidden transition-all duration-700 ${
                visibleCards[index]
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-95"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-brand-50/0 to-brand-50/0 group-hover:from-brand-50/40 group-hover:to-transparent transition-all duration-500" />
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-brand-50 text-brand flex items-center justify-center mb-5 group-hover:bg-brand group-hover:text-white transition-all duration-300 group-hover:scale-110 ${
                  visibleCards[index] ? "animate-border-pulse border-2 border-brand/20" : ""
                }`}>
                  {benefitIcons[index]}
                </div>
                <span className="block text-[10px] font-black text-brand/60 uppercase tracking-[0.2em] mb-2">
                  {benefit.perspective}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{t(benefit.title, locale)}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{t(benefit.description, locale)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Persona section */}
        <div className="mt-24">
          <h3 className="text-center text-2xl sm:text-3xl font-extrabold text-slate-900 mb-12">
            {t(tr.personaTitle1, locale)}<span className="text-brand">{t(tr.personaTitleHighlight, locale)}</span>
          </h3>
          <div ref={personaRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tr.personas.map((persona, index) => (
              <div
                key={index}
                className={`group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-brand/20 hover:shadow-xl hover:shadow-brand/5 transition-all duration-700 ${
                  visiblePersonas[index]
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-10 scale-95"
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 flex-shrink-0">
                    <LottieAnimation
                      src={personaLottieSrcs[index]}
                      className="w-full h-full"
                      loop={true}
                      autoplay={true}
                      speed={0.7}
                    />
                  </div>
                  <span className="text-base font-bold text-slate-900">{t(persona.role, locale)}</span>
                </div>
                <div className="mb-4 p-4 rounded-xl bg-red-50/70 border border-red-100/80">
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <p className="text-sm text-brand-700 font-medium">{t(persona.pain, locale)}</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100/80">
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm text-emerald-700 font-medium">{t(persona.solution, locale)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
