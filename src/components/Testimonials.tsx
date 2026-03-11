import FadeUp from "@/components/FadeUp";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The well control programme gave our team a structured competency framework we didn't have before. We've already seen fewer procedural errors on site.",
    name: "Alisher Karimov",
    role: "Drilling Superintendent, UNG Drilling Division",
    year: "Graduated 2025",
  },
  {
    quote: "The leadership track helped me shift from reactive management to strategic thinking. The peer cohort format was especially valuable.",
    name: "Nodira Rakhimova",
    role: "Senior HR Manager, Organisational Development",
    year: "Graduated 2025",
  },
  {
    quote: "The data fundamentals course gave our team enough skills to build a basic dashboard that now saves us hours of manual reporting each week.",
    name: "Dmitry Li",
    role: "Data Analyst, Digital Transformation Office",
    year: "Graduated 2024",
  },
];

const Testimonials = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((t, i) => (
        <FadeUp key={t.name} delay={i * 100}>
          <div className="bg-white/5 rounded-lg p-8 border border-white/10 flex flex-col h-full">
            <Quote size={28} className="text-accent mb-4 opacity-60" />
            <blockquote className="text-white/80 text-sm leading-relaxed italic flex-1">
              "{t.quote}"
            </blockquote>
            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="font-heading font-bold text-white">{t.name}</div>
              <div className="text-white/50 text-sm">{t.role}</div>
              <div className="text-accent text-xs mt-1">{t.year}</div>
            </div>
          </div>
        </FadeUp>
      ))}
    </div>
  );
};

export default Testimonials;
