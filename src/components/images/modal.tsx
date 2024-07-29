import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import NxtbnModal from "../Modal";
import { NXCross } from "../../icons";
import useApi from "../../api";
import Pagination from '../Pagination';
import { handleRetriveError } from "../../utils";

interface ImageChooseModalProps {
    onClose: () => void;
    onSelectedSave: (data: any) => void;
    isOpen: boolean;
    isMull?: boolean
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

const ImageChooseModal: React.FC<ImageChooseModalProps> = ({ onClose, onSelectedSave, isOpen, isMull }) => {
    const [selectImage, setSelectImage] = useState<any[]>([]);
    const [imageList, setImageList] = useState<ImageListType>();

    const api = useApi();   

    const onSelectImage = (e: any, img: any) => {
      if (e.target.checked) {
          setSelectImage([...selectImage, { id: img.id, image: img.image }]);
      } else {
          setSelectImage(selectImage.filter(selectedImg => selectedImg.id !== img.id));
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
    
      const onSaveImage =  (e: any) => {
        e.preventDefault();
        if (!isMull && selectImage.length > 1) {
          toast.error("You can't select multiple images");
        } else {
          onSelectedSave(selectImage);
          onClose();
        }
      };

      const getImageList =  (page?:number): void => {
        api.getImages(page).then((response:any)=> {
          setImageList(response)
        }, handleRetriveError);
      };

      useEffect(() => {
        if (isOpen) {
          getImageList();
        }
      }, [isOpen])
    

    return (
        <>

            <NxtbnModal isOpen={isOpen} onClose={onClose}>
              <div className="p-4 h-1/2">
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

                  <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4 p-6">
                    {imageList?.results.map((img, index) => (
                      <div
                        key={index}
                        className="aspect-w-1 aspect-h-1 overflow-hidden box-border object-cover border border-base-300 flex justify-center items-center rounded-md p-[1px] relative group "
                      >
                        <img src={img?.image} alt="" className="aspect-square w-full h-full object-cover" />
                        <label
                          htmlFor={`selectImg-${index}`}
                          className={`absolute w-full h-full rounded-md group-hover:block ${
                            selectImage.some(
                              (selectedImg) => selectedImg.id === img.id
                            )
                              ? "block"
                              : "hidden"
                          } bg-base-200 opacity-50`}
                        >
                          <div>
                            <input
                              id={`selectImg-${index}`}
                              type="checkbox"
                              className="h-[30px] w-[30px] rounded-md border border-red-600 bg-white p-1 absolute left-2 bottom-3 cursor-pointer"
                              // checked={selectImage.some(
                              //   (selectedImg) => selectedImg.id === img.id
                              // )}
                              onChange={(e) => onSelectImage(e, img)}
                            />
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>
                  <Pagination totalItems={imageList?.count} totalPages={imageList?.total_pages} itemsPerPage={imageList?.results.length} currentPage={imageList?.current_page} onPageChange={getImageList}/>
                  <div className="flex flex-col sm:flex sm:flex-row sm:justify-between sm:items-center border-t p-4 mt-4">
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
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
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
            </NxtbnModal>
        </>
    );
};

export default ImageChooseModal;