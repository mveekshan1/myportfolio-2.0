import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Code, Server, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Networking & Security",
    icon: Shield,
    subtitle: "Foundational",
    skills: [
      "Understanding of network traffic flows",
      "Exposure to DDoS attack detection concepts",
      "Observing and documenting system behavior under load",
    ],
  },
  {
    title: "Programming",
    icon: Code,
    subtitle: "Languages",
    skills: [
      "Python (basic, applied in ML and scripting)",
      "Java (basic, academic usage)",
    ],
  },
  {
    title: "Systems & Tools",
    icon: Server,
    subtitle: "Infrastructure",
    skills: [
      "Linux (basic system usage and troubleshooting)",
      "Git & GitLab (version control)",
      "Firebase",
      "Apache",
      "Windows environments",
    ],
  },
  {
    title: "Development",
    icon: Wrench,
    subtitle: "Full Stack",
    skills: [
      "Full-Stack Web Development (academic & internship exposure)",
      "Android Application Development (assisted development and testing)",
    ],
  },
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
            // SKILLS & KNOWLEDGE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Technical <span className="text-primary glow-text">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 relative overflow-hidden group
                         hover:border-primary/50 transition-all duration-300"
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center
                                  group-hover:node-glow transition-all duration-300">
                    <category.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                    <span className="text-xs text-muted-foreground mono-text">{category.subtitle}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 + i * 0.05 }}
                      className="flex items-start gap-3 text-muted-foreground text-sm"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0 animate-pulse-glow" />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
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
