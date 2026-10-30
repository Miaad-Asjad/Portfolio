export default function SectionHeading({ eyebrow, title, subtitle, number }) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.22em] text-cherry">
        <span>{number}</span><span className="h-px w-8 bg-rose-300" />{eyebrow}
      </p>
      <h2 className="display mt-5 max-w-3xl text-4xl leading-tight sm:text-5xl md:text-6xl">{title}</h2>
      {subtitle && <p className="mt-5 max-w-2xl text-base leading-7 text-ink/65">{subtitle}</p>}
    </div>
  );
}
