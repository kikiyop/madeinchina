import AuditForm from "@/components/AuditForm";

const FEATURES: { n: string; label: string; text: string }[] = [
  { n: "01", label: "Industrial Cost Audit", text: "Estimate factory-gate costs in seconds." },
  { n: "02", label: "Sourcing Intelligence", text: "Discover China's leading manufacturing hubs." },
  { n: "03", label: "Risk Prevention", text: "Detect product-specific sourcing risks." },
  { n: "04", label: "Top-Rated Suppliers", text: "Get contact details for the best manufacturers." },
];

export default function Home() {
  return (
    <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col px-5 pt-8 pb-[58px] sm:px-8">
      {/* Hero */}
      <section className="flex flex-col items-center pt-14 text-center sm:pt-10">
        <span
          className="rise font-mono text-base uppercase tracking-[0.2em] text-balance text-accent-bright sm:text-xl"
          style={{ animationDelay: "0.05s" }}
        >
          AI-Powered China Manufacturing Intelligence
        </span>
        <h1
          className="rise mt-3 text-[2rem] font-extrabold leading-[0.95] tracking-[-0.03em] text-foreground sm:text-[2.6rem]"
          style={{ animationDelay: "0.12s" }}
        >
          MadeInChina<span className="text-accent">.</span>info
        </h1>
        <p
          className="rise mt-2 pl-[0.4em] text-lg tracking-[0.4em] text-accent-bright"
          style={{ animationDelay: "0.16s" }}
        >
          中国制造
        </p>
      </section>

      {/* Feature spec grid — hairlines via gap-px over a border-colored backdrop */}
      <section
        className="rise mx-auto mt-14 grid w-full max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 sm:auto-rows-fr"
        style={{ animationDelay: "0.28s" }}
      >
        {FEATURES.map((f) => (
          <div
            key={f.n}
            className="group relative bg-surface px-6 py-[calc(1.5rem-2mm)] transition-colors hover:bg-surface-2 sm:px-7 sm:py-[calc(1.75rem-2mm)]"
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
