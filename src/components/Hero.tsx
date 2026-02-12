"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";

export default function Hero() {
  const { locale } = useLanguage();
  const tr = translations.hero;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Background effects */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Mesh grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Red glow */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand/15 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-orange-500/8 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "3s" }} />
        {/* Floating particles */}
        <div className="absolute top-[15%] left-[10%] w-2 h-2 bg-brand/40 rounded-full animate-float" />
        <div className="absolute top-[25%] right-[15%] w-1.5 h-1.5 bg-rose-400/30 rounded-full animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-[30%] left-[20%] w-1 h-1 bg-red-300/40 rounded-full animate-float" style={{ animationDelay: "4s" }} />
        <div className="absolute top-[60%] right-[25%] w-1.5 h-1.5 bg-brand/30 rounded-full animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/20 bg-brand/10 backdrop-blur-sm mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
              </span>
              <span className="text-sm font-semibold text-brand-light tracking-wide">
                {t(tr.badge, locale)}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] font-extrabold text-white leading-[1.2] tracking-tight">
              <span className="whitespace-nowrap">{t(tr.headline1, locale)}</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-rose-400 to-orange-400 whitespace-nowrap">
                {t(tr.headlineHighlight, locale)}
              </span>
              {t(tr.headlineConnector, locale)}
              <br />
              <span className="text-slate-300 text-[1.6rem] sm:text-[2.2rem] lg:text-[2.6rem]">
                {t(tr.headline2a, locale)}
              </span>
              <br />
              <span className="text-slate-300 text-[1.6rem] sm:text-[2.2rem] lg:text-[2.6rem]">
                {t(tr.headline2b, locale)}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-8 text-lg sm:text-xl text-slate-400 leading-relaxed max-w-lg whitespace-pre-line">
              {t(tr.subheadline, locale)}
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="/demo"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-brand hover:bg-brand-dark rounded-full transition-all duration-300 shadow-xl shadow-brand/25 hover:shadow-brand/40 hover:-translate-y-0.5"
              >
                {t(tr.ctaPrimary, locale)}
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/demo"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white/90 hover:text-white border border-white/20 hover:border-white/40 rounded-full transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
              >
                {t(tr.ctaSecondary, locale)}
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap gap-6 text-slate-500 text-sm">
              {[tr.trust1, tr.trust2, tr.trust3].map((trustItem, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>{t(trustItem, locale)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glow behind */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand/20 to-rose-500/10 rounded-3xl blur-3xl" />
              {/* Hero visual: security score card */}
              <div className="relative z-10 flex items-center justify-center">
                <div className="relative">
                  <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-rose-500/10 rounded-3xl animate-float" />
                    <div className="absolute inset-4 border-2 border-brand/20 rounded-2xl" />
                    <div className="absolute inset-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-xl border border-white/5 p-6 flex flex-col justify-center items-center gap-4">
                      <svg className="w-16 h-16 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">98.5</div>
                        <div className="text-xs text-slate-400 mt-1">Security Score</div>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-1.5">
                        <div className="bg-gradient-to-r from-brand to-rose-400 h-1.5 rounded-full" style={{ width: "98.5%" }} />
                      </div>
                    </div>
                  </div>
                  {/* Floating cards */}
                  <div className="absolute -top-4 -right-4 bg-slate-800/90 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 shadow-2xl animate-float" style={{ animationDelay: "1s" }}>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-xs font-medium text-slate-300">{t(tr.riskDetected, locale)}</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-slate-800/90 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 shadow-2xl animate-float" style={{ animationDelay: "3s" }}>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-brand" />
                      <span className="text-xs font-medium text-slate-300">{t(tr.insuranceActive, locale)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
