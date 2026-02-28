import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../utils/api";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { signIn } = useAuth();   // ✅ get from context
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/api/signin", {
        email,
        password,
      });

      // ✅ Update global auth state
      signIn(response.data.user);

      // ✅ Redirect
      navigate("/personal-dashboard");

    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl relative overflow-hidden">

        {/* Avatar Section */}
        <div className="flex flex-col items-center mb-6">
          <motion.div
            animate={{ rotate: email.length > 0 ? 5 : 0 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-24 h-24 bg-gradient-to-tr from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-400 rounded-full flex items-center justify-center shadow-lg relative"
          >
            <div className="flex space-x-4">
              <motion.div
                className="w-4 h-4 bg-black rounded-full"
                animate={{
                  scaleY: password.length > 0 && !showPassword ? 0.1 : 1,
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                className="w-4 h-4 bg-black rounded-full"
                animate={{
                  scaleY:
                    password.length > 0 && !showPassword
                      ? 0.1
                      : showPassword
                      ? 0.7
                      : 1,
                }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.div>

          <h2 className="text-2xl font-bold mt-3 text-blue-600 dark:text-blue-400">
            Welcome Back
          </h2>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg dark:bg-gray-700"
            required
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg dark:bg-gray-700"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-blue-600"
            >
              {showPassword ? "🙈 Hide" : "👁 Show"}
            </button>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-lg"
          >
            Login
          </motion.button>
        </form>

        <p className="text-sm text-center mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-500 font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}