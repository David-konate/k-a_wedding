"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type Civilite = "M." | "Mme" | "Enfant";
type BabyChoice = "cot" | "noCotNormal" | "noCotParent" | "highchair" | null;
type ShuttleChoice = "shuttle" | "walk" | null;

interface Invite {
  id: number;
  civilite: Civilite;
  prenom: string;
  nom: string;
}

const SectionTitle = ({ label, title }: { label?: string; title: string }) => (
  <div className="mb-6">
    {label && (
      <p className="font-[family-name:var(--font-vibes)] text-[#b8735a] text-2xl mb-1">
        {label}
      </p>
    )}
    <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-[#3a2e2e] tracking-wide">
      {title}
    </h3>
    <div className="flex items-center gap-3 mt-2">
      <div className="w-8 h-px bg-[#b8735a] opacity-40" />
      <div className="w-1 h-1 rounded-full bg-[#b8735a] opacity-60" />
      <div className="w-8 h-px bg-[#b8735a] opacity-40" />
    </div>
  </div>
);

export default function Reservation() {
  const t = useTranslations("reservation");

  const [invites, setInvites] = useState<Invite[]>([
    { id: 1, civilite: "M.", prenom: "", nom: "" },
  ]);
  const [presence, setPresence] = useState<"confirm" | "decline" | null>(null);
  const [logement, setLogement] = useState<"onSite" | "other" | null>(null);
  const [babyChoice, setBabyChoice] = useState<BabyChoice>(null);
  const [shuttleChoice, setShuttleChoice] = useState<ShuttleChoice>(null);

  const ajouterInvite = () => {
    setInvites((prev) => [
      ...prev,
      { id: Date.now(), civilite: "M.", prenom: "", nom: "" },
    ]);
  };

  const supprimerInvite = (id: number) => {
    if (invites.length === 1) return;
    setInvites((prev) => prev.filter((inv) => inv.id !== id));
  };

  const modifierInvite = (id: number, champ: keyof Invite, valeur: string) => {
    setInvites((prev) =>
      prev.map((inv) => (inv.id === id ? { ...inv, [champ]: valeur } : inv)),
    );
  };

  const handleSubmit = () => {
    console.log({ invites, presence, logement, babyChoice, shuttleChoice });
    alert(t("submit"));
  };

  const nbAdultes = invites.filter((i) => i.civilite !== "Enfant").length;
  const nbEnfants = invites.filter((i) => i.civilite === "Enfant").length;
  const hasEnfant = nbEnfants > 0;

  const isFormValid =
    presence !== null &&
    shuttleChoice !== null &&
    invites.every((i) => i.prenom && i.nom) &&
    (!hasEnfant || babyChoice !== null);

  const babyChoices: { key: BabyChoice; label: string }[] = [
    { key: "cot", label: t("babies.cot") },
    { key: "noCotNormal", label: t("babies.noCotNormal") },
    { key: "noCotParent", label: t("babies.noCotParent") },
    { key: "highchair", label: t("babies.highchair") },
  ];

  const inputClass =
    "font-[family-name:var(--font-playfair)] flex-1 min-w-0 text-lg border border-[#e8ddd8] bg-white px-3 py-2 text-[#3a2e2e] placeholder:text-[#c4b0a8] focus:outline-none focus:border-[#b8735a] focus:ring-1 focus:ring-[#b8735a] transition-colors";

  const radioLabelClass =
    "flex items-start gap-3 cursor-pointer px-4 py-3 border border-transparent hover:border-[#e8ddd8] hover:bg-[#fdf6f0] transition-colors rounded-sm";

  const radioTextClass =
    "font-[family-name:var(--font-playfair)] text-[#6b5b52] text-lg leading-relaxed";

  return (
    <div className="bg-white border border-[#e8ddd8] p-8 space-y-10">
      {/* ===== LISTE DES INVITÉS ===== */}
      <div>
        <div className="flex items-start justify-between mb-6">
          <SectionTitle title={t("title")} />
          <div className="font-[family-name:var(--font-playfair)] text-base text-[#b8a09a] text-right pt-1">
            {nbAdultes} {nbAdultes > 1 ? t("adultsPlural") : t("adults")}
            {nbEnfants > 0 &&
              ` · ${nbEnfants} ${nbEnfants > 1 ? t("childPlural") : t("child")}`}
          </div>
        </div>

        <div className="space-y-3">
          {invites.map((invite, index) => (
            <div
              key={invite.id}
              className="flex items-center gap-2 p-3 bg-[#fdf6f0] border border-[#e8ddd8]"
            >
              <span className="font-[family-name:var(--font-playfair)] text-[#b8a09a] text-base w-6 shrink-0">
                {index + 1}.
              </span>

              <select
                value={invite.civilite}
                onChange={(e) =>
                  modifierInvite(invite.id, "civilite", e.target.value)
                }
                className="font-[family-name:var(--font-playfair)] text-lg border border-[#e8ddd8] px-2 py-2 text-[#3a2e2e] bg-white focus:outline-none focus:border-[#b8735a] shrink-0"
              >
                <option value="M.">{t("civilite.m")}</option>
                <option value="Mme">{t("civilite.mme")}</option>
                <option value="Enfant">{t("civilite.enfant")}</option>
              </select>

              <input
                type="text"
                placeholder="Prénom"
                value={invite.prenom}
                onChange={(e) =>
                  modifierInvite(invite.id, "prenom", e.target.value)
                }
                className={inputClass}
              />

              <input
                type="text"
                placeholder="Nom"
                value={invite.nom}
                onChange={(e) =>
                  modifierInvite(invite.id, "nom", e.target.value)
                }
                className={inputClass}
              />

              <button
                onClick={() => supprimerInvite(invite.id)}
                disabled={invites.length === 1}
                className="text-[#c4b0a8] hover:text-[#b8735a] transition-colors disabled:opacity-20 shrink-0 text-base"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={ajouterInvite}
          className="font-[family-name:var(--font-playfair)] mt-4 w-full border border-dashed border-[#c4b0a8] py-4 text-[#b8a09a] hover:border-[#b8735a] hover:text-[#b8735a] transition-colors text-lg tracking-wide"
        >
          {t("addPerson")}
        </button>
      </div>

      {/* ===== BESOINS ENFANTS ===== */}
      {hasEnfant && (
        <div className="border border-[#e8ddd8] bg-[#fdf6f0] p-6 space-y-4">
          <SectionTitle label="🍼" title={t("babies.title")} />
          <p className="font-[family-name:var(--font-playfair)] text-[#8c7b72] text-lg italic border-l-2 border-[#b8735a] pl-3">
            {t("babies.intro")}
          </p>
          <div className="space-y-1">
            {babyChoices.map(({ key, label }) => (
              <label key={key} className={radioLabelClass}>
                <input
                  type="radio"
                  name="baby"
                  className="accent-[#b8735a] mt-1 shrink-0 w-5 h-5"
                  onChange={() => setBabyChoice(key)}
                  checked={babyChoice === key}
                />
                <span className={radioTextClass}>{label}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* ===== NAVETTE ===== */}
      <div className="border border-[#e8ddd8] bg-[#fdf6f0] p-6 space-y-4">
        <SectionTitle label="🚐" title={t("shuttle.title")} />
        <p className="font-[family-name:var(--font-playfair)] text-[#8c7b72] text-lg italic border-l-2 border-[#b8735a] pl-3">
          {t("shuttle.description")}
        </p>
        <div className="space-y-1">
          <label className={radioLabelClass}>
            <input
              type="radio"
              name="shuttle"
              className="accent-[#b8735a] mt-1 shrink-0 w-5 h-5"
              onChange={() => setShuttleChoice("shuttle")}
              checked={shuttleChoice === "shuttle"}
            />
            <span className={radioTextClass}>{t("shuttle.yes")}</span>
          </label>
          <label className={radioLabelClass}>
            <input
              type="radio"
              name="shuttle"
              className="accent-[#b8735a] mt-1 shrink-0 w-5 h-5"
              onChange={() => setShuttleChoice("walk")}
              checked={shuttleChoice === "walk"}
            />
            <span className={radioTextClass}>{t("shuttle.no")}</span>
          </label>
        </div>
      </div>

      {/* ===== PRÉSENCE ===== */}
      <div>
        <SectionTitle title={t("presence.title")} />
        <div className="space-y-1">
          <label className={radioLabelClass}>
            <input
              type="radio"
              name="presence"
              className="accent-[#b8735a] mt-1 shrink-0 w-5 h-5"
              onChange={() => setPresence("confirm")}
              checked={presence === "confirm"}
            />
            <span className={radioTextClass}>{t("presence.confirm")}</span>
          </label>
          <label className={radioLabelClass}>
            <input
              type="radio"
              name="presence"
              className="accent-[#b8735a] mt-1 shrink-0 w-5 h-5"
              onChange={() => setPresence("decline")}
              checked={presence === "decline"}
            />
            <span className={radioTextClass}>{t("presence.decline")}</span>
          </label>
        </div>
      </div>

      {/* ===== LOGEMENT ===== */}
      <div>
        <SectionTitle title={t("logement.title")} />
        <div className="space-y-1">
          <label className={radioLabelClass}>
            <input
              type="radio"
              name="logement"
              className="accent-[#b8735a] mt-1 shrink-0 w-5 h-5"
              onChange={() => setLogement("onSite")}
              checked={logement === "onSite"}
            />
            <span className={radioTextClass}>{t("logement.onSite")}</span>
          </label>
          <label className={radioLabelClass}>
            <input
              type="radio"
              name="logement"
              className="accent-[#b8735a] mt-1 shrink-0 w-5 h-5"
              onChange={() => setLogement("other")}
              checked={logement === "other"}
            />
            <span className={radioTextClass}>{t("logement.other")}</span>
          </label>
        </div>
      </div>

      {/* ===== RÉCAPITULATIF ===== */}
      {invites.some((i) => i.prenom || i.nom) && (
        <div className="bg-[#fdf6f0] border border-[#e8ddd8] p-5">
          <p className="font-[family-name:var(--font-vibes)] text-[#b8735a] text-2xl mb-3">
            {t("recap.title")}
          </p>
          <ul className="space-y-1">
            {invites.map((inv) => (
              <li
                key={inv.id}
                className="font-[family-name:var(--font-playfair)] text-[#6b5b52] text-lg flex items-center gap-2"
              >
                <span className="text-[#b8735a] text-base">—</span>
                {inv.civilite} {inv.prenom} {inv.nom}
              </li>
            ))}
          </ul>
          {shuttleChoice && (
            <p className="font-[family-name:var(--font-playfair)] text-[#b8735a] text-lg mt-3 pt-3 border-t border-[#e8ddd8]">
              {shuttleChoice === "shuttle"
                ? t("recap.shuttle")
                : t("recap.walk")}
            </p>
          )}
          {hasEnfant && babyChoice && (
            <p className="font-[family-name:var(--font-playfair)] text-[#8c7b72] text-lg mt-1 italic">
              {babyChoices.find((b) => b.key === babyChoice)?.label}
            </p>
          )}
        </div>
      )}

      {/* ===== BOUTON ENVOYER ===== */}
      <button
        onClick={handleSubmit}
        disabled={!isFormValid}
        className="font-[family-name:var(--font-cormorant)] w-full bg-[#3a2e2e] text-[#fdf6f0] py-5 text-2xl tracking-widest font-light hover:bg-[#b8735a] transition-colors duration-300 disabled:opacity-30 disabled:cursor-not-allowed uppercase"
      >
        {t("submit")}
      </button>

      {/* Messages d'aide */}
      <div className="space-y-2 text-center">
        {invites.some((i) => !i.prenom || !i.nom) && (
          <p className="font-[family-name:var(--font-playfair)] text-[#b8a09a] text-base italic">
            {t("errors.fillNames")}
          </p>
        )}
        {!shuttleChoice && (
          <p className="font-[family-name:var(--font-playfair)] text-[#b8a09a] text-base italic">
            {t("errors.shuttle")}
          </p>
        )}
        {hasEnfant && !babyChoice && (
          <p className="font-[family-name:var(--font-playfair)] text-[#b8a09a] text-base italic">
            {t("errors.baby")}
          </p>
        )}
      </div>
    </div>
  );
}
