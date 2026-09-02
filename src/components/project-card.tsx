/* eslint-disable @next/next/no-img-element */

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Markdown from "react-markdown";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="aspect-[16/10] w-full bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  storyHref?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  className?: string;
}

export function ProjectCard({
  title,
  storyHref,
  description,
  dates,
  tags,
  image,
  video,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "group flex break-inside-avoid flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-200 hover:bg-muted/20",
        className
      )}
    >
      <div className="relative shrink-0 overflow-hidden border-b border-border bg-muted">
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : image ? (
          <ProjectImage src={image} alt={title} />
        ) : (
          <div className="aspect-[16/10] w-full bg-muted" />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex min-w-0 items-start justify-between gap-3">
          <div className="flex min-w-0 flex-col gap-1 py-1.5">
            <h3 className="text-balance text-xl font-semibold tracking-tight">
              {title}
            </h3>
            <time className="text-base font-sans text-muted-foreground">{dates}</time>
          </div>
          {storyHref && (
            <a
              href={storyHref}
              className="group/story inline-flex min-h-11 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-md text-sm font-medium text-muted-foreground underline-offset-4 transition-colors duration-200 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:text-sm"
              aria-label={`Read ${title} project story`}
            >
              <span>Read project story</span>
              <ArrowUpRight
                className="size-3.5 transition-transform duration-200 group-hover/story:-translate-y-0.5 group-hover/story:translate-x-0.5"
                aria-hidden
              />
            </a>
          )}
        </div>
        <div className="prose max-w-full flex-1 text-pretty font-sans text-base leading-6 text-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>
        {tags && tags.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
