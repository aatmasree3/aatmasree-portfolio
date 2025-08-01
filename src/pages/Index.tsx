
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Education from "@/components/Education";
// Remove Testimonials import
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import SectionDivider from "@/components/SectionDivider";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

// Navbar links for scroll
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Education", href: "#education" },
  // Removed Testimonials nav link
  { label: "Blog", href: "#blogs" },
  { label: "Contact", href: "#contact" },
];

const Index = () => (
  <div className="min-h-screen bg-background font-body flex flex-col">
    {/* Sticky Navbar */}
    <header className="sticky top-0 z-30 w-full bg-background/95 border-b border-border">
      <nav className="flex items-center justify-between mx-auto max-w-[1200px] px-6 py-4">
        <span className="text-2xl font-heading font-bold text-primary tracking-tight">Aatmasree Srinivas</span>
        <ul className="hidden md:flex gap-6 font-heading font-semibold">
          {navLinks.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="transition-colors text-foreground hover:text-primary relative after:content-[''] after:w-0 after:h-[2px] after:bg-primary after:absolute after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Social icons */}
        <div className="flex gap-4">
          <a href="mailto:nnm22is003@nmit.in" title="Mail" className="group">
            <Mail className="w-5 h-5 text-foreground group-hover:text-primary transition" />
          </a>
          <a href="https://www.linkedin.com/in/aatmasree-srinivas/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="group">
            <Linkedin className="w-5 h-5 text-foreground group-hover:text-primary transition" />
          </a>
          <a href="https://github.com/nnm22is003" target="_blank" rel="noopener noreferrer" title="GitHub" className="group">
            <Github className="w-5 h-5 text-foreground group-hover:text-primary transition" />
          </a>
        </div>
      </nav>
    </header>
    <main className="flex-1 flex flex-col items-center w-full overflow-x-hidden">
      <Hero />
      <SectionDivider />
      <section id="about"><About /></section>
      <SectionDivider />
      <section id="skills"><Skills /></section>
      <SectionDivider />
      <section id="projects"><Projects /></section>
      <SectionDivider />
      <section id="experience"><Experience /></section>
      <SectionDivider />
      <section id="certificates"><Certificates /></section>
      <SectionDivider />
      <section id="education"><Education /></section>
      {/* Removed Testimonials Section */}
      <SectionDivider />
      <section id="blogs"><Blogs /></section>
      <SectionDivider />
      <section id="contact"><Contact /></section>
    </main>
    {/* Footer */}
    <footer className="w-full py-8 border-t border-border bg-background text-center text-muted text-[15px] font-body font-medium">
      © {new Date().getFullYear()} Aatmasree Srinivas. All rights reserved.
    </footer>
  </div>
);

export default Index;

