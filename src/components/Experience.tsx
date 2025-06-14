
const experiences = [
  {
    position: "Web Developer Intern",
    company: "HackerEarth Coding Club",
    location: "Nitte",
    date: "Aug 2023 – Feb 2025",
    desc: [
      "Collaborated on web projects, gaining hands-on experience in HTML, CSS, JavaScript, and PHP.",
      "Worked in a diverse club, facilitating peer learning and collaborative problem-solving.",
      "Conducted workshops on Generative AI and Data Science for 50+ students, boosting club knowledge.",
    ],
  },
];
const Experience = () => (
  <div className="max-w-4xl mx-auto px-4 py-2 animate-fade-in-up">
    <h2 className="text-3xl font-heading font-bold text-primary mb-4">Experience</h2>
    <div className="grid grid-cols-1 gap-8">
      {experiences.map((exp) => (
        <div key={exp.company} className="card rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-heading font-bold text-secondary mb-1">
            {exp.position} <span className="font-normal text-foreground">@ {exp.company}</span>
          </h3>
          <div className="text-sm text-muted mb-2 font-body">
            {exp.location} &middot; <span className=" italic">{exp.date}</span>
          </div>
          <ul className="list-disc pl-4 text-foreground font-body">
            {exp.desc.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);
export default Experience;
