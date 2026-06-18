import AuditForm from "@/components/AuditForm";

export default function Home() {
  return (
    <main className="relative flex flex-1 flex-col items-center px-5 pt-20 pb-24 sm:px-6 sm:pt-28">
      <div className="mic-rise flex w-full max-w-2xl flex-col items-center text-center">
        <h1 className="text-[2rem] font-semibold leading-[1.08] tracking-[-0.025em] text-balance text-foreground sm:text-[3.25rem]">
          Industrial Supplier Cost Audit
        </h1>
        <p className="mt-4 text-sm font-medium tracking-wide text-faint">
          Powered by MadeInChina.info
        </p>
        <p className="mt-6 max-w-xl text-base leading-7 text-pretty text-muted sm:text-lg sm:leading-8">
          The premium, independent AI tool for international importers. Estimate
          factory-gate costs and discover China&apos;s leading manufacturing hubs in
          seconds.
        </p>
      </div>

      <div className="mt-10 flex w-full justify-center sm:mt-14">
        <div className="w-full max-w-2xl">
          <AuditForm />
        </div>
      </div>
    </main>
  );
}
