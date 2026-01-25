import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, FileText, Users } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Search, text: "Analyzing system behavior under different conditions" },
    { icon: FileText, text: "Documenting observations clearly" },
    { icon: Users, text: "Supporting users and teams through structured problem-solving" },
  ];

  return (
    <section id="about" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Node visualization */}
          <div className="relative h-80 lg:h-96">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Central node */}
              <motion.div
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", repeatType: "loop" }}
                className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/80 to-accent/60 
                           node-glow flex items-center justify-center z-10"
                style={{ willChange: "transform" }}
              >
                <span className="text-2xl font-bold text-primary-foreground">2026</span>
              </motion.div>

              {/* Orbiting nodes */}
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-12 h-12 rounded-full bg-secondary border border-primary/30"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20 + i * 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    transformOrigin: "center",
                  }}
                >
                  <motion.div
                    className="absolute w-4 h-4 rounded-full bg-primary/60 node-glow"
                    style={{
                      top: "-50%",
                      left: "50%",
                      transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-${80 + i * 20}px)`,
                    }}
                  />
                </motion.div>
              ))}

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                {[60, 100, 140].map((radius, i) => (
                  <circle
                    key={i}
                    cx="50%"
                    cy="50%"
                    r={radius}
                    fill="none"
                    stroke="hsl(180 100% 50% / 0.1)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                ))}
              </svg>
            </div>
          </div>

          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block text-primary mono-text text-sm mb-4 tracking-wider"
            >
              // ABOUT ME
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Building Foundations in <span className="text-primary glow-text">Computer Science</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-lg leading-relaxed mb-6 text-justify max-w-prose"
            >
             I am a Computer Science and Engineering undergraduate (2026) with hands-on experience in software development,
             full-stack web applications, and Android app development gained through internships, academic projects, and student leadership roles. 
             I have practical exposure to technical troubleshooting, software issue diagnosis, problem resolution, and documentation, following structured workflows and defined processes. 
             I have worked with Python and Java (basic), cloud labs, and development tools while collaborating in remote, team-based environments. 
             I am a motivated learner with strong problem-solving, communication, and adaptability skills, suited for fast-paced, service-oriented and technical roles.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-3 mb-6"
            >
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <item.icon size={16} className="text-primary" />
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground/80 text-base leading-relaxed italic border-l-2 border-primary/50 pl-4"
            >
              I don't claim mastery — I focus on learning depth, correctness, and real-world applicability.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
