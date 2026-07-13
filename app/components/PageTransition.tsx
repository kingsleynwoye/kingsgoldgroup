"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function PageTransition() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed left-0 top-0 z-[99999] h-1 w-full origin-left overflow-hidden"
        >
          <div className="relative h-full w-full bg-gradient-to-r from-[#151716] via-[#D4AF37] to-[#FFD94A]">
            <motion.div
              animate={{
                x: ["-30%", "130%"],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-y-0 w-40 bg-gradient-to-r from-transparent via-white/60 to-transparent blur-md"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
