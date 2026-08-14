import Link from "next/link";

import { WORK_INDEX_PATH } from "@/lib/projects";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-start justify-center px-5 py-24 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <p className="section-label">404</p>
        <h1 className="font-heading mt-4 text-4xl font-semibold tracking-[-0.03em] text-ink md:text-5xl">
          Page not found.
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-foreground/65">
          That page doesn&apos;t exist. Head back home or browse selected work.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium">
          <Link href="/" className="text-signal-deep hover:text-ink">
            Home
          </Link>
          <Link href={WORK_INDEX_PATH} className="text-signal-deep hover:text-ink">
            Selected work
          </Link>
        </div>
      </div>
    </main>
  );
}
