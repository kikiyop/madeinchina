"use client";

import { useRef, useState } from "react";

export default function AuditForm() {
  const [description, setDescription] = useState("");
  const [photoName, setPhotoName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const canSubmit = description.trim().length > 0 || photoName !== null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    // TODO: wire up to the audit endpoint. Front end only for now.
  }

  return (
    <form onSubmit={handleSubmit} className="relative mx-auto w-full max-w-2xl">
      {/* Corner brackets — technical framing */}
      <span className="pointer-events-none absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-accent/70" />
      <span className="pointer-events-none absolute -right-px -top-px h-4 w-4 border-r-2 border-t-2 border-accent/70" />
      <span className="pointer-events-none absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-accent/70" />
      <span className="pointer-events-none absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-accent/70" />

      <div className="rounded-lg border border-border bg-surface p-3 transition-all focus-within:border-accent/50 focus-within:shadow-[0_0_36px_-8px_rgba(22,163,74,0.45)]">
        <div className="flex items-center justify-between border-b border-border px-1 pb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
          <span>Audit Console</span>
          <span className="text-accent-bright">● Ready</span>
        </div>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Type a product with specs (e.g., '100% Organic Cotton T-shirt') or drop a photo here..."
          rows={2}
          maxLength={2000}
          aria-label="Product description"
          className="mt-2 w-full resize-none bg-transparent px-2 py-2 text-base leading-relaxed text-foreground outline-none placeholder:text-muted"
        />

        <div className="flex items-center justify-between gap-2 px-1 pt-1">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/webp,image/gif"
            className="hidden"
            onChange={(e) => setPhotoName(e.target.files?.[0]?.name ?? null)}
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-2 rounded-md px-2.5 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="2.5" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="m21 15-4.5-4.5L5 21" />
            </svg>
            {photoName ? "Photo attached" : "Attach photo"}
          </button>

          <button
            type="submit"
            disabled={!canSubmit}
            className="group inline-flex items-center gap-2 rounded-md bg-accent px-6 py-2.5 font-mono text-sm font-bold uppercase tracking-[0.14em] text-accent-foreground shadow-[0_0_24px_-6px_rgba(22,163,74,0.7)] transition-all hover:bg-accent-hover active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
          >
            Run audit
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
}
