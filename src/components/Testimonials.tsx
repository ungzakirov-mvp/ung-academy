import FadeUp from "@/components/FadeUp";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "UNG Academy кардинально изменила наш подход к подготовке инженеров. За 3 года мы снизили простои на 40%.",
    name: "Алишер Каримов",
    role: "Директор по операциям, UNG Drilling",
    year: "Выпуск 2012",
  },
  {
    quote: "Программа Leadership Academy подготовила меня к роли руководителя. Обучение у международных экспертов — бесценный опыт.",
    name: "Нодира Рахимова",
    role: "Вице-президент по HR",
    year: "Выпуск 2016",
  },
  {
    quote: "Благодаря Digital Academy наша команда внедрила предиктивную аналитику, что сэкономило компании $2M в первый год.",
    name: "Дмитрий Ли",
    role: "Руководитель Data Science",
    year: "Выпуск 2020",
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
