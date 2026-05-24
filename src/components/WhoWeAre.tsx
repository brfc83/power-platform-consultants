import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WhoWeAre = () => {
  const stats = [
    { k: "20+", v: "years inside Microsoft 365 estates" },
    { k: "50+", v: "apps, flows and Copilots shipped" },
    { k: "8", v: "enterprise clients across 6 sectors" },
    { k: "100%", v: "UK-based, sole-consultant delivery" },
  ];

  return (
    <section
      id="who-we-are"
      className="py-24 md:py-28 text-white relative overflow-hidden"
      style={{ backgroundColor: "hsl(var(--navy-deep))" }}
    >
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20">
          <div>
            <span className="eyebrow text-primary">— About</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mt-4 text-balance">
              Hello, I'm <span className="font-serif-italic font-normal">Arif</span> — the consultant behind
              Forma Automate.
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mt-8 max-w-xl text-pretty">
              The name <span className="font-serif-italic">Forma</span> comes from the Latin for{" "}
              <em>form</em> or <em>structure</em> — a reflection of how I build with purpose. Every solution is
              shaped with clarity, simplicity, and an understanding of how teams actually work.
            </p>
            <p className="text-base text-white/60 leading-relaxed mt-5 max-w-xl text-pretty">
              Years inside Microsoft 365 estates at Dentons, easyJet, Crossrail and others have taught me the same
              thing every time: most automation projects don't fail at the technology, they fail at the joinery —
              between people, processes, and the platform itself. I built Forma Automate to do that joinery well.
            </p>

            <div className="flex flex-wrap gap-3 mt-10">
              <Button variant="cta" size="lg" className="rounded-full bg-white text-foreground hover:bg-white/90" asChild>
                <a href="#contact">
                  Get in touch
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white"
                asChild
              >
                <a href="https://www.linkedin.com/in/arifgulma/" target="_blank" rel="noopener noreferrer">
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-white/10 self-start rounded-2xl overflow-hidden border border-white/10">
            {stats.map((s) => (
              <div key={s.k} className="p-8 md:p-10" style={{ backgroundColor: "hsl(var(--navy-deep))" }}>
                <div className="text-4xl md:text-5xl font-extrabold tracking-tight leading-none text-primary">
                  {s.k}
                </div>
                <div className="text-sm text-white/65 mt-3 leading-snug">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
