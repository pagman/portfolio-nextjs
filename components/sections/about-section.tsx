import Image from "next/image";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Flutter",
  "Firebase",
  "MongoDB",
  "Prisma",
  "NextAuth",
  "Tailwind",
  "WordPress",
  "PHP",
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 px-[5%] max-w-7xl mx-auto">
      <span className="text-xs text-white/30 tracking-[0.2em] uppercase font-medium mb-12 block">
        Σχετικά με εμάς — Ανάπτυξη
      </span>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start mb-16">
        {/* Profile image with floating stat */}
        <div className="relative">
          <div className="aspect-4/5 w-full max-w-sm rounded-2xl overflow-hidden">
            <Image
              src="/images/me.webp"
              alt="Παναγιώτης Μάντας - Full-Stack Developer & UI/UX Designer"
              width={400}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-6 -right-2 md:-right-6 bg-black/80 backdrop-blur-xl border border-white/8 rounded-2xl p-4 md:p-5">
            <div className="text-2xl font-black gradient-text">10+</div>
            <div className="text-xs text-white/40 mt-0.5 whitespace-nowrap">Χρόνια Εμπειρίας</div>
          </div>
        </div>

        {/* About text */}
        <div className="lg:pt-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
            Full-Stack<br />Προγραμματιστής
          </h2>
          <div className="space-y-4 text-white/40 text-base leading-relaxed">
            <p>
              Φτιάχνουμε εφαρμογές για web, mobile και desktop με έμφαση στον
              καθαρό κώδικα, τη σωστή αρχιτεκτονική και την καλή εμπειρία
              χρήστη.
            </p>
            <p>
              Τα τελευταία 10+ χρόνια έχουμε δουλέψει με startups και εταιρείες,
              μετατρέποντας ιδέες σε πραγματικά, λειτουργικά προϊόντα που
              αντέχουν στον χρόνο.
            </p>
            <p>
              Μας ενδιαφέρει να λύνουμε προβλήματα σωστά, όχι πρόχειρα, και να
              χτίζουμε πράγματα απλά, κατανοητά και αξιόπιστα.
            </p>
          </div>
        </div>
      </div>

      {/* Skills marquee ticker */}
      <div className="relative overflow-hidden border-t border-b border-white/6 py-5">
        <div className="flex gap-14 animate-marquee whitespace-nowrap">
          {[...skills, ...skills].map((skill, i) => (
            <span
              key={i}
              className="text-white/20 text-xs uppercase tracking-[0.2em] font-semibold shrink-0"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
