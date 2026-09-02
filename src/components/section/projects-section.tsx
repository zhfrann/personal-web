import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
  const projectCount: number = DATA.projects.length;
  const hasSingleProject = projectCount === 1;
  const hasTwoProjects = projectCount === 2;
  const usesMasonry = projectCount > 2;

  return (
    <div className="flex flex-col gap-8">
      <div className="grid place-items-center gap-4 sm:grid-cols-[1fr_1.35fr] sm:items-center">
        <h3 className="text-3xl font-semibold tracking-tight text-center sm:text-left sm:text-4xl">{DATA.sections.projects.heading}</h3>
        <p className="text-pretty text-center text-base lg:text-lg leading-7 text-foreground sm:text-left">{DATA.sections.projects.text}</p>
      </div>
      <div
        className={cn(
          "w-full",
          hasSingleProject && "mx-auto grid max-w-md grid-cols-1 gap-4",
          hasTwoProjects && "grid grid-cols-1 gap-4 md:grid-cols-2",
          usesMasonry && "columns-1 gap-4 md:columns-2"
        )}
      >
        {DATA.projects.map((project, id) => (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * 12 + id * 0.04}
            className={cn(
              "min-w-0",
              usesMasonry ? "mb-4 break-inside-avoid" : "h-full"
            )}
          >
            <ProjectCard
              storyHref={
                "slug" in project ? `/blog/${project.slug}` : undefined
              }
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              video={project.video}
              className={usesMasonry ? undefined : "h-full"}
            />
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
