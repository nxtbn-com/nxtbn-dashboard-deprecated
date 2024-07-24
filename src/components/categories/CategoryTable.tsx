import useApi from "../../api";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const tableHead = [
  {
    name: "Category Title",
  },
  {
    name: "Parent",
  },
  {
    name: "Sub Parent",
  },
  {
    name: "Sub Sub Parent",
  },
];

function CategoryTable({products}:{products:any}) {
  const [categories, setCategories] = useState<Record<string, string>>({});
  const api = useApi();

  useEffect(() => {
    const fetchCategories = () => {
      const categoryNames: Record<string, string> = {};
      const promises = products.results.map((product:any) => {
        if (product.category && !categories[product.category]) {
          return api.getCategory(product.category)
            .then((response:any) => {
              if (response.parent){
                
              }
              categoryNames[product.category] = response.name;
            })
            .catch((error) => {
              console.log(error);
            });
        }
        return Promise.resolve();
      });

      Promise.all(promises)
        .then(() => {
          setCategories(prevCategories => ({ ...prevCategories, ...categoryNames }));
        });
    };

    if (products.results.length > 0) {
      fetchCategories();
    }
  }, [products.results]);

  const fetchSubCat = (id:any) => {
    api.getCategory(id).then((category:any)=>{
      
    })
  }
  

  return (
    <div className="relative overflow-x-auto">
      <table className="min-w-[400px] w-full table-auto text-sm ml:text-base px-3">
        <thead>
          <tr className="border-b border-[#EEEFF2]">
            <td className="text-center py-5">
              <input
                className="form-checkbox rounded-full bg-gray-200 checked:bg-red-600"
                type="checkbox"
              />
            </td>
            {tableHead.map((th, index) => (
              <th
                className={`py-5 px-2 font-normal text-base-300`}
                key={th.name}
              >
                <span className={`flex items-center gap-3`}>{th.name}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.results?.map((product:any, index:any) => (
            <tr className="border-b border-[#EEEFF2] font-semibold" key={index}>
              <td className="text-center py-5">
                <input
                  className="form-checkbox rounded-full bg-gray-200 checked:bg-red-600"
                  type="checkbox"
                />
              </td>
              <td className="py-3 px-2">{product.name}</td>
              <td className="py-3 px-2">{categories[product.category]}</td>
              <td className="py-3 px-2"></td>
              <td className="py-3 px-2"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CategoryTable;
