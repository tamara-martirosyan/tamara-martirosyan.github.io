import Link from "next/link";

import { WORK_INDEX_PATH } from "@/lib/projects";
import { site } from "@/lib/site";

const footerLinks = [
  { href: WORK_INDEX_PATH, label: "Work", external: false },
  { href: site.links.email, label: "Email", external: true },
  { href: site.links.linkedin, label: "LinkedIn", external: true },
  { href: site.links.github, label: "GitHub", external: true },
] as const;

const linkClassName = "transition-colors hover:text-ink";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80 px-5 py-10 md:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-heading text-base font-semibold text-ink">
            {site.name}
          </p>
          <p className="mt-1">{site.role}</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {footerLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={linkClassName}
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.label} href={link.href} className={linkClassName}>
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <p>
          © {new Date().getFullYear()} · {site.location}
        </p>
      </div>
    </footer>
  );
}
