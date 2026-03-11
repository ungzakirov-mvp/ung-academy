import { BookOpen, Monitor, Users, GraduationCap } from "lucide-react";
import InnerHero from "@/components/InnerHero";
import Section from "@/components/Section";
import AcademyCard from "@/components/AcademyCard";
import FadeUp from "@/components/FadeUp";

const Programmes = () => {
  return (
    <>
      <InnerHero title="Programmes" subtitle="Structured learning pathways from graduate to executive level, aligned to organisational capability needs." />

      <Section eyebrow="By Career Stage" title="Programmes for Every Level" subtitle="Our portfolio covers the full employee lifecycle — from onboarding to C-suite development.">
        <FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AcademyCard icon={<GraduationCap size={24} />} title="Graduate Intake" description="18-month rotational programme with structured competency milestones." badges={["Foundation", "Rotation", "Mentoring"]} />
            <AcademyCard icon={<BookOpen size={24} />} title="Professional" description="Technical and functional upskilling for mid-career professionals." badges={["Technical", "Functional", "Certification"]} />
            <AcademyCard icon={<Users size={24} />} title="Management" description="First-time manager programmes and operational leadership development." badges={["Leadership", "People Mgmt"]} />
            <AcademyCard icon={<Monitor size={24} />} title="Executive" description="Senior leadership programmes with global business school partners." badges={["Strategy", "Governance"]} />
          </div>
        </FadeUp>
      </Section>

      <Section eyebrow="Technical Academy" title="Technical Programmes" className="bg-cloud" subtitle="Deep technical competency development in core operational domains.">
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AcademyCard title="Drilling & Well Engineering" description="Comprehensive well construction programmes covering drilling operations, well integrity, completions and intervention. Developed with IADC-aligned standards and delivered through simulation-based learning." badges={["Well Integrity", "Completions", "Simulation", "IADC"]} />
            <AcademyCard title="Production & Operations" description="Upstream production optimisation, process safety and facilities management programmes. Combines classroom theory with on-site practical application and competency assessment." badges={["Process Safety", "Facilities", "Optimisation"]} />
          </div>
        </FadeUp>
      </Section>

      <Section eyebrow="Digital & Leadership" title="Digital and Leadership Programmes" subtitle="Building future-ready capabilities across the organisation.">
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AcademyCard title="Digital Transformation" description="Data analytics, machine learning, cybersecurity and automation programmes designed for the energy sector. Partnerships with leading technology providers ensure industry relevance." badges={["Data Analytics", "ML/AI", "Cybersecurity"]} />
            <AcademyCard title="Leadership Development" description="Executive coaching, strategic thinking and organisational leadership programmes. Delivered in partnership with internationally ranked business schools." badges={["Executive Coaching", "Strategy", "Change Mgmt"]} />
          </div>
        </FadeUp>
      </Section>
    </>
  );
};

export default Programmes;
