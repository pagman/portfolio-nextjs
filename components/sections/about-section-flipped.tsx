import Image from "next/image";

const skillsAlt = [
  "Design Systems",
  "Figma",
  "Accessibility",
  "HTML",
  "CSS",
  "Adobe",
  "Mobile-first thinking",
  "Color theory"
];

export function AboutSectionFlipped() {
  return (
    <section id="about-2" className="py-16 md:py-24 px-[5%] max-w-7xl mx-auto">
      {/* Two-column layout (flipped): image on left, text on right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 md:mb-20">
        {/* About text (placed second in DOM but visually on the right) */}
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            UI/UX Designer
          </h2>
          <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
            <p>
              I’m a UI/UX Designer focused on creating intuitive, human-centered digital experiences. My work spans the full design process, from research and problem definition to user flows, wireframing, and high-fidelity UI design. Translating complex requirements into clear, accessible interfaces and validating solutions through prototyping and usability testing are core parts of my approach.
            </p>
            <p>
              Great design, to me, is rooted in empathy, curiosity, and collaboration, with a constant focus on improving interactions, solving user pain points, and contributing meaningfully to the products I help shape.
            </p>
          </div>
        </div>

        {/* Profile image (left) */}
        <div className="aspect-square w-full max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden order-1 lg:order-2">
          <Image
            src="/images/maria.png"
            alt="Colleague profile"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
        {skillsAlt.map((skill) => (
          <div
            key={skill}
            className="text-center p-4 md:p-8 bg-card rounded-2xl border border-border transition-transform duration-300 hover:scale-105"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 gradient-bg rounded-lg" />
            <p className="text-sm md:text-base font-medium">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
