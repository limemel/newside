"use client";

import { GlassCard } from "../ui/Glow";
import { Check } from "../ui/Icons";

const principles = [
  { title: "Чистая автономия", text: "Без ежемесячной аренды. Полный контроль над вашим решением." },
  { title: "Максимальная скорость", text: "Лёгкий PWA, быстрая загрузка, установка как приложение." },
  { title: "Продающая простота", text: "Максимум пользы, минимум кликов. Понятно любой аудитории." },
];

export default function About() {
  return (
    <section id="about" className="relative mt-24 sm:mt-32">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="flex flex-col gap-6">
          <span className="text-xs uppercase tracking-[0.4em] text-white/50">Обо мне</span>
          <h2 className="font-display text-balance text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            Елена Сотникова <span className="text-white/70">— IT-Архитектор</span>
          </h2>
          <p className="max-w-xl text-lg text-white/70">
            Создаю автономные премиальные цифровые решения, которые подчеркивают статус и приносят результат. Меньше рутины — больше заявок и контактов.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
            <span className="rounded-full border border-white/15 px-3 py-1">Разовый запуск</span>
            <span className="rounded-full border border-white/15 px-3 py-1">Без абонплаты</span>
            <span className="rounded-full border border-white/15 px-3 py-1">Заявки в Telegram</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {principles.map((principle) => (
              <GlassCard key={principle.title}>
                <div className="flex h-full flex-col gap-3 p-5">
                  <div className="flex items-center gap-2 text-white">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className="font-medium">{principle.title}</span>
                  </div>
                  <p className="text-sm text-white/60">{principle.text}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
        <div className="mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
          <GlassCard className="relative overflow-hidden">
            <div className="relative aspect-[4/5] w-full sm:aspect-[3/4] lg:aspect-[4/5]">
              <img
                src="/bg-creator.jpg"
                alt="Елена Сотникова — IT-Архитектор AppSeaPro"
                className="h-full w-full object-cover object-[50%_12%] opacity-90"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050506] via-[#050506]/40 to-transparent p-6">
                <p className="font-display text-xl">Премиум без излишеств</p>
                <p className="text-sm text-white/60">Статусные решения для бизнеса, который ценит детали</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
