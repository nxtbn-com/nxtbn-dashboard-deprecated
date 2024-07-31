import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import { useDeleteConfirmation } from "../../components/common";


import { NXNarrowArrowUp, NXNarrowArrowUpDown, NXDelete, NXEditPen } from "../../icons";
import PageBodyWrapper from "../../components/PageBodyWrapper";
import useApi from "../../api";
import { handleRetriveError } from "../../utils";



function ProductMain() {

    const [products, setProducts] = useState<any[]>([]);
    const [edit, setEdit] = useState<any>();
    const [openModal, setOpenModal] = useState(false)

    const api = useApi();
    const { handleDelete } = useDeleteConfirmation();

    const getProducts = () => {
        api.getProducts().then((response: any) => {
            setProducts(response.results);
        }, handleRetriveError);
    };

    const onModalOpen = (editId?: number) => {
        setOpenModal(!openModal);
        if (editId) {
            setEdit(editId);
        }
    };



    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <div className="flex justify-between pl-[5%] pt-[5%] md:pl-10 md:pr-10 md:pt-10">
                <div></div>
                <div>
                  <Link
                    className="text-white bg-primary-600 px-10 py-3 rounded-xl font-nunito font-[900]"
                    to="/dashboard/products/add-new-product"
                    >
                    Add Product
                    </Link>
                    
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
                                <th
                                    className={`py-5 px-2 font-normal text-base-300`}>
                                    <span className={`flex items-center gap-3`}>
                                        Price
                                        {!true ? (
                                            <NXNarrowArrowUp className="text-primary-500" />
                                        ) : (
                                            <NXNarrowArrowUpDown />
                                        )}
                                    </span>
                                </th>
                                <th className={`py-5 px-2 font-normal text-base-300`}>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((row: any, index) => (
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
                                    <td className="py-3 px-2 text-start">
                                      <span className="font-bold">${Number(row?.default_variant?.price ? row?.default_variant?.price : 0).toFixed(2)}</span>
                                    </td>
                                    <td className="py-3 px-2">
                                        <div className="flex space-x-2">
                                          <button className="p-1" onClick={() => handleDelete(row.id, 'color', api.deleteProduct, getProducts)}>
                                              <NXDelete />
                                          </button>
                                          <Link to={`../products/edit/${row.id}`} className="p-1"><NXEditPen /></Link>
                                        </div>
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

export default ProductMain;
