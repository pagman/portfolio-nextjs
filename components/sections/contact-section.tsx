import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { label: "Email Me", href: "mailto:hello@example.com", icon: Mail },
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 px-[5%]">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Let&apos;s Work Together
        </h2>
        <p className="text-muted-foreground text-base md:text-xl mb-8 md:mb-12">
          Have a project in mind? Let&apos;s create something amazing together.
        </p>

        <div className="flex gap-3 md:gap-6 justify-center flex-wrap">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Button
                key={link.label}
                variant="outline"
                size="lg"
                asChild
                className="bg-muted border-2 border-white/20 rounded-full px-6 md:px-8 py-4 md:py-6 text-sm md:text-base font-medium transition-all duration-300 hover:gradient-bg hover:border-transparent hover:-translate-y-0.5 hover:text-white"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Icon size={18} />
                  {link.label}
                </a>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
