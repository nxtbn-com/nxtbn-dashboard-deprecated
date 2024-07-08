import React, { useState, useEffect } from 'react';
import { AxiosResponse } from "axios";
import CustomModal from "../Modal";
import { NXCross, NXDelete } from "../../icons";
import useApi from "../../api";
import { use } from 'echarts';
import Pagination from '../Pagination';


interface ImageChooseModalProps {
    onClose: () => void;
    isOpen: boolean;
}

interface SelectImageType {
    id: number;
    isSelected: boolean;
  }

interface PaginationStep {
    previous_url: string | null;
    next_url: string | null;
    page_links: [string, number, boolean, boolean][];
};

interface Result {
    id: number;
    created_at: string;
    last_modified: string;
    name: string;
    image: string;
    image_alt_text: string;
    created_by: number;
    last_modified_by: number;
};

interface ImageListType {
    count: number;
    current_pagination_step: PaginationStep;
    current_page: number;
    next_page_url: string | null;
    next_page_number: number | null;
    previous_page_url: string | null;
    previous_page_number: number | null;
    total_pages: number;
    results: Result[];
};

const ImageChooseModal: React.FC<ImageChooseModalProps> = ({ onClose, isOpen }) => {
    const [selectImage, setSelectImage] = useState<SelectImageType[]>([]);
    const [imageList, setImageList] = useState<ImageListType>();

    const api = useApi();   

    const onSelectImage = (e: any, id: number) => {
        if (e.target.checked) {
          setSelectImage([...selectImage, { id: id, isSelected: true }]);
        } else {
          setSelectImage(selectImage.filter((img) => img.id !== id));
        }
      };
    
      const deleteSelectedImage = (e: any, selectedImg: any) => {
        e.preventDefault();
        for (let i = 0; i < selectedImg.length; i++) {
          api.deleteImage(selectedImg[i].id).then((response) => console.log(response)).catch((error) => console.log(error));
        }
        setSelectImage([]);
        getImageList();
      };

      const deleteImage = (id:number) => {
        api.deleteImage(id).then((response)=>console.log(response.data)).catch((error)=>console.log(error))
        getImageList()
      }
    
      const onSaveImage =  (e: any) => {
        e.preventDefault();
    
    
        // setNewImages(updatedImages);
        onClose();
      };

      const getImageList = (page?:number): void => {
        api.getImages(page).then((response:any)=> {
          setImageList(response)
        }).catch((error) => console.error("Error fetching uploaded images:", error))
      };

      useEffect(() => {
        getImageList();
      }, [])
    

    return (
        <>

            <CustomModal isOpen={isOpen} onClose={onClose}>
              <div className="p-4">
                <div className="flex justify-between border-b pb-4">
                  <strong className="text-sm">Select images</strong>
                  <span onClick={onClose}>
                    <NXCross className="h-4 cursor-pointer" />
                  </span>
                </div>
                <div className="pt-6">
                  {imageList?.results.length === 0 ? (
                    <span className="flex justify-center items-center">
                      No Prevous Image Found
                    </span>
                  ) : (
                    <span className="text-sm">
                      Select Items: {selectImage?.length}
                    </span>
                  )}

                  <div className="flex gap-4 flex-wrap p-6">
                    {imageList?.results.map((img, index) => (
                      <div
                        key={index}
                        className="h-[150px] w-[150px] border border-base-300 flex justify-center items-center rounded-md p-[1px] relative group "
                      >
                        <img src={img?.image} alt="" />
                        <label
                          htmlFor={`selectImg-${index}`}
                          className={`absolute h-[150px] w-[150px] rounded-md group-hover:block ${
                            selectImage.some(
                              (selectedImg) => selectedImg.id === img.id
                            )
                              ? "block"
                              : "hidden"
                          } bg-base-200 opacity-50`}
                        >
                          <div>
                            <NXDelete onClick={() => deleteImage(img?.id)} className="h-[25px] w-[25px] rounded-md border border-red-600 bg-white p-1 absolute right-2 bottom-3 cursor-pointer" />
                            <input
                              id={`selectImg-${index}`}
                              type="checkbox"
                              className="h-[30px] w-[30px] rounded-md border border-red-600 bg-white p-1 absolute left-2 bottom-3 cursor-pointer"
                              checked={selectImage.some(
                                (selectedImg) => selectedImg.id === img.id
                              )}
                              onChange={(e) => onSelectImage(e, img.id)}
                            />
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>
                  <Pagination totalItems={imageList?.count} totalPages={imageList?.total_pages} itemsPerPage={imageList?.results.length} currentPage={imageList?.current_page} onPageChange={getImageList}/>
                  <div className="flex justify-between items-center border-t p-4">
                    {selectImage.length !== 0 ? (
                      <strong
                        className="text-sm cursor-pointer text-red-600 hover:underline"
                        onClick={() => setSelectImage([])}
                      >
                        Clear Selection
                      </strong>
                    ) : (
                      <strong></strong>
                    )}

                    <span className="flex gap-4">
                      <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        onClick={(e) => deleteSelectedImage(e, selectImage)}
                      >
                        Delete
                      </button>
                      <button
                        type="submit"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        data-autofocus
                        onClick={onSaveImage}
                      >
                        Save
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </CustomModal>
        </>
    );
};

export default ImageChooseModal;