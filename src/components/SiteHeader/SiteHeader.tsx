"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { WORK_INDEX_PATH } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const nav = [
  { href: "/#about", label: "About" },
  { href: WORK_INDEX_PATH, label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#focus", label: "Focus" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
] as const;

function isWorkPath(pathname: string) {
  return pathname === "/work" || pathname.startsWith(WORK_INDEX_PATH);
}

function NavLink({
  href,
  label,
  className,
  currentClassName,
}: {
  href: string;
  label: string;
  className?: string;
  currentClassName?: string;
}) {
  const pathname = usePathname();
  const current = href === WORK_INDEX_PATH && isWorkPath(pathname);

  return (
    <Link
      href={href}
      aria-current={current ? "page" : undefined}
      className={cn(className, current && currentClassName)}
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const overlay = isHome && !scrolled;

  useEffect(() => {
    if (!isHome) return;

    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.7);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <header
      className={cn(
        "inset-x-0 top-0 z-40 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300",
        overlay
          ? "absolute border-b border-transparent"
          : "border-b border-border/80 bg-background/85 shadow-sm backdrop-blur-md",
        !overlay && (isHome ? "fixed" : "sticky"),
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          href="/"
          className={cn(
            "font-heading text-sm font-semibold tracking-tight transition-colors",
            overlay
              ? "text-fog hover:opacity-70"
              : "text-ink hover:text-signal-deep",
          )}
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              className={cn(
                "text-sm transition-colors",
                overlay
                  ? "text-fog/65 hover:text-fog"
                  : "text-foreground/55 hover:text-ink",
              )}
              currentClassName={overlay ? undefined : "text-ink"}
            />
          ))}
          <Button
            className="rounded-xl bg-signal text-white hover:bg-signal-deep"
            nativeButton={false}
            render={<Link href="/#contact" />}
            size="sm"
          >
            Contact
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
                  overlay
                    ? "border-white/20 bg-white/5 text-fog hover:bg-white/10 hover:text-fog"
                    : "border-border bg-white text-ink hover:bg-muted",
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
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  className="text-base text-foreground/80 transition-colors hover:text-foreground"
                />
              ))}
              <Button
                className="mt-2 justify-start rounded-xl bg-signal text-white hover:bg-signal-deep"
                nativeButton={false}
                render={<Link href="/#contact" />}
              >
                Contact
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
