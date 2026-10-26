"use client";

import { useRef } from "react";

export function GlassCard({ children, className = "", onClick }) {
  const ref = useRef(null);

  const handleMove = (event) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  };

  return (
    <article
      ref={ref}
      onMouseMove={handleMove}
      onClick={onClick}
      className={`glass rounded-[28px] overflow-hidden transition-transform duration-500 hover:-translate-y-1 ${className}`}
    >
      <div className="glass-content h-full">{children}</div>
    </article>
  );
}

export function SoftGlow() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-[-20%] -z-10 flex justify-center">
      <div className="h-[420px] w-[min(1100px,90vw)] rounded-full bg-[radial-gradient(circle,rgba(229,9,64,0.16)_0%,transparent_70%)] blur-[160px]" />
    </div>
  );
}
