import { useState, useEffect, useRef } from 'react';
import { Send, Shield, CheckCircle2, AlertTriangle, Activity, User, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface LogEntry {
  timestamp: string;
  type: 'info' | 'success' | 'warning' | 'process';
  message: string;
}

const ContactSection = () => {
  const { toast } = useToast();
  const logsEndRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [logs, setLogs] = useState<LogEntry[]>([
    { timestamp: getTimestamp(), type: 'info', message: 'SOC_CONTACT_HANDLER initialized' },
    { timestamp: getTimestamp(), type: 'info', message: 'Awaiting incoming transmission...' },
  ]);

  function getTimestamp() {
    return new Date().toLocaleTimeString('en-US', { hour12: false });
  }

  function addLog(type: LogEntry['type'], message: string) {
    setLogs(prev => [...prev, { timestamp: getTimestamp(), type, message }]);
  }

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  // Simulate real-time monitoring when user types
  useEffect(() => {
    if (formData.name && logs[logs.length - 1]?.message !== `Input detected: name field populated`) {
      addLog('process', 'Input detected: name field populated');
      setTimeout(() => addLog('success', 'Name validation: PASSED'), 300);
    }
  }, [formData.name]);

  useEffect(() => {
    if (formData.email) {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
      if (isValid && logs[logs.length - 1]?.message !== 'Email format: VALID') {
        addLog('process', 'Validating email format...');
        setTimeout(() => addLog('success', 'Email format: VALID'), 200);
      }
    }
  }, [formData.email]);

  useEffect(() => {
    if (formData.message.length > 10 && logs[logs.length - 1]?.message !== 'Message payload: SANITIZED') {
      addLog('process', 'Scanning message payload...');
      setTimeout(() => addLog('success', 'Message payload: SANITIZED'), 300);
    }
  }, [formData.message]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      addLog('warning', 'Submission blocked: Required fields missing');
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    addLog('process', 'Initiating secure transmission...');
    
    // Simulate backend processing
    await new Promise(r => setTimeout(r, 500));
    addLog('process', 'Encrypting payload with TLS 1.3...');
    
    await new Promise(r => setTimeout(r, 400));
    addLog('process', 'Verifying sender identity...');
    
    await new Promise(r => setTimeout(r, 300));
    addLog('process', 'Running XSS/SQL injection scan...');
    
    await new Promise(r => setTimeout(r, 400));
    addLog('success', 'Security scan: ALL_CLEAR');
    
    await new Promise(r => setTimeout(r, 300));
    addLog('process', 'Routing message to secure inbox...');
    
    await new Promise(r => setTimeout(r, 500));
    addLog('success', 'MESSAGE_DELIVERED successfully');
    addLog('info', 'Response ETA: < 24 hours');

    toast({
      title: "Message Sent!",
      description: "Your message has been securely delivered. I'll respond within 24 hours.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const getLogColor = (type: LogEntry['type']) => {
    switch (type) {
      case 'success': return 'text-success';
      case 'warning': return 'text-accent';
      case 'process': return 'text-primary';
      default: return 'text-muted-foreground';
    }
  };

  const getLogIcon = (type: LogEntry['type']) => {
    switch (type) {
      case 'success': return <CheckCircle2 className="w-3 h-3" />;
      case 'warning': return <AlertTriangle className="w-3 h-3" />;
      case 'process': return <Activity className="w-3 h-3 animate-pulse" />;
      default: return <Shield className="w-3 h-3" />;
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 mb-4">
            <Send className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">SECURE_CHANNEL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Get in <span className="text-primary">Touch</span>
          </h2>
        </div>

        {/* Split View Container */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Contact Form */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
              <MessageSquare className="w-5 h-5 text-primary" />
              <h3 className="font-mono text-lg text-foreground">Send Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <User className="w-4 h-4 text-muted-foreground" />
                  Name
                </label>
                <Input
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-muted/50 border-border focus:border-primary"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-muted/50 border-border focus:border-primary"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <MessageSquare className="w-4 h-4 text-muted-foreground" />
                  Message
                </label>
                <Textarea
                  placeholder="Your message..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-muted/50 border-border focus:border-primary resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full glow-cyan"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Activity className="w-4 h-4 mr-2 animate-spin" />
                    Transmitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Secure Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Right: SOC Backend Simulation */}
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-muted/50 border-b border-border">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span className="font-mono text-sm text-foreground">SOC_MONITOR</span>
              </div>
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-destructive/80" />
                <span className="w-3 h-3 rounded-full bg-accent/80" />
                <span className="w-3 h-3 rounded-full bg-success/80" />
              </div>
            </div>

            {/* Log Output */}
            <div className="p-4 h-[400px] overflow-y-auto bg-background/50 font-mono text-xs">
              <div className="space-y-2">
                {logs.map((log, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-2 ${getLogColor(log.type)} animate-fade-in`}
                  >
                    <span className="text-muted-foreground shrink-0">[{log.timestamp}]</span>
                    <span className="shrink-0">{getLogIcon(log.type)}</span>
                    <span className="break-all">{log.message}</span>
                  </div>
                ))}
                <div ref={logsEndRef} />
              </div>
            </div>

            {/* Status Bar */}
            <div className="px-4 py-3 border-t border-border bg-muted/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="font-mono text-xs text-muted-foreground">System Online</span>
              </div>
              <span className="font-mono text-xs text-muted-foreground">
                TLS 1.3 | E2E Encrypted
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
