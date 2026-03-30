
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans bg-zinc-50 dark:bg-black">
      {/* Header HORS du max-w-3xl */}
      <Header />

      {/* Contenu limité en largeur */}
      <main className="flex flex-1 w-full max-w-3xl flex-col mx-auto py-32 px-16">
        {/* reste du contenu */}
      </main>
    </div>
  );
}