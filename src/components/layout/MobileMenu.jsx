"use client";

import { createPortal } from "react-dom";
import { useEffect } from "react";
import { ArrowRight, Telegram } from "../ui/Icons";

const links = [
  { href: "#solutions", label: "Решения" },
  { href: "#about", label: "Обо мне" },
  { href: "#pricing", label: "Тарифы" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#faq", label: "FAQ" },
];

export default function MobileMenu({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[60] flex flex-col bg-[#050506]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <span className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <span className="font-display text-xl">AppSea</span>
          <span className="font-display text-xl text-[#ff3b5c]">Pro</span>
        </span>
        <button
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80"
          aria-label="Закрыть меню"
        >
          <span className="relative h-4 w-4">
            <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current" />
            <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current" />
          </span>
        </button>
      </div>
      <nav className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-2 px-4 sm:px-6">
        {links.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="flex items-center justify-between rounded-2xl border border-transparent px-2 py-4 text-2xl font-medium transition-colors hover:text-white/80"
          >
            {item.label}
            <ArrowRight className="w-5 h-5 text-white/40" />
          </a>
        ))}
      </nav>
      <div className="mx-auto mb-[max(1.5rem,env(safe-area-inset-bottom))] w-full max-w-6xl px-4 sm:px-6">
        <a
          href="https://t.me/elenlime"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
        >
          <Telegram className="w-4 h-4" />
          Написать в Telegram
        </a>
      </div>
    </div>,
    document.body
  );
}
