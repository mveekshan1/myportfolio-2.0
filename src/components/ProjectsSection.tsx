import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Neural Dashboard",
    description: "A real-time analytics dashboard with AI-powered insights and beautiful data visualizations.",
    tags: ["React", "D3.js", "Python", "ML"],
    image: "linear-gradient(135deg, hsl(220 60% 20%) 0%, hsl(280 60% 30%) 100%)",
  },
  {
    title: "ConnectHub",
    description: "Social networking platform focusing on professional collaboration and knowledge sharing.",
    tags: ["Next.js", "GraphQL", "PostgreSQL"],
    image: "linear-gradient(135deg, hsl(180 60% 20%) 0%, hsl(200 60% 30%) 100%)",
  },
  {
    title: "CryptoFlow",
    description: "Cryptocurrency portfolio tracker with real-time price updates and portfolio analytics.",
    tags: ["React Native", "Node.js", "WebSocket"],
    image: "linear-gradient(135deg, hsl(160 60% 20%) 0%, hsl(180 60% 30%) 100%)",
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
            Featured <span className="text-primary glow-text">Connections</span>
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
              <div className="grid lg:grid-cols-2">
                {/* Image/Preview area */}
                <div
                  className="h-64 lg:h-auto relative overflow-hidden"
                  style={{ background: project.image }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent lg:bg-gradient-to-r" />
                  
                  {/* Network decoration */}
                  <svg className="absolute inset-0 w-full h-full opacity-30">
                    <defs>
                      <pattern id={`grid-${index}`} width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="20" cy="20" r="1" fill="hsl(180 100% 50%)" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
                  </svg>

                  {/* Animated node */}
                  <motion.div
                    animate={{ 
                      x: [0, 30, 0, -30, 0],
                      y: [0, -20, 30, -20, 0],
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                               w-20 h-20 rounded-full bg-primary/20 border border-primary/50 
                               flex items-center justify-center node-glow"
                  >
                    <span className="text-2xl font-bold text-primary">0{index + 1}</span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary 
                                 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-secondary/50 border border-primary/20 
                                   text-sm mono-text text-primary/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground 
                                       rounded-lg font-medium hover:shadow-glow transition-all duration-300
                                       hover:scale-105">
                      <ExternalLink size={18} />
                      View Live
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 border border-primary/50 
                                       text-primary rounded-lg font-medium hover:bg-primary/10 
                                       transition-all duration-300 glow-border">
                      <Github size={18} />
                      Code
                    </button>
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
