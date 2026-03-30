"use client";

import { useState, useEffect } from "react";

interface Participant {
  nom: string;
  regime: string;
}

interface RSVPFormData {
  nom: string;
  email: string;
  telephone: string;
  presence: "oui" | "non" | "";
  adultes: Participant[];
  enfants: Participant[];
  message: string;
}

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RSVPModal({ isOpen, onClose }: RSVPModalProps) {
  const [form, setForm] = useState<RSVPFormData>({
    nom: "",
    email: "",
    telephone: "",
    presence: "",
    adultes: [{ nom: "", regime: "" }],
    enfants: [],
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ── Adultes ──────────────────────────────────────────────
  const addAdulte = () =>
    setForm((prev) => ({
      ...prev,
      adultes: [...prev.adultes, { nom: "", regime: "" }],
    }));

  const removeAdulte = (i: number) =>
    setForm((prev) => ({
      ...prev,
      adultes: prev.adultes.filter((_, idx) => idx !== i),
    }));

  const updateAdulte = (i: number, field: keyof Participant, value: string) =>
    setForm((prev) => {
      const updated = [...prev.adultes];
      updated[i] = { ...updated[i], [field]: value };
      return { ...prev, adultes: updated };
    });

  // ── Enfants ──────────────────────────────────────────────
  const addEnfant = () =>
    setForm((prev) => ({
      ...prev,
      enfants: [...prev.enfants, { nom: "", regime: "" }],
    }));

  const removeEnfant = (i: number) =>
    setForm((prev) => ({
      ...prev,
      enfants: prev.enfants.filter((_, idx) => idx !== i),
    }));

  const updateEnfant = (i: number, field: keyof Participant, value: string) =>
    setForm((prev) => {
      const updated = [...prev.enfants];
      updated[i] = { ...updated[i], [field]: value };
      return { ...prev, enfants: updated };
    });

  // ─────────────────────────────────────────────────────────

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // TODO: envoyer les données à votre API / backend
    console.log("RSVP soumis :", form);
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setForm({
        nom: "",
        email: "",
        telephone: "",
        presence: "",
        adultes: [{ nom: "", regime: "" }],
        enfants: [],
        message: "",
      });
    }, 400);
  };

  const inputClass =
    "w-full border border-rose-200 rounded-lg px-4 py-2.5 bg-white/80 text-[#3a2e2e] placeholder-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition font-[family-name:var(--font-cormorant)] text-base";

  const inputSmClass =
    "w-full border border-rose-100 rounded-lg px-3 py-2 bg-white/60 text-[#3a2e2e] placeholder-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-transparent transition font-[family-name:var(--font-cormorant)] text-sm italic";

  const labelClass =
    "block text-sm font-semibold text-rose-700 mb-1 font-[family-name:var(--font-playfair)] tracking-wide";

  const isFormValid =
    form.nom.trim() !== "" &&
    form.email.trim() !== "" &&
    form.presence !== "" &&
    form.adultes.every((a) => a.nom.trim() !== "");

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl"
          style={{
            background: "linear-gradient(145deg, #fff5f7 0%, #fdf6f0 100%)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Decorative top border */}
          <div
            className="h-1.5 w-full rounded-t-3xl"
            style={{
              background:
                "linear-gradient(to right, #f9a8d4, #fda4af, #fbcfe8)",
            }}
          />

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-rose-100 hover:bg-rose-200 text-rose-400 hover:text-rose-600 transition-colors text-lg font-bold"
            aria-label="Fermer"
          >
            ×
          </button>

          <div className="px-8 py-8">
            {submitted ? (
              /* ── Écran de confirmation ── */
              <div className="flex flex-col items-center gap-5 py-8 text-center">
                <div className="text-5xl">💌</div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-rose-700">
                  Merci {form.nom.split(" ")[0]} !
                </h2>

                {form.presence === "oui" && (
                  <div className="text-left w-full bg-rose-50 border border-rose-100 rounded-2xl px-5 py-4">
                    <p className="font-[family-name:var(--font-playfair)] text-sm font-semibold text-rose-600 mb-3">
                      Participants confirmés
                    </p>

                    {form.adultes.length > 0 && (
                      <div className="mb-3">
                        <p className="font-[family-name:var(--font-cormorant)] text-xs text-rose-400 uppercase tracking-widest mb-2">
                          Adultes ({form.adultes.length})
                        </p>
                        {form.adultes.map((a, i) => (
                          <div key={i} className="mb-2">
                            <p className="font-[family-name:var(--font-cormorant)] text-[#3a2e2e] text-base">
                              · {a.nom}
                            </p>
                            {a.regime && (
                              <p className="font-[family-name:var(--font-cormorant)] text-rose-400 text-sm italic ml-4">
                                {a.regime}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {form.enfants.length > 0 && (
                      <div>
                        <p className="font-[family-name:var(--font-cormorant)] text-xs text-rose-400 uppercase tracking-widest mb-2">
                          Enfants ({form.enfants.length})
                        </p>
                        {form.enfants.map((e, i) => (
                          <div key={i} className="mb-2">
                            <p className="font-[family-name:var(--font-cormorant)] text-[#3a2e2e] text-base">
                              · {e.nom}
                            </p>
                            {e.regime && (
                              <p className="font-[family-name:var(--font-cormorant)] text-rose-400 text-sm italic ml-4">
                                {e.regime}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                <p className="font-[family-name:var(--font-cormorant)] text-lg text-gray-600 leading-relaxed">
                  {form.presence === "oui"
                    ? "Votre présence nous comble de joie. Nous avons hâte de partager ce jour avec vous ! 🎉"
                    : "Nous sommes désolés que vous ne puissiez pas être là, mais votre pensée nous touche beaucoup."}
                </p>
                <p className="text-sm text-rose-400 font-[family-name:var(--font-cormorant)]">
                  Un email de confirmation a été envoyé à {form.email}
                </p>
                <button
                  onClick={handleClose}
                  className="mt-2 bg-rose-500 hover:bg-rose-600 text-white font-bold py-2.5 px-8 rounded-full transition-colors font-[family-name:var(--font-playfair)] text-sm tracking-wide"
                >
                  Fermer
                </button>
              </div>
            ) : (
              /* ── Formulaire ── */
              <>
                {/* Header */}
                <div className="text-center mb-8">
                  <p className="font-[family-name:var(--font-cormorant)] text-rose-400 text-base tracking-[0.2em] uppercase mb-1">
                    Kath & Antoine · 4 janvier 2027
                  </p>
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#3a2e2e]">
                    Confirmer ma présence
                  </h2>
                  <div className="flex items-center gap-2 mt-3 justify-center">
                    <div className="h-px w-12 bg-rose-200" />
                    <span className="text-rose-300 text-xs">❧</span>
                    <div className="h-px w-12 bg-rose-200" />
                  </div>
                </div>

                <div className="flex flex-col gap-5">
                  {/* Nom du répondant */}
                  <div>
                    <label className={labelClass}>Votre nom complet *</label>
                    <input
                      type="text"
                      name="nom"
                      value={form.nom}
                      onChange={handleChange}
                      placeholder="Prénom et nom"
                      className={inputClass}
                      required
                    />
                  </div>

                  {/* Email + Téléphone */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="vous@email.com"
                        className={inputClass}
                        required
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Téléphone</label>
                      <input
                        type="tel"
                        name="telephone"
                        value={form.telephone}
                        onChange={handleChange}
                        placeholder="06 00 00 00 00"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Présence */}
                  <div>
                    <label className={labelClass}>
                      Serez-vous présent(e) ? *
                    </label>
                    <div className="flex gap-3">
                      {[
                        { value: "oui", label: "🎉 Avec joie !" },
                        { value: "non", label: "😢 Malheureusement non" },
                      ].map((option) => (
                        <label
                          key={option.value}
                          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border-2 cursor-pointer transition-all font-[family-name:var(--font-cormorant)] text-sm font-semibold ${
                            form.presence === option.value
                              ? "border-rose-400 bg-rose-50 text-rose-700"
                              : "border-rose-100 bg-white/60 text-gray-500 hover:border-rose-200"
                          }`}
                        >
                          <input
                            type="radio"
                            name="presence"
                            value={option.value}
                            checked={form.presence === option.value}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          {option.label}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Participants — uniquement si présence = oui */}
                  {form.presence === "oui" && (
                    <>
                      {/* ── Adultes ── */}
                      <div className="bg-white/50 border border-rose-100 rounded-2xl p-4 flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <p className={`${labelClass} mb-0`}>
                            Adultes{" "}
                            <span className="text-rose-300 font-normal">
                              ({form.adultes.length})
                            </span>
                          </p>
                          <button
                            type="button"
                            onClick={addAdulte}
                            className="flex items-center gap-1 text-xs text-rose-500 hover:text-rose-700 font-[family-name:var(--font-playfair)] font-semibold transition-colors bg-rose-50 hover:bg-rose-100 px-3 py-1 rounded-full"
                          >
                            + Ajouter un adulte
                          </button>
                        </div>

                        {form.adultes.map((participant, i) => (
                          <div
                            key={i}
                            className="flex flex-col gap-1.5 pb-3 border-b border-rose-50 last:border-0 last:pb-0"
                          >
                            {/* Ligne nom */}
                            <div className="flex items-center gap-2">
                              <span className="w-5 text-center text-rose-300 font-[family-name:var(--font-playfair)] text-sm shrink-0">
                                {i + 1}.
                              </span>
                              <input
                                type="text"
                                value={participant.nom}
                                onChange={(e) =>
                                  updateAdulte(i, "nom", e.target.value)
                                }
                                placeholder={
                                  i === 0
                                    ? "Votre prénom et nom"
                                    : "Prénom et nom"
                                }
                                className={inputClass}
                                required
                              />
                              {form.adultes.length > 1 && (
                                <button
                                  type="button"
                                  onClick={() => removeAdulte(i)}
                                  className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-rose-100 hover:bg-rose-200 text-rose-400 hover:text-rose-600 transition-colors text-sm font-bold"
                                  aria-label="Supprimer"
                                >
                                  ×
                                </button>
                              )}
                            </div>
                            {/* Ligne régime */}
                            <div className="ml-7">
                              <input
                                type="text"
                                value={participant.regime}
                                onChange={(e) =>
                                  updateAdulte(i, "regime", e.target.value)
                                }
                                placeholder="Régime, allergie… (optionnel)"
                                className={inputSmClass}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* ── Enfants ── */}
                      <div className="bg-white/50 border border-rose-100 rounded-2xl p-4 flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <p className={`${labelClass} mb-0`}>
                            Enfants{" "}
                            <span className="text-rose-300 font-normal">
                              ({form.enfants.length})
                            </span>
                          </p>
                          <button
                            type="button"
                            onClick={addEnfant}
                            className="flex items-center gap-1 text-xs text-rose-500 hover:text-rose-700 font-[family-name:var(--font-playfair)] font-semibold transition-colors bg-rose-50 hover:bg-rose-100 px-3 py-1 rounded-full"
                          >
                            + Ajouter un enfant
                          </button>
                        </div>

                        {form.enfants.length === 0 ? (
                          <p className="text-xs text-rose-300 font-[family-name:var(--font-cormorant)] italic pl-7">
                            Aucun enfant — cliquez sur Ajouter si nécessaire
                          </p>
                        ) : (
                          form.enfants.map((participant, i) => (
                            <div
                              key={i}
                              className="flex flex-col gap-1.5 pb-3 border-b border-rose-50 last:border-0 last:pb-0"
                            >
                              {/* Ligne nom */}
                              <div className="flex items-center gap-2">
                                <span className="w-5 text-center text-rose-300 font-[family-name:var(--font-playfair)] text-sm shrink-0">
                                  {i + 1}.
                                </span>
                                <input
                                  type="text"
                                  value={participant.nom}
                                  onChange={(e) =>
                                    updateEnfant(i, "nom", e.target.value)
                                  }
                                  placeholder="Prénom de l'enfant"
                                  className={inputClass}
                                />
                                <button
                                  type="button"
                                  onClick={() => removeEnfant(i)}
                                  className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-rose-100 hover:bg-rose-200 text-rose-400 hover:text-rose-600 transition-colors text-sm font-bold"
                                  aria-label="Supprimer"
                                >
                                  ×
                                </button>
                              </div>
                              {/* Ligne régime */}
                              <div className="ml-7">
                                <input
                                  type="text"
                                  value={participant.regime}
                                  onChange={(e) =>
                                    updateEnfant(i, "regime", e.target.value)
                                  }
                                  placeholder="Régime, allergie… (optionnel)"
                                  className={inputSmClass}
                                />
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </>
                  )}

                  {/* Message */}
                  <div>
                    <label className={labelClass}>
                      Un mot pour les mariés ✨
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Partagez vos vœux, un souvenir, une chanson pour la playlist…"
                      rows={3}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!isFormValid}
                    className="w-full mt-2 bg-rose-500 hover:bg-rose-600 disabled:bg-rose-200 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-full transition-colors font-[family-name:var(--font-playfair)] tracking-wide text-sm shadow-md hover:shadow-lg"
                  >
                    Envoyer ma réponse
                  </button>
                  <p className="text-center text-xs text-rose-300 font-[family-name:var(--font-cormorant)] -mt-2">
                    * Champs obligatoires
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
