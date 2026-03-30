import Image from "next/image";

export default function Info() {
  return (
    <div className="flex flex-col items-center gap-16">
      <div className="flex flex-col items-center gap-4">
        <div className="flex justify-center">
          <Image
            src="/mariage_chalet.jpg"
            alt="Kath & Antoine"
            width={250}
            height={150}
            className="rounded-2xl border-5 border-white shadow-xl rotate-[-10deg]"
          />
        </div>
        <h2 className="text-2xl font-bold mt-10">
          Kath & Antoine, vous invite à célébrer leur mariage le :
        </h2>
        <p className="text-lg text-gray-600">Le 4 janvier 2027</p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold">Lieu de la cérémonie</h2>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Chalet+du+Lac+1234+Route+des+Amoureux+56789+Ville"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg  text-gray-600 underline hover:text-blue-700"
        >
          Chalet du Lac, 1234 Route des Amoureux, 56789 Ville
        </a>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold">Lieu de la réception</h2>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Chalet+du+Lac+1234+Route+des+Amoureux+56789+Ville"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg  text-gray-600 underline hover:text-blue-700"
        >
          Chalet du Lac, 1234 Route des Amoureux, 56789 Ville
        </a>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold">Dress code</h2>
        <p className="text-lg text-gray-600">
          Tenue de cocktail élégante, avec une touche de rouge pour les dames et
          de bleu pour les messieurs.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold">Programme de la journée</h2>
        <ul className="list-disc list-inside text-lg text-gray-600">
          <li>15h00 : Cérémonie à l&apos;extérieur</li>
          <li>16h30 : Cocktail et photos</li>
          <li>18h00 : Dîner et soirée dansante</li>
        </ul>
      </div>
    </div>
  );
}
