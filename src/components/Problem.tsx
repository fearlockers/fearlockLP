"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useLanguage } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";

const LottieAnimation = dynamic(() => import("./LottieAnimation"), {
  ssr: false,
  loading: () => <div className="w-10 h-10" />,
});

const consequenceLottieSrcs = [
  "https://assets-v2.lottiefiles.com/a/ba4a5420-1176-11ee-9723-1bd39c80ff3d/AxJZsCnolp.lottie",
  "https://assets-v2.lottiefiles.com/a/3f16232c-117d-11ee-b12b-2f64fc4058e1/yVJqp0h1Xu.lottie",
  "https://assets-v2.lottiefiles.com/a/480ed9e8-1181-11ee-8d0d-13c7bf3f5a4d/cevB9yqdhr.lottie",
  "https://assets-v2.lottiefiles.com/a/570fdd06-8658-11ee-bac7-37c8dfd00399/9ExY5Dotkw.lottie",
];

const problemIcons = [
  <svg key="0" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
  </svg>,
  <svg key="1" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878l4.242 4.242M21 21l-4.878-4.878" />
  </svg>,
  <svg key="2" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>,
  <svg key="3" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
];

export default function Problem() {
  const { locale } = useLanguage();
  const tr = translations.problem;
  const cardsRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            // Sequentially reveal each card: 01 → 02 → 03 → 04
            [0, 1, 2, 3].forEach((i) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const next = [...prev];
                  next[i] = true;
                  return next;
                });
              }, i * 250); // 250ms stagger
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="problem" className="py-28 sm:py-36 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-50 rounded-full blur-[120px] opacity-40" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-200 bg-brand-50 mb-6">
            <span className="text-xs font-bold tracking-widest text-brand uppercase">
              {t(tr.badge, locale)}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t(tr.title1, locale)}
            <br className="hidden sm:inline" />
            <span className="text-brand">{t(tr.titleHighlight, locale)}</span>
          </h2>
          <p className="mt-6 text-lg text-slate-500 leading-relaxed">
            {t(tr.subtitle, locale)}
          </p>
        </div>

        {/* Problem cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tr.problems.map((problem, index) => (
            <div
              key={index}
              className={`card-animate ${visibleCards[index] ? "is-visible" : ""} group relative bg-white rounded-2xl border border-slate-200 hover:border-brand/30 p-8 transition-shadow,border-color,transform duration-500 hover:shadow-2xl hover:shadow-brand/5 hover:-translate-y-1`}
              style={{ animationDelay: visibleCards[index] ? "0ms" : undefined }}
            >
              <span className="absolute top-6 right-6 text-5xl font-extrabold text-slate-100 group-hover:text-brand-50 transition-colors">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand flex items-center justify-center mb-5 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                  {problemIcons[index]}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {t(problem.title, locale)}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {t(problem.description, locale)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Consequences banner */}
        <div className="mt-16 relative">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 sm:p-10 overflow-hidden">
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }} />
            <div className="relative z-10">
              <h3 className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">
                {t(tr.consequencesTitle, locale)}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {tr.consequences.map((item, i) => (
                  <div key={i} className="text-center flex flex-col items-center">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 mb-4">
                      <LottieAnimation
                        src={consequenceLottieSrcs[i]}
                        className="w-full h-full"
                        loop={true}
                        autoplay={true}
                        speed={0.8}
                      />
                    </div>
                    <p className="text-sm font-medium text-slate-300">{t(item, locale)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
