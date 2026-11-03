import type { ReactNode } from "react";
import { Plane } from "lucide-react";

import { PROJECT_CONFIG } from "@/config/project-config";

interface LayoutProps {
  readonly children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="min-h-dvh bg-background">
      <div className="container relative mx-auto flex min-h-dvh flex-col items-center justify-center lg:max-w-none lg:grid lg:grid-cols-2 lg:px-0">

        {/* Left Branding Panel */}
        <div className="relative hidden h-full flex-col justify-between overflow-hidden border-r bg-[#07110d] p-10 text-white lg:flex">

          {/* Brand */}
          <div className="relative z-10 flex items-center gap-3 font-semibold">
            <div className="flex size-9 items-center justify-center rounded-xl bg-[#07c160] text-white">
              <Plane className="size-5" />
            </div>

            <span className="text-lg tracking-tight">
              {PROJECT_CONFIG.name}
            </span>
          </div>

          {/* Main Content */}
          <div className="relative z-10 max-w-lg space-y-5">
            <div className="inline-flex rounded-full border border-[#07c160]/30 bg-[#07c160]/10 px-3 py-1 text-xs font-medium text-[#07c160]">
              YOUR GLOBAL TRAVEL PARTNER
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight xl:text-5xl">
              Your Journey.
              <br />
              Your Business.
              <br />
              <span className="text-[#07c160]">One Control Center.</span>
            </h1>

            <p className="max-w-md text-sm leading-7 text-gray-400">
              Manage visa services, customers, travel operations and AI-powered
              services from your FlyTripVisa administration workspace.
            </p>
          </div>

          {/* Footer */}
          <div className="relative z-10 flex justify-between gap-4 text-xs text-gray-500">
            <p>{PROJECT_CONFIG.copyright}</p>
            <p>Version {PROJECT_CONFIG.version}</p>
          </div>

          {/* Background Decoration */}
          <div className="pointer-events-none absolute -right-32 top-1/4 size-96 rounded-full bg-[#07c160]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -left-20 size-96 rounded-full bg-emerald-900/20 blur-3xl" />
        </div>

        {/* Login / Register Content */}
        <div className="flex min-h-dvh w-full items-center justify-center bg-background p-5 lg:min-h-0 lg:p-8">
          <div className="w-full max-w-md">
            {children}
          </div>
        </div>

      </div>
    </main>
  );
}