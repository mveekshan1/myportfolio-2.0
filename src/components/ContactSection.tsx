import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Linkedin, Github, ExternalLink, Phone, Code } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 px-6" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary mono-text text-sm mb-4 tracking-wider">
            // GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-primary glow-text">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            If you're looking for someone who learns fast, documents clearly, and 
            understands systems before tools — let's connect.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <a
                href="mailto:merugu.veekshangoud@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border
                           hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center
                               group-hover:node-glow transition-all duration-300">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium text-sm md:text-base">merugu.veekshangoud@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+919963111145"
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border
                           hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center
                               group-hover:node-glow transition-all duration-300">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone Number</p>
                  <p className="text-foreground font-medium text-sm md:text-base">+91 9963111145</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">Hyderabad, India</p>
                </div>
              </div>
            </div>

            {/* Social Links & CTA */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                <div className="flex gap-4 justify-center">
                  {[
                    { icon: Github, href: "https://github.com/mveekshan1", label: "GitHub" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/mveekshangoud", label: "LinkedIn" },
                    { logo: "HackerRank", href: "https://www.hackerrank.com/profile/veekshanmerugu11", label: "HackerRank" },
                  ].map((social, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex flex-col items-center gap-2"
                    >
                      <motion.a
                        href={social.href}
                        className="w-12 h-12 rounded-full bg-secondary border border-primary/20 
                                   flex items-center justify-center hover:border-primary/50 
                                   hover:node-glow transition-all duration-300 group"
                        aria-label={social.label}
                        whileHover={{ scale: 1.1 }}
                      >
                        {social.icon ? (
                          <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary 
                                                  transition-colors" />
                        ) : (
                          <img src="/hackerrank-logo.svg" alt={social.label} className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" />
                        )}
                      </motion.a>
                      <span className="text-xs text-muted-foreground">{social.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <a
                href="mailto:merugu.veekshangoud@gmail.com"
                className="mt-6 flex items-center justify-center gap-2 px-6 py-4 
                          bg-primary text-primary-foreground rounded-lg font-semibold
                          hover:shadow-glow-intense transition-all duration-300 hover:scale-[1.02]"
              >
                <ExternalLink size={18} />
                Send Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
