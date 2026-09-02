import React, { useEffect, useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { DATA } from "@/data/resume";
import { ArrowRight, ArrowUpRight, BookOpenText, Mail, MapPin, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

function SectionHeading({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="font-sans text-md text-muted-foreground">{index}</span>
      <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{children}</h2>
      <div className="h-px flex-1 bg-border" aria-hidden />
    </div>
  );
}

const sectionComponents: Record<string, React.ReactNode> = {
  about: (
    <section id="about" className="scroll-mt-28">
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <SectionHeading index="01">{DATA.sections.about.heading}</SectionHeading>
        <div className="prose max-w-none text-pretty font-sans text-base lg:text-lg leading-8 dark:prose-invert">
          <Markdown>{DATA.summary}</Markdown>
        </div>
      </BlurFade>
    </section>
  ),
  projects: (
    <section id="projects" className="scroll-mt-28">
      <BlurFade delay={BLUR_FADE_DELAY * 11}>
        <SectionHeading index="02">{DATA.sections.projects.label}</SectionHeading>
        <ProjectsSection />
      </BlurFade>
      <a
        href={"/blog"}
        className="flex min-h-11 max-w-fit mt-4 mx-auto items-center justify-between gap-3 rounded-xl bg-primary px-4 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <span className="inline-flex items-center gap-2">
          <BookOpenText className="size-4" aria-hidden />
          View More
        </span>
        <ArrowRight className="size-4 transition-transform duration-200 group-hover/story:translate-x-0.5" aria-hidden />
      </a>
    </section>
  ),
  work: (
    <section id="work" className="scroll-mt-28">
      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <SectionHeading index="03">{DATA.sections.work.heading}</SectionHeading>
        <WorkSection />
      </BlurFade>
    </section>
  ),
  education: (
    <section id="education" className="scroll-mt-28">
      <BlurFade delay={BLUR_FADE_DELAY * 7}>
        <SectionHeading index="04">{DATA.sections.education.heading}</SectionHeading>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {DATA.education.map((education, index) => (
            <a
              key={education.school}
              href={education.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-48 flex-col bg-card p-5 transition-colors duration-200 hover:bg-muted/60 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-sans text-base lg:text-lg text-muted-foreground">
                  {education.location}
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-xl leading-snug">{education.school}</h3>
                <p className="mt-1 text-base leading-relaxed text-foreground">{education.degree}</p>
                <p className="mt-4 font-sans text-base text-muted-foreground">
                  {education.start} — {education.end}
                </p>
              </div>
            </a>
          ))}
        </div>
      </BlurFade>
    </section>
  ),
  skills: (
    <section id="skills" className="scroll-mt-28">
      <BlurFade delay={BLUR_FADE_DELAY * 9}>
        <SectionHeading index="05">{DATA.sections.skills.heading}</SectionHeading>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {DATA.skills.map((skill) => (
            <div key={skill.name} className="flex min-h-16 items-center gap-3 bg-card px-4 py-3">
              {skill.icon && <skill.icon className="size-5 overflow-hidden rounded object-contain" />}
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </BlurFade>
    </section>
  ),
};

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();
  const [isProfileCollapsed, setIsProfileCollapsed] = useState(() => {
    if (typeof window === "undefined") return false;

    try {
      return window.localStorage.getItem("portfolio-profile-collapsed") === "true";
    } catch {
      return false;
    }
  });
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 1024px)").matches
      : false,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const updateDesktopState = (event: MediaQueryListEvent) => setIsDesktop(event.matches);

    setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener("change", updateDesktopState);
    return () => mediaQuery.removeEventListener("change", updateDesktopState);
  }, []);

  function setProfileCollapsed(collapsed: boolean) {
    setIsProfileCollapsed(collapsed);

    try {
      window.localStorage.setItem("portfolio-profile-collapsed", String(collapsed));
    } catch {
      // The layout still works when browser storage is unavailable.
    }
  }

  const orderedSections = Object.entries(DATA.sections)
    .filter(([, section]) => section.enabled)
    .sort(([, a], [, b]) => a.order - b.order)
    .map(([key]) => key);

  const displayName = DATA.name.split(" - ")[0];
  const shouldCollapseProfile = isDesktop && isProfileCollapsed;

  return (
    <main
      id="main-content"
      className={cn(
        "grid gap-20 transition-[grid-template-columns,column-gap] duration-300 ease-out",
        shouldCollapseProfile
          ? "lg:grid-cols-[0px_minmax(0,1fr)] lg:gap-0"
          : "lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[21rem_minmax(0,1fr)] xl:gap-24",
      )}
      style={{ transitionDuration: shouldReduceMotion ? "0ms" : undefined }}
    >
      <motion.aside
        id="profile-sidebar"
        className={cn(
          "relative min-w-0",
          shouldCollapseProfile
            ? "lg:pointer-events-none lg:overflow-hidden"
            : "lg:sticky lg:top-28 lg:h-fit",
        )}
        animate={{
          opacity: shouldCollapseProfile ? 0 : 1,
          x: shouldCollapseProfile ? -18 : 0,
        }}
        transition={{
          duration: shouldReduceMotion ? 0 : shouldCollapseProfile ? 0.2 : 0.28,
          ease: shouldCollapseProfile ? "easeIn" : "easeOut",
        }}
        aria-hidden={shouldCollapseProfile}
        inert={shouldCollapseProfile}
      >
        <BlurFade delay={BLUR_FADE_DELAY}>
          <button
            type="button"
            onClick={() => setProfileCollapsed(true)}
            className="absolute right-0 top-0 hidden min-h-11 cursor-pointer items-center gap-2 rounded-full border border-border bg-background px-3 text-xs font-medium text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 lg:inline-flex"
            aria-controls="profile-sidebar"
            aria-expanded="true"
          >
            <PanelLeftClose className="size-4" aria-hidden />
            Minimize
          </button>

          <div className="flex items-center gap-5 lg:block">
            <Avatar className="size-24 shrink-0 border border-border shadow-sm lg:size-32">
              <AvatarImage alt={displayName} src={DATA.avatarUrl} />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
            <div className="min-w-0 lg:mt-7">
              <p className="mb-2 font-sans text-sm uppercase tracking-[0.18em]">Hello, I'm</p>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{displayName}</h1>
            </div>
          </div>

          <p className="mt-4 text-pretty text-base lg:text-lg leading-7">{DATA.description}</p>

          <div className="mt-4 flex flex-col gap-3 border-t border-border pt-5 text-sm">
            <span className="flex items-center gap-2 lg:text-base"><MapPin className="size-4 lg:size-5" />{DATA.location}</span>
            <a className="group flex w-fit items-center gap-2 text-foreground underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href={`mailto:${DATA.contact.email}`}>
              <Mail className="size-4 lg:size-5" />
              <span className="truncate lg:text-base">{DATA.contact.email}</span>
            </a>
            <a aria-label={`Kunjungi profil GitHub ${DATA.contact.social.GitHub.display}`} className="group flex w-fit items-center gap-2 text-foreground underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href={DATA.contact.social.GitHub.url} target="_blank" rel="noopener noreferrer">
              <FaGithub className="size-4 lg:size-5" />
              <span className="truncate lg:text-base">{DATA.contact.social.GitHub.display}</span>
            </a>
            <a className="group flex w-fit items-center gap-2 text-foreground underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href={DATA.contact.social.LinkedIn.url} target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="size-4 lg:size-5" />
              <span className="truncate lg:text-base">{DATA.contact.social.LinkedIn.display}</span>
            </a>
            <a className="group flex w-fit items-center gap-2 text-foreground underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href={DATA.contact.social.X.url} target="_blank" rel="noopener noreferrer">
              <FaTwitter className="size-4 lg:size-5" />
              <span className="truncate lg:text-base">{DATA.contact.social.X.display}</span>
            </a>
          </div>

          <a href={`mailto:${DATA.contact.email}`} className="mt-3 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            Send me Message <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </BlurFade>
      </motion.aside>

      <div className="min-w-0 space-y-24 sm:space-y-28">
        {orderedSections.map((key) => <React.Fragment key={key}>{sectionComponents[key]}</React.Fragment>)}
      </div>

      <AnimatePresence>
        {shouldCollapseProfile && (
          <motion.button
            type="button"
            onClick={() => setProfileCollapsed(false)}
            className="fixed left-5 top-26 z-30 hidden min-h-11 cursor-pointer items-center gap-2 rounded-full border border-border bg-background/95 px-4 text-sm font-medium shadow-sm backdrop-blur-lg transition-colors duration-200 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 lg:inline-flex"
            aria-controls="profile-sidebar"
            aria-expanded="false"
            initial={shouldReduceMotion ? false : { opacity: 0, x: -12, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -8, scale: 0.97 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.22, ease: "easeOut" }}
          >
            <PanelLeftOpen className="size-4" aria-hidden />
            Show profile
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
