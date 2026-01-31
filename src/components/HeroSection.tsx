import { useEffect, useState } from 'react';
import { ArrowDown, Shield, Activity, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Computer Science undergraduate focused on cybersecurity and network defense.';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const statusItems = [
    { icon: Shield, label: 'Defense Systems', status: 'Configured', color: 'text-success' },
    { icon: Activity, label: 'Threat Monitoring', status: 'Simulated', color: 'text-primary' },
    { icon: Lock, label: 'Security Protocols', status: 'Evaluated', color: 'text-accent' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-sm font-mono text-primary">System Online</span>
            </div>

            {/* Name */}
            <div>
              <p className="text-muted-foreground font-mono text-sm mb-2">
                &gt; IDENTITY_VERIFIED
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Merugu{' '}
                <span className="text-primary text-glow-cyan">Veekshan</span>{' '}
                Goud
              </h1>
            </div>

            {/* Role with Typing Effect */}
            <div className="font-mono text-lg sm:text-xl text-muted-foreground">
              <span className="text-primary">&gt;</span>{' '}
              <span>{displayText}</span>
              <span className="cursor-blink text-primary" />
            </div>

            {/* Description */}
            <p className="text-muted-foreground max-w-lg leading-relaxed text-justify">
              Computer Science undergraduate with hands-on experience in network security and machine-learning-based DDoS attack detection, 
              focused on analyzing network traffic and identifying malicious patterns.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href="#projects">
                <Button size="lg" className="glow-cyan group">
                  <span>View Projects</span>
                  <ArrowDown className="w-4 h-4 ml-2 group-hover:animate-bounce" aria-hidden="true" />
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline" className="border-primary/50 hover:border-primary hover:bg-primary/10">
                  Contact Me
                </Button>
              </a>
            </div>
          </div>

          {/* Right Content - Status Dashboard */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" aria-hidden="true" />
                    <span className="font-mono text-sm text-foreground">Network Security Analysis Dashboard</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="w-3 h-3 rounded-full bg-destructive/80" />
                    <span className="w-3 h-3 rounded-full bg-accent/80" />
                    <span className="w-3 h-3 rounded-full bg-success/80" />
                  </div>
                </div>

                {/* Status Items */}
                <div className="space-y-4">
                  {statusItems.map((item, index) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between p-3 rounded bg-muted/50 border border-border/50 animate-fade-in"
                      style={{ animationDelay: `${(index + 1) * 200}ms` }}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className={`w-5 h-5 ${item.color}`} aria-hidden="true" />
                        <span className="font-mono text-sm text-muted-foreground">
                          {item.label}
                        </span>
                      </div>
                      <span className={`font-mono text-xs px-2 py-1 rounded ${item.color} bg-current/10`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Live Metrics */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">Stable</p>
                    <p className="text-xs text-muted-foreground font-mono">Uptime</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-success">50K+</p>
                    <p className="text-xs text-muted-foreground font-mono">Samples Analyzed</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
