import {
  LayoutDashboard,
  Plane,
  FileText,
  Users,
  Globe,
  Bot,
  MessageSquare,
  CreditCard,
  Image,
  Share2,
  Bell,
  Settings,
  ChartNoAxesColumnIncreasing,
  ShieldCheck,
  Building2,
  Languages,
  Database,
  Mail,
  Headset,
  type LucideIcon,
} from "lucide-react";

export interface NavSubItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  comingSoon?: boolean;
}

export interface NavMainItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  subItems?: NavSubItem[];
  comingSoon?: boolean;
}

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "WORKSPACE",
    items: [
      {
        title: "Overview",
        url: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Analytics",
        url: "/dashboard/analytics",
        icon: ChartNoAxesColumnIncreasing,
      },
    ],
  },

  {
    id: 2,
    label: "TRAVEL MANAGEMENT",
    items: [
      {
        title: "Visa Management",
        url: "/dashboard/visas",
        icon: Plane,
        subItems: [
          {
            title: "All Visas",
            url: "/dashboard/visas",
          },
          {
            title: "E-Visa",
            url: "/dashboard/visas/e-visa",
          },
          {
            title: "Sticker Visa",
            url: "/dashboard/visas/sticker-visa",
          },
          {
            title: "Visa Categories",
            url: "/dashboard/visas/categories",
          },
        ],
      },
      {
        title: "Applications",
        url: "/dashboard/applications",
        icon: FileText,
        subItems: [
          {
            title: "All Applications",
            url: "/dashboard/applications",
          },
          {
            title: "Pending",
            url: "/dashboard/applications/pending",
          },
          {
            title: "Approved",
            url: "/dashboard/applications/approved",
          },
          {
            title: "Rejected",
            url: "/dashboard/applications/rejected",
          },
        ],
      },
      {
        title: "Customers",
        url: "/dashboard/customers",
        icon: Users,
      },
      {
        title: "Business Setup",
        url: "/dashboard/business-setup",
        icon: Building2,
      },
    ],
  },

  {
    id: 3,
    label: "AI & AUTOMATION",
    items: [
      {
        title: "AI Management",
        url: "/dashboard/ai",
        icon: Bot,
        subItems: [
          {
            title: "AI Overview",
            url: "/dashboard/ai",
          },
          {
            title: "AI Models",
            url: "/dashboard/ai/models",
          },
          {
            title: "AI Settings",
            url: "/dashboard/ai/settings",
          },
        ],
      },
      {
        title: "Chat History",
        url: "/dashboard/ai/chats",
        icon: MessageSquare,
      },
    ],
  },

  {
    id: 4,
    label: "BUSINESS & CONTENT",
    items: [
      {
        title: "Payments",
        url: "/dashboard/payments",
        icon: CreditCard,
      },
      {
        title: "Website CMS",
        url: "/dashboard/cms",
        icon: Globe,
        subItems: [
          {
            title: "Pages",
            url: "/dashboard/cms/pages",
          },
          {
            title: "Blog Posts",
            url: "/dashboard/cms/posts",
          },
          {
            title: "Media Library",
            url: "/dashboard/cms/media",
          },
        ],
      },
      {
        title: "Social Media",
        url: "/dashboard/social-media",
        icon: Share2,
      },
      {
        title: "Notifications",
        url: "/dashboard/notifications",
        icon: Bell,
      },
    ],
  },

  {
    id: 5,
    label: "SYSTEM",
    items: [
      {
        title: "Team & Access",
        url: "/dashboard/team",
        icon: ShieldCheck,
      },
      {
        title: "Languages",
        url: "/dashboard/languages",
        icon: Languages,
      },
      {
        title: "Email & Support",
        url: "/dashboard/support",
        icon: Mail,
      },
      {
        title: "System Settings",
        url: "/dashboard/settings",
        icon: Settings,
      },
      {
        title: "Database",
        url: "/dashboard/database",
        icon: Database,
      },
    ],
  },
];