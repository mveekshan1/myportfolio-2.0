import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/80 to-accent/60 
                           node-glow flex items-center justify-center z-10"
              >
                <span className="text-3xl font-bold text-primary-foreground">ME</span>
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
              A Node in the <span className="text-primary glow-text">Digital Network</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-lg leading-relaxed mb-6"
            >
              I'm a passionate developer and designer who believes in the power of connections. 
              Just like nodes in a network, I thrive on building bridges between ideas, 
              technologies, and people.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              With expertise in modern web technologies and a keen eye for design, 
              I create experiences that not only look stunning but also form meaningful 
              connections with users.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-8 flex gap-6"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary glow-text">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary glow-text">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary glow-text">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
