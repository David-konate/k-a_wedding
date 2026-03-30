export default function Header() {
  return (
    <div
      className="relative w-full h-[50vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/chalet.webp')" }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-2">
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-white tracking-wide">
          Kath & Antoine
        </h1>
        <p className="font-[family-name:var(--font-cormorant)] text-xl font-light text-white/80 tracking-widest uppercase">
          Wedding
        </p>
      </div>
    </div>
  );
}
