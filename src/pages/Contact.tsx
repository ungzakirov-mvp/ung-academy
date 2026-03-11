import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import InnerHero from "@/components/InnerHero";
import Section from "@/components/Section";
import FadeUp from "@/components/FadeUp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  organisation: z.string().trim().max(100).optional(),
  email: z.string().trim().email("Invalid email").max(255),
  role: z.string().trim().max(100).optional(),
  topic: z.string().trim().max(200).optional(),
  contactMethod: z.string().trim().max(50).optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "", organisation: "", email: "", role: "", topic: "", contactMethod: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      toast({ title: "Validation Error", description: result.error.issues[0].message, variant: "destructive" });
      return;
    }
    toast({ title: "Message Sent", description: "Thank you. Our team will respond within 48 hours." });
    setForm({ name: "", organisation: "", email: "", role: "", topic: "", contactMethod: "", message: "" });
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [field]: e.target.value });

  return (
    <>
      <InnerHero title="Contact Us" subtitle="Get in touch with UNG Academy — we'd love to hear from you." />

      <Section eyebrow="Reach Us" title="Contact Information">
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: <MapPin size={24} />, label: "Address", value: "UNG Academy, Tashkent, Uzbekistan" },
              { icon: <Mail size={24} />, label: "Email", value: "academy@ung.uz" },
              { icon: <Phone size={24} />, label: "Phone", value: "+998 71 200 00 00" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 bg-card rounded-lg border border-border p-6">
                <div className="text-accent shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">{item.label}</h3>
                  <p className="text-muted-foreground text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </Section>

      <Section eyebrow="Send a Message" title="Enquiry Form" className="bg-cloud" subtitle="Fill in the form below and we'll get back to you within 48 hours.">
        <FadeUp>
          <form onSubmit={handleSubmit} className="max-w-2xl space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input placeholder="Full Name *" value={form.name} onChange={update("name")} />
              <Input placeholder="Organisation" value={form.organisation} onChange={update("organisation")} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input type="email" placeholder="Email *" value={form.email} onChange={update("email")} />
              <Input placeholder="Your Role" value={form.role} onChange={update("role")} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input placeholder="Topic of Interest" value={form.topic} onChange={update("topic")} />
              <Input placeholder="Preferred Contact Method" value={form.contactMethod} onChange={update("contactMethod")} />
            </div>
            <Textarea placeholder="Your Message *" rows={5} value={form.message} onChange={update("message")} />
            <Button type="submit" className="bg-gold text-dark-blue hover:bg-gold-light font-semibold px-8">
              Send Message
            </Button>
          </form>
        </FadeUp>
      </Section>
    </>
  );
};

export default Contact;
