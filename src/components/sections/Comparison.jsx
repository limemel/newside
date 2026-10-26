"use client";

import { GlassCard } from "../ui/Glow";

export default function Comparison() {
  return (
    <section className="relative mt-24 sm:mt-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6">
        <div className="flex flex-col gap-4 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-white/50">Сравнение</span>
          <h2 className="font-display text-balance text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            Почему выбирают <span className="text-white/70">AppSeaPro</span>
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-lg text-white/70">
            Разница между шаблонным сайтом в аренду и собственным цифровым активом
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <GlassCard>
            <div className="flex h-full flex-col gap-6 p-6 sm:p-8">
              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-[0.3em] text-white/40">Конструкторы сайтов</span>
                <h3 className="font-display text-xl tracking-tight">Конструкторы</h3>
              </div>
              <ul className="flex flex-col gap-3 text-sm leading-relaxed text-white/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-white/40">✕</span>
                  <span>Пожизненная ежемесячная абонентская плата за аренду платформы</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-white/40">✕</span>
                  <span>Шаблонный внешний вид, узнаваемый с первого взгляда</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-white/40">✕</span>
                  <span>Медленная загрузка и тяжелый чужой код платформы</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-white/40">✕</span>
                  <span>Риск блокировки или сбоя стороннего сервиса</span>
                </li>
              </ul>
              <div className="mt-auto border-t border-white/10 pt-4">
                <p className="text-sm text-white/60">Итог: постоянная аренда чужого сервиса</p>
              </div>
            </div>
          </GlassCard>
          <GlassCard>
            <div className="flex h-full flex-col gap-6 p-6 sm:p-8">
              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-[0.3em] text-white/40">Классические студии</span>
                <h3 className="font-display text-xl tracking-tight">Агентства</h3>
              </div>
              <ul className="flex flex-col gap-3 text-sm leading-relaxed text-white/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-white/40">✕</span>
                  <span>Бюджеты от $2,500 – $5,000 и долгие согласования</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-white/40">✕</span>
                  <span>Сроки разработки от 1,5 до 3 месяцев</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-white/40">✕</span>
                  <span>Громоздкие CMS, где без программиста не сменить цену</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-white/40">✕</span>
                  <span>Платная поддержка за каждое мелкое изменение</span>
                </li>
              </ul>
              <div className="mt-auto border-t border-white/10 pt-4">
                <p className="text-sm text-white/60">Итог: долго, дорого и сложная зависимость</p>
              </div>
            </div>
          </GlassCard>
          <GlassCard>
            <div className="relative flex h-full flex-col overflow-hidden gap-6 p-6 sm:p-8">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ff3b5c]/60 to-transparent" />
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ff3b5c] shadow-[0_0_40px_rgba(255,59,92,0.8)]" />
                  <span className="text-xs uppercase tracking-[0.3em] text-white">Премиум-выбор</span>
                </div>
                <h3 className="font-display text-xl tracking-tight">AppSeaPro</h3>
                <span className="text-xs uppercase tracking-[0.3em] text-white/40">Авторская разработка</span>
              </div>
              <ul className="flex flex-col gap-3 text-sm leading-relaxed text-white/90">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#ff3b5c]">✓</span>
                  <span>Разовый платеж под ключ: никакой абонентской платы за использование платформы</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#ff3b5c]">✓</span>
                  <span>Цифровой продукт: PWA-визитка на экране + кожаный брелок как штучный апгрейд</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#ff3b5c]">✓</span>
                  <span>Заказы сразу в Telegram: никаких сложных админок, а цены и расписание меняются за минуту прямо с телефона без программистов</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#ff3b5c]">✓</span>
                  <span>Быстрый запуск за 2–3 дня: готовый автономный продукт высшего качества</span>
                </li>
              </ul>
              <div className="mt-auto border-t border-white/10 pt-4">
                <p className="text-sm text-white">Итог: ваш независимый цифровой актив</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
