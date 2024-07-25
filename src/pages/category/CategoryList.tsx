import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NXNarrowArrowUp, NXNarrowArrowUpDown, NXRightArrow, NXLeftArrow, NXPlus } from "../../icons";
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
    const api = useApi();
    const [categories, setCategories] = useState([]);
    const [parent, setParent] = useState('none');
    const [prevParent, setPrevParent] = useState('none');
    const [history, setHistory] = useState<string[]>([]); // Stack to keep track of category history

    const onNextCategoryArrowClick = (e: any, id: any) => {
        e.preventDefault();
        setPrevParent(parent); // Save current parent to history before changing
        setParent(id);
        getCategory(id);
        setHistory((prevHistory) => [...prevHistory, parent]); // Push the current parent to history
    };

    const onPreviosCategoryArrowClick = (e: any) => {
        e.preventDefault();
        if (history.length > 0) {
            const lastParent = history[history.length - 1]; // Get the last item from history
            setHistory((prevHistory) => prevHistory.slice(0, -1)); // Remove the last item from history
            setPrevParent(parent); // Save current parent to prevParent
            setParent(lastParent);
            getCategory(lastParent);
        }
    };

    const getCategory = (id: any) => {
        api.getCategoryByParent(id).then((response: any) => {
            setCategories(response);
        }).catch((error) => {
            //
        });
    };

    useEffect(() => {
        getCategory(parent);
    }, [parent]);

    return (
        <>
            <div className="flex justify-between pl-[5%] pt-[5%] md:pl-10 md:pr-10 md:pt-10">
                <div>
                    {history.length > 0 && ( // Conditionally render the previous button
                        <a
                            className="cursor-pointer"
                            onClick={onPreviosCategoryArrowClick}
                        >
                            <NXLeftArrow className="h-12" />
                        </a>
                    )}
                </div>
                <div>
                {!history.length && (
                    <button
                    className="text-white bg-[#0CAF60] px-10 py-3 rounded-xl font-nunito font-[900]"
                    // onClick={openModal}
                    >
                    Add Category
                    </button>
                    )}
                </div>
                
            </div>
            
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
                            {categories.map((row: any, index) => (
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
                                        {row.has_sub ? <a className="cursor-pointer text-blue" onClick={(e) => onNextCategoryArrowClick(e, row.id)}><NXRightArrow className="h-12" /></a> : 
                                          <a className="cursor-pointer text-blue"><NXPlus className="h-12" /></a>
                                        }
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </PageBodyWrapper>
        </>
    );
}

export default CategoryTable;
