import { Telegram, WhatsApp } from "../ui/Icons";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <span className="font-display text-xl">AppSea</span>
            <span className="font-display text-xl text-[#ff3b5c]">Pro</span>
          </div>
          <p className="max-w-sm text-sm text-white/60">
            Бутик премиальных цифровых решений. Создаем один раз — работает на вас всегда.
          </p>
          <p className="text-xs text-white/40">© 2026 Елена Сотникова (AppSeaPro). Все права защищены.</p>
        </div>
        <div className="flex flex-col items-start gap-4 md:items-end">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://t.me/elenlime"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition-all hover:border-white/40 hover:text-white"
            >
              <Telegram className="w-4 h-4" />
              Telegram
            </a>
            <a
              href="https://wa.me/79995051277"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition-all hover:border-white/40 hover:text-white"
            >
              <WhatsApp className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/50">
            <a href="#solutions" className="hover:text-white">Решения</a>
            <span className="text-white/20">•</span>
            <a href="#pricing" className="hover:text-white">Тарифы</a>
            <span className="text-white/20">•</span>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <span className="text-white/20">•</span>
            <a href="#contact" className="hover:text-white">Контакты</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
