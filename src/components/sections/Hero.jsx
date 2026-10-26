"use client";

import { ArrowRight, Check, Telegram } from "../ui/Icons";
import { GlassCard, SoftGlow } from "../ui/Glow";

const pills = [
  { href: "#solutions-experts", label: "Экспертам" },
  { href: "#solutions-horeca", label: "Ресторанам" },
  { href: "#solutions-beauty", label: "Бьюти и мастерам" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative pt-28 sm:pt-32">
      <SoftGlow />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 text-center sm:px-6">
        <div className="fade-in flex flex-col items-center gap-6">
          <div className="flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.4em] text-white/60">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[#ff3b5c]" />
            Digital Boutique
          </div>
          <div className="flex flex-col items-center gap-4">
            <h1 className="font-display text-balance text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Ваш <span className="text-white/70">цифровой</span> статус
            </h1>
            <p className="max-w-2xl text-balance text-lg text-white/70 sm:text-xl">
              PWA-визитки, Smart QR-меню и системы онлайн-записи под ключ. Создаём один раз — работают на вас всегда.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {pills.map((pill) => (
              <a
                key={pill.href}
                href={pill.href}
                className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 transition-all hover:border-white/40 hover:text-white"
              >
                {pill.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:-translate-y-0.5"
            >
              Рассчитать стоимость
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://t.me/elenlime"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm text-white/80 transition-all hover:border-white/40 hover:text-white"
            >
              <Telegram className="w-4 h-4" />
              Обсудить в Telegram
            </a>
          </div>
        </div>
        <div className="fade-in-delayed relative w-full">
          <GlassCard className="mx-auto max-w-5xl">
            <div className="grid gap-6 p-6 sm:grid-cols-2 sm:p-10 lg:grid-cols-4">
              {[
                { title: "Разовый платёж", text: "Без подписок и скрытых комиссий" },
                { title: "Работает без интернета", text: "QR-код открывается оффлайн" },
                { title: "Заказы в Telegram", text: "Мгновенные уведомления без сложной админки" },
                { title: "Установка как приложение", text: "PWA на рабочем столе телефона" },
              ].map((item) => (
                <div key={item.title} className="flex flex-col gap-2 text-left">
                  <div className="flex items-center gap-2 text-white">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className="font-medium">{item.title}</span>
                  </div>
                  <p className="text-sm text-white/60">{item.text}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
