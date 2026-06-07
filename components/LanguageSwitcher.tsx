"use client";

import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const locale = useLocale();

  const switchLanguage = (newLocale: string) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    window.location.reload();
  };

  return (
    <div className="flex gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
      <button
        onClick={() => switchLanguage("fr")}
        className={`text-sm font-medium ${
          locale === "fr"
            ? "text-stone-800 font-bold"
            : "text-stone-400 hover:text-stone-600"
        }`}
      >
        🇫🇷 FR
      </button>
      <span className="text-stone-300">|</span>
      <button
        onClick={() => switchLanguage("es")}
        className={`text-sm font-medium ${
          locale === "es"
            ? "text-stone-800 font-bold"
            : "text-stone-400 hover:text-stone-600"
        }`}
      >
        🇪🇸 ES
      </button>
    </div>
  );
}
