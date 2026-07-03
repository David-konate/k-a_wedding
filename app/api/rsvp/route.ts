import { NextResponse } from "next/server";

interface Invite {
  civilite: string;
  prenom: string;
  nom: string;
}

interface RSVPPayload {
  presence: "confirm" | "decline" | null;
  logement: "onSite" | "other" | null;
  navette: "shuttle" | "walk" | null;
  babyChoice: string | null;
  invites: Invite[];
}

export async function POST(request: Request) {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
  if (!scriptUrl) {
    return NextResponse.json(
      { ok: false, error: "GOOGLE_SCRIPT_URL manquante" },
      { status: 500 },
    );
  }

  let data: RSVPPayload;
  try {
    data = (await request.json()) as RSVPPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Corps de requête invalide" },
      { status: 400 },
    );
  }

  // Validation minimale côté serveur
  if (
    !data.presence ||
    !Array.isArray(data.invites) ||
    data.invites.length === 0
  ) {
    return NextResponse.json(
      { ok: false, error: "Champs obligatoires manquants" },
      { status: 400 },
    );
  }

  try {
    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      redirect: "follow",
    });

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: `Google a répondu ${res.status}` },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: String(err) },
      { status: 502 },
    );
  }
}
