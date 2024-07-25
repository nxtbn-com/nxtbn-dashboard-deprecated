import { useState } from "react";
import { NXAnalytics, NXCoupon, NXCustomer, NXDashboard, NXEcommerce, NXEmv, NXPlugin, NXProductBag, NXShoppingCart, NXTheme, NXUser } from "../../icons";

export type MenuItemType = {
  name: string;
  url?: string;
  icon: JSX.Element;
  count?: number,
  subMenu?: any[];
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
      url: "/dashboard/orders",
      icon: <NXShoppingCart  />,
      count: 8,
    },
    {
      name: "Catalog",
      icon: <NXProductBag />,
      count: 12,
      subMenu: [
        {
          name: "Products",
          url: "/dashboard/products"
        },
        {
          name: "Categories",
          url: "/dashboard/products/categories"
        },
        {
          name: "Gift Card",
          url: "/dashboard/products/gift-card"
        }
      ],
    },
    {
      name: "Analytics",
      url: "/dashboard/analytics",
      icon: <NXAnalytics />,
    },
    {
      name: "EMV",
      url: "/dashboard/emv",
      icon: <NXEmv />,
    },
    {
      name: "Theme",
      url: "/dashboard/theme",
      icon: <NXTheme />,
    },
    {
      name: "Plugin",
      url: "/dashboard/plugin",
      icon: <NXPlugin />,
    },
    {
      name: "eCommerce",
      url: "/dashboard/ecommerce",
      icon: <NXEcommerce />,
    },
    {
      name: "Customers",
      url: "/dashboard/customers",
      icon: <NXCustomer />,
    },
    {
      name: "Coupon",
      url: "/dashboard/coupon",
      icon: <NXCoupon />,
    },
    {
      name: "Users",
      url: "/dashboard/user-management",
      icon: <NXUser />,
    },
  ]);

  return menuItems;
};

export default useMenuItems;
