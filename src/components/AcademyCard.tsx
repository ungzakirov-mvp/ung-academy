import { ReactNode } from "react";

interface AcademyCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  badges?: string[];
  className?: string;
}

const AcademyCard = ({ title, description, icon, badges, className = "" }: AcademyCardProps) => {
  return (
    <div
      className={`group relative bg-card rounded-lg border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden ${className}`}
    >
      {/* Gold top bar on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      {icon && <div className="mb-4 text-gold">{icon}</div>}
      <h3 className="font-heading text-xl font-bold mb-3 text-card-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
      {badges && badges.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {badges.map((badge) => (
            <span
              key={badge}
              className="text-xs px-2.5 py-1 rounded-full bg-accent/20 text-accent font-medium"
            >
              {badge}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default AcademyCard;
