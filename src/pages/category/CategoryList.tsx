import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NXNarrowArrowUp, NXNarrowArrowUpDown, NXRightArrow, NXLeftArrow, NXPlus } from "../../icons";
import PageBodyWrapper from "../../components/PageBodyWrapper";
import CategoryModal from "./modalForm";
import useApi from "../../api";



function CategoryTable() {
    const api = useApi();
    const [categories, setCategories] = useState<any[]>([]);
    const [parent, setParent] = useState('none');
    const [iterableAsParent, setIterableAsParent] = useState<any>();
    

    const [openModal, setOpenModal] = useState(false)
    const [history, setHistory] = useState<any[]>([]); 

    const onNextCategoryArrowClick = (e: any, index: any) => {
        e.preventDefault();
        setIterableAsParent('');
        setParent(categories[index]);
        getCategory(categories[index].id);
        setHistory((prevHistory) => [...prevHistory, parent]); 
    };

    const onPreviosCategoryArrowClick = (e: any) => {
        e.preventDefault();
        setIterableAsParent('');
        if (history.length > 0) {
            const lastParent = history[history.length - 1]; 
            setHistory((prevHistory) => prevHistory.slice(0, -1)); 
            setParent(lastParent);
            getCategory(lastParent.id);
        }
    };

    const getCategory = (id: any) => {
        api.getCategoryByParent(id).then((response: any) => {
            setCategories(response);
        }).catch((error) => {
            //
        });
    };

    const onModalOpen = (itrbl?: any, editId?: number) => {
        setOpenModal(!openModal);
        if (itrbl) {
            setIterableAsParent(itrbl);
        }
    };

    const onModalClose = () => {
        setIterableAsParent('');
        setOpenModal(!openModal);
    };

    const onModalSubmit = (parentId:any) => {
        getCategory(parentId);
    }


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
                    <button
                    className="text-white bg-primary-600 px-10 py-3 rounded-xl font-nunito font-[900]"
                    onClick={(e) => onModalOpen()}
                    >
                    Add Category
                    </button>
                    
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
                                <th
                                    className={`py-5 px-2 font-normal text-base-300`}>
                                    <span className={`flex items-center gap-3`}>
                                        id
                                        {!true ? (
                                            <NXNarrowArrowUp className="text-primary-500" />
                                        ) : (
                                            <NXNarrowArrowUpDown />
                                        )}
                                    </span>
                                </th>
                                <th
                                    className={`py-5 px-2 font-normal text-base-300`}>
                                    <span className={`flex items-center gap-3`}>
                                        Name
                                        {!true ? (
                                            <NXNarrowArrowUp className="text-primary-500" />
                                        ) : (
                                            <NXNarrowArrowUpDown />
                                        )}
                                    </span>
                                </th>
                                <th className={`py-5 px-2 font-normal text-base-300`}>
                                    <span className={`flex items-center gap-3`}>Parent</span>
                                </th>
                                <th className={`py-5 px-2 font-normal text-base-300`}>
                                </th>
                                <th className={`py-5 px-2 font-normal text-base-300`}>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((row: any, index) => (
                                <tr className="border-b border-[#EEEFF2] font-semibold" key={index + 1}>
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
                                        <p>{row.parent ? `< ${row.parent.name}` : '--'}</p>
                                    </td>
                                    <td className="py-3 px-2">
                                        <a>...</a>
                                    </td>
                                    <td className="py-3 px-2">
                                        {row.has_sub ? <a className="cursor-pointer text-blue" onClick={(e) => onNextCategoryArrowClick(e, index)}><NXRightArrow className="h-12" /></a> : 
                                          <a onClick={() => onModalOpen(row)} className="cursor-pointer text-blue"><NXPlus className="h-12" /></a>
                                        }
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </PageBodyWrapper>

            {openModal && <CategoryModal parentData={iterableAsParent || parent} isOpen={openModal} onClose={onModalClose} onSubmit={(parentId) => onModalSubmit(parentId)} /> }
        </>
    );
}

export default CategoryTable;
