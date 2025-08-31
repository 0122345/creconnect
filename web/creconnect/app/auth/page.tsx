"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AuthCard from "@/pages/components/auth/AuthCard";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      {/* Header */}
      <div className="flex justify-end p-6">
        <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md shadow-md hover:opacity-80 transition">
          <span className="material-icons">home</span>
          BACK TO HOME
        </button>
      </div>

      {/* Auth Section */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full max-w-5xl h-[600px] flex overflow-hidden rounded-2xl shadow-xl">
          <AnimatePresence mode="wait">
            {isLogin ? (
              <motion.div
                key="login"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute w-full h-full flex"
              >
                {/* Left (Black Welcome Panel) */}
                <div className="w-1/2 bg-black text-white flex flex-col items-center justify-center">
                  <h1 className="text-3xl font-bold mb-4">WELCOME BACK !</h1>
                  <p className="text-gray-300 text-center px-6">
                    To keep connected with us please sign up here. Join us and stay updated!
                  </p>
                  <button
                    onClick={() => setIsLogin(false)}
                    className="mt-6 bg-white text-black px-6 py-2 rounded-md shadow hover:bg-gray-200"
                  >
                    Sign up
                  </button>
                </div>

                {/* Right (Login Form) */}
                <div className="w-1/2 bg-white p-10 flex flex-col justify-center">
                  <AuthCard type="login" switchForm={() => setIsLogin(false)} />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="signup"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute w-full h-full flex"
              >
                {/* Left (Signup Form) */}
                <div className="w-1/2 bg-white p-10 flex flex-col justify-center">
                  <AuthCard type="signup" switchForm={() => setIsLogin(true)} />
                </div>

                {/* Right (Black Welcome Panel) */}
                <div className="w-1/2 bg-black text-white flex flex-col items-center justify-center">
                  <h1 className="text-3xl font-bold mb-4">WELCOME BACK !</h1>
                  <p className="text-gray-300 text-center px-6">
                    To keep connected with us please login here. Join us and stay updated!
                  </p>
                  <button
                    onClick={() => setIsLogin(true)}
                    className="mt-6 bg-white text-black px-6 py-2 rounded-md shadow hover:bg-gray-200"
                  >
                    Login
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-gray-300 py-10 mt-7 px-6 md:px-20">
        <div className="grid md:grid-cols-4 gap-10 text-sm">
          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">creconnect</h3>
            <ul className="space-y-2">
              <li>Venues</li>
              <li>Studios</li>
              <li>Booking</li>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p>123 Street, Kigali, Rwanda</p>
            <p>+250 791639654</p>
            <p>info@creoconnect.com</p>
            <div className="flex gap-3 mt-3">
              <i className="fab fa-twitter" />
              <i className="fab fa-facebook" />
              <i className="fab fa-instagram" />
              <i className="fab fa-linkedin" />
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <h3 className="font-bold mb-4">Why choose Us?</h3>
            <ul className="space-y-2">
              <li>✅ Simple & Fast Booking</li>
              <li>✅ Trusted & Verified Listings</li>
              <li>✅ Real People, Real Support</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold mb-4">Newsletter</h3>
            <p className="mb-3">Dolor amet sit justo amet elit clita ipsum elit est.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 w-full rounded-l-md focus:outline-none text-black"
              />
              <button className="bg-white text-black px-4 py-2 rounded-r-md">SIGNUP</button>
            </div>
          </div>
        </div>
        <div className="text-center mt-10 text-xs text-gray-400">
          © Creoconnect, All Right Reserved 2025
        </div>
      </footer>
    </div>
  );
}
