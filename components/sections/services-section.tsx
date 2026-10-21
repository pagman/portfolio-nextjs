import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 px-[5%] max-w-7xl mx-auto">
      <SectionHeader
        label="Υπηρεσίες"
        title="Τι κατασκευάζουμε"
        subtitle="Ιστοσελίδες, eshop, web εφαρμογές και εφαρμογές κινητών, από τον σχεδιασμό μέχρι τη δημοσίευση."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group block p-6 rounded-2xl border border-white/6 bg-white/2 hover:bg-white/4 hover:border-white/12 transition-all"
          >
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <ArrowUpRight size={15} className="text-white/20 group-hover:text-white/60 shrink-0 mt-1" />
            </div>
            <p className="text-white/40 text-sm leading-relaxed">{s.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
