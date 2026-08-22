import {
  Activity,
  BarChart3,
  Bell,
  Boxes,
  ChevronsUpDown,
  ClipboardList,
  LayoutDashboard,
  Search,
  Settings,
  Workflow,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { Mark } from "./mark";

const nav = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "Planning", icon: ClipboardList },
  { label: "Monitoring", icon: Activity },
  { label: "Analytics", icon: BarChart3 },
  { label: "Automation", icon: Workflow },
  { label: "Integrations", icon: Boxes },
];

/**
 * Desktop application frame used by every product screenshot.
 * Pure UI chrome — sidebar, top bar, content slot.
 */
export function AppFrame({
  active = "Overview",
  breadcrumb = "meridian.app/operations",
  children,
  className,
}: {
  active?: string;
  breadcrumb?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-hero",
        className
      )}
    >
      {/* window title bar */}
      <div className="flex h-10 items-center gap-3 border-b border-zinc-200 bg-zinc-50/80 px-3">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#f87171]/70" />
          <span className="size-2.5 rounded-full bg-[#fbbf24]/70" />
          <span className="size-2.5 rounded-full bg-[#34d399]/70" />
        </div>
        <div className="mx-auto hidden items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-2.5 py-1 font-mono text-[11px] text-zinc-400 sm:flex">
          <Search className="size-3" />
          {breadcrumb}
        </div>
        <div className="ml-auto flex items-center gap-2.5 text-zinc-400 sm:ml-0">
          <Bell className="size-3.5" />
          <span className="grid size-5 place-items-center rounded-full bg-gradient-to-br from-accent-500 to-accent-700 text-[8px] font-semibold text-white">
            AK
          </span>
        </div>
      </div>

      <div className="flex min-h-[380px]">
        {/* sidebar */}
        <aside className="hidden w-44 shrink-0 flex-col border-r border-zinc-100 p-2 md:flex">
          <button className="mb-2 flex items-center gap-2 rounded-md px-1.5 py-1 hover:bg-zinc-50">
            <Mark className="size-5 rounded-[4px]" />
            <span className="text-xs font-medium text-zinc-900">Acme Industrial</span>
            <ChevronsUpDown className="size-3 text-zinc-400" />
          </button>
          <nav className="flex flex-col gap-0.5">
            {nav.map((item) => (
              <span
                key={item.label}
                className={cn(
                  "flex cursor-default items-center gap-2 rounded-md px-2 py-1.5 text-xs font-medium",
                  item.label === active
                    ? "bg-zinc-100 text-zinc-900"
                    : "text-zinc-500 hover:bg-zinc-50"
                )}
              >
                <item.icon className="size-3.5" />
                {item.label}
              </span>
            ))}
          </nav>
          <span className="mt-auto flex cursor-default items-center gap-2 rounded-md px-2 py-1.5 text-xs font-medium text-zinc-500 hover:bg-zinc-50">
            <Settings className="size-3.5" />
            Settings
          </span>
        </aside>

        {/* content */}
        <div className="min-w-0 flex-1 space-y-4 bg-zinc-50/60 p-4">{children}</div>
      </div>
    </div>
  );
}
