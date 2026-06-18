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
    <form className="mx-auto w-full max-w-xl" onSubmit={handleSubmit}>
      <div className="rounded-[1.4rem] border border-border bg-surface p-2.5 shadow-soft-lg transition-all focus-within:border-border-strong">
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Type a product with specs (e.g., '100% Organic Cotton T-shirt') or drop a photo here..."
          rows={3}
          maxLength={2000}
          aria-label="Product description"
          className="w-full resize-none bg-transparent px-3.5 py-3 text-base leading-relaxed text-foreground outline-none placeholder:text-faint"
        />
        <div className="flex items-center justify-between gap-2 px-1.5 pb-0.5">
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
            className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
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
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-2.5 text-base font-semibold text-accent-foreground shadow-soft transition-all hover:bg-accent-hover active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Run audit
          </button>
        </div>
      </div>
    </form>
  );
}
