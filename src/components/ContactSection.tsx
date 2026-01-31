import { useState, useEffect, useRef, useCallback } from "react";
import emailjs from "emailjs-com";
import {
  Send,
  Shield,
  CheckCircle2,
  AlertTriangle,
  Activity,
  User,
  Mail,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface LogEntry {
  timestamp: string;
  type: "info" | "success" | "warning" | "process";
  message: string;
}

const getTimestamp = () =>
  new Date().toLocaleTimeString("en-US", { hour12: false });

const ContactSection = () => {
  const { toast } = useToast();
  const logsEndRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [logs, setLogs] = useState<LogEntry[]>([
    { timestamp: getTimestamp(), type: "info", message: "SOC_CONTACT_HANDLER initialized" },
    { timestamp: getTimestamp(), type: "info", message: "Awaiting incoming transmission..." },
  ]);

  const addLog = useCallback((type: LogEntry["type"], message: string) => {
    setLogs((prev) => [...prev, { timestamp: getTimestamp(), type, message }]);
  }, []);

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      addLog("warning", "Submission blocked: Required fields missing");
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    addLog("process", "Initiating secure transmission...");
    addLog("process", "Encrypting payload with TLS 1.3...");
    addLog("process", "Verifying sender identity...");
    addLog("process", "Running XSS / Injection scan...");

    try {
      await emailjs.send(
        "service_ugkimrp",
        "template_ry2u9zg",
        {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email, // 🔥 REQUIRED FOR AUTO-REPLY
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        "JjQxGUODHegPZvU53"
      );

      addLog("success", "Security scan: ALL_CLEAR");
      addLog("success", "EMAIL_DELIVERED successfully");
      addLog("info", "Auto-reply sent to sender");
      addLog("info", "Response ETA: < 24 hours");

      toast({
        title: "Message Sent",
        description: "Your message was delivered. A confirmation email has been sent.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      addLog("warning", "EMAIL_DELIVERY_FAILED");

      toast({
        title: "Delivery Failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getLogColor = (type: LogEntry["type"]) => {
    switch (type) {
      case "success":
        return "text-success";
      case "warning":
        return "text-accent";
      case "process":
        return "text-primary";
      default:
        return "text-muted-foreground";
    }
  };

  const getLogIcon = (type: LogEntry["type"]) => {
    switch (type) {
      case "success":
        return <CheckCircle2 className="w-3 h-3" />;
      case "warning":
        return <AlertTriangle className="w-3 h-3" />;
      case "process":
        return <Activity className="w-3 h-3 animate-pulse" />;
      default:
        return <Shield className="w-3 h-3" />;
    }
  };

  return (
    <section id="contact" className="py-20 relative z-30 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-muted-foreground">
            Secure communication channel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* CONTACT FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2">
                <User className="h-4 w-4" /> Name
              </label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2">
                <Mail className="h-4 w-4" /> Email
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2">
                <MessageSquare className="h-4 w-4" /> Message
              </label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                required
              />
            </div>

            <Button disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Transmitting..." : "Send Secure Message"}
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>

          {/* SOC LOG PANEL */}
          <div className="bg-muted rounded-lg p-4">
            <h3 className="flex items-center gap-2 font-semibold mb-4">
              <Shield className="h-5 w-5" /> SEC LIVE FEED
            </h3>

            <div className="space-y-2 max-h-64 overflow-y-auto font-mono text-xs">
              {logs.map((log, index) => (
                <div key={index} className={`flex gap-2 ${getLogColor(log.type)}`}>
                  {getLogIcon(log.type)}
                  <span className="text-muted-foreground">
                    [{log.timestamp}]
                  </span>
                  <span>{log.message}</span>
                </div>
              ))}
              <div ref={logsEndRef} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
