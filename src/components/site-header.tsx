"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  ArrowRight,
  ChevronDown,
  LineChart,
  ClipboardList,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { Wordmark } from "@/components/product-ui/mark";
import { pillars } from "@/lib/data";
import { solutions } from "@/lib/pages";

const platformIcons = [ClipboardList, Activity, LineChart, Sparkles];

interface MenuLink {
  label: string;
  href: string;
  desc?: string;
}

const solutionLinks: MenuLink[] = solutions.map((s) => ({
  label: s.team,
  href: `/solutions#${s.slug}`,
  desc: s.headline,
}));

const resourceLinks: MenuLink[] = [
  { label: "Blog", href: "/blog", desc: "Platform thinking and engineering notes" },
  { label: "Guides & webinars", href: "/resources", desc: "Buyer's guides, playbooks, live teardowns" },
  { label: "Security", href: "/security", desc: "SOC 2, architecture and compliance" },
  { label: "Customers", href: "/customers", desc: "Case studies across six industries" },
  { label: "About", href: "/about", desc: "Team, timeline and investors" },
];

function DesktopMenu({
  id,
  label,
  links,
  columns,
  open,
  setOpen,
}: {
  id: string;
  label: string;
  links: (MenuLink & { icon?: React.ComponentType<{ className?: string }> })[];
  columns?: boolean;
  open: string | null;
  setOpen: (v: string | null) => void;
}) {
  const isOpen = open === id;
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(id)}
      onMouseLeave={() => setOpen(null)}
    >
      <button
        aria-expanded={isOpen}
        onClick={() => setOpen(isOpen ? null : id)}
        className={cn(
          "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
          isOpen ? "text-zinc-900" : "text-zinc-600 hover:text-zinc-900"
        )}
      >
        {label}
        <ChevronDown
          className={cn("size-3.5 text-zinc-400 transition-transform duration-200", isOpen && "rotate-180")}
        />
      </button>
      <div
        className={cn(
          "absolute left-0 top-full z-50 pt-2 transition-all duration-150",
          isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
        )}
      >
        <div
          className={cn(
            "grid w-max gap-1 rounded-xl border border-zinc-200 bg-white p-2 shadow-lift ring-1 ring-zinc-950/5",
            columns ? "w-[30rem] grid-cols-2" : "w-[24rem]"
          )}
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(null)}
              className="group flex gap-3 rounded-lg p-2.5 transition-colors hover:bg-zinc-50"
            >
              {"icon" in link && link.icon ? (
                <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-md border border-zinc-200 bg-white text-accent-600 shadow-sm">
                  <link.icon className="size-3.5" />
                </span>
              ) : null}
              <span>
                <span className="block text-sm font-medium text-zinc-900">{link.label}</span>
                {link.desc ? (
                  <span className="mt-0.5 block text-xs leading-snug text-zinc-500">{link.desc}</span>
                ) : null}
              </span>
            </Link>
          ))}
          {id === "platform" ? (
            <Link
              href="/platform"
              onClick={() => setOpen(null)}
              className="col-span-2 mt-1 flex items-center justify-between rounded-lg border-t border-zinc-100 px-2.5 pt-3 pb-1 text-sm font-medium text-accent-600 hover:text-accent-700"
            >
              View the platform
              <ArrowRight className="size-4" />
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const pathname = usePathname();

  const platformLinks = pillars.map((p, i) => ({
    label: p.eyebrow,
    href: `/platform#${p.id}`,
    desc: p.title,
    icon: platformIcons[i],
  }));

  return (
    <>
      {/* announcement bar */}
      <div className="bg-zinc-950 text-center">
        <Link
          href="/blog"
          className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-6 py-2 text-xs text-zinc-300 transition-colors hover:text-white"
        >
          <span className="rounded-full bg-accent-600/20 px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-accent-300">
            New
          </span>
          Meridian raises $48M Series B to build the operating layer for enterprise operations
          <ArrowRight className="size-3" />
        </Link>
      </div>

      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6 lg:px-8">
          <div className="flex items-center gap-10">
            <Link href="/" aria-label="Meridian home">
              <Wordmark />
            </Link>
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
              <DesktopMenu
                id="platform"
                label="Platform"
                links={platformLinks}
                open={open}
                setOpen={setOpen}
              />
              <DesktopMenu
                id="solutions"
                label="Solutions"
                links={solutionLinks}
                columns
                open={open}
                setOpen={setOpen}
              />
              <Link
                href="/customers"
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  pathname.startsWith("/customers") ? "text-zinc-900" : "text-zinc-600 hover:text-zinc-900"
                )}
              >
                Customers
              </Link>
              <Link
                href="/pricing"
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  pathname === "/pricing" ? "text-zinc-900" : "text-zinc-600 hover:text-zinc-900"
                )}
              >
                Pricing
              </Link>
              <DesktopMenu
                id="resources"
                label="Resources"
                links={resourceLinks}
                open={open}
                setOpen={setOpen}
              />
            </nav>
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
            >
              Sign in
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-9 items-center rounded-lg bg-zinc-900 px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-700"
            >
              Request a demo
            </Link>
          </div>

          <button
            className="grid size-9 place-items-center rounded-md text-zinc-700 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* mobile panel */}
        {mobileOpen ? (
          <div className="border-t border-zinc-200 bg-white px-6 py-4 lg:hidden">
            <nav className="flex flex-col divide-y divide-zinc-100" aria-label="Mobile">
              {[
                { label: "Platform", href: "/platform" },
                { label: "Solutions", href: "/solutions" },
                { label: "Industries", href: "/industries" },
                { label: "Features", href: "/features" },
                { label: "Integrations", href: "/integrations" },
                { label: "Customers", href: "/customers" },
                { label: "Pricing", href: "/pricing" },
                { label: "Security", href: "/security" },
                { label: "Blog", href: "/blog" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-[15px] font-medium text-zinc-800"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-flex h-11 items-center justify-center rounded-lg bg-zinc-900 text-sm font-medium text-white"
              >
                Request a demo
              </Link>
            </nav>
          </div>
        ) : null}
      </header>
    </>
  );
}
