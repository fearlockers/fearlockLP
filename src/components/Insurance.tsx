"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";

const flowIcons = [
  <svg key="0" className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>,
  <svg key="1" className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>,
  <svg key="2" className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
];

const valuePropIcons = [
  <svg key="0" className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg key="1" className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>,
  <svg key="2" className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
];

export default function Insurance() {
  const { locale } = useLanguage();
  const tr = translations.insurance;

  // Flow diagram animation
  const flowRef = useRef<HTMLDivElement>(null);
  const [visibleFlowSteps, setVisibleFlowSteps] = useState<boolean[]>([false, false, false]);
  const flowAnimated = useRef(false);

  // Value props animation
  const valuePropsRef = useRef<HTMLDivElement>(null);
  const [visibleValueProps, setVisibleValueProps] = useState<boolean[]>([false, false, false]);
  const valuePropsAnimated = useRef(false);

  useEffect(() => {
    const flowObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !flowAnimated.current) {
            flowAnimated.current = true;
            [0, 1, 2].forEach((i) => {
              setTimeout(() => {
                setVisibleFlowSteps((prev) => {
                  const next = [...prev];
                  next[i] = true;
                  return next;
                });
              }, i * 350);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const valuePropsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !valuePropsAnimated.current) {
            valuePropsAnimated.current = true;
            [0, 1, 2].forEach((i) => {
              setTimeout(() => {
                setVisibleValueProps((prev) => {
                  const next = [...prev];
                  next[i] = true;
                  return next;
                });
              }, i * 250);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (flowRef.current) {
      flowObserver.observe(flowRef.current);
    }
    if (valuePropsRef.current) {
      valuePropsObserver.observe(valuePropsRef.current);
    }

    return () => {
      flowObserver.disconnect();
      valuePropsObserver.disconnect();
    };
  }, []);

  return (
    <section id="insurance" className="py-28 sm:py-36 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[200px]" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-200 bg-brand-50 mb-6">
            <span className="text-xs font-bold tracking-widest text-brand uppercase">
              {t(tr.badge, locale)}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            <span className="text-brand">Active Insurance</span>{t(tr.title, locale)}
          </h2>
          <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
            {t(tr.subtitle, locale)}
          </p>
        </div>

        {/* Comparison cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {/* Traditional */}
          <div className="relative p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="absolute top-6 right-6">
              <span className="px-3 py-1 text-[10px] font-bold tracking-widest text-slate-400 bg-slate-100 rounded-full uppercase">
                {t(tr.traditionalLabel, locale)}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-400 mb-8">{t(tr.traditionalTitle, locale)}</h3>
            <ul className="space-y-5">
              {tr.traditionalItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
                    </svg>
                  </div>
                  <span className="text-slate-500">{t(item, locale)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Active Insurance */}
          <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-brand to-brand-dark shadow-2xl shadow-brand/20 overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }} />
            <div className="absolute top-6 right-6 z-10">
              <span className="px-3 py-1 text-[10px] font-bold tracking-widest text-white/80 bg-white/15 rounded-full uppercase backdrop-blur-sm">
                Fearlock
              </span>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-8">Active Insurance</h3>
              <ul className="space-y-5">
                {tr.activeInsuranceItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/90 font-medium">{t(item, locale)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Flow diagram - with animation */}
        <div className="max-w-4xl mx-auto" ref={flowRef}>
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
            <h3 className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-12">
              {t(tr.flowTitle, locale)}
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {tr.flowSteps.map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row items-center gap-6 md:gap-8 flex-1">
                  <div className={`text-center flex-1 transition-all duration-700 ${
                    visibleFlowSteps[i]
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-8 scale-90"
                  }`}>
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-brand-50 flex items-center justify-center mb-4 transition-all duration-500 ${
                      visibleFlowSteps[i] ? "animate-border-pulse border-2 border-brand/20" : ""
                    }`}>
                      {flowIcons[i]}
                    </div>
                    <p className="text-base font-bold text-slate-900">{t(item.label, locale)}</p>
                    <p className="text-xs text-slate-500 mt-2 whitespace-pre-line">{t(item.sub, locale)}</p>
                  </div>
                  {i < 2 && (
                    <>
                      <svg className={`w-6 h-6 text-brand/40 flex-shrink-0 hidden md:block transition-all duration-500 ${
                        visibleFlowSteps[i] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                      <svg className={`w-6 h-6 text-brand/40 flex-shrink-0 md:hidden rotate-90 transition-all duration-500 ${
                        visibleFlowSteps[i] ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Value props - with animation */}
        <div ref={valuePropsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
          {tr.valueProps.map((item, index) => (
            <div
              key={index}
              className={`text-center p-8 rounded-2xl bg-white border border-slate-200 hover:border-brand/20 hover:shadow-lg hover:shadow-brand/5 transition-all duration-700 ${
                visibleValueProps[index]
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-95"
              }`}
            >
              <div className={`w-12 h-12 mx-auto rounded-xl bg-brand-50 flex items-center justify-center mb-4 transition-all duration-500 ${
                visibleValueProps[index] ? "animate-border-pulse border-2 border-brand/20" : ""
              }`}>
                {valuePropIcons[index]}
              </div>
              <h4 className="text-base font-bold text-slate-900">{t(item.title, locale)}</h4>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">{t(item.description, locale)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
