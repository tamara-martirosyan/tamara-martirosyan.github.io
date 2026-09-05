import Image from "next/image";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import InViewVideo from "./components/InViewVideo";

const shots = [
  {
    step: "01",
    title: "Discover",
    description:
      "Recommended and new essays, with categories and authors one tap away.",
    src: "/projects/kust/discover.jpg",
    alt: "Kust Reader discover feed with recommended and new essays",
  },
  {
    step: "02",
    title: "Sign in",
    description:
      "Google or email sign-in gets readers into their library fast.",
    src: "/projects/kust/login.jpg",
    alt: "Kust Reader login screen with Google and email sign-in options",
  },
  {
    step: "03",
    title: "Read",
    description:
      "A paginated EPUB viewer with highlight, bookmark, comment, and progress controls always in reach.",
    src: "/projects/kust/reader-toolbar.jpg",
    alt: "Kust Reader EPUB viewer open on The Call of the Wild with the reading toolbar visible",
  },
  {
    step: "04",
    title: "Personalize",
    description: "Brightness, font size, and theme, saved per reader.",
    src: "/projects/kust/settings.jpg",
    alt: "Kust Reader display settings panel with brightness, font size, and theme controls",
  },
  {
    step: "05",
    title: "Navigate",
    description: "Jump to any chapter from a synced table of contents.",
    src: "/projects/kust/contents.jpg",
    alt: "Kust Reader table of contents panel listing book chapters",
  },
] as const;

const MediaFrame = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[1.25rem] border border-border/70 bg-white shadow-[0_40px_80px_-40px_rgba(11,27,51,0.55)] ring-1 ring-black/[0.04] md:rounded-[1.5rem]",
        className,
      )}
    >
      {children}
    </div>
  );
};

const KustReaderMock = () => {
  return (
    <div className="space-y-16 md:space-y-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="section-label">Product walkthrough</p>
        <h2 className="font-heading mt-3 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          From catalog to page to annotation
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 md:text-lg">
          A full pass through the product — discovery, the EPUB reader, and
          the highlights and bookmarks that keep readers coming back.
        </p>
      </div>

      <div className="mx-auto w-full max-w-55">
        <MediaFrame className="rounded-[2rem]">
          <InViewVideo
            src="/projects/kust/kust.mp4"
            poster="/projects/kust/mobile-poster.jpg"
            label="Kust Reader mobile walkthrough: browsing essays, opening a book, and highlighting a passage"
            width={392}
            height={850}
            className="aspect-392/850"
          />
        </MediaFrame>
        <p className="mt-4 text-center text-sm text-foreground/55">
          Browse, open a book, and highlight a passage on mobile
        </p>
      </div>

      <div className="space-y-16 md:space-y-28">
        {shots.map((shot) => (
          <section
            key={shot.step}
            className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12 lg:even:flex-row-reverse"
          >
            <div className="lg:w-[38%] lg:shrink-0">
              <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                Step {shot.step}
              </p>
              <h3 className="font-heading mt-3 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                {shot.title}
              </h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-foreground/60">
                {shot.description}
              </p>
            </div>

            <MediaFrame className="min-w-0 lg:flex-1">
              <Image
                src={shot.src}
                alt={shot.alt}
                width={2400}
                height={1336}
                className="h-auto w-full"
              />
            </MediaFrame>
          </section>
        ))}

        <section className="flex flex-col gap-8 lg:flex-row-reverse lg:items-center lg:gap-12">
          <div className="lg:w-[38%] lg:shrink-0">
            <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
              Step 06
            </p>
            <h3 className="font-heading mt-3 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              Keep & support
            </h3>
            <p className="mt-3 max-w-md text-base leading-relaxed text-foreground/60">
              Highlights and page bookmarks stay attached to the exact
              passage, ready to revisit or support the author from.
            </p>
          </div>

          <div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:flex-1">
            <MediaFrame>
              <Image
                src="/projects/kust/highlights.jpg"
                alt="Kust Reader highlights panel listing a saved passage"
                width={2400}
                height={1336}
                className="h-auto w-full"
              />
            </MediaFrame>
            <MediaFrame>
              <Image
                src="/projects/kust/bookmarks.jpg"
                alt="Kust Reader bookmarks panel with a saved reading position"
                width={2400}
                height={1336}
                className="h-auto w-full"
              />
            </MediaFrame>
          </div>
        </section>
      </div>
    </div>
  );
};

export default KustReaderMock;
