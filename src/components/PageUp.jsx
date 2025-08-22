import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function PageUp() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight || 1;
      setVisible(y > 180);
      setProgress(Math.min(1, Math.max(0, y / max)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      window.scrollTo(0, 0);
    }
  };

  const variants = {
    hidden: { opacity: 0, scale: 0.6, y: 12 },
    show: { opacity: 1, scale: 1, y: 0 },
    tap: { scale: 0.94 },
    hover: prefersReducedMotion ? {} : { y: -2, scale: 1.04 },
  };

  const angle = Math.round(progress * 360);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="page-up"
          initial="hidden"
          animate="show"
          exit="hidden"
          whileTap="tap"
          whileHover="hover"
          variants={variants}
          onClick={goTop}
          aria-label="Scroll to top"
          title="Back to top"
          className="group fixed bottom-6 right-6 z-50 h-12 w-12 sm:h-14 sm:w-14 rounded-full p-[2px] shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/40 dark:focus-visible:ring-gray-400/40"
          style={{
            background: `conic-gradient(currentColor ${angle}deg, transparent 0)`,
            color: "rgb(59 130 246)",
          }}
        >
          <span className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white dark:from-gray-500 dark:to-gray-600">
            <span className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-xl opacity-40 bg-gray-500/40 dark:bg-gray-500/40" />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              className="h-5 w-5 sm:h-6 sm:w-6 drop-shadow-sm"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 11l7-7 7 7"
              />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16" />
            </svg>

            <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-black/80 px-2.5 py-1 text-xs font-medium text-white/90 shadow-md backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100 dark:bg-white/10 sm:block opacity-0">
              Page up
            </span>
          </span>

          <span className="pointer-events-none absolute inset-[2px] rounded-full ring-1 ring-black/10 dark:ring-white/10" />

          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 shadow"
            style={{
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-25px)`,
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
