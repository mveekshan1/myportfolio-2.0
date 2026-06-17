import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Trophy, Users } from "lucide-react";

const achievements = [
  "Honourable Mention — Hack4SDG (IIT Hyderabad)",
  "3rd Place — Hack-N-Win (Microsoft Hackathon, MRCE)",
];

const certifications = [
  {
    name: "Infosys Springboard — Core Java, HTML (Advanced), AI with Python",
    link: ""
  },
  {
    name: "Google Cloud Skills Boost — Hands-on Labs & Public Badge",
    link: "https://www.skills.google/public_profiles/a3350b93-b5fe-4849-afc0-efeaf9951c98"
  },
  {
    name: "HackerRank — Python (Basic)",
    link: "https://www.hackerrank.com/certificates/24f05f6c073b"
  }
];


const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative py-32 px-6" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary mono-text text-sm mb-4 tracking-wider">
            // CREDENTIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Education & <span className="text-primary glow-text">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center node-glow">
                <GraduationCap size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Education</h3>
            </div>

            <div className="space-y-2">
              <p className="text-foreground font-medium">B.Tech — Computer Science & Engineering</p>
              <p className="text-primary text-sm">Malla Reddy College of Engineering</p>
              <div className="flex items-center gap-4 mt-4">
                <span className="px-3 py-1 rounded-full bg-secondary/50 border border-primary/20 text-sm mono-text">
                  GPA: 7.83
                </span>
                <span className="text-muted-foreground text-sm">2022 – Present</span>
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center node-glow">
                <Trophy size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Achievements</h3>
            </div>

            <ul className="space-y-3">
              {achievements.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <span className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center node-glow">
                <Users size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Leadership</h3>
            </div>

            <div className="space-y-2">
              <p className="text-foreground font-medium">Acting President — TECHIE-HUB CSE</p>
              <ul className="space-y-2 mt-3">
                <li className="flex items-start gap-2 text-muted-foreground text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Coordinated student technical activities
                </li>
                <li className="flex items-start gap-2 text-muted-foreground text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Assisted peers with basic technical guidance
                </li>
                <li className="flex items-start gap-2 text-muted-foreground text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Encouraged collaborative and inclusive learning
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="text-primary mono-text text-sm">📜</span>
            Certifications
          </h3>
          <div className="flex flex-wrap gap-3">
            <div className="flex flex-wrap gap-3">
  {certifications.map((cert, i) => (
    <a
      key={i}
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group px-4 py-2 rounded-full bg-secondary/50 border border-primary/20 
                 text-sm text-muted-foreground cursor-pointer
                 hover:border-primary/50 hover:text-foreground
                 hover:underline underline-offset-4
                 transition-all duration-300 flex items-center gap-2"
    >
      {cert.name}
      <span className="opacity-0 group-hover:opacity-100 transition">↗</span>
    </a>
  ))}
</div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
