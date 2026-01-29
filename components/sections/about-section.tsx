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
        {/* Image placeholder */}
        <div className="aspect-square w-full max-w-md mx-auto lg:max-w-none gradient-bg rounded-2xl" />

        {/* About text */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About Me
          </h2>
          <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
            <p>
              I&apos;m a passionate full-stack developer with a keen eye for
              design. I specialize in creating seamless digital experiences
              across mobile, web, and desktop platforms.
            </p>
            <p>
              With 5+ years of experience, I&apos;ve helped startups and
              established companies bring their ideas to life through clean code
              and intuitive interfaces.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open-source projects, or sharing
              knowledge with the developer community.
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
