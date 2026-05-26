import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-[5%] pt-24 pb-16 relative overflow-hidden"
    >
      {/* Clean background — two soft glows, no particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 5% 60%, rgba(102, 126, 234, 0.07) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 95% 15%, rgba(118, 75, 162, 0.06) 0%, transparent 60%)",
          }}
        />
        {/* Subtle horizontal scanlines */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 80px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2.5 mb-10 px-4 py-2 rounded-full border border-white/10 bg-white/3">
          <span
            className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"
            style={{ boxShadow: "0 0 6px rgba(52, 211, 153, 0.9)" }}
          />
          <span className="text-xs text-white/50 tracking-[0.15em] uppercase font-medium">
            Διαθέσιμοι για Συνεργασία
          </span>
        </div>

        {/* Display heading */}
        <h1
          className="font-black leading-[0.9] tracking-[-0.03em] mb-8"
          style={{ fontSize: "clamp(3rem, 9vw, 7.5rem)" }}
        >
          <span className="block text-white">Σχεδιασμός</span>
          <span className="block gradient-text">&amp; Ανάπτυξη</span>
          <span className="block text-white">Ψηφιακών</span>
          <span className="block text-white/20">Εμπειριών.</span>
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
