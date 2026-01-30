import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "./ui/form";
import { cn } from "@/lib/utils";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const methods = useForm<FormData>({
    defaultValues: { name: "", email: "", message: "" },
  });
  const { handleSubmit, watch, reset } = methods;

  const [logs, setLogs] = useState<string[]>([]);
  const logsRef = useRef<string[]>(logs);
  logsRef.current = logs;
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const lastTypingRef = useRef<Record<string, number>>({});

  const pushLog = (msg: string) => setLogs((s) => [...s, `${new Date().toLocaleTimeString()} - ${msg}`].slice(-8));

  useEffect(() => {
    // Debounced typing logs
    const sub = watch((value, { name }) => {
      if (!name) return;
      const now = Date.now();
      const last = lastTypingRef.current[name as string] || 0;
      if (now - last > 1500) {
        lastTypingRef.current[name as string] = now;
        pushLog(`Typing in ${name}...`);
      }
    });
    return () => sub.unsubscribe && sub.unsubscribe();
  }, [watch]);

  useEffect(() => {
    // auto-scroll terminal on new logs
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [logs]);

  const submitSequence = async (data: FormData) => {
    pushLog("Establishing secure channel to analyst queue...");
    window.dispatchEvent(new CustomEvent("soc-action", { detail: { type: "submit-start" } }));

    await new Promise((r) => setTimeout(r, 600));
    pushLog("Sanitizing payload...");
    await new Promise((r) => setTimeout(r, 700));
    pushLog("Running heuristics & validation...");
    await new Promise((r) => setTimeout(r, 800));
    pushLog("Encrypting message and generating packet trace...");
    window.dispatchEvent(new CustomEvent("soc-action", { detail: { type: "packet-burst" } }));

    await new Promise((r) => setTimeout(r, 900));
    pushLog("Delivering to analyst queue — SUCCESS");
    pushLog(`Submitted: ${data.name} <${data.email}>`);

    // Emit final event for network viz
    window.dispatchEvent(new CustomEvent("soc-action", { detail: { type: "submit-end" } }));

    reset();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
      <form onSubmit={handleSubmit(submitSequence)} className="space-y-4">
        <Form {...methods}>
          <FormField
            name="name"
            control={methods.control}
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Your name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="email"
            control={methods.control}
            rules={{ required: "Email is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="you@example.com" type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="message"
            control={methods.control}
            rules={{ required: "Message is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder="Describe your project or question" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center gap-4">
            <Button type="submit" className="bg-primary hover:shadow-glow-intense">Send Message</Button>
            <Button type="button" variant="ghost" onClick={() => { reset(); pushLog("Composer cleared"); }}>
              Clear
            </Button>
          </div>
        </Form>
      </form>

      <div className="terminal-panel rounded-lg p-4 text-sm">
        <div className="terminal-header mb-3 flex items-center gap-2">
          <span className="w-3 h-3 bg-red-500 rounded-full" />
          <span className="w-3 h-3 bg-yellow-400 rounded-full" />
          <span className="w-3 h-3 bg-green-400 rounded-full" />
          <div className="ml-3 mono-text text-xs text-muted-foreground">SOC Live Console</div>
        </div>
        <div ref={terminalRef} role="log" aria-live="polite" aria-atomic="false" className="terminal-log h-44 overflow-auto mono-text text-xs">{
          logs.map((l, i) => (
            <div key={i} role="status" className={cn("terminal-line", i === logs.length - 1 && "text-primary")}>{l}</div>
          ))
        }</div>
      </div>
    </div>
  );
};

export default ContactForm;
