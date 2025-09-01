// import Link from "next/link";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       <div className="w-full max-w-4xl flex flex-col items-center gap-8">
//         <Image
//           src="/assets/creconnect_logo.png"
//           alt="Creconnect Logo"
//           width={150}
//           height={150}
//           className="object-contain"
//         />

//         <nav className="w-full flex items-center justify-between">
//           <span className="text-lg font-semibold">Creconnect</span>
//           <div className="flex flex-row items-center gap-4">
//             <Link href="/home" className="px-3 py-2 rounded border">
//               Explore
//             </Link>
//             <Link href="/auth" className="px-3 py-2 rounded bg-black text-white">
//               Create your space
//             </Link>
//           </div>
//         </nav>

//         <main className="w-full text-center space-y-6 z-[-20]">
//           <div className="">
//             <Image
//               src={"https://www.shootfactory.co.uk/wp-content/uploads/2019/04/What-is-Studio-Photography.jpg"}
//               alt="Hero Image"
//               fill
//               className="mx-auto object-contain"
//             />
//           </div>
//           <div className="z-1">
//           <h1 className="text-2xl sm:text-3xl font-bold">
//             DISCOVER CREATIVE STUDIOS AND SPACES
//           </h1>

//           <div className="flex items-center justify-center gap-4">
//             <Link href="/homescreen" className="px-4 py-2 rounded border">
//               Go to Home
//             </Link>
//             <Link href="/dashboards/venuedashboard" className="px-4 py-2 rounded border">
//               View a Venue
//             </Link>
//             <Link href="/dashboards" className="px-4 py-2 rounded border">
//               Profile example
//             </Link>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-gray-500 to-gray-700 flex flex-col items-center justify-center p-8 sm:p-16 overflow-hidden relative">
      {/* Floating gradient background circles */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-pink-400 rounded-full blur-3xl"
      />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/assets/creconnect_logo.png"
          alt="Creconnect Logo"
          width={150}
          height={150}
          className="object-contain drop-shadow-lg"
        />
      </motion.div>

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="w-full max-w-5xl flex items-center justify-between mt-6 px-4"
      >
        <span className="text-lg font-bold tracking-wide">Creconnect</span>
        <div className="flex flex-row items-center gap-4">
          <Link
            href="/home"
            className="px-4 py-2 rounded-xl border hover:bg-gray-100 transition"
          >
            Explore
          </Link>
          <Link
            href="/auth/login/"
            className="px-4 py-2 rounded-xl bg-black text-white hover:bg-gray-800 transition shadow-lg"
          >
            Create your space
          </Link>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center mt-16 space-y-8 w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full h-[300px] sm:h-[450px] overflow-hidden rounded-2xl shadow-xl"
        >
          <Image
            src="https://www.shootfactory.co.uk/wp-content/uploads/2019/04/What-is-Studio-Photography.jpg"
            alt="Hero Image"
            fill
            className="object-cover hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow-lg"
            >
              DISCOVER CREATIVE STUDIOS AND SPACES
            </motion.h1>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/homescreen"
            className="px-6 py-3 rounded-xl border hover:bg-gray-200 transition"
          >
            Go to Home
          </Link>
          <Link
            href="/dashboards/venuedashboard"
            className="px-6 py-3 rounded-xl border hover:bg-gray-200 transition"
          >
            View a Venue
          </Link>
          <Link
            href="/dashboards"
            className="px-6 py-3 rounded-xl border hover:bg-gray-200 transition"
          >
            Profile example
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
