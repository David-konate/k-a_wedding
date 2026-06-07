import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Reservation from "@/components/Reservation";

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-stone-50 text-stone-800 font-serif">
      {/* LANGUAGE SWITCHER */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>

      {/* ===================== HERO ===================== */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 px-6 bg-stone-100">
        <h1 className="text-5xl md:text-7xl font-bold tracking-wide text-stone-700 mb-4">
          Katherine & Antoine
        </h1>
        <p className="text-xl text-stone-500 mb-2 italic">05 · 01 · 2026</p>
        <div className="w-16 h-px bg-stone-400 my-6" />
        <p className="text-lg text-stone-600 max-w-2xl leading-relaxed">
          {t("hero.intro")}
        </p>
        <p className="mt-4 text-stone-500 max-w-xl leading-relaxed">
          {t("hero.subtitle")}
        </p>
      </section>

      {/* ===================== PHOTO 1 ===================== */}
      <section className="flex items-center justify-center py-16 px-6 bg-white">
        <div className="w-full max-w-3xl h-96 bg-stone-200 rounded-2xl flex items-center justify-center">
          <span className="text-stone-400 text-lg">📷 Photo 1</span>
        </div>
      </section>

      {/* ===================== ACCÈS AU VILLAGE ===================== */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-stone-700 mb-8 text-center border-b border-stone-300 pb-4">
          {t("access.title")}
        </h2>

        <div className="space-y-8">
          {/* Village */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-stone-700 mb-2">
              {t("access.village.question")}
            </h3>
            <p className="text-stone-600 leading-relaxed">
              {t("access.village.answer")}
            </p>
          </div>

          {/* Gare */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-stone-700 mb-2">
              {t("access.train.question")}
            </h3>
            <p className="text-stone-600 leading-relaxed">
              {t("access.train.answer")}
            </p>
          </div>

          {/* Aéroport */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-stone-700 mb-2">
              {t("access.airport.question")}
            </h3>
            <p className="text-stone-600 leading-relaxed">
              {t("access.airport.answer")}
            </p>
          </div>

          {/* Pneus neige */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-stone-700 mb-2">
              {t("access.tires.question")}
            </h3>
            <p className="text-stone-600 leading-relaxed">
              {t("access.tires.answer")}
            </p>
          </div>
        </div>
      </section>

      {/* ===================== ACCÈS AU SITE ===================== */}
      <section className="py-16 px-6 bg-stone-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-700 mb-8 text-center border-b border-stone-300 pb-4">
            {t("venue.title")}
          </h2>

          <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
            <p className="text-stone-600 leading-relaxed">
              {t("venue.description")}
            </p>
            <p className="text-stone-600 leading-relaxed">
              {t("venue.shuttle")}
            </p>

          </div>
        </div>
      </section>

      {/* ===================== PHOTO 2 ===================== */}
      <section className="flex items-center justify-center py-16 px-6 bg-white">
        <div className="w-full max-w-3xl h-96 bg-stone-200 rounded-2xl flex items-center justify-center">
          <span className="text-stone-400 text-lg">📷 Photo 2</span>
        </div>
      </section>

      {/* ===================== HÉBERGEMENT ===================== */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-stone-700 mb-8 text-center border-b border-stone-300 pb-4">
          {t("accommodation.title")}
        </h2>

        <div className="space-y-6">
          <p className="text-stone-600 leading-relaxed">
            {t("accommodation.description")}
          </p>
          <p className="text-stone-600 leading-relaxed italic">
            {t("accommodation.section")}
          </p>
          <p className="text-stone-600 leading-relaxed">
            {t("accommodation.alternative")}
          </p>

          {/* Fournitures */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-stone-700 mb-4">
              {t("accommodation.provided.title")}
            </h3>
            <ul className="space-y-2">
              {(["0", "1", "2", "3"] as const).map((i) => (
                <li key={i} className="flex items-start gap-2 text-stone-600">
                  <span className="text-stone-400 mt-1">•</span>
                  {t(`accommodation.provided.items.${i}`)}
                </li>
              ))}
            </ul>
          </div>

          {/* Bébés */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-stone-700 mb-4">
              {t("accommodation.babies.title")}
            </h3>
            <ul className="space-y-2">
              {(["0", "1", "2", "3", "4"] as const).map((i) => (
                <li key={i} className="flex items-start gap-2 text-stone-600">
                  <span className="text-stone-400 mt-1">•</span>
                  {t(`accommodation.babies.items.${i}`)}
                </li>
              ))}
            </ul>
          </div>

  
        </div>
      </section>

      {/* ===================== CODE VESTIMENTAIRE ===================== */}
      <section className="py-16 px-6 bg-stone-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-stone-700 mb-4">
            {t("dresscode.title")}
          </h2>
          <p className="text-stone-500 italic text-lg">
            {t("dresscode.description")}
          </p>
        </div>
      </section>

      {/* ===================== PHOTO 3 ===================== */}
      <section className="flex items-center justify-center py-16 px-6 bg-white">
        <div className="w-full max-w-3xl h-96 bg-stone-200 rounded-2xl flex items-center justify-center">
          <span className="text-stone-400 text-lg">📷 Photo 3</span>
        </div>
      </section>

      {/* ===================== CITATION ===================== */}
      <section className="py-16 px-6 bg-stone-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8 text-stone-300">
            {t("quote.title")}
          </h2>
          <blockquote className="text-stone-300 italic leading-relaxed text-lg">
            {t("quote.text")}
          </blockquote>
          <p className="mt-6 text-stone-400 font-bold">
            — {t("quote.authors")}
          </p>
        </div>
      </section>

      {/* ===================== CONTACT ===================== */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-stone-700 mb-8">
            {t("contact.title")}
          </h2>
          <p className="text-stone-600 mb-2">{t("contact.intro")}</p>
          <p className="text-stone-700 font-bold text-xl mb-6">
            {t("contact.names")}
          </p>
          <div className="space-y-3 text-stone-600">
            <p>📧 {t("contact.email")}</p>
            <p>📱 {t("contact.whatsapp")}</p>
            <p className="text-stone-500">+34 625 48 61 29</p>
            <p className="text-stone-500">+33 7 49 38 39 53</p>
          </div>
        </div>
      </section>

      {/* ===================== RSVP ===================== */}
<section className="py-16 px-6 bg-stone-100">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold text-stone-700 mb-8 text-center border-b border-stone-300 pb-4">
      {t("rsvp.title")}
    </h2>
    <Reservation />
  </div>
</section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-stone-400 text-sm bg-stone-800">
        <p>Katherine & Antoine · 05.01.2026 · Le Reposoir</p>
      </footer>
    </main>
  );
}
