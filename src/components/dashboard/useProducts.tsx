import { useState } from "react";

export type ProductType = {
  title: string;
  price: number;
  sales: number;
  stock: number;
  image: string;
};
function useProducts() {
  const [products] = useState<ProductType[]>([
    {
      title: "Rompi Berkancing",
      price: 400.98,
      sales: 1200,
      stock: 70,
      image: "headphone.png",
    },
    {
      title: "Blazzer assorted poc...",
      price: 400.98,
      sales: 900,
      stock: 40,
      image: "sunglass.png",
    },
    {
      title: "Rompi Berkancing 2",
      price: 400.98,
      sales: 1200,
      stock: 70,
      image: "headphone.png",
    },
    {
      title: "Blazzer assorted poc... 2",
      price: 400.98,
      sales: 900,
      stock: 30,
      image: "sunglass.png",
    },
    {
      title: "Pattern top with knot",
      price: 400.98,
      sales: 719,
      stock: 50,
      image: "camera.png",
    },
    {
      title: "Basic Hoodie-blue",
      price: 400.98,
      sales: 512,
      stock: 45,
      image: "lipstick.png",
    },
  ]);
  return products;
}

export default useProducts;
