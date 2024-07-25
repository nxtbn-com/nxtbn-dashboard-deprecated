import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NXNarrowArrowUp, NXNarrowArrowUpDown, NXRightArrow } from "../../icons";
import PageBodyWrapper from "../../components/PageBodyWrapper";
import useApi from "../../api";


const tableHead = [
  {
    name: "id",
  },
  {
    name: "name",
  },
  {
    name: "parent",
  },
  {
    name: "",
  },
  {
    name: "",
  },
];


function CategoryTable() {
    const api = useApi()
    const [categories, setCategories] = useState([])
    const [parent, setParent] = useState('none');

    const onNextCategoryArrowClick = (e: any, id:any) => {
        e.preventDefault();
        setParent(id);
        getCategory(id)
    };

    const getCategory = (id:any) => {
        api.getCategoryByParent(id).then((response: any) => {
            setCategories(response)
        }).catch((error) => {
            //
        })
    }

    useEffect(() => {
        getCategory(parent)
    }, [])

    return (

    <PageBodyWrapper>
        <div className="relative overflow-x-auto">
        <table className="min-w-[400px] w-full table-auto text-sm ml:text-base px-3">
            <thead>
            <tr className="border-b border-[#EEEFF2]">
                <th className="text-center ">
                <input
                    className="form-checkbox rounded-full bg-red-100 border-red-300 text-red-600 focus:ring-red-200"
                    type="checkbox"
                    name=""
                    id=""
                />
                </th>
                {tableHead.map((th, index) => (
                <th
                    className={`py-5 px-2 font-normal text-base-300`}
                    key={th.name}
                >
                    <span className={`flex items-center gap-3`}>
                    {th.name}
                    {!true ? (
                        <NXNarrowArrowUp className="text-primary-500" />
                    ) : (
                        <NXNarrowArrowUpDown />
                    )}
                    </span>
                </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {categories.map((row:any, index) => (
                <tr className="border-b border-[#EEEFF2] font-semibold" key={index}>
                <td className="text-center py-5">
                    <input
                    className="form-checkbox rounded-full bg-gray-200 checked:bg-red-600"
                    type="checkbox"
                    />
                </td>
                <td className="text-start py-3 px-2">
                    <p className="text-sm font-normal text-base-300 mt-1">
                        #ID{row.id}
                    </p>
                   
                </td>
                <td className="py-3 px-2">
                {row.name}
                </td>
                <td className="py-3 px-2">
                    <p>{row.parent}</p>
                </td>
                <td className="py-3 px-2">
                    <a>...</a>
                </td>
                <td className="py-3 px-2">
                    {row.has_sub ? <a className="cursor-pointer text-blue" onClick={(e) => onNextCategoryArrowClick(e, row.id)}><NXRightArrow /></a> : ''}
                    
                </td>
            
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    </PageBodyWrapper>
  );
}

export default CategoryTable;


