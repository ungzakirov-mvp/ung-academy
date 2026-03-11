import FadeUp from "@/components/FadeUp";

const milestones = [
  { year: "2005", title: "Founded", desc: "UNG Group establishes a dedicated training unit to build internal technical capability." },
  { year: "2008", title: "First IWCF Accreditation", desc: "Well Control training programmes receive IWCF accreditation — a first in Uzbekistan." },
  { year: "2011", title: "Tashkent Campus Opens", desc: "Purpose-built 4,200 m² training facility with drilling simulators and HSE labs becomes operational." },
  { year: "2014", title: "2,500 Graduates Milestone", desc: "Cumulative graduate count reaches 2,500 across 38 active programmes." },
  { year: "2017", title: "Digital Academy Launched", desc: "Online learning platform goes live, extending reach to field-based personnel across 6 regions." },
  { year: "2019", title: "Bukhara Regional Campus", desc: "Second campus opens to serve southern operations — 1,800 m² facility with 4 classrooms and a simulation hall." },
  { year: "2022", title: "9 University Partnerships Signed", desc: "MoUs with Imperial College, Politecnico di Milano, Gubkin University and 6 others formalised." },
  { year: "2024", title: "12,400+ Graduates", desc: "Academy surpasses 12,400 graduates with 186 active programmes and 47 institutional partners." },
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
