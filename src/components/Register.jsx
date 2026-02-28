import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../utils/api"; // adjust path if needed
import { useState } from "react";

export default function Register() {

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      setLoading(true);

      const response = await api.post("/api/signup", data);

      console.log("Signup Success:", response.data);

      alert("Account Created Successfully!");

      e.target.reset(); // clear form

    } catch (error) {
      console.error("Signup Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl backdrop-blur-lg border border-gray-200 dark:border-gray-700"
      >

        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-extrabold text-center text-blue-600 dark:text-blue-400 mb-6"
        >
          Create Your Account
        </motion.h2>

        {/* ✅ Added onSubmit */}
        <form className="space-y-5" onSubmit={handleSubmit}>

          {/* Full Name */}
          <div className="relative">
            <input
              name="name"   // ✅ added
              type="text"
              required
              className="peer w-full px-4 py-3 border rounded-lg bg-transparent text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter Your Name"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <input
              name="email"   // ✅ added
              type="email"
              required
              className="peer w-full px-4 py-3 border rounded-lg bg-transparent text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Email"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <input
              name="password"   // ✅ added
              type="password"
              required
              className="peer w-full px-4 py-3 border rounded-lg bg-transparent text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Password"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-md transition"
          >
            {loading ? "Creating..." : "Sign Up"}
          </motion.button>
        </form>

        {/* Rest unchanged */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-grow h-[1px] bg-gray-300 dark:bg-gray-600"></div>
          <span className="text-gray-500 dark:text-gray-400 text-sm">OR</span>
          <div className="flex-grow h-[1px] bg-gray-300 dark:bg-gray-600"></div>
        </div>

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