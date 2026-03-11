import FadeUp from "@/components/FadeUp";

const partners = [
  "SPE International",
  "IWCF",
  "Gubkin University",
  "Coursera for Business",
  "Schlumberger Learning",
  "Baker Hughes Training",
  "Tashkent State Technical University",
  "IADC",
];

const PartnerLogos = () => {
  return (
    <FadeUp>
      <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
        {partners.map((name) => (
          <div
            key={name}
            className="px-5 py-3 rounded-lg bg-card border border-border text-muted-foreground font-semibold text-sm tracking-wide hover:text-accent hover:border-accent/30 transition-colors whitespace-nowrap"
          >
            {name}
          </div>
        ))}
      </div>
      <p className="text-center text-muted-foreground text-sm mt-8">
        …and 47 institutional &amp; industry partners across 14 countries since 2005
      </p>
    </FadeUp>
  );
};

export default PartnerLogos;
