import { ReactNode } from "react";

interface InnerHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

const InnerHero = ({ title, subtitle }: InnerHeroProps) => {
  return (
    <section className="bg-dark-blue pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="mt-6 w-16 h-0.5 bg-gold mx-auto" />
      </div>
    </section>
  );
};

export default InnerHero;
