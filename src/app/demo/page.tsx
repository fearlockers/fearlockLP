"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";

export default function DemoPage() {
  const { locale, setLocale } = useLanguage();
  const tr = translations.demo;

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    role: "",
    employees: "",
    message: "",
    privacy: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const roleOptions = locale === "en" ? tr.form.roleOptions.en : tr.form.roleOptions.ja;
  const employeesOptions = locale === "en" ? tr.form.employeesOptions.en : tr.form.employeesOptions.ja;

  // Success state
  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          {/* Success animation */}
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
            <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold text-white mb-4">
            {t(tr.successTitle, locale)}
          </h1>
          <p className="text-lg text-slate-400 mb-10">
            {t(tr.successMessage, locale)}
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-brand hover:bg-brand-dark rounded-full transition-all duration-300 shadow-xl shadow-brand/25 hover:shadow-brand/40"
          >
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            {t(tr.successBack, locale)}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand/5 rounded-full blur-[200px]" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand/3 rounded-full blur-[150px]" aria-hidden="true" />

      {/* Header bar */}
      <header className="relative z-20 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <svg className="w-4 h-4 text-slate-400 group-hover:text-brand transition-colors rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span className="text-xl font-extrabold tracking-tight text-white">
              Fearlock
            </span>
          </Link>
          {/* Language switcher */}
          <div className="flex items-center gap-2">
            {[
              { code: "ja" as const, label: "JP", flag: "🇯🇵" },
              { code: "en" as const, label: "EN", flag: "🇺🇸" },
            ].map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLocale(lang.code)}
                className={`flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
                  locale === lang.code
                    ? "bg-white/15 text-white"
                    : "text-slate-400 hover:text-white hover:bg-white/10"
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div className="pt-8 lg:pt-16 lg:sticky lg:top-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/30 bg-brand/10 mb-6">
              <span className="text-xs font-bold tracking-widest text-brand uppercase">
                DEMO REQUEST
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              {t(tr.title, locale)}
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed whitespace-pre-line mb-12">
              {t(tr.subtitle, locale)}
            </p>

            {/* Benefits list */}
            <div className="space-y-1 mb-8">
              <h3 className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-4">
                {t(tr.benefits.title, locale)}
              </h3>
              {tr.benefits.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3 py-3">
                  <div className="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-300 text-sm leading-relaxed">{t(item, locale)}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500">{t(tr.note, locale)}</p>
          </div>

          {/* Right: Form */}
          <div className="pt-8 lg:pt-16">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl shadow-black/20"
            >
              <div className="space-y-5">
                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    {t(tr.form.company, locale)} <span className="text-brand">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={t(tr.form.companyPlaceholder, locale)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all text-sm"
                  />
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    {t(tr.form.name, locale)} <span className="text-brand">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t(tr.form.namePlaceholder, locale)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all text-sm"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    {t(tr.form.email, locale)} <span className="text-brand">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t(tr.form.emailPlaceholder, locale)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all text-sm"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    {t(tr.form.phone, locale)}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t(tr.form.phonePlaceholder, locale)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all text-sm"
                  />
                </div>

                {/* Role + Employees row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Role */}
                  <div>
                    <label htmlFor="role" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      {t(tr.form.role, locale)} <span className="text-brand">*</span>
                    </label>
                    <select
                      id="role"
                      name="role"
                      required
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all text-sm appearance-none"
                    >
                      <option value="" disabled>{t(tr.form.rolePlaceholder, locale)}</option>
                      {roleOptions.map((opt: string) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Employees */}
                  <div>
                    <label htmlFor="employees" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      {t(tr.form.employees, locale)} <span className="text-brand">*</span>
                    </label>
                    <select
                      id="employees"
                      name="employees"
                      required
                      value={formData.employees}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all text-sm appearance-none"
                    >
                      <option value="" disabled>{t(tr.form.employeesPlaceholder, locale)}</option>
                      {employeesOptions.map((opt: string) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    {t(tr.form.message, locale)}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t(tr.form.messagePlaceholder, locale)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all text-sm resize-none"
                  />
                </div>

                {/* Privacy checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    checked={formData.privacy}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded border-slate-300 text-brand focus:ring-brand/30 accent-brand"
                  />
                  <label htmlFor="privacy" className="text-sm text-slate-600">
                    {t(tr.form.privacy, locale)} <span className="text-brand">*</span>
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-brand hover:bg-brand-dark rounded-full transition-all duration-300 shadow-xl shadow-brand/25 hover:shadow-brand/40 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      {t(tr.form.submitting, locale)}
                    </>
                  ) : (
                    <>
                      {t(tr.form.submit, locale)}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
