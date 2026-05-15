import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";

const Hero = () => {
  // Auto-updating availability line — "May 2026" today, "June 2026" next month, etc.
  const availability = useMemo(() => {
    const d = new Date();
    return d.toLocaleString("en-GB", { month: "long", year: "numeric" });
  }, []);

  const CountUpNumber = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
    const hasAnimatedBefore = typeof window !== "undefined" && sessionStorage.getItem("fa_stats_animated") === "1";
    const [count, setCount] = useState<number>(hasAnimatedBefore ? end : 0);
    const startedRef = (typeof window !== "undefined" ? (window as any).__faStatsStartedRef : undefined) || { current: false };

    useEffect(() => {
      const alreadyAnimated = typeof window !== "undefined" && sessionStorage.getItem("fa_stats_animated") === "1";
      if (alreadyAnimated || startedRef.current) return;
      startedRef.current = true;
      try { sessionStorage.setItem("fa_stats_animated", "1"); } catch {}

      let raf = 0;
      const startTime = performance.now();
      const animate = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(end * easeOutQuart));
        if (progress < 1) {
          raf = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      raf = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(raf);
    }, [end, duration]);

    return <span>{count}{suffix}</span>;
  };

  const stack = [
    { name: "Power Apps", sub: "Canvas + model-driven", accent: false },
    { name: "Power Automate", sub: "Cloud + desktop flows", accent: true },
    { name: "Copilot Studio", sub: "Conversational agents", accent: false },
    { name: "Power BI", sub: "Reports + semantic models", accent: false },
    { name: "Dynamics 365", sub: "Sales · Service · Field", accent: false },
    { name: "SharePoint", sub: "IA + document workflows", accent: false },
  ];

  return (
    <>
      <Helmet>
        <title>Power Platform Consulting | Forma Automate</title>
        <meta name="description" content="Forma Automate provides Power Platform consulting for Real Estate, Defence, Infrastructure, Public Sector, Legal, Regulation, and Aviation—streamlining workflows and driving digital transformation." />
      </Helmet>
      <section className="pt-36 md:pt-40 pb-20 md:pb-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-end">
            {/* Left: headline */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="eyebrow text-primary">UK Power Platform Consultancy</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight text-foreground">
                  Power Platform,
                  <br />
                  <span className="font-serif-italic font-normal">delivered properly.</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl text-pretty">
                  I'm Forma Automate — independent Power Platform consultancy for UK organisations who want
                  apps, automations and Copilots built once, built right.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button variant="cta" size="xl" className="rounded-full group" asChild>
                  <a href="https://calendly.com/arif-formaautomate/30min" target="_blank" rel="noopener noreferrer">
                    Start a project
                    <ArrowRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" size="xl" className="rounded-full" asChild>
                  <a href="/case-studies">See recent work</a>
                </Button>
              </div>

              <div className="flex items-center gap-10 pt-6">
                <div>
                  <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                    <CountUpNumber end={50} suffix="+" />
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                    <CountUpNumber end={20} suffix="+" />
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Right: dark stack panel */}
            <div className="relative">
              <div
                className="rounded-3xl p-7 text-white relative overflow-hidden flex flex-col gap-6 min-h-[540px]"
                style={{ backgroundColor: "hsl(var(--navy-deep))" }}
              >
                <div
                  className="absolute inset-0 opacity-[0.06] pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="relative flex justify-between items-start">
                  <span className="eyebrow text-primary">The Practice</span>
                  <span className="font-mono text-xs opacity-50">v.2026</span>
                </div>

                <div className="relative grid gap-2.5 flex-1">
                  {stack.map((s, i) => (
                    <div
                      key={s.name}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl border ${
                        s.accent
                          ? "bg-primary text-white border-transparent"
                          : "bg-white/[0.06] border-white/10"
                      }`}
                    >
                      <div>
                        <div className="text-[15px] font-bold tracking-tight">{s.name}</div>
                        <div className={`text-xs mt-0.5 ${s.accent ? "opacity-80" : "opacity-55"}`}>{s.sub}</div>
                      </div>
                      <div className="font-mono text-[11px] opacity-60">0{i + 1}</div>
                    </div>
                  ))}
                </div>

                <div className="relative flex items-center gap-2.5 text-xs font-mono opacity-70">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
                  Available for new engagements · {availability}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
