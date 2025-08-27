import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="w-full max-w-4xl flex flex-col items-center gap-8">
        <Image
          src="/assets/creconnect_logo.png"
          alt="Creconnect Logo"
          width={150}
          height={150}
          className="object-contain"
        />

        <nav className="w-full flex items-center justify-between">
          <span className="text-lg font-semibold">Creconnect</span>
          <div className="flex flex-row items-center gap-4">
            <Link href="/home" className="px-3 py-2 rounded border">
              Explore
            </Link>
            <Link href="#" className="px-3 py-2 rounded bg-black text-white">
              Create your space
            </Link>
          </div>
        </nav>

        <main className="w-full text-center space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold">
            DISCOVER CREATIVE STUDIOS AND SPACES
          </h1>

          <div className="flex items-center justify-center gap-4">
            <Link href="/homescreen" className="px-4 py-2 rounded border">
              Go to Home
            </Link>
            <Link href="/studio" className="px-4 py-2 rounded border">
              View a Venue
            </Link>
            <Link href="/dashboards" className="px-4 py-2 rounded border">
              Profile example
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
