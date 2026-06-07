"use client";

import { useLocale } from "next-intl";

const FranceFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 3 2"
    width="20"
    height="14"
    className="rounded-sm"
  >
    <rect width="1" height="2" fill="#002395" />
    <rect x="1" width="1" height="2" fill="#fff" />
    <rect x="2" width="1" height="2" fill="#ED2939" />
  </svg>
);

const ColombiaFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 3 2"
    width="20"
    height="14"
    className="rounded-sm"
  >
    <rect width="3" height="2" fill="#FCD116" />
    <rect y="0.667" width="3" height="0.667" fill="#003087" />
    <rect y="1.333" width="3" height="0.667" fill="#CE1126" />
  </svg>
);

export default function LanguageSwitcher() {
  const locale = useLocale();

  const switchLanguage = (newLocale: string) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    window.location.reload();
  };

  return (
    <div className="flex gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md items-center">
      <button
        onClick={() => switchLanguage("fr")}
        className={`flex items-center gap-1 text-sm font-medium ${
          locale === "fr"
            ? "text-stone-800 font-bold"
            : "text-stone-400 hover:text-stone-600"
        }`}
      >
        <FranceFlag /> FR
      </button>
      <span className="text-stone-300">|</span>
      <button
        onClick={() => switchLanguage("es")}
        className={`flex items-center gap-1 text-sm font-medium ${
          locale === "es"
            ? "text-stone-800 font-bold"
            : "text-stone-400 hover:text-stone-600"
        }`}
      >
        <ColombiaFlag /> ES
      </button>
    </div>
  );
}
