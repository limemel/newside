"use client";

import { useState } from "react";
import MobileMenu from "./MobileMenu";

const nav = [
  { href: "#solutions", label: "Решения" },
  { href: "#about", label: "Обо мне" },
  { href: "#pricing", label: "Тарифы" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050506]/70 backdrop-blur-sm border-b border-white/5">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <a href="#hero" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <span className="font-display text-xl">AppSea</span>
            <span className="font-display text-xl text-[#ff3b5c]">Pro</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="https://t.me/elenlime"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition-all hover:border-white/40 hover:text-white md:flex"
            >
              Обсудить проект
            </a>
            <button
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all hover:border-white/40 hover:text-white md:hidden"
              aria-label="Открыть меню"
            >
              <span className="flex flex-col items-end gap-1.5">
                <span className="h-px w-5 bg-current" />
                <span className="h-px w-4 bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
