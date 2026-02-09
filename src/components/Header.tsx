"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";

function FearlockLogo({ color = "white", className = "" }: { color?: string; className?: string }) {
  return (
    <svg
      viewBox="30 270 955 630"
      fill={color}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke="none"
        d="M795.059753,282.790131 C825.067261,282.135040 854.425415,283.691437 883.762329,287.351044 C909.676331,290.583588 935.771179,292.364990 961.784119,294.808533 C965.709961,295.177307 969.624878,295.662506 973.639832,296.104309 C973.510803,299.122406 971.335449,300.306519 969.577759,301.683685 C925.258484,336.407379 891.677795,379.829895 865.942566,429.599640 C860.992310,439.172943 861.074585,439.257690 850.616516,438.288452 C822.916321,435.721252 795.181702,433.941956 767.340393,434.319855 C741.099060,434.675964 715.305054,438.320465 689.718262,444.075409 C651.727844,452.620178 616.097961,466.485016 585.120850,490.521362 C568.078735,503.745026 555.605042,520.915100 544.517212,539.426880 C507.540222,601.161865 469.985870,662.551086 432.666473,724.081055 C431.564606,725.897705 430.615021,727.806763 429.286469,730.235779 C435.318787,732.364319 441.168610,732.173279 446.825165,732.586121 C467.574097,734.100403 488.262085,736.202576 508.947662,738.370239 C516.890930,739.202637 524.864075,739.748535 532.809753,740.560364 C535.785706,740.864441 536.895813,739.040405 538.031189,736.872559 C554.186340,706.026917 571.449402,675.789062 588.278198,645.312683 C597.619385,628.396057 606.862122,611.425049 616.169556,594.489746 C630.697144,568.056396 653.297791,550.879333 680.322571,538.919678 C706.176086,527.478333 733.544556,522.474731 761.506897,519.479492 C782.139282,517.269470 802.759155,517.901733 823.395935,517.670593 C829.176025,517.605835 829.450500,517.975586 828.313721,523.679626 C823.007935,550.302307 819.341309,577.148987 817.351868,604.217957 C817.111633,607.486267 815.323364,607.976624 812.718872,607.972351 C798.553467,607.948914 784.399719,608.334534 770.268433,609.350037 C742.735168,611.328613 715.723633,615.688782 690.343506,627.248596 C671.761047,635.712158 657.079102,648.610718 646.739319,666.279175 C621.243896,709.845581 595.777649,753.429077 570.340393,797.029541 C553.550903,825.807373 536.833069,854.626953 520.077515,883.424500 C519.499084,884.418640 519.031067,885.543762 516.925293,886.061951 C406.625458,768.709534 299.729980,647.690186 189.615875,529.515442 C195.877686,544.145325 206.129089,556.587097 212.984741,572.202820 C155.832901,577.735962 99.705650,585.494385 42.970688,591.759644 C43.751820,588.544434 45.658905,587.349731 47.208763,585.938965 C91.442932,545.674927 135.702118,505.438324 179.947479,465.186554 C189.188568,456.779572 198.410522,448.351257 207.593552,439.881042 C209.202255,438.397217 210.563614,437.735413 212.880768,438.719360 C231.885803,446.789490 250.922394,454.787567 270.011322,462.657318 C317.896362,482.398712 365.799377,502.096832 413.745911,521.688171 C417.570038,523.250793 417.689148,525.166504 416.413849,528.592346 C404.273224,561.205627 392.362091,593.904724 379.336548,626.182556 C378.322998,628.694214 376.982361,631.204163 377.077393,634.352539 C379.562897,633.431519 380.248505,631.404053 381.250641,629.800049 C401.727325,597.024597 422.078217,564.170410 442.592865,531.418823 C470.358002,487.091858 497.668945,442.464783 526.286194,398.693054 C543.429932,372.470642 567.852112,353.442474 594.679199,337.555420 C637.405029,312.253052 683.887207,297.816254 732.565369,289.584656 C753.112488,286.110046 773.788696,284.036926 795.059753,282.790131z"
      />
    </svg>
  );
}

export default function Header() {
  const { locale, setLocale } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const tr = translations.header;

  const navLinks = [
    { label: t(tr.nav.problem, locale), href: "#problem" },
    { label: t(tr.nav.solution, locale), href: "#solution" },
    { label: t(tr.nav.features, locale), href: "#features" },
    { label: t(tr.nav.insurance, locale), href: "#insurance" },
    { label: t(tr.nav.benefits, locale), href: "#benefits" },
    { label: t(tr.nav.useCases, locale), href: "#use-cases" },
  ];

  const languages = [
    { code: "ja" as const, label: "日本語", flag: "🇯🇵" },
    { code: "en" as const, label: "English", flag: "🇺🇸" },
  ];

  const currentLang = languages.find((l) => l.code === locale) || languages[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-2xl shadow-sm border-b border-slate-200/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group" aria-label="Fearlock">
            <FearlockLogo
              color={scrolled ? "#0f172a" : "#ffffff"}
              className="w-9 h-6 sm:w-10 sm:h-7 transition-colors duration-300"
            />
            <span className={`text-xl font-extrabold tracking-tight transition-colors duration-300 ${scrolled ? "text-slate-900" : "text-white"}`}>
              Fearlock
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  scrolled
                    ? "text-slate-600 hover:text-brand hover:bg-brand-50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA + Language Selector */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  scrolled
                    ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
                aria-label="Select language"
                aria-expanded={langOpen}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span>{currentLang.flag} {currentLang.label}</span>
                <svg className={`w-3.5 h-3.5 transition-transform ${langOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown */}
              <div
                className={`absolute right-0 top-full mt-2 w-40 bg-white/90 backdrop-blur-xl rounded-xl border border-slate-200/70 shadow-xl shadow-slate-200/50 overflow-hidden transition-all duration-200 ${
                  langOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLocale(lang.code);
                      setLangOpen(false);
                    }}
                    className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium transition-colors ${
                      locale === lang.code
                        ? "bg-brand-50 text-brand"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                    {locale === lang.code && (
                      <svg className="w-4 h-4 ml-auto text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="/demo"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-brand hover:bg-brand-dark rounded-full transition-all duration-200 shadow-lg shadow-brand/25 hover:shadow-brand/40 hover:-translate-y-0.5"
            >
              {t(tr.cta, locale)}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-slate-600 hover:bg-slate-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-xl">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-brand hover:bg-brand-50 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-100 space-y-2">
              {/* Mobile Language Selector */}
              <div className="flex gap-2 px-4 py-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLocale(lang.code);
                    }}
                    className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium rounded-xl transition-all ${
                      locale === lang.code
                        ? "bg-brand text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
              <a
                href="/demo"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-base font-semibold text-white bg-brand rounded-xl text-center"
              >
                {t(tr.cta, locale)}
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
