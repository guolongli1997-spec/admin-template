"use client";

import type * as React from "react";

import Link from "next/link";

import {
  Plane,
  MessageCircleQuestion,
  Search,
  Settings,
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
    <Sidebar collapsible="icon" {...props}>

      {/* Brand Header */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <Link prefetch={false} href="/dashboard/default">
                <div className="flex size-7 items-center justify-center rounded-lg bg-[#07c160] text-white">
                  <Plane className="size-4" />
                </div>

                <span className="font-bold text-base tracking-tight">
                  FlyTripVisa
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Main Navigation */}
      <SidebarContent>
        <NavMain items={sidebarItems} />

        <NavSecondary
          items={data.navSecondary}
          className="mt-auto"
        />
      </SidebarContent>

      {/* User Profile */}
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>

    </Sidebar>
  );
}