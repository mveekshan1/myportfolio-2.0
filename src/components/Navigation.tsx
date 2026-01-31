import { useState, useEffect } from 'react';
import { Menu, X, Shield, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: "Achievements", href: "#achievements" },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <Shield className="w-8 h-8 text-primary transition-all group-hover:text-glow-cyan" />
              <div className="absolute inset-0 bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-mono font-semibold text-foreground">
              MVG<span className="text-primary">.</span>sec
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all group-hover:w-3/4 group-hover:left-[12.5%]" />
              </a>
            ))}
            <a href="#contact">
              <Button size="sm" className="ml-4 glow-cyan">
                <Terminal className="w-4 h-4 mr-2" />
                Get in Touch
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md animate-fade-in">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 pt-4">
              <a href="#contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full glow-cyan">
                  <Terminal className="w-4 h-4 mr-2" />
                  Get in Touch
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
