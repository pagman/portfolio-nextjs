import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-[5%] relative overflow-hidden"
    >
      {/* Animated background gradient effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Primary floating orb - blue */}
        <div
          className="absolute animate-float-slow"
          style={{ left: "15%", top: "50%" }}
        >
          <div
            className="w-[700px] h-[700px] animate-morph"
            style={{
              background: "radial-gradient(circle, #667eea 0%, transparent 60%)",
              filter: "blur(80px)",
              opacity: 0.3,
            }}
          />
        </div>
        {/* Secondary floating orb - purple */}
        <div
          className="absolute animate-float-slow-reverse"
          style={{ right: "-10%", bottom: "10%" }}
        >
          <div
            className="w-[600px] h-[600px] animate-morph"
            style={{
              background: "radial-gradient(circle, #764ba2 0%, transparent 60%)",
              filter: "blur(80px)",
              opacity: 0.35,
              animationDelay: "2s",
            }}
          />
        </div>
        {/* Third drifting orb - mixed */}
        <div
          className="absolute animate-drift"
          style={{ left: "55%", top: "15%" }}
        >
          <div
            className="w-[500px] h-[500px] animate-morph"
            style={{
              background: "radial-gradient(circle, #667eea 0%, #764ba2 40%, transparent 60%)",
              filter: "blur(70px)",
              opacity: 0.25,
              animationDelay: "4s",
            }}
          />
        </div>

        {/* Floating geometric shapes - more visible */}
        <div className="absolute inset-0">
          {/* Floating squares */}
          <div
            className="absolute w-6 h-6 border-2 border-primary/40 rotate-45 animate-float-particle"
            style={{ left: "10%", top: "20%", animationDelay: "0s" }}
          />
          <div
            className="absolute w-8 h-8 border-2 border-secondary/40 rotate-12 animate-float-particle"
            style={{ left: "85%", top: "25%", animationDelay: "2s" }}
          />
          <div
            className="absolute w-5 h-5 border-2 border-primary/30 rotate-45 animate-float-particle"
            style={{ left: "78%", top: "65%", animationDelay: "5s" }}
          />
          <div
            className="absolute w-7 h-7 border-2 border-secondary/35 rotate-12 animate-float-particle"
            style={{ left: "12%", top: "70%", animationDelay: "3s" }}
          />
          <div
            className="absolute w-4 h-4 border-2 border-primary/35 rotate-45 animate-float-particle"
            style={{ left: "45%", top: "15%", animationDelay: "1s" }}
          />

          {/* Floating circles */}
          <div
            className="absolute w-4 h-4 rounded-full bg-primary/40 animate-float-particle"
            style={{ left: "22%", top: "35%", animationDelay: "1.5s" }}
          />
          <div
            className="absolute w-5 h-5 rounded-full bg-secondary/35 animate-float-particle"
            style={{ left: "68%", top: "40%", animationDelay: "2.5s" }}
          />
          <div
            className="absolute w-3 h-3 rounded-full bg-primary/35 animate-float-particle"
            style={{ left: "55%", top: "75%", animationDelay: "4s" }}
          />
          <div
            className="absolute w-6 h-6 rounded-full bg-secondary/30 animate-float-particle"
            style={{ left: "88%", top: "55%", animationDelay: "0.5s" }}
          />
          <div
            className="absolute w-4 h-4 rounded-full bg-primary/30 animate-float-particle"
            style={{ left: "5%", top: "50%", animationDelay: "3.5s" }}
          />

          {/* Additional triangular shapes using borders */}
          <div
            className="absolute w-0 h-0 animate-float-particle"
            style={{
              left: "30%",
              top: "60%",
              borderLeft: "8px solid transparent",
              borderRight: "8px solid transparent",
              borderBottom: "14px solid rgba(102, 126, 234, 0.3)",
              animationDelay: "2s",
            }}
          />
          <div
            className="absolute w-0 h-0 animate-float-particle"
            style={{
              left: "72%",
              top: "20%",
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderBottom: "18px solid rgba(118, 75, 162, 0.3)",
              animationDelay: "4.5s",
            }}
          />
        </div>

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Content */}
      <div className="text-center z-10 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 gradient-text leading-tight">
          Σχεδιασμός και Ανάπτυξη Ψηφιακών Προϊόντων
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Δημιουργούμε εφαρμογές για κινητά, web εφαρμογές και ιστοσελίδες
          που κάνουν τη διαφορά.
        </p>
        <Button
          asChild
          size="lg"
          className="gradient-bg hover:opacity-90 transition-all text-white font-semibold px-8 py-6 rounded-full text-base shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5"
        >
          <a href="#projects">Δείτε τη Δουλειά μας</a>
        </Button>
      </div>
    </section>
  );
}
