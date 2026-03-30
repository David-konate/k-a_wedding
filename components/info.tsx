import Image from "next/image";

export default function Info() {
  return (
    <div className="flex flex-col items-center gap-16 ">
      <div
        className="w-full flex flex-col items-center gap-4 py-16 px-8"
        style={{ background: "linear-gradient(to bottom, #fce4ec, #fdf6f0)" }}
      >
        <div className="flex justify-center">
          <Image
            src="/mariage_chalet.jpg"
            alt="Kath & Antoine"
            width={250}
            height={150}
            className="rounded-2xl border-5 border-white shadow-xl rotate-[-5deg]"
          />
        </div>
        <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mt-10">
          Kath & Antoine vous invitent à célébrer leur mariage le :
        </h2>
        <p className="font-[family-name:var(--font-cormorant)] text-xl text-gray-600 tracking-wide">
          Le 4 janvier 2027
        </p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <h2 className="font-(family-name:--font-playfair) text-2xl font-bold">
          Lieu de la cérémonie
        </h2>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Chalet+du+Lac+1234+Route+des+Amoureux+56789+Ville"
          target="_blank"
          rel="noopener noreferrer"
          className="font-(family-name:--font-cormorant) text-xl text-gray-600 underline hover:text-rose-400"
        >
          Chalet du Lac, 1234 Route des Amoureux, 56789 Ville
        </a>
      </div>

      <div className="flex flex-col items-center gap-4">
        <h2 className="font-(family-name:--font-playfair) text-2xl font-bold">
          Lieu de la réception
        </h2>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Chalet+du+Lac+1234+Route+des+Amoureux+56789+Ville"
          target="_blank"
          rel="noopener noreferrer"
          className="font-(family-name:--font-cormorant) text-xl text-gray-600 underline hover:text-rose-400"
        >
          Chalet du Lac, 1234 Route des Amoureux, 56789 Ville
        </a>
      </div>

      <div className="flex flex-col items-center gap-4">
        <h2 className="font-(family-name:--font-playfair) text-2xl font-bold">
          Dress code / thème de la soirée
        </h2>
        <p className="font-(family-name:--font-cormorant) text-xl text-gray-600 text-center">
          les bronzés font du ski ^^.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <h2 className="font-(family-name:--font-playfair) text-2xl font-bold">
          Programme de la journée
        </h2>
        <ul className="font-(family-name:--font-cormorant) list-disc list-inside text-xl text-gray-600">
          <li>15h00 : Cérémonie à l&apos;extérieur</li>
          <li>16h30 : Cocktail et photos</li>
          <li>18h00 : Dîner et soirée dansante</li>
        </ul>
      </div>
    </div>
  );
}