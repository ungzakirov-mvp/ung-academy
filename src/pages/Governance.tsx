import { Users, Shield, BookOpen, FileText } from "lucide-react";
import InnerHero from "@/components/InnerHero";
import Section from "@/components/Section";
import AcademyCard from "@/components/AcademyCard";
import FadeUp from "@/components/FadeUp";

const Governance = () => {
  return (
    <>
      <InnerHero title="Governance" subtitle="Robust governance structures ensuring quality, accountability and strategic alignment." />

      <Section eyebrow="Governance Bodies" title="Oversight & Direction" subtitle="Three governing bodies provide strategic direction, academic quality and industry alignment.">
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AcademyCard icon={<Users size={24} />} title="Board of Directors" description="Senior leadership oversight of strategy, budget and organisational performance. Meets quarterly with representation from all business units." badges={["Strategy", "Budget", "Quarterly"]} />
            <AcademyCard icon={<BookOpen size={24} />} title="Academic Council" description="Responsible for curriculum quality, accreditation standards and learning outcome assurance. Comprises internal and external academic experts." badges={["Curriculum", "Accreditation", "Quality"]} />
            <AcademyCard icon={<Shield size={24} />} title="Industry Advisory Board" description="External industry leaders and subject matter experts providing guidance on market trends, emerging skills and programme relevance." badges={["Industry Trends", "Skills Forecast", "Advisory"]} />
          </div>
        </FadeUp>
      </Section>

      <Section eyebrow="Quality Assurance" title="Quality Framework" className="bg-cloud" subtitle="Systematic quality assurance processes ensure excellence across all programmes.">
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AcademyCard title="Programme Review Cycle" description="Annual programme reviews assess learning outcomes, participant feedback, business impact and alignment with strategic objectives. External benchmarking ensures international comparability." badges={["Annual Review", "Benchmarking", "Impact Assessment"]} />
            <AcademyCard title="Accreditation & Standards" description="All programmes align with international standards including ISO 10015 (Quality Management for Training), OPITO standards for technical programmes and recognised university accreditation frameworks." badges={["ISO 10015", "OPITO", "University Accreditation"]} />
          </div>
        </FadeUp>
      </Section>

      <Section eyebrow="Documentation" title="Key Documents" subtitle="Core governance and policy documents.">
        <FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Academy Charter",
              "Strategic Plan 2024–2028",
              "Quality Assurance Policy",
              "Competency Framework",
              "Partner Agreement Template",
              "Annual Report 2023",
            ].map((doc) => (
              <div key={doc} className="flex items-center gap-3 bg-card rounded-lg border border-border p-4 hover:-translate-y-0.5 transition-transform">
                <FileText size={18} className="text-accent shrink-0" />
                <span className="text-sm font-medium">{doc}</span>
              </div>
            ))}
          </div>
        </FadeUp>
      </Section>
    </>
  );
};

export default Governance;
