import { useAuthStore } from "modules/auth/application";

import { INavItem } from "./INavItem";

export const useNavItems = () => {
  const isAuthenticated = useAuthStore((store) => store.isAuthenticated);

  return isAuthenticated ? NAV_ITEMS : NAV_ITEMS.slice(0, NAV_ITEMS.length - 1);
};

// todo: translations
export const NAV_ITEMS: Array<INavItem> = [
  {
    label: "Inspiration",
    children: [
      {
        label: "Explore Choc UI",
        subLabel: "Set of prebuilt components",
        href: "https://choc-ui.com/",
      },
      {
        label: "Explore Chakra UI Templates",
        subLabel: "Set of opensource prebuilt components",
        href: "https://chakra-templates.dev/",
      },
    ],
  },
  {
    label: "Demo Providers",
    children: [
      {
        label: "Vercel Next.js",
        subLabel: "The React framework for production",
        href: "https://nextjs.org/",
      },
      {
        label: "Fake Store API",
        subLabel: "Free rest API for e-commerce",
        href: "https://fakestoreapi.com/",
      },
    ],
  },
  {
    label: "Our Products",
    href: "/products",
  },
  {
    label: "Cart",
    href: "/cart/1",
  },
];
