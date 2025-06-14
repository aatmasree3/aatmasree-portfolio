const blogs = [
  {
    title: "How I Built My First Chatbot",
    date: "March 2024",
    excerpt: "A deep dive into building ChatterBox, the challenges faced, and how I solved them using Python and cloud tools.",
    url: "#",
  },
  {
    title: "Top 5 AWS Tricks Every Developer Should Know",
    date: "Feb 2024",
    excerpt: "Discover features of AWS that can accelerate your cloud workflow, from automation scripts to monitoring.",
    url: "#",
  },
];

const Blogs = () => (
  <div className="max-w-3xl mx-auto px-4 py-2 animate-fade-in-up">
    <h2 className="text-3xl font-heading font-bold text-primary mb-4">Blogs</h2>
    <div className="space-y-6">
      {blogs.map((b, i) => (
        <a
          key={i}
          href={b.url}
          className="block card rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="font-heading font-semibold text-secondary text-xl">{b.title}</div>
          <div className="text-muted text-sm mb-1 font-body">{b.date}</div>
          <div className="text-foreground font-body">{b.excerpt}</div>
          <span className="inline-block mt-2 text-primary group-hover:underline transition-colors duration-200">Read More →</span>
        </a>
      ))}
    </div>
  </div>
);

export default Blogs;
