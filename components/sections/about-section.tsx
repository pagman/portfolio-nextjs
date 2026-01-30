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
      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 md:mb-20">
        {/* Profile image */}
        <div className="aspect-square w-full max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden">
          <Image
            src="/images/me.png"
            alt="Φωτογραφία προφίλ"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        {/* About text */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Full-Stack Προγραμματιστής
          </h2>
          <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
            <p>
              Είμαι ένας παθιασμένος full-stack προγραμματιστής με έντονη αίσθηση
              για το design. Εξειδικεύομαι στη δημιουργία απρόσκοπτων ψηφιακών
              εμπειριών σε πλατφόρμες κινητών, web και desktop.
            </p>
            <p>
              Με 10+ χρόνια εμπειρίας, έχω βοηθήσει startups και καθιερωμένες
              εταιρείες να υλοποιήσουν τις ιδέες τους μέσω καθαρού κώδικα και
              διαισθητικών διεπαφών.
            </p>
            <p>
              Όταν δεν γράφω κώδικα, θα με βρείτε να εξερευνώ νέες τεχνολογίες,
              να συνεισφέρω σε open-source projects ή να μοιράζομαι γνώσεις με
              την κοινότητα των προγραμματιστών.
            </p>
          </div>
        </div>
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
        {skills.map((skill) => (
          <div
            key={skill}
            className="text-center p-4 md:p-8 bg-card rounded-2xl border border-border transition-all duration-300 hover:bg-accent/50 hover:border-primary/50"
          >
            {/* Icon placeholder */}
            <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 gradient-bg rounded-lg" />
            <p className="text-sm md:text-base font-medium">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
