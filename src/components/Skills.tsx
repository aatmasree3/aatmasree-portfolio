const skills = [
  {
    title: "Front End",
    items: ["HTML", "CSS", "JavaScript", "Figma"],
  },
  {
    title: "Backend",
    items: ["Python", "PHP", "Java", "Go (learning)"],
  },
  {
    title: "Data",
    items: ["MS SQL Server", "MySQL"],
  },
  {
    title: "Tools",
    items: ["VS Code", "Eclipse", "Jupyter", "Git", "ChatGPT", "Perplexity AI"],
  },
  {
    title: "Cloud",
    items: ["AWS", "Docker", "GitHub Actions"],
  },
];

const Skills = () => (
  <div className="max-w-3xl mx-auto px-4 py-2 animate-fade-in-up">
    <h2 className="text-3xl font-heading font-bold text-primary mb-4">Skills</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
      {skills.map((skill) => (
        <div className="card flex flex-col gap-2 p-5 hover:shadow-lg transition-all duration-200" key={skill.title}>
          <h3 className="font-heading font-bold text-secondary text-xl mb-2">{skill.title}</h3>
          <ul className="list-disc list-inside ml-3 font-body">
            {skill.items.map((item) => (
              <li key={item} className="text-foreground">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
