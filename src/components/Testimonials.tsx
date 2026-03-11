import FadeUp from "@/components/FadeUp";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "UNG Academy fundamentally transformed our approach to engineer training. In 3 years we reduced downtime by 40%.",
    name: "Alisher Karimov",
    role: "Director of Operations, UNG Drilling",
    year: "Class of 2012",
  },
  {
    quote: "The Leadership Academy programme prepared me for an executive role. Learning from international experts was an invaluable experience.",
    name: "Nodira Rakhimova",
    role: "Vice President of HR",
    year: "Class of 2016",
  },
  {
    quote: "Thanks to Digital Academy, our team implemented predictive analytics, saving the company $2M in the first year.",
    name: "Dmitry Li",
    role: "Head of Data Science",
    year: "Class of 2020",
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
