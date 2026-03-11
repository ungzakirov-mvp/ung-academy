import { Building2, Users, Shield, Handshake, Globe, BookOpen } from "lucide-react";
import InnerHero from "@/components/InnerHero";
import Section from "@/components/Section";
import AcademyCard from "@/components/AcademyCard";
import FadeUp from "@/components/FadeUp";

const Partners = () => {
  return (
    <>
      <InnerHero title="Partners" subtitle="Our partnership model connects internal stakeholders with world-class external institutions." />

      <Section eyebrow="Internal Partners" title="Business Alignment" subtitle="UNG Academy works closely with internal stakeholders to ensure learning aligns with business priorities.">
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AcademyCard icon={<Building2 size={24} />} title="Business Units" description="Direct partnership with operational business units to identify capability gaps and co-design targeted learning solutions." />
            <AcademyCard icon={<Users size={24} />} title="Human Resources" description="Joint workforce planning, talent management and succession pipeline development across the organisation." />
            <AcademyCard icon={<Shield size={24} />} title="HSE Department" description="Collaborative safety culture programmes, regulatory compliance training and HSE competency frameworks." />
          </div>
        </FadeUp>
      </Section>

      <Section eyebrow="External Partnerships" title="Global Collaborations" className="bg-cloud" subtitle="Partnerships with leading institutions ensure international standards and best practice.">
        <FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AcademyCard icon={<BookOpen size={24} />} title="Universities" description="Accredited programme delivery and applied research with top-tier international universities." />
            <AcademyCard icon={<Handshake size={24} />} title="Industry Bodies" description="SPE, IADC and professional body partnerships for standards, certification and knowledge sharing." />
            <AcademyCard icon={<Globe size={24} />} title="EdTech Platforms" description="Technology partnerships for LMS, virtual delivery and digital content development." />
            <AcademyCard icon={<Users size={24} />} title="Service Companies" description="Joint technical training with oilfield service companies for operational excellence." />
          </div>
        </FadeUp>
      </Section>

      <Section eyebrow="Governance Model" title="Partnership Governance" subtitle="Structured governance ensures accountability and strategic alignment across all partnerships.">
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AcademyCard title="Advisory Board" description="Senior representatives from partner institutions provide strategic guidance on programme direction, quality assurance and research priorities. The board meets quarterly." badges={["Strategic Direction", "Quality", "Quarterly"]} />
            <AcademyCard title="Academic Council" description="Joint academic council comprising UNG Academy faculty and partner institution representatives ensures curriculum quality, accreditation standards and learning outcomes." badges={["Curriculum", "Accreditation", "Standards"]} />
          </div>
        </FadeUp>
      </Section>
    </>
  );
};

export default Partners;
