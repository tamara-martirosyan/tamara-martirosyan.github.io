import { site } from "@/lib/site";

const footerLinks = [
  { href: site.links.email, label: "Email", external: true },
  { href: site.links.linkedin, label: "LinkedIn", external: true },
  { href: site.links.github, label: "GitHub", external: true },
] as const;

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
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p>
          © {new Date().getFullYear()} · {site.location}
        </p>
      </div>
    </footer>
  );
}
