import { useEffect, useState } from "react";
import { NXPlus } from "../../icons";
import CategoryPagination from "./CategoryPagination";
import CategoryTable from "./CategoryTable";
import CategoryToolbar from "./CategoryToolbar";
import { Link } from "react-router-dom";
import useApi from "../../api";
import { toast } from "react-toastify";

function CategoriesMain() {
  const api = useApi()
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const page = 1
    getProducts(page)
  }, []);

  const getProducts = (page?:any) => {
    api.getProducts(page).then((response: any) => setProducts(response)).catch((error: any) => (toast.error("Failed to fetch products", error)))
  }
  return (
    <div className="px-[5%] md:px-10">
      <div className="flex justify-end mt-4">
        <Link
          to="/dashboard/products/categories/add-new-category"
          className="bg-primary-500 text-white flex items-center gap-3 px-5 py-2 rounded-lg"
        >
          <NXPlus />
          <span className="hidden md:block">Add New Category</span>
        </Link>
      </div>
      <div className="bg-white rounded-lg p-4 flex flex-col mt-4">
        <CategoryToolbar />
        <CategoryTable products={products}/>
        <CategoryPagination products={products} getProducts={getProducts}/>
      </div>
    </div>
  );
}

export default CategoriesMain;
