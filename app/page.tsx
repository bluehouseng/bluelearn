import Image from "next/image";
import Maintenace from "@/public/svg/maintenance.svg";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col justify-center row-start-2 items-center sm:items-start">
        <Image
          className=""
          src={Maintenace}
          alt="Bluelearn logo"
          width={280}
          height={138}
          priority
        />
        <div className="text-center w-full">
          <h1 className="text-5xl font-bold">Bluelearn Africa</h1>
          <p className="text-lg">...coming soon!!!</p>
        </div>
      </main>
    </div>
  );
}
