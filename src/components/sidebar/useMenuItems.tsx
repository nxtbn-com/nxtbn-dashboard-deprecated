import { useState } from "react";
import { NXAnalytics, NXCoupon, NXCustomer, NXDashboard, NXEcommerce, NXEmv, NXPlugin, NXProductBag, NXShoppingCart, NXTheme, NXUser } from "../../icons";

export type MenuItemType = {
  name: string;
  url: string;
  icon: JSX.Element;
  count?: number
};

const useMenuItems = () => {
  const [menuItems] = useState<MenuItemType[]>([
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: <NXDashboard  />,
    },
    {
      name: "Orders",
      url: "/orders",
      icon: <NXShoppingCart  />,
      count: 8,
    },
    {
      name: "Products",
      url: "/products",
      icon: <NXProductBag />,
    },
    {
      name: "User Management",
      url: "/user-management",
      icon: <NXUser />,
    },
    {
      name: "Analytics",
      url: "/analytics",
      icon: <NXAnalytics />,
    },
    {
      name: "EMV",
      url: "/emv",
      icon: <NXEmv />,
    },
    {
      name: "Theme",
      url: "/theme",
      icon: <NXTheme />,
    },
    {
      name: "Plugin",
      url: "/plugin",
      icon: <NXPlugin />,
    },
    {
      name: "eCommerce",
      url: "/ecommerce",
      icon: <NXEcommerce />,
    },
    {
      name: "Customers",
      url: "/customers",
      icon: <NXCustomer />,
    },
    {
      name: "Coupon",
      url: "/coupon",
      icon: <NXCoupon />,
    },
  ]);

  return menuItems;
};

export default useMenuItems;
