import React from "react";
import { ProductType } from "./useProducts";

function Product({ product }: { product: ProductType }) {
  return (
    <div className="bg-white flex flex-col items-center p-5 rounded-md shadow-sm">
      <img src={product.image} alt={product.title} className="h-[160px] object-cover"/>
      <div className="flex items-center gap-2 my-2">
        {product.colors.map((color) => (
          <div
            key={color}
            className="w-3 aspect-square rounded-full"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
      <h2 className="w-full text-start font-nunito font-bold">{product.title}</h2>
      <div className="flex justify-between items-center w-full">
        <p className="text-sm">{product.short_description}</p>
        <span className="font-bold">${Number(product.price).toFixed(2)}</span>
      </div>
    </div>
  );
}

export default Product;
