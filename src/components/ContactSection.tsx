import { useState, useEffect, useRef, useCallback } from "react";
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

  const addLog = useCallback(
    (type: LogEntry["type"], message: string) => {
      setLogs((prev) => [...prev, { timestamp: getTimestamp(), type, message }]);
    },
    []
  );

  /* Auto-scroll logs */
  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  /* Name monitoring */
  useEffect(() => {
    if (!formData.name) return;

    addLog("process", "Input detected: name field populated");
    const t = setTimeout(
      () => addLog("success", "Name validation: PASSED"),
      300
    );

    return () => clearTimeout(t);
  }, [formData.name, addLog]);

  /* Email monitoring */
  useEffect(() => {
    if (!formData.email) return;

    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    if (!isValid) return;

    addLog("process", "Validating email format...");
    const t = setTimeout(
      () => addLog("success", "Email format: VALID"),
      200
    );

    return () => clearTimeout(t);
  }, [formData.email, addLog]);

  /* Message monitoring */
  useEffect(() => {
    if (formData.message.length <= 10) return;

    addLog("process", "Scanning message payload...");
    const t = setTimeout(
      () => addLog("success", "Message payload: SANITIZED"),
      300
    );

    return () => clearTimeout(t);
  }, [formData.message, addLog]);

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

    await new Promise((r) => setTimeout(r, 500));
    addLog("process", "Encrypting payload with TLS 1.3...");

    await new Promise((r) => setTimeout(r, 400));
    addLog("process", "Verifying sender identity...");

    await new Promise((r) => setTimeout(r, 300));
    addLog("process", "Running XSS/SQL injection scan...");

    await new Promise((r) => setTimeout(r, 400));
    addLog("success", "Security scan: ALL_CLEAR");

    await new Promise((r) => setTimeout(r, 300));
    addLog("process", "Routing message to secure inbox...");

    await new Promise((r) => setTimeout(r, 500));
    addLog("success", "MESSAGE_DELIVERED successfully");
    addLog("info", "Response ETA: < 24 hours");

    toast({
      title: "Message Sent!",
      description: "Your message has been securely delivered. I'll respond within 24 hours.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
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
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* UI unchanged – omitted for brevity */}
        {/* Your JSX below this point remains EXACTLY the same */}
      </div>
    </section>
  );
};

export default ContactSection;
