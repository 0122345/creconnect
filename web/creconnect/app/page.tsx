
 
import Home_card from "@/pages/components/Home_card";
import CreativeStudioPage from "@/pages/home";
import Index from "@/pages/home";
import VenuePage from "@/pages/venue/[id]/page";

import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center max-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="">
       
       <Image
        src="/assets/creconnect_logo.png"
        alt="Creconnect Logo"
        width={150}
        height={150}
        className="max-h-dvh max-w-dvw object-contain"
       /> 
      
      <nav className="">
        <span>Creconnect</span>

        <div className="flex flex-row items-center justify-center p-4 bg-white rounded-lg shadow-md gap-4">
          <span className="border border-s-2 border-white p-1 text-white">Create your space</span>
          <span className="bg-white text-black border p-1 rounded-b-xl">Login</span>
        </div>
      </nav>
      
      <main className="">
        <h1 className="">
          DISCOVER CREATIVE STUDIOS AND SPACES
        </h1>

         <div className="">
           <Home_card/>
         </div>
      </main>
      </div>
      <VenuePage />

      <CreativeStudioPage/>
    </div>
  );
}
