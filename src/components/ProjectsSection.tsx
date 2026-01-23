import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Image, Target, BookOpen } from "lucide-react";

const projects = [
  {
    title: "Semi-Supervised ML for DDoS Detection",
    type: "Web-based Security Project",
    domain: "Network Security / Traffic Analysis",
    objective: "To identify potential DDoS attacks by analyzing network flow data and abnormal traffic patterns.",
    icon: Shield,
    contributions: [
      "Assisted in applying machine learning techniques for detecting traffic anomalies",
      "Used flow-level data to observe behavior under normal vs attack conditions",
      "Documented system responses and testing observations",
      "Supported validation of detection logic across different traffic scenarios",
    ],
    learnings: [
      "How traffic volume and flow patterns change during attacks",
      "The importance of clean data and validation in security systems",
      "Why detection accuracy matters more than flashy metrics",
    ],
    gradient: "linear-gradient(135deg, hsl(180 60% 15%) 0%, hsl(200 60% 25%) 100%)",
  },
  {
    title: "DESI-MEME-GENERATOR",
    type: "Web Application",
    domain: "Streamlit, Open-Source Models",
    objective: "To build a lightweight application allowing users to generate multilingual memes, even in low-bandwidth environments.",
    icon: Image,
    contributions: [
      "Contributed to feature implementation and testing",
      "Supported AI-assisted caption suggestions and translation",
      "Focused on usability and performance, especially for slow networks",
      "Helped address issues related to user-generated content during testing",
    ],
    learnings: [
      "How real users interact with applications",
      "Why performance and simplicity matter more than features",
      "Handling functional issues through structured debugging",
    ],
    gradient: "linear-gradient(135deg, hsl(280 60% 15%) 0%, hsl(320 60% 25%) 100%)",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary mono-text text-sm mb-4 tracking-wider">
            // MY PROJECTS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-primary glow-text">Projects</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card rounded-2xl overflow-hidden group hover:border-primary/50 
                         transition-all duration-500"
            >
              <div className="grid lg:grid-cols-3">
                {/* Left side - Project info */}
                <div
                  className="p-8 relative overflow-hidden flex flex-col justify-center"
                  style={{ background: project.gradient }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80 lg:block hidden" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/50 
                                    flex items-center justify-center mb-4 node-glow">
                      <project.icon size={28} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-foreground">{project.title}</h3>
                    <p className="text-sm text-primary mono-text mb-1">{project.type}</p>
                    <p className="text-xs text-muted-foreground">{project.domain}</p>
                  </div>
                </div>

                {/* Right side - Details */}
                <div className="lg:col-span-2 p-8 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Target size={18} className="text-primary" />
                      <h4 className="font-semibold text-foreground">Objective</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{project.objective}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Shield size={18} className="text-primary" />
                      <h4 className="font-semibold text-foreground">What I Worked On</h4>
                    </div>
                    <ul className="space-y-2">
                      {project.contributions.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen size={18} className="text-primary" />
                      <h4 className="font-semibold text-foreground">What I Learned</h4>
                    </div>
                    <ul className="space-y-2">
                      {project.learnings.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
