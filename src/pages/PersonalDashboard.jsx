import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

const PersonalDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-950 via-black to-purple-950 text-white flex items-center justify-center px-6">

      {/* Animated Background Glow Orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-3xl"
        animate={{ x: [0, 100, -100, 0], y: [0, -100, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] bg-indigo-500/30 rounded-full blur-3xl"
        animate={{ x: [0, -120, 120, 0], y: [0, 120, -120, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Main Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-12 w-full max-w-4xl"
      >

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Welcome Back 🔥
          </h1>
          <p className="mt-4 text-gray-300 text-lg tracking-wide">
            You are successfully authenticated and logged into your premium dashboard.
          </p>
        </motion.div>

        {/* User Info Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Name Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-white/20 backdrop-blur-md shadow-xl transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 hover:opacity-20 rounded-2xl transition duration-500"></div>

            <h2 className="text-2xl font-semibold mb-4 tracking-wider text-indigo-300">
              👤 Full Name
            </h2>
            <p className="text-3xl font-bold text-white tracking-wide">
              {user?.name || "Loading..."}
            </p>
          </motion.div>

          {/* Email Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-600/20 to-indigo-600/20 border border-white/20 backdrop-blur-md shadow-xl transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 hover:opacity-20 rounded-2xl transition duration-500"></div>

            <h2 className="text-2xl font-semibold mb-4 tracking-wider text-purple-300">
              📧 Email Address
            </h2>
            <p className="text-2xl font-bold text-white break-all">
              {user?.email || "Loading..."}
            </p>
          </motion.div>
        </div>

        {/* Bottom Decorative Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-14 text-center"
        >
          <p className="text-gray-400 tracking-wide">
            🚀 Powered by Secure JWT Authentication • Built with Modern React Architecture
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default PersonalDashboard;