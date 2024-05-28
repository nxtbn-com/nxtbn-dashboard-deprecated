import { useState } from "react";

export type ProductType = {
  title: string;
  price: number;
  short_description: string;
  image: string;
  colors : string[]
};

function useProducts() {
  const [products] = useState<ProductType[]>([
    {
      title: "US Polo",
      price: 40.00,
      short_description: "Tailored Causual Shirt",
      image: "/shirt.png",
      colors: ["#10b981", "#8b5cf6", "#ef4444", "#172e54", "#eab308"],
    },
    {
      title: "Microsoft",
      price: 399.00,
      short_description: "Surface Go",
      image: "/tab.png",
      colors: ["#10b981", "#8b5cf6", "#ef4444", "#172e54", "#eab308"],
    },
    {
      title: "Microsoft",
      price: 399.15,
      short_description: "Surface Go",
      image: "/tab.png",
      colors: ["#10b981", "#8b5cf6", "#ef4444", "#172e54", "#eab308"],
    },
    {
      title: "Microsoft",
      price: 399.00,
      short_description: "Surface Go",
      image: "/tab.png",
      colors: ["#10b981", "#8b5cf6", "#ef4444", "#172e54", "#eab308"],
    },
    {
      title: "Microsoft",
      price: 399.00,
      short_description: "Surface Go",
      image: "/tab.png",
      colors: ["#10b981", "#8b5cf6", "#ef4444", "#172e54", "#eab308"],
    },
    {
      title: "Microsoft",
      price: 399.00,
      short_description: "Surface Go",
      image: "/tab.png",
      colors: ["#10b981", "#8b5cf6", "#ef4444", "#172e54", "#eab308"],
    },
    {
      title: "Microsoft",
      price: 399.00,
      short_description: "Surface Go",
      image: "/tab.png",
      colors: ["#10b981", "#8b5cf6", "#ef4444", "#172e54", "#eab308"],
    },
    {
      title: "Microsoft",
      price: 399.00,
      short_description: "Surface Go",
      image: "/tab.png",
      colors: ["#10b981", "#8b5cf6", "#ef4444", "#172e54", "#eab308"],
    },
    {
      title: "Microsoft",
      price: 399.00,
      short_description: "Surface Go",
      image: "/tab.png",
      colors: ["#10b981", "#8b5cf6", "#ef4444", "#172e54", "#eab308"],
    },
    {
      title: "Microsoft",
      price: 399.00,
      short_description: "Surface Go",
      image: "/tab.png",
      colors: ["#10b981", "#8b5cf6", "#ef4444", "#172e54", "#eab308"],
    },
    {
      title: "Microsoft",
      price: 399.00,
      short_description: "Surface Go",
      image: "/tab.png",
      colors: ["#10b981", "#8b5cf6", "#ef4444", "#172e54", "#eab308"],
    },
    {
      title: "Microsoft",
      price: 399.00,
      short_description: "Surface Go",
      image: "/tab.png",
      colors: ["#10b981", "#8b5cf6", "#ef4444", "#172e54", "#eab308"],
    },
    {
      title: "Microsoft",
      price: 399.00,
      short_description: "Surface Go",
      image: "/tab.png",
      colors: ["#10b981", "#8b5cf6", "#ef4444", "#172e54", "#eab308"],
    },
    {
      title: "Microsoft",
      price: 399.00,
      short_description: "Surface Go",
      image: "/tab.png",
      colors: ["#10b981", "#8b5cf6", "#ef4444", "#172e54", "#eab308"],
    },
    {
      title: "Microsoft",
      price: 399.00,
      short_description: "Surface Go",
      image: "/tab.png",
      colors: ["#10b981", "#8b5cf6", "#ef4444", "#172e54", "#eab308"],
    },
  ]);
  return products;
}

export default useProducts