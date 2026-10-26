import { Inter, Jost } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://agency.appseapro.com"),
  title: "AppSeaPro | Цифровые визитки, QR-меню и онлайн-запись под ключ",
  description:
    "Премиальные цифровые решения: PWA-визитки, Smart QR-меню для HoReCa, онлайн-запись для бьюти. Разовый платёж, без абонплаты, заказы в Telegram.",
  keywords: [
    "PWA визитка",
    "цифровая визитка",
    "QR меню",
    "онлайн запись",
    "ресторанное меню",
    "визитка для бизнеса",
    "AppSeaPro",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "AppSeaPro | Цифровые визитки, QR-меню и онлайн-запись под ключ",
    description:
      "Премиальные цифровые решения под ключ. Разовый платёж, без абонплаты, заказы в Telegram.",
    url: "https://agency.appseapro.com",
    siteName: "AppSeaPro",
    locale: "ru_RU",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${inter.variable} ${jost.variable}`}>
      <body className="antialiased bg-[#050506] text-white">
        {children}
      </body>
    </html>
  );
}
