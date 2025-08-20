import { Code, Smartphone, Palette, Rocket, ShieldCheck, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
      title: "Web Development",
      desc: "We specialize in building fast, secure, and modern web applications using React, Vite, and the latest technologies. Our focus is on performance, scalability, and seamless user experience that helps businesses grow online.",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-green-600 dark:text-green-400" />,
      title: "Responsive Design",
      desc: "Every project we build is fully responsive, ensuring that your website looks and feels perfect on all devices — desktops, laptops, tablets, and smartphones. We prioritize accessibility and usability across platforms.",
    },
    {
      icon: <Palette className="w-12 h-12 text-pink-600 dark:text-pink-400" />,
      title: "UI/UX Design",
      desc: "We design clean, modern, and user-friendly interfaces that elevate your brand. With attention to typography, color palettes, and layouts, we create designs that are both aesthetically pleasing and highly functional.",
    },
    {
      icon: <Rocket className="w-12 h-12 text-purple-600 dark:text-purple-400" />,
      title: "Performance Optimization",
      desc: "Speed is critical. We optimize loading times, improve Core Web Vitals, and fine-tune backend & frontend performance so your users enjoy a smooth and lightning-fast browsing experience.",
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-yellow-600 dark:text-yellow-400" />,
      title: "Security & Reliability",
      desc: "Our applications are built with security in mind — from safe authentication systems to protected APIs. We ensure your platform is resilient, secure, and always available for your users.",
    },
    {
      icon: <Globe className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />,
      title: "SEO & Global Reach",
      desc: "We integrate SEO best practices, ensuring your business is discoverable worldwide. With optimized metadata, structured content, and fast performance, we help you reach a global audience.",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          We don’t just build websites, we craft digital experiences. From coding robust backends to 
          designing elegant interfaces, we ensure that your product is modern, functional, and loved by users.
        </motion.p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700 
                         hover:shadow-2xl hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="mb-6 flex justify-center">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
