import { Building2, MapPin, Monitor, Globe } from "lucide-react";
import InnerHero from "@/components/InnerHero";
import Section from "@/components/Section";
import AcademyCard from "@/components/AcademyCard";
import FadeUp from "@/components/FadeUp";

const Campus = () => {
  return (
    <>
      <InnerHero title="Campus & Delivery" subtitle="State-of-the-art physical and digital learning environments supporting over 5,000 learners." />

      <Section eyebrow="Physical Campuses" title="Learning Centres" subtitle="Purpose-built campuses with modern classrooms, simulation labs and collaboration spaces.">
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AcademyCard icon={<Building2 size={24} />} title="Tashkent Campus" description="Our flagship campus features 12 classrooms, a drilling simulation centre, computer labs and a 200-seat auditorium. Located in the business district with full conferencing facilities." badges={["12 Classrooms", "Simulation Centre", "Auditorium"]} />
            <AcademyCard icon={<MapPin size={24} />} title="Bukhara Campus" description="Regional training centre serving field operations staff with hands-on technical training facilities, HSE simulation areas and accommodation for residential programmes." badges={["Field Training", "HSE Simulation", "Residential"]} />
          </div>
        </FadeUp>
      </Section>

      <Section eyebrow="On-Site Training" title="Field Delivery" className="bg-cloud" subtitle="Training delivered where it matters — at the wellsite, in the plant and on the shop floor.">
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-heading text-xl font-bold mb-3">Wellsite Training</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Mobile training units and qualified assessors deliver competency-based training directly at wellsite locations, minimising operational downtime while maximising learning transfer.
              </p>
            </div>
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-heading text-xl font-bold mb-3">Facility-Based Training</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                On-site training rooms at major production facilities support ongoing professional development, safety briefings and operational procedure training.
              </p>
            </div>
          </div>
        </FadeUp>
      </Section>

      <Section eyebrow="Digital Campus" title="Online Learning" subtitle="A comprehensive digital learning ecosystem supporting anytime, anywhere access.">
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AcademyCard icon={<Monitor size={24} />} title="Learning Management System" description="Enterprise LMS with 500+ courses, personalised learning paths, progress tracking and competency assessment. Integrated with HR systems for seamless reporting." badges={["500+ Courses", "Personalised Paths", "Analytics"]} />
            <AcademyCard icon={<Globe size={24} />} title="Virtual Delivery" description="Live virtual classrooms, webinar series and hybrid delivery models enabling global participation. Interactive tools support engagement and collaboration." badges={["Live Classes", "Hybrid Model", "Interactive"]} />
          </div>
        </FadeUp>
      </Section>
    </>
  );
};

export default Campus;
