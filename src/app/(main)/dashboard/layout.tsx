import type { ReactNode } from "react";

import { cookies } from "next/headers";

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";

import { AppSidebar } from "./_components/sidebar/app-sidebar";
import { SiteHeader } from "./_components/sidebar/site-header";

interface LayoutProps {
  readonly children: ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  const cookieStore = await cookies();

  const defaultOpen =
    cookieStore.get("sidebar_state")?.value === "true";

  return (
    <SidebarProvider
      defaultOpen={defaultOpen}
      style={
        {
          "--sidebar-width": "16rem",
          "--sidebar-width-icon": "3.5rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />

      <SidebarInset className="min-w-0 bg-background">
        <SiteHeader />

        <main className="flex min-w-0 flex-1 flex-col">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}