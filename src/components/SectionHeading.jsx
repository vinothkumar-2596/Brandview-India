export default function SectionHeading({ label, title, description, centered = true }) {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} mb-12`}>
      {label && (
        <span className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-4">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
