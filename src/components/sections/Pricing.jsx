"use client";

import { useState } from "react";
import { GlassCard } from "../ui/Glow";
import { ArrowRight, Check, Telegram } from "../ui/Icons";

const tabs = [
  { id: "pwa", label: "PWA-визитки" },
  { id: "horeca", label: "Рестораны (HoReCa)" },
  { id: "beauty", label: "Бьюти и мастера" },
  { id: "custom", label: "Индивидуальный проект" },
];

const pricing = {
  pwa: [
    {
      name: "Classic",
      price: "$40",
      subtitle: "Базовый. Установка за 1–2 дня",
      features: [
        "Индивидуальный стиль (7 тем)",
        "Офлайн QR-код",
        "Сохранение контакта в 1 клик",
        "Установка как PWA",
        "Разовый платёж",
      ],
      cta: { label: "Обсудить Classic", href: "https://t.me/elenlime?text=Хочу%20обсудить%20тариф%20Classic%20($40)" },
    },
    {
      name: "Infinity",
      price: "$80",
      subtitle: "3D-визитка. Заменяет сайт",
      badge: "Бестселлер",
      features: [
        "3D-разворот с эффектом переворота",
        "Мини-лендинг на обороте",
        "Прайс, портфолио, отзывы",
        "Прямые кнопки связи",
        "Работает без интернета",
      ],
      cta: { label: "Обсудить Infinity", href: "https://t.me/elenlime?text=Хочу%20обсудить%20тариф%20Infinity%20($80)" },
      highlight: true,
    },
    {
      name: "Twin ID",
      price: "$130",
      subtitle: "Два профиля в одной визитке",
      badge: "Эксклюзив",
      features: [
        "Деловой и личный профили",
        "Переключение по времени суток",
        "Секретный жест + PIN",
        "Максимальная приватность",
        "Пожизненная автономия",
      ],
      cta: { label: "Обсудить Twin ID", href: "https://t.me/elenlime?text=Хочу%20обсудить%20тариф%20Twin%20ID%20($130)" },
    },
  ],
  horeca: [
    {
      name: "Классика",
      price: "$220",
      subtitle: "Витрина меню + вызов официанта",
      features: [
        "Многоязычное меню",
        "Вызов официанта / запрос счёта",
        "Стоп-лист и смена цен с телефона",
        "Уведомления в Telegram",
        "Без комиссий",
      ],
      cta: { label: "Обсудить Классику", href: "https://t.me/elenlime?text=Хочу%20обсудить%20QR-меню%20Классика%20($220)" },
    },
    {
      name: "Флагман",
      price: "$350",
      subtitle: "Заказ с корзиной + допродажи",
      badge: "Популярно",
      features: [
        "Корзина и оформление заказа",
        "Умные рекомендации",
        "Определение столика по QR",
        "Заказ в Telegram персоналу",
        "Рост среднего чека",
      ],
      cta: { label: "Обсудить Флагман", href: "https://t.me/elenlime?text=Хочу%20обсудить%20QR-меню%20Флагман%20($350)" },
      highlight: true,
    },
  ],
  beauty: [
    {
      name: "Онлайн-запись",
      price: "$50",
      subtitle: "Календарь + Telegram-ассистент",
      features: [
        "Свободные слоты 24/7",
        "Управление графиком и отпуском",
        "Уведомления и сводка на день",
        "Прямая связь с клиентом в WhatsApp",
        "Без абонплаты агрегаторам",
      ],
      cta: { label: "Обсудить онлайн-запись", href: "https://t.me/elenlime?text=Хочу%20обсудить%20онлайн-запись%20для%20бьюти%20($50)" },
    },
  ],
  custom: [
    {
      name: "Индивидуальный проект",
      price: "от $600",
      subtitle: "Под уникальную задачу",
      features: [
        "PWA-приложения и сервисы",
        "Telegram-боты с автоматизацией",
        "Эксклюзивный имиджевый сайт",
        "Чистый авторский код",
        "Передача в полную собственность",
      ],
      cta: { label: "Обсудить проект", href: "https://t.me/elenlime?text=Хочу%20обсудить%20индивидуальный%20проект%20(от%20$600)" },
      highlight: true,
    },
  ],
};

export default function Pricing() {
  const [active, setActive] = useState("pwa");
  const items = pricing[active] || [];

  return (
    <section id="pricing" className="relative mt-24 sm:mt-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6">
        <div className="flex flex-col gap-4 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-white/50">Тарифы</span>
          <h2 className="font-display text-balance text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            Разовый платёж <span className="text-white/70">под ключ</span>
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-lg text-white/70">
            Без абонплаты за платформу. Все заявки сразу в Telegram.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`rounded-full px-4 py-2 text-sm transition-all ${
                active === tab.id ? "bg-white text-black" : "border border-white/15 text-white/70 hover:border-white/40 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="flex justify-center">
          <div className={`grid w-full max-w-5xl gap-6 ${items.length === 1 ? "md:grid-cols-1" : items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
            {items.map((item) => (
              <GlassCard key={item.name} className={item.highlight ? "ring-1 ring-[#ff3b5c]/60" : ""}>
                <div className="relative flex h-full flex-col gap-6 p-6 sm:p-8">
                  {item.badge && (
                    <span className="absolute right-6 top-6 rounded-full border border-[#ff3b5c]/60 px-3 py-1 text-xs text-[#ffb3bf]">
                      {item.badge}
                    </span>
                  )}
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">{item.name}</h3>
                    <p className="text-white/60">{item.subtitle}</p>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl tracking-tight sm:text-5xl">{item.price}</span>
                    {item.price.startsWith("$") && <span className="text-sm text-white/40">разово</span>}
                  </div>
                  <ul className="flex flex-col gap-3">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-white/80">
                        <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
                          <Check className="w-3 h-3" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4">
                    <a
                      href={item.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all ${
                        item.highlight ? "bg-white text-black hover:-translate-y-0.5" : "border border-white/20 text-white/90 hover:border-white/40 hover:text-white"
                      }`}
                    >
                      <Telegram className="w-4 h-4" />
                      {item.cta.label}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
        <GlassCard>
          <div className="flex flex-col items-center justify-between gap-4 p-6 text-center sm:flex-row sm:text-left sm:p-8">
            <div className="flex flex-col gap-2">
              <p className="font-display text-xl">Кожаный NFC-брелок из натуральной кожи Crazy Horse</p>
              <p className="text-sm text-white/60">Ручная работа. Статусный аксессуар к визитке. Одно касание — и контакты уже на экране.</p>
            </div>
            <div className="flex flex-col items-center gap-3 sm:items-end">
              <span className="font-display text-3xl">$40</span>
              <a
                href="https://t.me/elenlime?text=Хочу%20заказать%20кожаный%20NFC-брелок%20Crazy%20Horse%20($40)"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm text-white/80 transition-all hover:border-white/40 hover:text-white"
              >
                Заказать брелок
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
