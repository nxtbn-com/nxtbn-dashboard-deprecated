import { useState } from "react";
import {
  NXNetSale,
  NXTotalOrder,
  NXTotalSales,
  NXTotalVariant,
} from "../../icons";

export type CardGroupType = {
  title: string;
  value: string;
  profit: number;
  icon: JSX.Element;
};

function useCardGroupItems() {
  const [menuItems] = useState<CardGroupType[]>([
    {
      title: "Total Sales",
      value: "$8,245.00",
      profit: -0.5,
      icon: <NXTotalSales />,
    },
    {
      title: "Total Order",
      value: "1,256",
      profit: 1.0,
      icon: <NXTotalOrder />,
    },
    {
      title: "Net Sales",
      value: "$431.00",
      profit: 1.0,
      icon: <NXNetSale />,
    },
    {
      title: "Total Variant",
      value: "456K",
      profit: -25,
      icon: <NXTotalVariant />,
    },
  ]);
  return menuItems;
}

export default useCardGroupItems;
