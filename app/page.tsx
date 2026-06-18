import AuditForm from "@/components/AuditForm";

const FEATURES: { n: string; label: string; text: string }[] = [
  { n: "01", label: "Industrial Cost Audit", text: "Estimate factory-gate costs in seconds." },
  { n: "02", label: "Sourcing Intelligence", text: "Discover China's leading manufacturing hubs." },
  { n: "03", label: "Risk Prevention", text: "AI recommendation of product-specific risk alerts." },
  { n: "04", label: "Supplier Typologies", text: "Identify the top-rated supplier profiles for your product." },
];

export default function Home() {
  return (
    <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col px-5 pt-8 pb-24 sm:px-8">
      {/* Technical header strip */}
      <div className="rise flex items-center justify-between border-b border-border pb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
        <span>// madeinchina.info</span>
        <span className="flex items-center gap-2">
          <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-accent-bright" />
          System Operational
        </span>
      </div>

      {/* Hero */}
      <section className="flex flex-col items-center pt-16 text-center sm:pt-24">
        <span
          className="rise font-mono text-xs uppercase tracking-[0.35em] text-accent-bright"
          style={{ animationDelay: "0.05s" }}
        >
          中国制造 — Verified Intelligence
        </span>
        <h1
          className="rise mt-5 text-[2.75rem] font-extrabold leading-[0.92] tracking-[-0.03em] text-foreground sm:text-[5.5rem]"
          style={{ animationDelay: "0.12s" }}
        >
          MadeInChina<span className="text-accent">.</span>info
        </h1>
        <p
          className="rise mt-4 font-mono text-xs uppercase tracking-[0.32em] text-muted sm:text-sm"
          style={{ animationDelay: "0.2s" }}
        >
          Industrial Supplier Tools
        </p>
      </section>

      {/* Feature spec grid — hairlines via gap-px over a border-colored backdrop */}
      <section
        className="rise mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2"
        style={{ animationDelay: "0.28s" }}
      >
        {FEATURES.map((f) => (
          <div
            key={f.n}
            className="group relative bg-surface p-6 transition-colors hover:bg-surface-2 sm:p-7"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-xs text-accent">{f.n}</span>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
                {f.label}
              </h3>
            </div>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-faint">{f.text}</p>
            <span className="absolute right-4 top-4 h-2 w-2 border-r border-t border-border-strong transition-colors group-hover:border-accent-bright" />
          </div>
        ))}
      </section>

      {/* Audit console */}
      <section className="rise mt-12" style={{ animationDelay: "0.36s" }}>
        <AuditForm />
      </section>
    </main>
  );
}
