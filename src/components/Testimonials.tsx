import FadeUp from "@/components/FadeUp";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The IWCF-accredited well control programme raised our team's competency scores by 34% within 18 months. We saw a direct reduction in non-productive time on three rigs.",
    name: "Alisher Karimov",
    role: "Drilling Superintendent, UNG Drilling Division",
    year: "Graduated 2013",
  },
  {
    quote: "The Senior Leadership Programme gave me structured frameworks I still use daily. The cohort-based format created a cross-functional network that continues to add value.",
    name: "Nodira Rakhimova",
    role: "Deputy Director, HR & Organisational Development",
    year: "Graduated 2018",
  },
  {
    quote: "After completing the Data Engineering track, our team built an internal predictive maintenance model that cut unplanned shutdowns by 22% in the Bukhara region.",
    name: "Dmitry Li",
    role: "Lead Data Engineer, Digital Transformation Office",
    year: "Graduated 2021",
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
