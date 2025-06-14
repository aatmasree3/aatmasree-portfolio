import { useRef, useState } from "react";
import { Mail, MessageCircle } from "lucide-react";

type Mode = "email" | "chat";

interface ChatMessage {
  text: string;
  timestamp: Date;
}

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [mode, setMode] = useState<Mode>("email");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

  // Email submission logic (as before)
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSent(false);

    // EmailJS credentials from user
    const SERVICE_ID = "service_z0mnuwm";
    const TEMPLATE_ID = "template_qg6g1rj";
    const USER_ID = "wBdJ5FFyHk5ycI7-G";

    if (!SERVICE_ID || !TEMPLATE_ID || !USER_ID) {
      setLoading(false);
      setError("Email service not configured. Please add your EmailJS credentials.");
      return;
    }

    import("emailjs-com").then((emailjs) => {
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, form.current!, USER_ID)
        .then(
          () => {
            setLoading(false);
            setSent(true);
            if (form.current) form.current.reset();
          },
          () => {
            setLoading(false);
            setError("Failed to send. Please try again.");
          }
        );
    });
  };

  // Chat message submission logic
  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (chatInput.trim() === "") return;
    setChatMessages((msgs) => [
      ...msgs,
      { text: chatInput.trim(), timestamp: new Date() }
    ]);
    setChatInput("");
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-8 animate-fade-in-up">
      <h2 className="text-3xl font-heading font-bold text-primary mb-4">Contact Me</h2>
      <p className="text-foreground mb-6 font-body">
        Have a question, opportunity, or just want to connect? Fill out the form below or email me directly at
        <a href="mailto:nnm22is003@nmit.in" className="link"> nnm22is003@nmit.in</a>.
      </p>
      {/* Tab Switcher */}
      <div className="flex mb-6 gap-2">
        <button
          type="button"
          className={`flex-1 px-4 py-2 rounded-t-md font-heading font-semibold transition-colors duration-150 border-b-2 ${
            mode === "email"
              ? "text-primary border-primary bg-background"
              : "text-foreground border-transparent hover:text-primary-hover hover:bg-muted"
          }`}
          onClick={() => setMode("email")}
        >
          <Mail className="inline mr-2 -mt-1 w-5 h-5" /> Email
        </button>
        <button
          type="button"
          className={`flex-1 px-4 py-2 rounded-t-md font-heading font-semibold transition-colors duration-150 border-b-2 ${
            mode === "chat"
              ? "text-primary border-primary bg-background"
              : "text-foreground border-transparent hover:text-primary-hover hover:bg-muted"
          }`}
          onClick={() => setMode("chat")}
        >
          <MessageCircle className="inline mr-2 -mt-1 w-5 h-5" /> Chat
        </button>
      </div>
      {/* Email Form */}
      {mode === "email" && (
        <form ref={form} onSubmit={handleEmailSubmit} className="card flex flex-col gap-4 p-6">
          <div>
            <label className="block mb-1 font-heading font-semibold text-secondary" htmlFor="name">Your Name</label>
            <input
              className="w-full px-4 py-2 border rounded bg-background text-foreground font-body transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
              type="text"
              name="name"
              id="name"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-heading font-semibold text-secondary" htmlFor="email">Your Email</label>
            <input
              className="w-full px-4 py-2 border rounded bg-background text-foreground font-body transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-heading font-semibold text-secondary" htmlFor="message">Message</label>
            <textarea
              className="w-full px-4 py-2 border rounded bg-background text-foreground font-body transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
              name="message"
              id="message"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="btn bg-primary text-white font-heading py-2 px-6 mt-2 hover:bg-primary-hover transition-colors duration-200 disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "Sending..." : (
              <span className="flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" /> Send Message
              </span>
            )}
          </button>
          {sent && <div className="text-green-600 font-semibold mt-2">Thank you! Your message was sent.</div>}
          {error && <div className="text-red-600 mt-2">{error}</div>}
        </form>
      )}
      {/* Chat Mode */}
      {mode === "chat" && (
        <div className="card flex flex-col gap-2 p-4 min-h-[240px]">
          <div className="flex-1 min-h-[120px] max-h-56 overflow-auto mb-3 flex flex-col gap-2">
            {chatMessages.length === 0 && (
              <div className="text-muted text-center pt-10">Start a conversation...</div>
            )}
            {chatMessages.map((msg, i) => (
              <div key={i} className="flex flex-col gap-1 items-end">
                <span className="inline-block bg-primary text-white px-4 py-2 rounded-2xl max-w-[80%] shadow transition-colors duration-200">
                  {msg.text}
                </span>
                <span className="text-xs text-muted mt-0.5">{msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
              </div>
            ))}
          </div>
          <form onSubmit={handleChatSubmit} className="flex gap-2 items-center">
            <input
              type="text"
              className="flex-1 border rounded-full px-4 py-2 bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
              placeholder="Type your message…"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              autoFocus={mode === "chat"}
              maxLength={500}
            />
            <button
              type="submit"
              className="btn flex-shrink-0 rounded-full bg-primary text-white px-5 py-2 font-heading transition-colors hover:bg-primary-hover"
              disabled={!chatInput.trim()}
              aria-label="Send"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}
      {/* Info */}
      <div className="mt-5 text-xs text-muted font-body">
        To activate email form: <b>Sign up at <a href="https://www.emailjs.com/" className="link" target="_blank">EmailJS</a></b>, create a service and template, then <b>replace the SERVICE_ID, TEMPLATE_ID, and USER_ID</b> in the code above with your own. <b>Never publish your real keys!</b>
      </div>
    </div>
  );
};

export default Contact;
