"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Download() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-32 lg:py-40 overflow-hidden"
      id="download"
    >
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(75, 156, 211, 0.06) 0%, transparent 50%), radial-gradient(ellipse at 50% 100%, rgba(212, 165, 116, 0.06) 0%, transparent 50%)",
          }}
        />
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Animated concentric rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{
              duration: 1.2,
              delay: 0.2 + i * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute rounded-full border border-white/[0.03]"
            style={{
              width: `${280 + i * 160}px`,
              height: `${280 + i * 160}px`,
            }}
          />
        ))}
        {/* Pulsing ring */}
        <div
          className="absolute w-[200px] h-[200px] rounded-full border border-[var(--accent-warm)]/10"
          style={{
            animation: isInView ? "ring-pulse 3s ease-in-out infinite" : "none",
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight gradient-text leading-[1.15] pb-2">
            Ready to navigate?
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg text-[var(--text-secondary)] mb-12 max-w-lg mx-auto leading-relaxed"
          >
            Download Luminary today
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="https://apps.apple.com/us/app/luminary-navigation/id6754342125"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center p-1"
          >
            {/* Hover glow ring */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--accent-warm)]/0 via-[var(--accent-primary)]/0 to-[var(--accent-warm)]/0 group-hover:from-[var(--accent-warm)]/20 group-hover:via-[var(--accent-primary)]/20 group-hover:to-[var(--accent-warm)]/20 blur-xl transition-all duration-500 scale-110" />
            <Image
              src="/appstore.png"
              alt="Download on the App Store"
              height={78}
              width={264}
              className="relative w-auto h-14 sm:h-16 group-hover:scale-[1.03] transition-transform duration-300"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
