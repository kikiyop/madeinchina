import AuditForm from "@/components/AuditForm";

const FEATURES: { label: string; text: string }[] = [
  { label: "Industrial Cost Audit:", text: "Estimate factory-gate costs in seconds." },
  { label: "Sourcing Intelligence:", text: "Discover China's leading manufacturing hubs." },
  { label: "Risk Prevention:", text: "AI recommendation of product-specific risk alerts." },
  { label: "Supplier Typologies:", text: "Identify the top-rated supplier profiles for your product." },
];

export default function Home() {
  return (
    <main className="relative flex flex-1 flex-col items-center px-5 pt-20 pb-24 sm:px-6 sm:pt-28">
      <div className="mic-rise flex w-full max-w-2xl flex-col items-center text-center">
        <div className="-translate-y-[10mm] flex flex-col items-center">
          <h1 className="text-[2rem] font-semibold leading-[1.08] tracking-[-0.025em] text-balance text-foreground sm:text-[3.25rem]">
            MadeInChina.info
          </h1>
          <p className="mt-2.5 text-sm font-medium uppercase tracking-[0.18em] text-faint">
            Industrial Supplier Tools
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-1.5 text-left text-base font-medium tracking-wide text-faint">
          {FEATURES.map((f) => (
            <p key={f.label}>
              <span className="text-foreground">{f.label}</span> {f.text}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-10 flex w-full justify-center sm:mt-14">
        <div className="w-full max-w-2xl">
          <AuditForm />
        </div>
      </div>
    </main>
  );
}
