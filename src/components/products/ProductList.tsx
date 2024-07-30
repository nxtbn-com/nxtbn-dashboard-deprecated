import { useEffect, useState } from "react";

import Product from "./Product";


import useApi from "../../api";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


function ProductList() {
  const [products, setProducts] = useState([]);

  const api = useApi();

  useEffect(() => {
    api.getProducts().then((response: any) => {
      setProducts(response.results);
    }, (error: any) => {
      toast.error('Failed to fetch products');
    })
  },[])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {products.map((product: any, index: number) => (
       
            <Link key={index} to={`../products/edit/${product.id}`} className="bg-white flex flex-col items-center p-5 rounded-md shadow-sm">
              <img src={product.product_thumbnail} alt={product.title} className="h-[160px] object-cover"/>
              <div className="flex items-center gap-2 my-2">
                {product.colors.map((color: any, index: number) => (
                  <div
                    key={color}
                    className="w-3 aspect-square rounded-full"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
              <h2 className="w-full text-start font-nunito font-bold">{product.name}</h2>
              <div className="flex justify-between items-center w-full">
                <p className="text-sm">{product.summary}</p>
                <span className="font-bold">${Number(product?.default_variant?.price ? product?.default_variant?.price : 0).toFixed(2)}</span>
              </div>
            </Link>
       
      ))}
    </div>
  );
}

export default ProductList;
