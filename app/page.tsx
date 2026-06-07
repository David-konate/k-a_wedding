import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Reservation from "@/components/Reservation";

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-[#fdf6f0] text-[#3a2e2e]">
      {/* LANGUAGE SWITCHER */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>

      {/* ===================== HERO ===================== */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 overflow-hidden bg-[#fdf6f0]">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full border border-[#b8735a]" />
          <div className="absolute w-[400px] h-[400px] rounded-full border border-[#b8735a]" />
        </div>

        <p className="font-[family-name:var(--font-vibes)] text-[#b8735a] text-3xl mb-4 tracking-wide">
          Bienvenidos · Bienvenue
        </p>

        <h1
          className="font-[family-name:var(--font-cormorant)] text-6xl md:text-8xl font-light tracking-widest text-[#3a2e2e] mb-4"
          style={{ letterSpacing: "0.08em" }}
        >
          Katherine
          <span className="block font-[family-name:var(--font-vibes)] text-[#b8735a] text-5xl md:text-6xl font-normal my-1">
            &amp;
          </span>
          Antoine
        </h1>

        <p className="font-[family-name:var(--font-playfair)] text-[#b8735a] text-xl tracking-[0.3em] uppercase mt-4 mb-8">
          05 · 01 · 2026
        </p>

        <div className="flex items-center gap-4 my-4">
          <div className="w-20 h-px bg-[#b8735a] opacity-40" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#b8735a] opacity-60" />
          <div className="w-20 h-px bg-[#b8735a] opacity-40" />
        </div>

        <p className="font-[family-name:var(--font-playfair)] text-xl text-[#6b5b52] max-w-2xl leading-relaxed mt-4">
          {t("hero.intro")}
        </p>
        <p className="font-[family-name:var(--font-playfair)] mt-4 text-[#8c7b72] max-w-xl leading-relaxed text-lg italic">
          {t("hero.subtitle")}
        </p>
      </section>

      {/* ===================== PHOTO 1 ===================== */}
      <section className="flex items-center justify-center py-12 px-6 bg-white">
        <div className="w-full max-w-3xl h-96 bg-[#f0e8e2] rounded-none flex items-center justify-center border border-[#e0d0c8]">
          <span className="text-[#b8a09a] font-[family-name:var(--font-playfair)] text-base tracking-widest uppercase">
            Photo
          </span>
        </div>
      </section>

      {/* ===================== ACCÈS AU VILLAGE ===================== */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-[family-name:var(--font-vibes)] text-[#b8735a] text-3xl mb-2">
            Informations pratiques
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#3a2e2e] tracking-wide">
            {t("access.title")}
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 h-px bg-[#b8735a] opacity-40" />
            <div className="w-1 h-1 rounded-full bg-[#b8735a] opacity-60" />
            <div className="w-12 h-px bg-[#b8735a] opacity-40" />
          </div>
        </div>

        <div className="space-y-4">
          {[
            { q: t("access.village.question"), a: t("access.village.answer") },
            { q: t("access.train.question"), a: t("access.train.answer") },
            { q: t("access.airport.question"), a: t("access.airport.answer") },
            { q: t("access.tires.question"), a: t("access.tires.answer") },
          ].map(({ q, a }, i) => (
            <div
              key={i}
              className="bg-white border border-[#e8ddd8] rounded-sm p-6 shadow-sm"
            >
              <h3 className="font-[family-name:var(--font-cormorant)] font-semibold text-[#3a2e2e] text-2xl mb-2">
                {q}
              </h3>
              <p className="font-[family-name:var(--font-playfair)] text-[#6b5b52] leading-relaxed text-lg">
                {a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== ACCÈS AU SITE ===================== */}
      <section className="py-20 px-6 bg-[#f5ece6]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#3a2e2e] tracking-wide">
              {t("venue.title")}
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="w-12 h-px bg-[#b8735a] opacity-40" />
              <div className="w-1 h-1 rounded-full bg-[#b8735a] opacity-60" />
              <div className="w-12 h-px bg-[#b8735a] opacity-40" />
            </div>
          </div>
          <div className="bg-white border border-[#e8ddd8] rounded-sm p-8 space-y-4 shadow-sm">
            <p className="font-[family-name:var(--font-playfair)] text-[#6b5b52] leading-relaxed text-lg">
              {t("venue.description")}
            </p>
            <div className="w-full h-px bg-[#e8ddd8]" />
            <p className="font-[family-name:var(--font-playfair)] text-[#6b5b52] leading-relaxed text-lg">
              {t("venue.shuttle")}
            </p>
          </div>
        </div>
      </section>

      {/* ===================== PHOTO 2 ===================== */}
      <section className="flex items-center justify-center py-12 px-6 bg-white">
        <div className="w-full max-w-3xl h-96 bg-[#f0e8e2] rounded-none flex items-center justify-center border border-[#e0d0c8]">
          <span className="text-[#b8a09a] font-[family-name:var(--font-playfair)] text-base tracking-widest uppercase">
            Photo
          </span>
        </div>
      </section>

      {/* ===================== HÉBERGEMENT ===================== */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-[family-name:var(--font-vibes)] text-[#b8735a] text-3xl mb-2">
            Sur place
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#3a2e2e] tracking-wide">
            {t("accommodation.title")}
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 h-px bg-[#b8735a] opacity-40" />
            <div className="w-1 h-1 rounded-full bg-[#b8735a] opacity-60" />
            <div className="w-12 h-px bg-[#b8735a] opacity-40" />
          </div>
        </div>

        <div className="space-y-6">
          <p className="font-[family-name:var(--font-playfair)] text-[#6b5b52] leading-relaxed text-lg">
            {t("accommodation.description")}
          </p>
          <p className="font-[family-name:var(--font-playfair)] text-[#8c7b72] leading-relaxed text-lg italic border-l-2 border-[#b8735a] pl-4">
            {t("accommodation.section")}
          </p>
          <p className="font-[family-name:var(--font-playfair)] text-[#6b5b52] leading-relaxed text-lg">
            {t("accommodation.alternative")}
          </p>

          <div className="bg-white border border-[#e8ddd8] rounded-sm p-6 shadow-sm">
            <h3 className="font-[family-name:var(--font-cormorant)] font-semibold text-[#3a2e2e] text-2xl mb-4">
              {t("accommodation.provided.title")}
            </h3>
            <ul className="space-y-2">
              {(["0", "1", "2", "3"] as const).map((i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 font-[family-name:var(--font-playfair)] text-[#6b5b52] text-lg"
                >
                  <span className="text-[#b8735a] mt-1 shrink-0">—</span>
                  {t(`accommodation.provided.items.${i}`)}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#fdf6f0] border border-[#e8ddd8] rounded-sm p-6">
            <h3 className="font-[family-name:var(--font-cormorant)] font-semibold text-[#3a2e2e] text-2xl mb-4">
              {t("accommodation.babies.title")}
            </h3>
            <ul className="space-y-2">
              {(["0", "1", "2", "3", "4"] as const).map((i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 font-[family-name:var(--font-playfair)] text-[#6b5b52] text-lg"
                >
                  <span className="text-[#b8735a] mt-1 shrink-0">—</span>
                  {t(`accommodation.babies.items.${i}`)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===================== CODE VESTIMENTAIRE ===================== */}
      <section className="py-20 px-6 bg-[#f5ece6]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-[family-name:var(--font-vibes)] text-[#b8735a] text-3xl mb-2">
            Tenue
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#3a2e2e] tracking-wide mb-4">
            {t("dresscode.title")}
          </h2>
          <p className="font-[family-name:var(--font-playfair)] text-[#8c7b72] italic text-xl">
            {t("dresscode.description")}
          </p>
        </div>
      </section>

      {/* ===================== PHOTO 3 ===================== */}
      <section className="flex items-center justify-center py-12 px-6 bg-white">
        <div className="w-full max-w-3xl h-96 bg-[#f0e8e2] rounded-none flex items-center justify-center border border-[#e0d0c8]">
          <span className="text-[#b8a09a] font-[family-name:var(--font-playfair)] text-base tracking-widest uppercase">
            Photo
          </span>
        </div>
      </section>

      {/* ===================== CITATION ===================== */}
      <section className="py-20 px-6 bg-[#3a2e2e] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-[family-name:var(--font-vibes)] text-[#b8735a] text-4xl mb-6">
            {t("quote.title")}
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-[#b8735a] opacity-40" />
            <div className="w-1 h-1 rounded-full bg-[#b8735a] opacity-60" />
            <div className="w-12 h-px bg-[#b8735a] opacity-40" />
          </div>
          <blockquote className="font-[family-name:var(--font-cormorant)] text-[#c9b8b0] italic leading-relaxed text-2xl font-light">
            {t("quote.text")}
          </blockquote>
          <p className="mt-8 font-[family-name:var(--font-vibes)] text-[#b8735a] text-3xl">
            {t("quote.authors")}
          </p>
        </div>
      </section>

      {/* ===================== CONTACT ===================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-[family-name:var(--font-vibes)] text-[#b8735a] text-3xl mb-2">
            Nous joindre
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#3a2e2e] tracking-wide mb-10">
            {t("contact.title")}
          </h2>
          <p className="font-[family-name:var(--font-playfair)] text-[#6b5b52] mb-2 text-lg">
            {t("contact.intro")}
          </p>
          <p className="font-[family-name:var(--font-vibes)] text-[#3a2e2e] text-4xl mb-8">
            {t("contact.names")}
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-[#b8735a] opacity-30" />
            <div className="w-1 h-1 rounded-full bg-[#b8735a] opacity-50" />
            <div className="w-12 h-px bg-[#b8735a] opacity-30" />
          </div>
          <div className="space-y-3 font-[family-name:var(--font-playfair)] text-[#6b5b52] text-lg">
            <p>📧 {t("contact.email")}</p>
            <p>📱 {t("contact.whatsapp")}</p>
            <p className="text-[#8c7b72]">+34 625 48 61 29</p>
            <p className="text-[#8c7b72]">+33 7 49 38 39 53</p>
          </div>
        </div>
      </section>

      {/* ===================== RSVP ===================== */}
      <section className="py-20 px-6 bg-[#f5ece6]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-[family-name:var(--font-vibes)] text-[#b8735a] text-3xl mb-2">
              Répondre · Responder
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#3a2e2e] tracking-wide">
              {t("rsvp.title")}
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="w-12 h-px bg-[#b8735a] opacity-40" />
              <div className="w-1 h-1 rounded-full bg-[#b8735a] opacity-60" />
              <div className="w-12 h-px bg-[#b8735a] opacity-40" />
            </div>
          </div>
          <Reservation />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center bg-[#3a2e2e]">
        <p className="font-[family-name:var(--font-vibes)] text-[#b8735a] text-3xl mb-1">
          Katherine &amp; Antoine
        </p>
        <p className="font-[family-name:var(--font-playfair)] text-[#8c7b72] text-base tracking-widest uppercase">
          05.01.2026 · Le Reposoir
        </p>
      </footer>
    </main>
  );
}
