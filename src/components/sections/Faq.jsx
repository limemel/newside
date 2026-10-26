"use client";

import { useState } from "react";
import { GlassCard } from "../ui/Glow";

const faqs = [
  {
    question: "Нужно ли платить ежемесячную абонплату?",
    answer: "Нет. Оплата разовая под ключ. Вы получаете готовый автономный продукт без скрытых подписок.",
  },
  {
    question: "Сколько времени занимает разработка?",
    answer: "В зависимости от решения: цифровая визитка — 1–3 дня, QR-меню — 2–4 дня, онлайн-запись — 1–2 дня.",
  },
  {
    question: "Что нужно для старта?",
    answer: "Короткий бриф в Telegram: название/бренд, контакты, желаемый вариант, примеры, которые нравятся (по желанию).",
  },
  {
    question: "Смогу ли я менять цены и меню сам?",
    answer: "Да. Всё управляется с вашего телефона за 1–2 минуты. Без программиста.",
  },
  {
    question: "Кому принадлежит продукт?",
    answer: "Вам. Вы получаете собственный цифровой актив, работающий по вашей ссылке.",
  },
  {
    question: "Можно ли добавить индивидуальные правки?",
    answer: "Да. Обсудим точный объём в начале. В большинстве случаев достаточно выбранного тарифа.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative mt-24 sm:mt-32">
      <div className="mx-auto flex max-w-4xl flex-col gap-10 px-4 sm:px-6">
        <div className="flex flex-col gap-4 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-white/50">FAQ</span>
          <h2 className="font-display text-balance text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            Частые вопросы
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <GlassCard key={faq.question}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left sm:p-8"
                >
                  <span className="font-display text-lg sm:text-xl">{faq.question}</span>
                  <span className={`relative h-4 w-4 transition-transform ${isOpen ? "rotate-45" : ""}`}>
                    <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 bg-current" />
                    <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 rotate-90 bg-current" />
                  </span>
                </button>
                <div className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-white/70 sm:px-8 sm:pb-8">{faq.answer}</p>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
