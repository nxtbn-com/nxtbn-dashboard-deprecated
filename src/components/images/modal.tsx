import React, { useState, useEffect } from 'react';
import { AxiosResponse } from "axios";
import CustomModal from "../Modal";
import { NXCross } from "../../icons";
import useApi from "../../api";


interface ImageChooseModalProps {
    onClose: () => void;
    isOpen: boolean;
}

interface SelectImageType {
    id: number;
    isSelected: boolean;
  }


const ImageChooseModal: React.FC<ImageChooseModalProps> = ({ onClose, isOpen }) => {
    const [selectImage, setSelectImage] = useState<SelectImageType[]>([]);
    const [imageList, setImageList] = useState<any[]>([]);

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
    
      const onSaveImage =  (e: any) => {
        e.preventDefault();
        // setNewImages(updatedImages);
        onClose();
      };

      const getImageList =  (): void => {
        api.getImages().then((response:any)=> {
          setImageList(response?.results)
        }).catch((error) => console.error("Error fetching uploaded images:", error))
      };

      useEffect(() => {
        if (isOpen) {
          getImageList();
        }
      }, [isOpen])
    

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
                  {imageList.length === 0 ? (
                    <span className="flex justify-center items-center">
                      No Prevous Image Found
                    </span>
                  ) : (
                    <span className="text-sm">
                      Select Items: {selectImage?.length}
                    </span>
                  )}

                  <div className="flex gap-4 flex-wrap p-6">
                    {imageList?.map((img, index) => (
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
                  <div className="flex justify-between items-center border-t p-4 mt-4">
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