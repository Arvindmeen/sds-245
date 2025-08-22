import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Sun, Moon, User } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full shadow-md bg-white dark:bg-gray-900 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Arvind Meena
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400 ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-500"
                    : "text-gray-700 dark:text-gray-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200  dark:text-white/80 dark:hover:bg-gray-700 transition"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Profile Icon */}
          <button className="p-2 rounded-full hover:bg-gray-200 dark:text-white/80 dark:hover:bg-gray-700 transition">
            <User size={20} />
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col space-y-4 bg-white dark:bg-gray-900 shadow-lg">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400 ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400 font-semibold border-l-4 pl-2 border-blue-500"
                    : "text-gray-700 dark:text-gray-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
