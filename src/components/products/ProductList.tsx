import Product from "./Product";
import useProducts from "./useProducts";

function ProductList() {
  const products = useProducts();
  return (
    <div className="grid grid-cols-4 gap-5">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
