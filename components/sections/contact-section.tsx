import { Mail, Github, Linkedin } from "lucide-react";

const socialLinks = [
  { label: "Στείλτε Email", href: "mailto:p.mantas@mcubed.io", icon: Mail },
  { label: "GitHub", href: "https://github.com/pagman/", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/panagiotis-mantas-968ba1188/",
    icon: Linkedin,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 px-[5%] max-w-7xl mx-auto">
      <div className="rounded-3xl border border-white/6 p-10 md:p-20">
        <div className="text-center">
          <span className="text-xs text-white tracking-[0.2em] uppercase font-medium mb-6 block">
            Επικοινωνία
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4">
            Ας{" "}
            <span className="text-white">Συνεργαστούμε</span>
          </h2>
          <p className="text-white text-base mb-12 max-w-sm mx-auto leading-relaxed">
            Έχετε κάποιο project στο μυαλό σας; Ας δημιουργήσουμε κάτι
            καταπληκτικό μαζί.
          </p>

          <div className="flex gap-3 justify-center flex-wrap">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/10 bg-white/3 text-white text-sm font-medium transition-all duration-200 hover:bg-white/8 hover:border-white/20 hover:-translate-y-0.5"
                >
                  <Icon size={16} />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
