import { ReactNode } from "react";

interface SectionProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}

const Section = ({ eyebrow, title, subtitle, children, className = "", dark = false, id }: SectionProps) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${dark ? "bg-dark-blue text-white" : ""} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-gold" />
            <span className="text-gold text-sm font-semibold uppercase tracking-widest font-body">
              {eyebrow}
            </span>
          </div>
        )}
        <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${dark ? "text-white" : "text-foreground"}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`text-lg max-w-3xl mb-10 ${dark ? "text-white/70" : "text-muted-foreground"}`}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
