import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Solutions from "@/components/sections/Solutions";
import About from "@/components/sections/About";
import Comparison from "@/components/sections/Comparison";
import Pricing from "@/components/sections/Pricing";
import Reviews from "@/components/sections/Reviews";
import Faq from "@/components/sections/Faq";
import { Telegram } from "@/components/ui/Icons";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="grid-noise pointer-events-none absolute inset-x-0 top-0 -z-10 h-[900px]" />
      <Header />
      <Hero />
      <Solutions />
      <About />
      <Comparison />
      <Pricing />
      <Reviews />
      <Faq />
      <section id="contact" className="relative mt-24 sm:mt-32">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center sm:px-6">
          <span className="text-xs uppercase tracking-[0.4em] text-white/50">Готовы к запуску</span>
          <h2 className="font-display text-balance text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            Обсудим ваш проект
          </h2>
          <p className="max-w-2xl text-balance text-lg text-white/70">
            Расскажите о задаче — подскажу оптимальное решение без навязывания
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="https://t.me/elenlime"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:-translate-y-0.5"
            >
              <Telegram className="w-4 h-4" />
              Написать в Telegram
            </a>
            <a
              href="https://wa.me/79995051277"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm text-white/80 transition-all hover:border-white/40 hover:text-white"
            >
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </section>
      <Footer />
      <a
        href="https://t.me/elenlime"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Написать в Telegram"
        className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-[0_40px_80px_-40px_rgba(255,255,255,0.8)] transition-transform hover:-translate-y-1 sm:right-6 sm:h-14 sm:w-14"
      >
        <Telegram className="w-5 h-5" />
      </a>
    </main>
  );
}
