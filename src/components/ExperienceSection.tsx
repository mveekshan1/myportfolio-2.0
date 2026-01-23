import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Software Development Intern",
    company: "SkillCraft Technology",
    period: "Nov 2025 – Dec 2025",
    location: "Remote",
    points: [
      "Assisted in developing and testing software components",
      "Supported debugging by analyzing errors and following structured workflows",
      "Documented findings for team review and quality checks",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Cognifyz Technologies",
    period: "Apr 2025 – May 2025",
    location: "Remote",
    points: [
      "Worked on assigned development tasks under supervision",
      "Identified recurring issues and communicated them clearly to the team",
      "Followed organizational guidelines for reporting and task completion",
    ],
  },
  {
    title: "Mobile Application Developer Intern",
    company: "CodSoft",
    period: "Sep 2024 – Oct 2024",
    location: "Remote",
    points: [
      "Assisted in Android application development and testing",
      "Helped resolve basic usability and stability issues",
      "Communicated progress and challenges effectively",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary mono-text text-sm mb-4 tracking-wider">
            // EXPERIENCE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Work <span className="text-primary glow-text">Timeline</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-20"
              >
                {/* Timeline node */}
                <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-primary node-glow transform -translate-x-1/2" />
                
                <div className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="flex items-center gap-1 text-sm text-muted-foreground mono-text">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
