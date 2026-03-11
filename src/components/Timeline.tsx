import FadeUp from "@/components/FadeUp";

const milestones = [
  { year: "2005", title: "Основание", desc: "Создание корпоративного учебного центра при UNG." },
  { year: "2008", title: "Первая аккредитация", desc: "Получение международной аккредитации учебных программ." },
  { year: "2011", title: "Открытие кампуса в Ташкенте", desc: "Запуск современного учебного кампуса с симуляционными лабораториями." },
  { year: "2014", title: "1,000-й выпускник", desc: "Тысячный специалист прошёл полный цикл обучения." },
  { year: "2017", title: "Цифровая академия", desc: "Запуск Digital Academy и платформы онлайн-обучения." },
  { year: "2019", title: "Кампус в Бухаре", desc: "Открытие второго учебного кампуса." },
  { year: "2022", title: "Партнёрство с мировыми вузами", desc: "Соглашения с 12 международными университетами." },
  { year: "2024", title: "5,000+ выпускников", desc: "Преодолён рубеж в 5,000 обученных специалистов." },
];

const Timeline = () => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-accent/30 -translate-x-1/2" />

      <div className="space-y-12">
        {milestones.map((m, i) => (
          <FadeUp key={m.year} delay={i * 80}>
            <div className={`relative flex items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              {/* Content */}
              <div className="flex-1 ml-12 md:ml-0">
                <div className={`bg-card rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow ${i % 2 === 0 ? "md:text-right md:mr-12" : "md:ml-12"}`}>
                  <span className="text-accent font-heading text-2xl font-bold">{m.year}</span>
                  <h4 className="font-heading text-lg font-bold mt-1">{m.title}</h4>
                  <p className="text-muted-foreground text-sm mt-1">{m.desc}</p>
                </div>
              </div>

              {/* Hidden spacer for alternating layout */}
              <div className="hidden md:block flex-1" />

              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full -translate-x-1/2 mt-2 ring-4 ring-background" />
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
