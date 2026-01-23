import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/50 
                            flex items-center justify-center">
              <span className="text-primary font-bold text-sm">MV</span>
            </div>
            <span className="text-muted-foreground text-sm">
              © 2026 Merugu Veekshan Goud Portfolio. All nodes connected.
            </span>
          </div>

          <motion.p 
            className="text-muted-foreground text-sm mono-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Built with <span className="text-primary">♦</span> and lots of caffeine
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
