import { Shield, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/mveekshangoud',
      label: 'LinkedIn',
    },
    {
      icon: Github,
      href: 'https://github.com/mveekshan1',
      label: 'GitHub',
    },
    {
      icon: Mail,
      href: 'mailto:merugu.veekshangoud@gmail.com',
      label: 'Email',
    },
  ];

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2 group">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-mono font-semibold text-foreground">
                MVG<span className="text-primary">.</span>sec
              </span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              Cybersecurity enthusiast building secure systems and 
              ML-powered threat detection solutions.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-sm text-primary mb-4">NAVIGATION</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-mono text-sm text-primary mb-4">CONTACT</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:merugu.veekshangoud@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  merugu.veekshangoud@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://myportfolio-veekshan.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Portfolio Website
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                Siddipet, Telangana, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            © {currentYear} Merugu Veekshan Goud. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="font-mono">System Status: Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
