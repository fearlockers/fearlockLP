"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";

const stepIcons = [
  <svg key="0" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>,
  <svg key="1" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>,
  <svg key="2" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  <svg key="3" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
];

export default function Solution() {
  const { locale } = useLanguage();
  const tr = translations.solution;
  const stepsRef = useRef<HTMLDivElement>(null);
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>([false, false, false, false]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            // Sequentially reveal each step with a delay
            [0, 1, 2, 3].forEach((i) => {
              setTimeout(() => {
                setVisibleSteps((prev) => {
                  const next = [...prev];
                  next[i] = true;
                  return next;
                });
              }, i * 300); // 300ms stagger between each step
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (stepsRef.current) {
      observer.observe(stepsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="solution" className="py-28 sm:py-36 bg-slate-50 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand/5 rounded-full blur-[150px]" aria-hidden="true" />

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
            {t(tr.subtitle1, locale)}
            <br className="hidden sm:inline" />
            {t(tr.subtitle2, locale)}
          </p>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-12 left-[calc(12.5%+30px)] right-[calc(12.5%+30px)] h-[2px]" aria-hidden="true">
            <div className="h-full bg-gradient-to-r from-brand/40 via-brand to-brand/40 rounded-full" />
          </div>

          {tr.steps.map((item, index) => (
            <div key={index} className="relative text-center group">
              <div
                className={`step-icon-animate ${visibleSteps[index] ? "is-visible step-glow" : ""} relative mx-auto w-16 h-16 rounded-2xl bg-white border-2 border-brand/20 group-hover:border-brand flex items-center justify-center text-brand shadow-md group-hover:shadow-xl group-hover:shadow-brand/10 transition-all duration-500 z-10 group-hover:-translate-y-1`}
              >
                {stepIcons[index]}
              </div>
              <div
                className="mt-5 text-[10px] font-black text-brand tracking-[0.2em] uppercase transition-opacity duration-500"
                style={{
                  opacity: visibleSteps[index] ? 1 : 0,
                  transitionDelay: `${index * 300 + 200}ms`,
                }}
              >
                Step {String(index + 1).padStart(2, "0")}
              </div>
              <h3
                className="mt-2 text-xl font-bold text-slate-900 transition-opacity duration-500"
                style={{
                  opacity: visibleSteps[index] ? 1 : 0,
                  transitionDelay: `${index * 300 + 300}ms`,
                }}
              >
                {t(item.title, locale)}
              </h3>
              <p
                className="mt-3 text-sm text-slate-500 leading-relaxed transition-opacity duration-500"
                style={{
                  opacity: visibleSteps[index] ? 1 : 0,
                  transitionDelay: `${index * 300 + 400}ms`,
                }}
              >
                {t(item.description, locale)}
              </p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-24">
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10 sm:p-14 overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }} />
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand/10 rounded-full blur-[100px]" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              <div>
                <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand to-rose-400">
                  100%
                </div>
                <p className="mt-3 text-sm text-slate-400 font-medium">{t(tr.stats.stat1Label, locale)}</p>
              </div>
              <div>
                <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">
                  24/7
                </div>
                <p className="mt-3 text-sm text-slate-400 font-medium">{t(tr.stats.stat2Label, locale)}</p>
              </div>
              <div>
                <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                  1 Platform
                </div>
                <p className="mt-3 text-sm text-slate-400 font-medium">{t(tr.stats.stat3Label, locale)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
