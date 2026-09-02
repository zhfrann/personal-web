import { ModeToggle } from "@/components/mode-toggle";
import { DATA } from "@/data/resume";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const focusFrame = window.requestAnimationFrame(() => firstLinkRef.current?.focus());
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 640px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMenuOpen(false);
    };

    desktopQuery.addEventListener("change", closeOnDesktop);
    return () => desktopQuery.removeEventListener("change", closeOnDesktop);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          <a
            href="#main-content"
            onClick={closeMenu}
            className="shrink-0 font-sans text-base lg:text-lg font-semibold tracking-[0.16em] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Portfolio
          </a>

          <nav aria-label="Main navigation" className="flex min-w-0 items-center gap-2">
            <div className="hidden items-center sm:flex">
              {DATA.navbar.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <ModeToggle className="size-11 rounded-full text-muted-foreground hover:bg-muted hover:text-foreground" />

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:hidden"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-controls="mobile-navigation"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
            </button>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-x-0 bottom-0 top-16 z-30 bg-background/65 backdrop-blur-sm sm:hidden"
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.18 }}
              onClick={closeMenu}
              aria-hidden="true"
            />

            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              className="fixed inset-x-0 top-16 z-40 border-b border-border bg-background px-5 py-4 shadow-lg sm:hidden"
              initial={shouldReduceMotion ? false : { opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.22, ease: "easeOut" }}
            >
              <div className="mx-auto max-w-6xl">
                <p className="mb-2 font-sans text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Navigate
                </p>
                <div className="grid">
                  {DATA.navbar.map((item, index) => (
                    <a
                      ref={index === 0 ? firstLinkRef : undefined}
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="group flex min-h-14 items-center justify-between border-b border-border py-3 text-lg font-medium transition-colors duration-200 last:border-b-0 hover:text-muted-foreground focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <span>{item.label}</span>
                      <span className="font-sans text-xs font-normal text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
