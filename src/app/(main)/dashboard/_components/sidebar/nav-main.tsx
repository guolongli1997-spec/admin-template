"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { CirclePlus, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
SidebarGroup,
SidebarGroupContent,
SidebarGroupLabel,
SidebarMenu,
SidebarMenuButton,
SidebarMenuItem,
} from "@/components/ui/sidebar";

import type {
NavGroup,
NavMainItem,
} from "@/navigation/sidebar/sidebar-items";

interface NavMainProps {
items: NavGroup[];
}

export function NavMain({ items }: NavMainProps) {
const path = usePathname();

const isItemActive = (
url: string,
subItems?: NavMainItem["subItems"],
) => {
if (path === url || path.startsWith("${url}/")) {
return true;
}

if (subItems?.length) {
  return subItems.some(
    (sub) =>
      path === sub.url || path.startsWith(`${sub.url}/`),
  );
}

return false;

};

return (
<>
{/* Quick Actions */}
<SidebarGroup>
<SidebarGroupContent className="flex flex-col gap-2">
<SidebarMenu>
<SidebarMenuItem className="flex items-center gap-2">
<SidebarMenuButton
tooltip="Quick Create"
className="
min-w-8 flex-1
border border-[#07c160]/25
bg-[#07c160]/10
text-[#07c160]
transition-all duration-200
hover:border-[#07c160]/40
hover:bg-[#07c160]/20
hover:text-[#07c160]
active:bg-[#07c160]/20
active:text-[#07c160]
"
>
<CirclePlus className="size-4" />
<span className="font-medium">Quick Create</span>
</SidebarMenuButton>

          <Button
            size="icon"
            variant="outline"
            className="
              size-8 shrink-0
              border-white/[0.09]
              bg-white/[0.035]
              text-white/65
              transition-all duration-200
              hover:border-[#07c160]/30
              hover:bg-[#07c160]/10
              hover:text-[#07c160]
              group-data-[collapsible=icon]:hidden
            "
            aria-label="Inbox"
          >
            <Mail className="size-4" />
            <span className="sr-only">Inbox</span>
          </Button>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>

  {/* Navigation Groups */}
  {items.map((group) => (
    <SidebarGroup key={group.id}>
      {group.label && (
        <SidebarGroupLabel
          className="
            px-2
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.12em]
            text-white/35
          "
        >
          {group.label}
        </SidebarGroupLabel>
      )}

      <SidebarGroupContent>
        <SidebarMenu>
          {group.items.map((item) => {
            const active = isItemActive(
              item.url,
              item.subItems,
            );

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  isActive={active}
                  tooltip={item.title}
                  className={`
                    relative
                    min-h-9
                    rounded-lg
                    transition-all duration-200
                    ${
                      active
                        ? "border border-[#07c160]/15 bg-[#07c160]/[0.12] text-[#07c160] shadow-[inset_2px_0_0_#07c160,0_0_16px_rgba(7,193,96,0.04)] hover:bg-[#07c160]/[0.16] hover:text-[#07c160]"
                        : "border border-transparent text-white/60 hover:border-white/[0.05] hover:bg-white/[0.045] hover:text-white"
                    }
                  `}
                >
                  <Link href={item.url}>
                    {item.icon && (
                      <item.icon
                        className={`size-4 shrink-0 ${
                          active ? "text-[#07c160]" : ""
                        }`}
                      />
                    )}

                    <span className="truncate font-medium">
                      {item.title}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  ))}
</>

);
}