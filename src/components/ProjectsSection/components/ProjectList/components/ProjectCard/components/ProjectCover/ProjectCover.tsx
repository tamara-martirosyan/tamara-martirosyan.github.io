import Image from "next/image";

import { cn } from "@/lib/utils";

import { PREVIEW_FRAME_CLASS_NAME } from "../../constants";

const ProjectCover = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  return (
    <div className={cn(PREVIEW_FRAME_CLASS_NAME, className)}>
      <Image
        src={src}
        alt={alt}
        width={2400}
        height={1336}
        sizes="(min-width: 1024px) 384px, (min-width: 768px) 320px, 100vw"
        className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
    </div>
  );
};

export default ProjectCover;
