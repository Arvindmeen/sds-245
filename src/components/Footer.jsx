import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Linkedin, Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-200 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/40 to-purple-50/40 dark:from-blue-900/10 dark:to-purple-900/10 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand / About */}
        <div className="space-y-4 animate-fadeIn">
          <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400">Arvind Meena</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            We craft responsive, fast, and elegant web experiences with{" "}
            <span className="font-semibold">React</span>,{" "}
            <span className="font-semibold">Vite</span>, and{" "}
            <span className="font-semibold">TailwindCSS</span>.  
            Our mission is to deliver digital solutions that empower businesses and delight users.
          </p>
        </div>

        {/* Quick Links */}
        <div className="animate-slideUp">
          <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li>
              <Link to="/" className="hover:text-blue-500 transition-colors duration-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-500 transition-colors duration-300">About</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-500 transition-colors duration-300">Services</Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-blue-500 transition-colors duration-300">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="animate-slideUp delay-200">
          <h3 className="text-lg font-semibold mb-5">Contact</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3 hover:translate-x-1 transition-transform">
              <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              arvindmeena8171@gmail.com
            </li>
            <li className="flex items-center gap-3 hover:translate-x-1 transition-transform">
              <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              +91 72173 32482
            </li>
            <li className="flex items-center gap-3 hover:translate-x-1 transition-transform">
              <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Moradabad, Utter Pradesh, India
            </li>
          </ul>
        </div>

        {/* Newsletter / Socials */}
        <div className="animate-slideUp delay-300">
          <h3 className="text-lg font-semibold mb-5">Stay Connected</h3>
          <p className="text-sm mb-4 text-gray-600 dark:text-gray-400">
            Subscribe to our newsletter for the latest updates and insights.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm shadow transition"
            >
              Subscribe
            </button>
          </form>
          <div className="flex gap-5 mt-6 text-gray-600 dark:text-gray-400">
            <a href="https://instagram.com" target="https://www.instagram.com/rinku_meena014/" rel="noopener noreferrer" className="hover:text-pink-500 transition transform hover:scale-110">
              <Instagram size={22} />
            </a>
            <a href="https://linkedin.com" target="https://www.linkedin.com/in/arvind-meena-78a258288/" rel="noopener noreferrer" className="hover:text-blue-600 transition transform hover:scale-110">
              <Linkedin size={22} />
            </a>
            <a href="https://github.com" target="https://github.com/Arvindmeen" rel="noopener noreferrer" className="hover:text-gray-800 dark:hover:text-gray-100 transition transform hover:scale-110">
              <Github size={22} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition transform hover:scale-110">
              <Twitter size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-300 dark:border-gray-700 py-5 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>
          © {new Date().getFullYear()} <span className="font-semibold">MySite</span>.  
          All rights reserved. | Designed with ❤️ by Rinku
        </p>
      </div>
    </footer>
  );
}
