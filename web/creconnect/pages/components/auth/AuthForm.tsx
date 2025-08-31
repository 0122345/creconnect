import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";

interface Props {
  type: "login" | "signup";
}

export default function AuthForm({ type }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="space-y-4">
      {type === "signup" && (
        <div className="relative">
          <User className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Username"
            className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none"
          />
        </div>
      )}

      <div className="relative">
        <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
        <input
          type="email"
          placeholder="Email"
          className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none"
        />
      </div>

      <div className="relative">
        <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="w-full pl-10 pr-10 py-2 border rounded-md focus:outline-none"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3 text-gray-500"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {type === "login" && (
        <div className="text-right text-sm text-gray-500 cursor-pointer hover:underline">
          Forgot password?
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded-md hover:opacity-80"
      >
        {type === "login" ? "Login" : "Sign up"}
      </button>

      <div className="flex items-center my-4">
        <div className="flex-1 border-t"></div>
        <span className="px-2 text-gray-400 text-sm">OR</span>
        <div className="flex-1 border-t"></div>
      </div>

      <button
        type="button"
        className="w-full border flex items-center justify-center gap-2 py-2 rounded-md hover:bg-gray-100"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="google"
          className="w-5 h-5"
        />
        Continue with Google
      </button>
    </form>
  );
}
