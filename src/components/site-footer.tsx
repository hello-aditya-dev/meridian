import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Wordmark } from "@/components/product-ui/mark";
import { site } from "@/lib/site";
import { pillars } from "@/lib/data";

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Platform",
    links: [
      ...pillars.map((p) => ({ label: p.eyebrow, href: `/platform#${p.id}` })),
      { label: "All features", href: "/features" },
      { label: "Integrations", href: "/integrations" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Operations leaders", href: "/solutions#operations" },
      { label: "Supply chain teams", href: "/solutions#supply-chain" },
      { label: "Revenue operations", href: "/solutions#revenue-ops" },
      { label: "Procurement", href: "/solutions#procurement" },
      { label: "IT & engineering", href: "/solutions#it-engineering" },
      { label: "Industries", href: "/industries" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Customers", href: "/customers" },
      { label: "Case studies", href: "/customers/corelink-logistics" },
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Resources", href: "/resources" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Trust",
    links: [
      { label: "Security overview", href: "/security" },
      { label: "Pricing", href: "/pricing" },
      { label: "Terms of service", href: "/legal/terms" },
      { label: "Privacy policy", href: "/legal/privacy" },
      { label: `Security contact · ${site.email.security}`, href: `mailto:${site.email.security}` },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-400">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="max-w-sm">
            <Wordmark dark />
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              The operating layer for modern enterprise. Plan, monitor, analyze and
              optimize — in one system of record.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-zinc-300">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              SOC 2 Type II certified
            </div>
          </div>
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} {site.legalName} All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2 font-mono text-[11px] text-zinc-500">
              <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
              All systems operational
            </span>
            <span className="flex items-center gap-3 text-zinc-500">
              <a href="#" aria-label="GitHub" className="transition-colors hover:text-white">
                <Github className="size-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-white">
                <Linkedin className="size-4" />
              </a>
              <a href="#" aria-label="Twitter / X" className="transition-colors hover:text-white">
                <Twitter className="size-4" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
