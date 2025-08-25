import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl backdrop-blur-lg border border-gray-200 dark:border-gray-700"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-extrabold text-center text-blue-600 dark:text-blue-400 mb-6"
        >
          Create Your Account
        </motion.h2>

        {/* Form */}
        <form className="space-y-5">
          {/* Full Name */}
          <div className="relative">
            <input
              type="text"
              required
              className="peer w-full px-4 py-3 border rounded-lg bg-transparent text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter Your Name"
            />
            <label className="absolute left-3 top-3 text-gray-500 dark:text-gray-400 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600 dark:peer-focus:text-blue-400">
              {/* Full Name */}
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              required
              className="peer w-full px-4 py-3 border rounded-lg bg-transparent text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Email"
            />
            <label className="absolute left-3 top-3 text-gray-500 dark:text-gray-400 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600 dark:peer-focus:text-blue-400">
             
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              required
              className="peer w-full px-4 py-3 border rounded-lg bg-transparent text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Password"
            />
            <label className="absolute left-3 top-3 text-gray-500 dark:text-gray-400 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600 dark:peer-focus:text-blue-400">
             
            </label>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-md transition"
          >
            Sign Up
          </motion.button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-grow h-[1px] bg-gray-300 dark:bg-gray-600"></div>
          <span className="text-gray-500 dark:text-gray-400 text-sm">OR</span>
          <div className="flex-grow h-[1px] bg-gray-300 dark:bg-gray-600"></div>
        </div>

        {/* Social Sign Up (Optional) */}
        <div className="flex flex-col gap-3">
          <button className="flex items-center justify-center gap-2 w-full py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="google" className="w-5 h-5" />
            Sign up with Google
          </button>
          <button className="flex items-center justify-center gap-2 w-full py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="github" className="w-5 h-5" />
            Sign up with GitHub
          </button>
        </div>

        {/* Footer */}
        <p className="text-sm text-center mt-6 text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline font-medium">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
