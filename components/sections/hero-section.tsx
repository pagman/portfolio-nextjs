import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-[5%] relative overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
          style={{
            background: "radial-gradient(circle, #667eea 0%, transparent 70%)",
            left: "20%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
          style={{
            background: "radial-gradient(circle, #764ba2 0%, transparent 70%)",
            right: "0",
            bottom: "20%",
          }}
        />
      </div>

      {/* Content */}
      <div className="text-center z-10 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 gradient-text leading-tight">
          Creative Developer & Designer
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Building beautiful mobile apps, web applications, and websites that
          make a difference
        </p>
        <Button
          asChild
          size="lg"
          className="gradient-bg hover:opacity-90 transition-all text-white font-semibold px-8 py-6 rounded-full text-base shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5"
        >
          <a href="#projects">View My Work</a>
        </Button>
      </div>
    </section>
  );
}
