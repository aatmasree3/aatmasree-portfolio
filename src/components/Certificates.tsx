const certificates = [
  {
    name: "Introduction to Python",
    issuer: "Udemy",
    year: "2024",
    url: "",
  },
  {
    name: "ChatGPT Prompt Engineering",
    issuer: "DeepLearning.ai",
    year: "2024",
    url: "",
  },
  {
    name: "AWS Certified Cloud Practitioner Certification",
    issuer: "AWS",
    year: "2025",
    url: "",
  },
];

const Certificates = () => (
  <div className="max-w-3xl mx-auto px-4 py-2 animate-fade-in-up">
    <h2 className="text-3xl font-heading font-bold text-primary mb-4">Certificates</h2>
    <ul className="space-y-4">
      {certificates.map((c) => (
        <li
          key={c.name}
          className="card rounded-lg shadow p-4 flex flex-col gap-1 hover:shadow-lg transition-shadow duration-200"
        >
          <div className="flex items-center justify-between gap-2">
            <span className="font-heading font-semibold text-secondary text-lg">{c.name}</span>
            <span className="text-sm text-muted font-body">{c.issuer} &middot; {c.year}</span>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Certificates;
