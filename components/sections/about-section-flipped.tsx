import Image from "next/image";

const skillsAlt = [
  "Design Systems",
  "Figma",
  "Accessibility",
  "HTML",
  "CSS",
  "Adobe",
  "Mobile-first",
  "Color Theory",
];

export function AboutSectionFlipped() {
  return (
    <section id="about-2" className="py-16 md:py-24 px-[5%] max-w-7xl mx-auto">
      <span className="text-xs text-white/30 tracking-[0.2em] uppercase font-medium mb-12 block">
        Σχετικά με εμάς — Σχεδιασμός
      </span>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start mb-16">
        {/* About text — visually left, first on mobile */}
        <div className="order-2 lg:order-1 lg:pt-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
            UI/UX<br />Σχεδιάστρια
          </h2>
          <div className="space-y-4 text-white/40 text-base leading-relaxed">
            <p>
              Ασχολούμαι με UI/UX design ανθρωποκεντρικών ψηφιακών εμπειριών
              από το 2022. Η δουλειά μου καλύπτει ολόκληρη τη διαδικασία
              σχεδιασμού, από την έρευνα και τον ορισμό του προβλήματος έως τα
              user flows, το wireframing και το high-fidelity UI design.
            </p>
            <p>
              Για μένα, ο εξαιρετικός σχεδιασμός βασίζεται στην ενσυναίσθηση,
              την περιέργεια και τη συνεργασία, με διαρκή εστίαση στη βελτίωση
              των αλληλεπιδράσεων και στην επίλυση των αναγκών των χρηστών.
            </p>
          </div>
        </div>

        {/* Profile image with floating badge */}
        <div className="relative order-1 lg:order-2">
          <div className="aspect-4/5 w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto rounded-2xl overflow-hidden">
            <Image
              src="/images/maria.png"
              alt="Μαρία Μαντά - UI/UX Designer, mCubedDevLabs"
              width={400}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-6 -left-2 md:-left-6 bg-black/80 backdrop-blur-xl border border-white/8 rounded-2xl p-4 md:p-5">
            <div className="text-2xl font-black gradient-text">2022</div>
            <div className="text-xs text-white/40 mt-0.5 whitespace-nowrap">Από το</div>
          </div>
        </div>
      </div>

      {/* Design skills marquee */}
      <div className="relative overflow-hidden border-t border-b border-white/6 py-5">
        <div className="flex gap-14 animate-marquee-slow whitespace-nowrap">
          {[...skillsAlt, ...skillsAlt].map((skill, i) => (
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
