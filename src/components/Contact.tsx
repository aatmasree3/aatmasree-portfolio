
import { useRef, useState } from "react";
import { Mail } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSent(false);

    //!! UPDATE THESE WITH YOUR EMAILJS SERVICE, TEMPLATE, AND USER KEYS !!
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const USER_ID = "YOUR_PUBLIC_KEY";

    if (!SERVICE_ID || !TEMPLATE_ID || !USER_ID) {
      setLoading(false);
      setError("Email service not configured. Please add your EmailJS credentials.");
      return;
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current!, USER_ID)
      .then(
        () => {
          setLoading(false);
          setSent(true);
          if (form.current) form.current.reset();
        },
        (err) => {
          setLoading(false);
          setError("Failed to send. Please try again.");
        }
      );
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-8 animate-fade-in-up">
      <h2 className="text-3xl font-heading font-bold text-primary mb-4">Contact Me</h2>
      <p className="text-foreground mb-6 font-body">
        Have a question, opportunity, or just want to connect? Fill out the form below or email me directly at
        <a href="mailto:nnm22is003@nmit.in" className="link"> nnm22is003@nmit.in</a>.
      </p>
      <form ref={form} onSubmit={handleSubmit} className="card flex flex-col gap-4 p-6">
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
          {loading ? "Sending..." : (<span className="flex items-center justify-center gap-2"><Mail className="w-5 h-5" /> Send Message</span>)}
        </button>
        {sent && <div className="text-green-600 font-semibold mt-2">Thank you! Your message was sent.</div>}
        {error && <div className="text-red-600 mt-2">{error}</div>}
      </form>
      <div className="mt-5 text-xs text-muted font-body">
        To activate email form: <b>Sign up at <a href="https://www.emailjs.com/" className="link" target="_blank">EmailJS</a></b>, create a service and template, then <b>replace the SERVICE_ID, TEMPLATE_ID, and USER_ID</b> in the code above with your own. <b>Never publish your real keys!</b>
      </div>
    </div>
  );
};
export default Contact;
