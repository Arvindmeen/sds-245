import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
        {/* Avatar Section */}
        <div className="flex flex-col items-center mb-6">
          <motion.div
            animate={{
              rotate: email.length > 0 ? 5 : 0, // head tilts when typing username
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-24 h-24 bg-gradient-to-tr from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-400 rounded-full flex items-center justify-center shadow-lg relative"
          >
            {/* Eyes */}
            <div className="flex space-x-4">
              <motion.div
                className="w-4 h-4 bg-black rounded-full"
                animate={{
                  scaleY: password.length > 0 && !showPassword ? 0.1 : 1, // closes when typing password
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                className="w-4 h-4 bg-black rounded-full"
                animate={{
                  scaleY:
                    password.length > 0 && !showPassword
                      ? 0.1 // closed
                      : showPassword
                      ? 0.7 // half-open when "show password"
                      : 1, // normal
                }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.div>
          <h2 className="text-2xl font-bold mt-3 text-blue-600 dark:text-blue-400">
            Welcome Back
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Login to continue your journey
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none transition"
            />
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-blue-600 dark:text-blue-400"
            >
              {showPassword ? "🙈 Hide" : "👁 Show"}
            </button>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-lg transition font-semibold"
          >
            Login
          </motion.button>
        </form>

        {/* Extra Links */}
        <p className="text-sm text-center mt-6 text-gray-600 dark:text-gray-400">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-500 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
