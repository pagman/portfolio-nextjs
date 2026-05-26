interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  label?: string;
}

export function SectionHeader({ title, subtitle, label }: SectionHeaderProps) {
  return (
    <div className="mb-12 md:mb-16">
      {label && (
        <span className="text-xs text-white/30 tracking-[0.2em] uppercase font-medium mb-4 block">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/40 text-base md:text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
