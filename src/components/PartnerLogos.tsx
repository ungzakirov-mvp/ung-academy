import FadeUp from "@/components/FadeUp";

const partners = [
  "Imperial College London",
  "MIT Energy Initiative",
  "SPE International",
  "IADC",
  "Schlumberger",
  "Baker Hughes",
  "Halliburton",
  "Coursera for Business",
  "INSEAD",
  "Harvard Business School Online",
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
        …и более 50 партнёров по всему миру с 2005 года
      </p>
    </FadeUp>
  );
};

export default PartnerLogos;
