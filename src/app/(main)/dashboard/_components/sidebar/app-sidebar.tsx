"use client";

import type * as React from "react";
import Link from "next/link";

import {
Plane,
MessageCircleQuestion,
Search,
Settings,
ShieldCheck,
} from "lucide-react";

import { NavMain } from "@/app/(main)/dashboard/_components/sidebar/nav-main";
import { NavSecondary } from "@/app/(main)/dashboard/_components/sidebar/nav-secondary";
import { NavUser } from "@/app/(main)/dashboard/_components/sidebar/nav-user";

import {
Sidebar,
SidebarContent,
SidebarFooter,
SidebarHeader,
SidebarMenu,
SidebarMenuButton,
SidebarMenuItem,
} from "@/components/ui/sidebar";

import { sidebarItems } from "@/navigation/sidebar/sidebar-items";

const data = {
user: {
name: "FlyTripVisa Admin",
email: "Administrator",
avatar: "",
},

navSecondary: [
{
title: "Settings",
url: "/dashboard/settings",
icon: Settings,
},
{
title: "Get Help",
url: "#",
icon: MessageCircleQuestion,
},
{
title: "Search",
url: "#",
icon: Search,
},
],
};

export function AppSidebar({
...props
}: React.ComponentProps<typeof Sidebar>) {
return (
<Sidebar
collapsible="icon"
{...props}
className="border-r border-white/[0.07] bg-[#080a09]"
>
{/* Brand Header */}
<SidebarHeader className="border-b border-white/[0.06] px-3 py-3">
<SidebarMenu>
<SidebarMenuItem>
<SidebarMenuButton
asChild
tooltip="FlyTripVisa Dashboard"
className="
h-10
rounded-xl
px-2
transition-all duration-200
hover:bg-white/[0.05]
data-[slot=sidebar-menu-button]:p-1.5
"
>
<Link prefetch={false} href="/dashboard">
<div className="
flex size-8 shrink-0 items-center justify-center
rounded-xl
border border-[#07c160]/30
bg-gradient-to-br from-[#07c160] to-[#058c48]
text-white
shadow-[0_0_18px_rgba(7,193,96,0.18)]
">
<Plane className="size-4" />
</div>

            <div className="flex min-w-0 flex-col gap-0">
              <span className="truncate text-sm font-bold tracking-tight text-white">
                FlyTripVisa
              </span>
              <span className="text-[9px] font-medium tracking-[0.16em] text-[#07c160]">
                ADMIN CONTROL CENTER
              </span>
            </div>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarHeader>

  {/* Main Navigation */}
  <SidebarContent className="gap-1 px-2 py-3">
    <NavMain items={sidebarItems} />

    <NavSecondary
      items={data.navSecondary}
      className="mt-auto"
    />
  </SidebarContent>

  {/* User Profile Footer */}
  <SidebarFooter className="border-t border-white/[0.07] bg-white/[0.015] p-2">
    <div className="mb-1 flex items-center gap-2 px-2 pt-2 group-data-[collapsible=icon]:hidden">
      <ShieldCheck className="size-3 text-[#07c160]" />
      <span className="text-[9px] font-semibold tracking-[0.12em] text-white/35">
        SECURE WORKSPACE
      </span>
    </div>

    <NavUser user={data.user} />
  </SidebarFooter>
</Sidebar>

);
}