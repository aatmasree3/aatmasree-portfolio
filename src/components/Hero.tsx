
import { Linkedin, Github, Mail, Phone } from "lucide-react";

const Hero = () => (
  <section className="w-full min-h-[60vh] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 py-16 md:py-24 max-w-[1100px] mx-auto animate-fade-in-up relative">
    {/* Removed image at top */}
    <div className="flex-1 flex flex-col gap-4 items-start">
      <p className="text-lg md:text-xl text-secondary font-heading font-semibold tracking-wide px-2">
        Hi, I'm
      </p>
      <h1 className="font-heading text-5xl md:text-7xl font-bold mb-2 text-primary drop-shadow">
        Aatmasree Srinivas
      </h1>
      <p className="text-lg md:text-xl text-foreground max-w-xl mb-6 font-body">
        Engineering student, developer, and tech enthusiast—passionate about building scalable applications, solving real-world problems, and learning in collaborative environments.
      </p>
      <div className="flex flex-wrap gap-4 items-center">
        <a
          href="mailto:nnm22is003@nmit.in"
          className="inline-flex items-center gap-2 link"
          title="Email"
        >
          <Mail className="w-5 h-5" /> nnm22is003@nmit.in
        </a>
        <span className="text-muted hidden md:inline">|</span>
        <a
          href="tel:+918127145298"
          className="inline-flex items-center gap-2 link"
          title="Phone"
        >
          <Phone className="w-5 h-5" /> +91 8127145298
        </a>
        <span className="text-muted hidden md:inline">|</span>
        <a
          href="https://www.linkedin.com/in/aatmasree-srinivas/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 link"
          title="LinkedIn"
        >
          <Linkedin className="w-5 h-5" /> LinkedIn
        </a>
        <a
          href="https://github.com/nnm22is003"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 link"
          title="GitHub"
        >
          <Github className="w-5 h-5" /> GitHub
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
