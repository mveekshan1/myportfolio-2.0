import { motion } from "framer-motion";
import { Code } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen px-6 overflow-hidden flex items-center">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />

      {/* Content readability overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">

        {/* TOP BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                           bg-secondary/50 border border-primary/20 
                           text-primary mono-text text-sm tracking-wider">
            <Code size={16} />
            COMPUTER SCIENCE AND ENGINEERING
          </span>
        </motion.div>

        {/* PHOTO + TITLE ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10">

          {/* LEFT — PROFILE PHOTO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center md:justify-end"
          >
            <motion.img
              src="/profile.jpg"
              alt="Profile"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-33 h-47 md:w-52 md:h-60 rounded-full object-cover 
                         border-2 border-primary/60 shadow-glow"
            />
          </motion.div>

          {/* RIGHT — TITLE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-left"
          >
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl">
              <span className="glow-text text-primary whitespace-nowrap">
                Computer Science
              </span>
              <br />
              <span className="text-foreground">Engineering</span>
            </h1>
          </motion.div>
        </div>

        {/* DESCRIPTION + CTA — CENTERED BLOCK */}
        <div className="mt-16 text-center">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed"
          >
            Focused on computer science fundamentals, system behavior, and applied
            problem solving through academic projects and hands-on labs.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            I work best at the intersection of systems, data, and structured troubleshooting —
            understanding how things behave, why they break, and how to detect anomalies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center"
          >
            <a
              href="#about"
              className="relative px-10 py-4 rounded-lg font-semibold text-primary
                         border border-primary/40 bg-secondary/30
                         hover:bg-primary hover:text-primary-foreground
                         transition-all duration-300"
            >
              Enter Portfolio
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
