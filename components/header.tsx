import Image from "next/image";

export default function Header() {
  return (
    <div
      className="w-screen h-[50vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/chalet.webp')" }}
    >

      <div className="absolute inset-0 bg-black/50" />

   
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-3xl font-bold text-white">Kath & Antoine wedding</h1>
      </div>
    </div>
  );
}