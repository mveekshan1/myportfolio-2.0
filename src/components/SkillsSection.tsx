import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Language" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "UI/UX Design", level: 88, category: "Design" },
  { name: "Python", level: 80, category: "Language" },
  { name: "AWS", level: 75, category: "Cloud" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-32 px-6" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary mono-text text-sm mb-4 tracking-wider">
            // MY SKILLS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Network of <span className="text-primary glow-text">Expertise</span>
          </h2>
        </motion.div>

        {/* Skills Network Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 relative overflow-hidden group
                         hover:border-primary/50 transition-all duration-300"
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {/* Node indicator */}
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
                    <h3 className="text-xl font-semibold text-foreground">{skill.name}</h3>
                  </div>
                  <span className="text-primary mono-text text-sm">{skill.level}%</span>
                </div>

                <span className="inline-block px-2 py-1 rounded bg-secondary/50 text-muted-foreground 
                                 text-xs mono-text mb-4">
                  {skill.category}
                </span>

                {/* Progress bar */}
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                    className="h-full rounded-full relative"
                    style={{
                      background: "linear-gradient(90deg, hsl(180 100% 50%), hsl(200 100% 60%), hsl(280 100% 65%))",
                    }}
                  >
                    <div className="absolute inset-0 bg-primary/30 animate-pulse-glow" />
                  </motion.div>
                </div>
              </div>

              {/* Connection lines decoration */}
              <svg
                className="absolute top-4 right-4 w-16 h-16 opacity-10 group-hover:opacity-30 transition-opacity"
                viewBox="0 0 100 100"
              >
                <circle cx="50" cy="20" r="4" fill="hsl(180 100% 50%)" />
                <circle cx="20" cy="80" r="4" fill="hsl(180 100% 50%)" />
                <circle cx="80" cy="80" r="4" fill="hsl(180 100% 50%)" />
                <line x1="50" y1="20" x2="20" y2="80" stroke="hsl(180 100% 50%)" strokeWidth="1" />
                <line x1="50" y1="20" x2="80" y2="80" stroke="hsl(180 100% 50%)" strokeWidth="1" />
                <line x1="20" y1="80" x2="80" y2="80" stroke="hsl(180 100% 50%)" strokeWidth="1" />
              </svg>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
