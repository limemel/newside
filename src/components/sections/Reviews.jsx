"use client";

import { useRef } from "react";
import { GlassCard } from "../ui/Glow";
import { ArrowRight } from "../ui/Icons";

const reviews = [
  {
    name: "Виктория",
    role: "Основатель бренда, ментор",
    text: "Забыла про конструкторы. 3D-визитка производит вау-эффект на каждой встрече. Стильно и продуманно до мелочей.",
  },
  {
    name: "Михаил",
    role: "Владелец сети гастробаров",
    text: "Подключили QR-меню в трёх заведениях. Меняем стоп-лист и цены за минуту без перепечатки. Гости в восторге.",
  },
  {
    name: "Мария",
    role: "Владелица студии бьюти",
    text: "Клиенты сами записываются, я не трачу время на переписки. Удобно, эстетично и без комиссии агрегаторов.",
  },
  {
    name: "Дмитрий",
    role: "Серийный предприниматель",
    text: "Брелок в сочетании с визиткой — невероятно статусно. Партнёры каждый раз в шоке.",
  },
];

export default function Reviews() {
  const trackRef = useRef(null);

  const scroll = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild;
    const gap = 24;
    const scrollAmount = card ? card.getBoundingClientRect().width + gap : 320;
    track.scrollBy({ left: direction === "next" ? scrollAmount : -scrollAmount, behavior: "smooth" });
  };

  return (
    <section id="reviews" className="relative mt-24 sm:mt-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6">
        <div className="flex flex-col gap-4 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-white/50">Отзывы</span>
          <h2 className="font-display text-balance text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            Впечатления владельцев
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-lg text-white/70">
            Реальные эмоции тех, кто выбрал собственный цифровой актив
          </p>
        </div>
        <div className="relative">
          <div ref={trackRef} className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2">
            {reviews.map((review) => (
              <div key={review.name} className="w-full min-w-[280px] snap-start sm:min-w-[360px] lg:min-w-[420px]">
                <GlassCard>
                  <div className="flex h-[260px] flex-col gap-4 p-6 sm:h-[280px] sm:p-8">
                    <p className="flex-1 text-base text-white/90 sm:text-lg">«{review.text}»</p>
                    <div className="mt-auto flex items-center justify-between">
                      <div>
                        <p className="font-medium">{review.name}</p>
                        <p className="text-sm text-white/50">{review.role}</p>
                      </div>
                      <div className="flex gap-1 text-[#ff3b5c]">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <svg key={index} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center">
            <div className="flex items-center gap-2">
              <button onClick={() => scroll("prev")} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-all hover:border-white/40 hover:text-white">
                <ArrowRight className="w-4 h-4 rotate-180" />
              </button>
              <button onClick={() => scroll("next")} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-all hover:border-white/40 hover:text-white">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
