import Image from "next/image";

export type WalkthroughShot = {
  title: string;
  description: string;
  src: string;
  alt: string;
};

const ProductWalkthrough = ({
  title,
  intro,
  shots,
  imageWidth,
  imageHeight,
}: {
  title: string;
  intro: string;
  shots: readonly WalkthroughShot[];
  imageWidth: number;
  imageHeight: number;
}) => {
  return (
    <div className="space-y-16 md:space-y-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="section-label">Product walkthrough</p>
        <h2 className="font-heading mt-3 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 md:text-lg">
          {intro}
        </p>
      </div>

      <div className="space-y-16 md:space-y-28">
        {shots.map((shot, index) => (
          <section
            key={shot.src}
            className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12 lg:even:flex-row-reverse"
          >
            <div className="lg:w-[38%] lg:shrink-0">
              <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                Step {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-heading mt-3 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                {shot.title}
              </h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-foreground/60">
                {shot.description}
              </p>
            </div>

            <div className="min-w-0 overflow-hidden rounded-[1.25rem] border border-border/70 bg-white shadow-[0_40px_80px_-40px_rgba(11,27,51,0.55)] ring-1 ring-black/[0.04] md:rounded-[1.5rem] lg:flex-1">
              <Image
                src={shot.src}
                alt={shot.alt}
                width={imageWidth}
                height={imageHeight}
                className="h-auto w-full"
              />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ProductWalkthrough;
