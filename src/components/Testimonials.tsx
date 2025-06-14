const testimonials = [
  {
    name: "Sandeep Rao",
    text: "Aatmasree is a dedicated developer who consistently delivers beyond expectations. His curiosity and drive for learning set him apart.",
    role: "Club Lead, HackerEarth Coding Club",
  },
  {
    name: "Priya Sharma",
    text: "Always ready to help others and quick to learn—wonderful team player and coder.",
    role: "Peer, Nitte University",
  },
];

const Testimonials = () => (
  <div className="max-w-3xl mx-auto px-4 py-2 animate-fade-in-up">
    <h2 className="text-3xl font-heading font-bold text-primary mb-4">Testimonials</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {testimonials.map((t, i) => (
        <div key={i} className="card rounded-xl p-5 hover:shadow-lg transition-shadow duration-200">
          <p className="italic text-lg text-foreground mb-3 font-body">&ldquo;{t.text}&rdquo;</p>
          <span className="font-heading font-semibold text-secondary">{t.name}</span>
          <span className="block text-sm text-muted font-body">{t.role}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Testimonials;
