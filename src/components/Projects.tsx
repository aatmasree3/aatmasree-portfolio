
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "./ui/card";

const projects = [
  {
    title: "ChatterBox",
    description:
      "Web-based chatbot using Python, HTML, CSS, and MySQL to help students with interview tips, stress support, and career advice. Integrated external APIs, secure responses, and responsive UI.",
    highlights: [
      "Developed a chatbot platform aiding student success.",
      "Integrated APIs and data encryption for privacy.",
      "Designed for both mobile and desktop accessibility.",
    ],
  },
  {
    title: "Watchtower",
    description:
      "Docker and Kubernetes project for efficient cloud deployments; includes AWS integration and monitoring automation. Python health checks and CI/CD for seamless, zero-downtime launches.",
    highlights: [
      "Managed deployments via Docker & Kubernetes.",
      "Integrated AWS EC2, S3, CloudWatch, Lambda for automation.",
      "Built monitoring & alerting tools for reliability.",
    ],
  },
];

const Projects = () => (
  <div className="max-w-4xl mx-auto px-4 py-2 animate-fade-in-up">
    <h2 className="text-3xl font-heading font-bold text-primary mb-4">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <Card key={project.title} className="flex flex-col h-full justify-between min-h-[320px]">
          <CardHeader>
            <CardTitle className="text-secondary text-xl font-heading mb-2">
              {project.title}
            </CardTitle>
            <CardDescription className="mb-2 text-foreground font-body">
              {project.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col justify-end pt-2">
            <ul className="pl-4 list-disc text-muted font-body space-y-1">
              {project.highlights.map((hl, i) => (
                <li key={i}>{hl}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default Projects;

