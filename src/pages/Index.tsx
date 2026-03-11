import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Monitor, Users, Cpu, Shield, TrendingUp, Building2, GraduationCap, Handshake, Globe } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import Section from "@/components/Section";
import AcademyCard from "@/components/AcademyCard";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import PartnerLogos from "@/components/PartnerLogos";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  organisation: z.string().trim().max(100).optional(),
  email: z.string().trim().email("Invalid email").max(255),
  interest: z.string().trim().max(200).optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const stats = [
  { value: "18+", label: "Years of Experience" },
  { value: "15,000+", label: "Graduates" },
  { value: "500K+", label: "Training Hours" },
  { value: "50+", label: "Partners" },
  { value: "200+", label: "Programmes" },
  { value: "3", label: "Campuses" },
];

const Index = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", organisation: "", email: "", interest: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      toast({ title: "Validation Error", description: result.error.issues[0].message, variant: "destructive" });
      return;
    }
    toast({ title: "Message Sent", description: "Thank you for your interest. We will be in touch." });
    setForm({ name: "", organisation: "", email: "", interest: "", message: "" });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark-blue pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-blue via-navy to-dark-blue opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-0.5 bg-gold" />
                <span className="text-gold text-sm font-semibold uppercase tracking-widest">Corporate University · Since 2005</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Building Capability.<br />
                <span className="text-gold">Driving Performance.</span>
              </h1>
              <p className="text-white/70 text-lg md:text-xl mb-8 max-w-2xl">
                For over 18 years, UNG Academy has been developing world-class talent across technical, digital and leadership domains — shaping the future of energy.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-gold text-dark-blue hover:bg-gold-light font-semibold px-6">
                  <Link to="/programmes">Explore Programmes</Link>
                </Button>
                <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                  <Link to="/partners">Our Partners</Link>
                </Button>
              </div>
            </div>
          </FadeUp>

          {/* Stats */}
          <FadeUp delay={200}>
            <div className="mt-16 grid grid-cols-3 md:grid-cols-6 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-gold font-heading text-3xl md:text-4xl font-bold">{s.value}</div>
                  <div className="text-white/60 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Mandate */}
      <Section eyebrow="Our Mandate" title="Educate. Research. Perform." subtitle="UNG Academy is mandated to build organisational capability through structured learning, applied research and performance support.">
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { letter: "E", title: "Educate", desc: "Structured programmes from foundational to executive level, accredited and industry-aligned." },
              { letter: "R", title: "Research", desc: "Applied research partnerships driving innovation in energy operations and sustainability." },
              { letter: "P", title: "Perform", desc: "On-the-job support, coaching and performance consulting to translate learning into results." },
            ].map((item) => (
              <div key={item.letter} className="text-center p-8">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent font-heading text-2xl font-bold">{item.letter}</span>
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </Section>

      {/* History Timeline */}
      <Section eyebrow="Our History" title="An 18-Year Journey" className="bg-cloud" subtitle="Key milestones in UNG Academy's development since its founding in 2005.">
        <Timeline />
      </Section>

      {/* Core Academies */}
      <Section eyebrow="Core Academies" title="Three Pillars of Learning" subtitle="Our academies align to the strategic capability needs of the organisation.">
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AcademyCard icon={<Cpu size={28} />} title="Technical Academy" description="Drilling, production, HSE and engineering competency programmes built with industry partners." badges={["Drilling", "Production", "HSE", "Engineering"]} />
            <AcademyCard icon={<Monitor size={28} />} title="Digital Academy" description="Data science, cybersecurity, automation and digital transformation upskilling pathways." badges={["Data Science", "Cybersecurity", "Automation"]} />
            <AcademyCard icon={<Users size={28} />} title="Leadership Academy" description="Executive development, succession planning and organisational leadership programmes." badges={["Executive", "Succession", "Coaching"]} />
          </div>
        </FadeUp>
      </Section>

      {/* Programme Portfolio */}
      <Section eyebrow="Programme Portfolio" title="Learning Pathways" className="bg-cloud" subtitle="Programmes designed for every career stage — from graduate intake to C-suite development.">
        <FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Graduate Programme", desc: "Structured 18-month rotational programme for new hires.", icon: <GraduationCap size={24} /> },
              { title: "Professional Development", desc: "Mid-career technical and managerial upskilling tracks.", icon: <BookOpen size={24} /> },
              { title: "Senior Leadership", desc: "Executive education in partnership with global business schools.", icon: <TrendingUp size={24} /> },
              { title: "Specialist Certifications", desc: "Industry-recognised certifications across technical domains.", icon: <Shield size={24} /> },
            ].map((p) => (
              <AcademyCard key={p.title} icon={p.icon} title={p.title} description={p.desc} />
            ))}
          </div>
        </FadeUp>
      </Section>

      {/* Testimonials */}
      <Section eyebrow="Отзывы" title="Голоса наших выпускников" dark subtitle="Реальные истории людей, чья карьера изменилась благодаря UNG Academy.">
        <Testimonials />
      </Section>

      {/* Business Impact */}
      <Section eyebrow="Business Impact" title="Measurable Results" className="bg-cloud" subtitle="Our programmes deliver tangible business outcomes across the organisation.">
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Operational Excellence", desc: "Reduced downtime by 40% and improved safety metrics through competency-based training since 2010.", icon: <Cpu size={32} /> },
              { title: "Safety Performance", desc: "Zero-harm culture with 98.7% safety compliance — driven by HSE academy programmes since 2008.", icon: <Shield size={32} /> },
              { title: "Strategic Capability", desc: "Built a leadership pipeline of 300+ senior managers supporting succession and strategic transformation.", icon: <TrendingUp size={32} /> },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-lg p-8 border border-border">
                <div className="text-accent mb-4">{item.icon}</div>
                <h3 className="font-heading text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </Section>

      {/* Partner Logos */}
      <Section eyebrow="Нам доверяют" title="Партнёры и аккредитации" subtitle="Сотрудничество с ведущими мировыми институтами и компаниями.">
        <PartnerLogos />
      </Section>

      {/* Campus & Delivery */}
      <Section eyebrow="Campus & Delivery" title="How We Deliver" className="bg-cloud" subtitle="Blended learning across physical campuses, on-site facilities and digital platforms.">
        <FadeUp>
          <div className="flex flex-wrap gap-3">
            {["Classroom", "Virtual Live", "E-Learning", "On-the-Job", "Simulation", "Coaching"].map((badge) => (
              <span key={badge} className="px-4 py-2 rounded-full bg-accent/20 text-accent font-medium text-sm">
                {badge}
              </span>
            ))}
          </div>
          <p className="mt-6 text-muted-foreground max-w-2xl">
            Наши кампусы в Ташкенте (с 2011) и Бухаре (с 2019) оснащены современным оборудованием. Цифровая платформа поддерживает 15,000+ выпускников по всем локациям.
          </p>
        </FadeUp>
      </Section>

      {/* Contact Form */}
      <Section eyebrow="Get in Touch" title="Partner With Us" subtitle="Interested in collaborating with UNG Academy? Reach out and our team will respond within 48 hours.">
        <FadeUp>
          <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input placeholder="Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <Input placeholder="Organisation" value={form.organisation} onChange={(e) => setForm({ ...form, organisation: e.target.value })} />
            </div>
            <Input type="email" placeholder="Email *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <Input placeholder="Area of Interest" value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} />
            <Textarea placeholder="Message *" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <Button type="submit" className="bg-gold text-dark-blue hover:bg-gold-light font-semibold px-8">
              Send Message
            </Button>
          </form>
        </FadeUp>
      </Section>
    </>
  );
};

export default Index;
