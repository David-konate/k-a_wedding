"use client";

import Image from "next/image";
import { useState } from "react";
import RSVPModal from "./modal/RSVPModal";

export default function Reservation() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center gap-16 py-16">
        <div
          className="w-full flex flex-col items-center gap-4 py-16 px-8"
          style={{ background: "linear-gradient(to bottom, #fce4ec, #fdf6f0)" }}
        >
          <Image
            src="/jeunes_maries.jpeg"
            alt="Kath & Antoine"
            width={250}
            height={150}
            className="rounded-2xl border-5 border-white shadow-xl rotate-[5deg]"
          />
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mt-10">
            Nous espérons vous avoir à nos côtés pour cette journée si spéciale
          </h2>
          <p className="font-[family-name:var(--font-cormorant)] text-xl text-gray-600 tracking-wide">
            Veuillez confirmer votre présence avant le 20 juillet de cette
            année.
          </p>

          <div className="mt-5">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded"
            >
              Confirmer ma présence
            </button>
          </div>
        </div>
      </div>

      <RSVPModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
