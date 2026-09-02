/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div
        className="work-logo size-11 shrink-0 rounded-full border-4 border-background bg-muted ring-2 ring-border transition-[transform,box-shadow] duration-200 sm:size-12"
        aria-hidden="true"
      />
    );
  }

  return (
    <img
      src={src}
      alt={`${alt} logo`}
      className="work-logo size-11 shrink-0 rounded-full border-4 border-background bg-background object-contain ring-2 ring-border transition-[transform,box-shadow] duration-200 sm:size-12"
      loading="lazy"
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection() {
  const latestExperience = DATA.work[0]?.company;

  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={latestExperience}
      className="space-y-1"
    >
      {DATA.work.map((work) => (
        <AccordionItem
          key={work.company}
          value={work.company}
          className="relative -mx-3 overflow-hidden rounded-xl border border-transparent px-3 transition-[background-color,border-color,box-shadow] duration-200 hover:border-border/70 hover:bg-muted/35 hover:[&_.work-logo]:scale-[1.04] hover:[&_.work-logo]:ring-foreground/25 data-[state=open]:border-border data-[state=open]:bg-muted/50 data-[state=open]:shadow-sm data-[state=open]:[&_.work-logo]:scale-[1.04] data-[state=open]:[&_.work-logo]:ring-foreground/35"
        >
          <div className="grid grid-cols-[2.75rem_minmax(0,1fr)] gap-4 sm:grid-cols-[3rem_minmax(0,1fr)]">
            <div className="pt-4">
              <LogoImage src={work.logoUrl} alt={work.company} />
            </div>

            <div className="min-w-0">
              <AccordionTrigger className="group min-h-20 cursor-pointer gap-4 rounded-lg py-4 pr-1 text-left hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
                  <div className="min-w-0 lg:max-w-[65%]">
                    <h3 className="font-semibold leading-tight text-xl text-foreground">
                      {work.company}
                    </h3>
                    <p className="mt-1 text-base font-normal leading-snug text-foreground">
                      {work.title}
                    </p>
                  </div>
                  <div className="min-w-0 lg:max-w-[35%] flex flex-col items-start gap-1">
                    <time className="shrink-0 text-base font-normal tabular-nums text-muted-foreground sm:text-right">
                      {work.start} - {work.end ?? DATA.sections.work.presentLabel}
                    </time>
                    <p className="shrink-0 text-base font-normal tabular-nums text-muted-foreground sm:text-right">
                      {work.location}
                    </p>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="max-w-full border-t border-border/60 pb-5 pr-2 pt-3 text-base leading-7">
                {work.description}
              </AccordionContent>
            </div>
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
