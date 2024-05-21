import Product from "./Product";
import useProducts from "./useProducts";

function Products() {
    const products = useProducts()

  return (
    <div className="grid grid-cols-6 gap-5 my-5">
        {products.map((product)=>(
            <Product key={product.title} product={product} /> 
        ))}
    </div>
  );
}

export default Products;
