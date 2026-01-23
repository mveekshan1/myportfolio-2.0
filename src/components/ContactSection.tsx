import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Linkedin, Github, Twitter } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="relative py-32 px-6" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary mono-text text-sm mb-4 tracking-wider">
            // GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-primary glow-text">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to start a new connection? I'm always open to discussing new projects, 
            creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card rounded-xl p-6 flex items-center gap-4 group 
                           hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center
                             group-hover:node-glow transition-all duration-300">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground font-medium">hello@yourname.com</p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 flex items-center gap-4 group
                           hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center
                             group-hover:node-glow transition-all duration-300">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground font-medium">San Francisco, CA</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="w-12 h-12 rounded-full bg-secondary border border-primary/20 
                             flex items-center justify-center hover:border-primary/50 
                             hover:node-glow transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary 
                                          transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="glass-card rounded-xl p-8 space-y-6"
          >
            <div>
              <label className="block text-sm text-muted-foreground mb-2 mono-text">
                Your Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg
                          focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30
                          text-foreground transition-all duration-300"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm text-muted-foreground mb-2 mono-text">
                Your Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg
                          focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30
                          text-foreground transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm text-muted-foreground mb-2 mono-text">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg
                          focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30
                          text-foreground transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 
                        bg-primary text-primary-foreground rounded-lg font-semibold
                        hover:shadow-glow-intense transition-all duration-300 hover:scale-[1.02]"
            >
              <Send size={18} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
