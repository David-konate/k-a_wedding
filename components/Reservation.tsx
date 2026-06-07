"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type Civilite = "M." | "Mme" | "Enfant";
type BabyChoice = "cot" | "noCotNormal" | "noCotParent" | "highchair" | null;
type ShuttleChoice = "shuttle" | "walk" | null;
type MenuSpecial =
  | "none"
  | "noPork"
  | "noGluten"
  | "vegetarian"
  | "vegan"
  | "other";

interface Invite {
  id: number;
  civilite: Civilite;
  prenom: string;
  nom: string;
  menuSpecial: MenuSpecial;
  menuAutre: string;
}

export default function Reservation() {
  const t = useTranslations("reservation");

  const [invites, setInvites] = useState<Invite[]>([
    {
      id: 1,
      civilite: "M.",
      prenom: "",
      nom: "",
      menuSpecial: "none",
      menuAutre: "",
    },
  ]);
  const [presence, setPresence] = useState<"confirm" | "decline" | null>(null);
  const [logement, setLogement] = useState<"onSite" | "other" | null>(null);
  const [babyChoice, setBabyChoice] = useState<BabyChoice>(null);
  const [shuttleChoice, setShuttleChoice] = useState<ShuttleChoice>(null);

  const ajouterInvite = () => {
    setInvites((prev) => [
      ...prev,
      {
        id: Date.now(),
        civilite: "M.",
        prenom: "",
        nom: "",
        menuSpecial: "none",
        menuAutre: "",
      },
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
    invites.every(
      (i) => i.menuSpecial !== "other" || i.menuAutre.trim() !== "",
    ) &&
    (!hasEnfant || babyChoice !== null);

  const babyChoices: { key: BabyChoice; label: string }[] = [
    { key: "cot", label: t("babies.cot") },
    { key: "noCotNormal", label: t("babies.noCotNormal") },
    { key: "noCotParent", label: t("babies.noCotParent") },
    { key: "highchair", label: t("babies.highchair") },
  ];

  const menuOptions: { key: MenuSpecial; label: string; emoji: string }[] = [
    { key: "none", label: t("menu.none"), emoji: "🍽️" },
    { key: "noPork", label: t("menu.noPork"), emoji: "🚫🐷" },
    { key: "noGluten", label: t("menu.noGluten"), emoji: "🌾" },
    { key: "vegetarian", label: t("menu.vegetarian"), emoji: "🥗" },
    { key: "vegan", label: t("menu.vegan"), emoji: "🌱" },
    { key: "other", label: t("menu.other"), emoji: "✏️" },
  ];

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm space-y-8">
      {/* ===== LISTE DES INVITÉS ===== */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-stone-700 text-lg">{t("title")}</h3>
          <div className="text-sm text-stone-400">
            {nbAdultes} {nbAdultes > 1 ? t("adultsPlural") : t("adults")}
            {nbEnfants > 0 &&
              ` · ${nbEnfants} ${nbEnfants > 1 ? t("childPlural") : t("child")}`}
          </div>
        </div>

        <div className="space-y-4">
          {invites.map((invite, index) => (
            <div
              key={invite.id}
              className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-3"
            >
              {/* Ligne identité */}
              <div className="flex items-center gap-2">
                <span className="text-stone-400 text-sm w-5 shrink-0">
                  {index + 1}.
                </span>

                <select
                  value={invite.civilite}
                  onChange={(e) =>
                    modifierInvite(invite.id, "civilite", e.target.value)
                  }
                  className="text-sm border border-stone-300 rounded-lg px-2 py-2 text-stone-700 bg-white focus:outline-none focus:ring-2 focus:ring-stone-400 shrink-0"
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
                  className="flex-1 min-w-0 text-sm border border-stone-300 rounded-lg px-3 py-2 text-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400"
                />

                <input
                  type="text"
                  placeholder="Nom"
                  value={invite.nom}
                  onChange={(e) =>
                    modifierInvite(invite.id, "nom", e.target.value)
                  }
                  className="flex-1 min-w-0 text-sm border border-stone-300 rounded-lg px-3 py-2 text-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400"
                />

                <button
                  onClick={() => supprimerInvite(invite.id)}
                  disabled={invites.length === 1}
                  className="text-stone-300 hover:text-red-400 transition-colors disabled:opacity-20 shrink-0"
                >
                  ✕
                </button>
              </div>

              {/* Menu spécial */}
              <div className="pl-7">
                <p className="text-xs font-semibold text-stone-500 mb-2">
                  {t("menu.title")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {menuOptions.map(({ key, label, emoji }) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() =>
                        modifierInvite(invite.id, "menuSpecial", key)
                      }
                      className={`flex items-center gap-1 text-xs px-3 py-1.5 rounded-full border transition-colors font-medium ${
                        invite.menuSpecial === key
                          ? "bg-stone-700 text-white border-stone-700"
                          : "bg-white text-stone-500 border-stone-300 hover:border-stone-400 hover:text-stone-700"
                      }`}
                    >
                      <span>{emoji}</span>
                      <span>{label}</span>
                    </button>
                  ))}
                </div>
                {invite.menuSpecial === "other" && (
                  <input
                    type="text"
                    placeholder={t("menu.otherPlaceholder")}
                    value={invite.menuAutre}
                    onChange={(e) =>
                      modifierInvite(invite.id, "menuAutre", e.target.value)
                    }
                    className="mt-2 w-full text-sm border border-stone-300 rounded-lg px-3 py-2 text-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={ajouterInvite}
          className="mt-4 w-full border-2 border-dashed border-stone-300 rounded-xl py-3 text-stone-400 hover:border-stone-400 hover:text-stone-600 transition-colors text-sm font-medium"
        >
          {t("addPerson")}
        </button>
      </div>

      {/* ===== BESOINS ENFANTS (conditionnel) ===== */}
      {hasEnfant && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 space-y-3">
          <p className="font-bold text-amber-800">{t("babies.title")}</p>
          <p className="text-amber-700 text-sm italic">{t("babies.intro")}</p>
          <div className="space-y-2">
            {babyChoices.map(({ key, label }) => (
              <label
                key={key}
                className="flex items-start gap-3 cursor-pointer p-3 rounded-xl hover:bg-amber-100 transition-colors"
              >
                <input
                  type="radio"
                  name="baby"
                  className="accent-amber-600 mt-0.5 shrink-0"
                  onChange={() => setBabyChoice(key)}
                  checked={babyChoice === key}
                />
                <span className="text-amber-900 text-sm leading-relaxed">
                  {label}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* ===== NAVETTE ===== */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 space-y-3">
        <p className="font-bold text-blue-800">{t("shuttle.title")}</p>
        <p className="text-blue-700 text-sm italic">
          {t("shuttle.description")}
        </p>
        <div className="space-y-2">
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded-xl hover:bg-blue-100 transition-colors">
            <input
              type="radio"
              name="shuttle"
              className="accent-blue-600 mt-0.5 shrink-0"
              onChange={() => setShuttleChoice("shuttle")}
              checked={shuttleChoice === "shuttle"}
            />
            <span className="text-blue-900 text-sm leading-relaxed">
              {t("shuttle.yes")}
            </span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded-xl hover:bg-blue-100 transition-colors">
            <input
              type="radio"
              name="shuttle"
              className="accent-blue-600 mt-0.5 shrink-0"
              onChange={() => setShuttleChoice("walk")}
              checked={shuttleChoice === "walk"}
            />
            <span className="text-blue-900 text-sm leading-relaxed">
              {t("shuttle.no")}
            </span>
          </label>
        </div>
      </div>

      {/* ===== PRÉSENCE ===== */}
      <div>
        <p className="font-bold text-stone-700 mb-3">{t("presence.title")}</p>
        <div className="space-y-2">
          <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl hover:bg-stone-50 transition-colors">
            <input
              type="radio"
              name="presence"
              className="accent-stone-600"
              onChange={() => setPresence("confirm")}
              checked={presence === "confirm"}
            />
            <span className="text-stone-700">{t("presence.confirm")}</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl hover:bg-stone-50 transition-colors">
            <input
              type="radio"
              name="presence"
              className="accent-stone-600"
              onChange={() => setPresence("decline")}
              checked={presence === "decline"}
            />
            <span className="text-stone-700">{t("presence.decline")}</span>
          </label>
        </div>
      </div>

      {/* ===== LOGEMENT ===== */}
      <div>
        <p className="font-bold text-stone-700 mb-3">{t("logement.title")}</p>
        <div className="space-y-2">
          <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl hover:bg-stone-50 transition-colors">
            <input
              type="radio"
              name="logement"
              className="accent-stone-600"
              onChange={() => setLogement("onSite")}
              checked={logement === "onSite"}
            />
            <span className="text-stone-700">{t("logement.onSite")}</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl hover:bg-stone-50 transition-colors">
            <input
              type="radio"
              name="logement"
              className="accent-stone-600"
              onChange={() => setLogement("other")}
              checked={logement === "other"}
            />
            <span className="text-stone-700">{t("logement.other")}</span>
          </label>
        </div>
      </div>

      {/* ===== RÉCAPITULATIF ===== */}
      {invites.some((i) => i.prenom || i.nom) && (
        <div className="bg-stone-50 rounded-xl p-4 border border-stone-200">
          <p className="text-stone-500 text-sm font-bold mb-2">
            {t("recap.title")}
          </p>
          <ul className="space-y-1">
            {invites.map((inv) => {
              const menu = menuOptions.find((m) => m.key === inv.menuSpecial);
              return (
                <li
                  key={inv.id}
                  className="text-stone-600 text-sm flex items-center gap-2"
                >
                  <span>
                    {inv.civilite} {inv.prenom} {inv.nom}
                  </span>
                  {inv.menuSpecial !== "none" && (
                    <span className="text-xs bg-stone-200 text-stone-600 px-2 py-0.5 rounded-full">
                      {menu?.emoji}{" "}
                      {inv.menuSpecial === "other"
                        ? inv.menuAutre
                        : menu?.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
          {shuttleChoice && (
            <p className="text-blue-700 text-sm mt-2 pt-2 border-t border-stone-200">
              {shuttleChoice === "shuttle"
                ? t("recap.shuttle")
                : t("recap.walk")}
            </p>
          )}
          {hasEnfant && babyChoice && (
            <p className="text-amber-700 text-sm mt-1">
              {babyChoices.find((b) => b.key === babyChoice)?.label}
            </p>
          )}
        </div>
      )}

      {/* ===== BOUTON ENVOYER ===== */}
      <button
        onClick={handleSubmit}
        disabled={!isFormValid}
        className="w-full bg-stone-700 text-white py-4 rounded-xl font-bold hover:bg-stone-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {t("submit")}
      </button>

      {/* Messages d'aide */}
      <div className="space-y-1 text-center">
        {invites.some((i) => !i.prenom || !i.nom) && (
          <p className="text-stone-400 text-xs">{t("errors.fillNames")}</p>
        )}
        {!shuttleChoice && (
          <p className="text-blue-400 text-xs">{t("errors.shuttle")}</p>
        )}
        {hasEnfant && !babyChoice && (
          <p className="text-amber-500 text-xs">{t("errors.baby")}</p>
        )}
        {invites.some(
          (i) => i.menuSpecial === "other" && !i.menuAutre.trim(),
        ) && <p className="text-stone-400 text-xs">{t("errors.menuOther")}</p>}
      </div>
    </div>
  );
}
