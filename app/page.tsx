import Header from "@/components/Header";
import Info from "@/components/Info";
import Reservation from "@/components/Reservation";



export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Header />

      <main className="flex flex-1 w-full flex-col mx-auto">
        <Info />
        <Reservation />
      </main>
    </div>
  );
}
