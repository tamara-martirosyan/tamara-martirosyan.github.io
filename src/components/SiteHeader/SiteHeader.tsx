"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#focus", label: "Focus" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.7);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "inset-x-0 top-0 z-40 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300",
        scrolled
          ? "fixed border-b border-border/80 bg-[#fafbfc]/85 shadow-sm backdrop-blur-md"
          : "absolute border-b border-transparent",
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          href="/"
          className={cn(
            "font-heading text-sm font-semibold tracking-tight transition-colors",
            scrolled ? "text-ink hover:text-signal-deep" : "text-fog hover:opacity-70",
          )}
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm transition-colors",
                scrolled
                  ? "text-foreground/55 hover:text-ink"
                  : "text-fog/65 hover:text-fog",
              )}
            >
              {item.label}
            </a>
          ))}
          <Button
            className="rounded-xl bg-signal text-white hover:bg-signal-deep"
            nativeButton={false}
            render={
              <a
                href={site.links.teamworker}
                target="_blank"
                rel="noreferrer"
              />
            }
            size="sm"
          >
            TeamWorker.ai
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                size="icon-sm"
                className={cn(
                  "lg:hidden",
                  scrolled
                    ? "border-border bg-white text-ink hover:bg-muted"
                    : "border-white/20 bg-white/5 text-fog hover:bg-white/10 hover:text-fog",
                )}
                aria-label="Open menu"
              />
            }
          >
            <Menu />
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] px-5">
            <SheetHeader>
              <SheetTitle className="font-heading text-left">
                {site.name}
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-4">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-base text-foreground/80 transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
              <Button
                className="mt-2 justify-start rounded-xl bg-signal text-white hover:bg-signal-deep"
                nativeButton={false}
                render={
                  <a
                    href={site.links.teamworker}
                    target="_blank"
                    rel="noreferrer"
                  />
                }
              >
                TeamWorker.ai
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
