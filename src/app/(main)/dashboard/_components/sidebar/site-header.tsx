"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronRight,
  LayoutDashboard,
  Plane,
  CircleDot,
} from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function SiteHeader() {
  const pathname = usePathname();

  const segments = pathname
    .split("/")
    .filter(Boolean)
    .filter((segment) => segment !== "dashboard");

  const formatLabel = (value: string) =>
    value
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  return (
    <header className="sticky top-0 z-40 flex h-12 w-full shrink-0 items-center border-b border-white/[0.07] bg-[#090c0a]/85 backdrop-blur-xl">
      <div className="flex w-full items-center justify-between gap-3 px-3 sm:px-4 lg:px-6">

        {/* Left: Navigation */}
        <div className="flex min-w-0 items-center gap-2">
          <SidebarTrigger className="-ml-1 size-8 rounded-lg text-white/70 hover:bg-white/[0.07] hover:text-[#07c160]" />

          <Separator
            orientation="vertical"
            className="mx-1 h-4 bg-white/10"
          />

          <nav className="flex min-w-0 items-center gap-1.5 text-sm">
            <Link
              href="/dashboard"
              className="flex shrink-0 items-center gap-1.5 text-white/55 transition-colors hover:text-[#07c160]"
            >
              <LayoutDashboard className="size-3.5" />
              <span className="hidden sm:inline">Dashboard</span>
            </Link>

            {segments.map((segment) => (
              <span
                key={segment}
                className="flex min-w-0 items-center gap-1.5"
              >
                <ChevronRight className="size-3.5 shrink-0 text-white/25" />
                <span className="truncate font-medium text-white">
                  {formatLabel(segment)}
                </span>
              </span>
            ))}
          </nav>
        </div>

        {/* Right: Brand Status */}
        <div className="flex shrink-0 items-center gap-2">
          <div className="hidden items-center gap-1.5 rounded-full border border-[#07c160]/20 bg-[#07c160]/[0.07] px-2.5 py-1 sm:flex">
            <CircleDot className="size-3 text-[#07c160]" />
            <span className="text-[10px] font-medium tracking-wide text-[#07c160]">
              ADMIN PANEL
            </span>
          </div>

          <div className="flex size-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
            <Plane className="size-4 text-[#07c160]" />
          </div>
        </div>
      </div>
    </header>
  );
}