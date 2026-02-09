"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";

export default function CTA() {
  const { locale } = useLanguage();
  const tr = translations.cta;

  return (
    <section id="contact" className="py-28 sm:py-36 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2rem] overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          {/* Glow effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-[100px]" />

          <div className="relative z-10 px-8 py-20 sm:px-16 sm:py-24 text-center">
            {/* Shield icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-brand/15 border border-brand/20 mb-10 backdrop-blur-sm">
              <svg className="w-10 h-10 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {locale === "ja" ? (
                <>
                  {t(tr.title1, locale)}
                  <br />
                  「<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-rose-400">{t(tr.titleHighlight1, locale)}</span>」{t(tr.titleConnector, locale)}
                  「<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">{t(tr.titleHighlight2, locale)}</span>」に
                  <br />
                  {t(tr.titleEnd, locale)}
                </>
              ) : (
                <>
                  {t(tr.title1, locale)}
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-rose-400">{t(tr.titleHighlight1, locale)}</span>
                  {" "}{t(tr.titleConnector, locale)}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">{t(tr.titleHighlight2, locale)}</span>
                </>
              )}
            </h2>

            <p className="mt-8 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
              {t(tr.subtitle, locale)}
            </p>

            {/* Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/demo"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4.5 text-base font-semibold text-white bg-brand hover:bg-brand-dark rounded-full transition-all duration-300 shadow-xl shadow-brand/30 hover:shadow-brand/50 hover:-translate-y-0.5"
              >
                {t(tr.ctaPrimary, locale)}
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/demo"
                className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4.5 text-base font-semibold text-white/90 hover:text-white border border-white/20 hover:border-white/40 rounded-full transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
              >
                {t(tr.ctaSecondary, locale)}
              </a>
            </div>

            <p className="mt-8 text-sm text-slate-500">
              {t(tr.note, locale)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
