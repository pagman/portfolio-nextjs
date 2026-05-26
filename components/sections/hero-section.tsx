import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-[5%] pt-24 pb-16"
    >

<div className="relative z-10 max-w-7xl w-full mx-auto">
        {/* Display heading */}
        <h1
          className="font-black leading-[0.9] tracking-[-0.03em] mb-8"
          style={{ fontSize: "clamp(3rem, 9vw, 7.5rem)" }}
        >
          <span className="block gradient-text">Σχεδιασμός</span>
          <span className="block gradient-text">&amp; Ανάπτυξη</span>
          <span className="block text-white" style={{ fontSize: "clamp(1.5rem, 4.5vw, 3.75rem)" }}>Ψηφιακών Εμπειριών.</span>
        </h1>

        {/* Divider + bottom row */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-16 items-start mt-10 pt-10 border-t border-white/6">
          <p className="text-white/40 text-base leading-relaxed max-w-xs">
            Full-stack development &amp; UI/UX design με 10+ χρόνια εμπειρίας.
            React, Next.js, Flutter &amp; WordPress.
          </p>
          <div className="flex items-center gap-5">
            <Button
              asChild
              className="gradient-bg hover:opacity-90 transition-opacity text-white font-semibold px-7 py-5 rounded-full text-sm tracking-wide shadow-lg hover:shadow-primary/30"
            >
              <a href="#projects">Δείτε τη Δουλειά μας</a>
            </Button>
            <a
              href="#contact"
              className="text-white/35 hover:text-white text-sm transition-colors duration-200"
            >
              Επικοινωνία →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
