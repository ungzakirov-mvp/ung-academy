import FadeUp from "@/components/FadeUp";

const milestones = [
  { year: "2024 Q1", title: "Founded", desc: "UNG Group establishes UNG Academy as a dedicated corporate training unit." },
  { year: "2024 Q2", title: "First Programmes Launched", desc: "Initial 6 technical and safety programmes rolled out for field personnel." },
  { year: "2024 Q3", title: "Tashkent Campus Operational", desc: "Training facility equipped with classrooms, HSE lab and a drilling simulator." },
  { year: "2024 Q4", title: "First Cohort Graduates", desc: "87 specialists complete the inaugural well control and production safety tracks." },
  { year: "2025 Q1", title: "Digital Platform Live", desc: "Online learning portal launched, enabling blended delivery across regions." },
  { year: "2025 Q2", title: "IWCF Accreditation", desc: "Well Control programme receives IWCF certification — a first for the group." },
  { year: "2025 Q3", title: "Partnership Agreements", desc: "MoUs signed with SPE International, Gubkin University and 3 industry partners." },
  { year: "2026 Q1", title: "340+ Graduates", desc: "Academy reaches 340 graduates across 14 active programmes with 8 partners." },
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
