import { ProductType } from "./useProducts";
import "./product-progress.css"

function Product({ product }: { product: ProductType }) {
  return (
    <div className="p-2 rounded-2xl bg-white shadow-sm border border-[#EEEFF2]">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-[107px]"
      />
      <h2 className="font-nunito font-bold my-2">{product.title}</h2>
      <div className="flex justify-between">
        <span className="text-[#FE964A] text-sm">${product.price}</span>
        <span>{product.sales}</span>
      </div>
      <progress
        id="file"
        value={product.stock}
        max="100"
        className="bg-[#F1F2F4] progress-bar:bg-[#4CAF50]"
      >
        32%
      </progress>
    </div>
  );
}

export default Product;
