import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 border-b bg-white">
      <h1 className="text-2xl font-bold">Creconnect</h1>
      <div className="flex gap-4">
        <Link href="#" className="px-4 py-2 border rounded-lg">Explore</Link>
        <Link href="#" className="px-4 py-2 border rounded-lg bg-black text-white">
          Create your space
        </Link>
      </div>
    </nav>
  );
}
