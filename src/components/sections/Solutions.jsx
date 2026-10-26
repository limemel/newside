"use client";

import { ArrowRight, Check } from "../ui/Icons";
import { GlassCard } from "../ui/Glow";

const solutions = [
  {
    id: "solutions-experts",
    tag: "Экспертам",
    title: "Цифровая визитка нового поколения",
    description:
      "Визитка, которая заменяет пачку бумажных карточек. Устанавливается как приложение, открывается по QR и сохраняет контакты в 1 клик.",
    points: [
      "Установка на экран телефона (PWA)",
      "Офлайн-доступ по QR-коду",
      "Сохранение в телефонную книгу",
      "Прайс-лист, портфолио, прямые ссылки",
    ],
    cta: { label: "Посмотреть демо Classic/Infinity", href: "https://t.me/elenlime?text=Хочу%20обсудить%20цифровую%20визитку" },
    accent: "from-white/10 to-transparent",
  },
  {
    id: "solutions-horeca",
    tag: "Ресторанам и кафе",
    title: "Smart QR-меню с приёмом заказов",
    description:
      "Меняйте цены и стоп-лист за минуту с телефона. Вызов официанта, счёт и заказы сразу прилетают в Telegram. Без комиссий агрегаторов.",
    points: [
      "Классика или Флагман с корзиной",
      "Умные рекомендации и рост среднего чека",
      "Многоязычное меню",
      "Управление с телефона",
    ],
    cta: { label: "Обсудить QR-меню", href: "https://t.me/elenlime?text=Хочу%20обсудить%20Smart%20QR-меню" },
    accent: "from-[#ff3b5c]/18 to-transparent",
  },
  {
    id: "solutions-beauty",
    tag: "Бьюти и мастерам",
    title: "Онлайн-запись без абонплаты агрегаторам",
    description:
      "Клиенты выбирают свободное время и записываются сами. Уведомления, напоминания и сводка на день в Telegram-боте.",
    points: [
      "Календарь свободных слотов",
      "Управление графиком и отпуском",
      "Уведомления в Telegram",
      "Сводка на утро",
    ],
    cta: { label: "Обсудить онлайн-запись", href: "https://t.me/elenlime?text=Хочу%20обсудить%20онлайн-запись%20для%20бьюти" },
    accent: "from-white/10 to-transparent",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative mt-24 sm:mt-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6">
        <div className="flex flex-col gap-4 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-white/50">Решения под нишу</span>
          <h2 className="font-display text-balance text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            Выберите решение под вашу задачу
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-lg text-white/70">
            Фокус на результате: больше контактов, меньше переписок, рост выручки.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {solutions.map((solution) => (
            <GlassCard key={solution.id} className="flex h-full flex-col">
              <div className={`relative flex h-full flex-col gap-6 bg-gradient-to-b ${solution.accent} p-6 sm:p-8`}>
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">{solution.tag}</span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">{solution.title}</h3>
                  <p className="text-white/70">{solution.description}</p>
                </div>
                <ul className="flex flex-col gap-3">
                  {solution.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-white/80">
                      <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
                        <Check className="w-3 h-3" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4">
                  <a
                    href={solution.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {solution.cta.label}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
