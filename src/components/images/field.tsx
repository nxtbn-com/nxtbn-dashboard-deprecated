import React, { ChangeEvent, useState, useEffect } from 'react';
import ImageChooseModal from './modal';
import { NXDelete } from "../../icons";

import useApi from "../../api";


interface ImageFieldProps {
    label: string;
    name: string;
    onChange: (field:string, id:any)=>void;
}

interface SelectImageType {
    id: number;
    isSelected: boolean;
  }

const ImageField: React.FC<ImageFieldProps> = ({ label, name, onChange }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [newImages, setNewImages] = useState<any[]>([]);
    const [isImageDropped, setIsImageDropped] = useState(false);
    const [imageList, setImageList] = useState<any[]>([]);

    const api = useApi();

    useEffect(()=>{
      const imageId = imageList.filter(image => newImages.some(newImage => newImage.name === image.name)).map(image => image.id);

      onChange(name, imageId)
    },[newImages])

    const uploadImageHandle = (e: any) => {
        const data = new FormData();
    
        data.append("name", e.target.files[0]?.name);
        data.append("image", e.target.files[0]);
        data.append("image_alt_text", e.target.files[0]?.name);
    
        api.postImage(data).then((response)=> {
          setNewImages([...newImages, e.target.files[0]]);
        }).catch((error)=>console.log(error)) 
    };

    const deleteImage = (e: any, img: any) => {
        e.preventDefault();
        setNewImages(newImages.filter((image) => image !== img));
    };

    const handleOpenModal = () => {
        setModalOpen(true);
        getUploadImages();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) {
          const reader = new FileReader();
          reader.onload = () => {
            reader.result as string;
          };
          reader.readAsDataURL(droppedFile);
    
          const data = new FormData();
    
          data.append("name", droppedFile.name);
          data.append("image", droppedFile);
          data.append("image_alt_text", droppedFile.name);
    
          api.postImage(data).then((response)=>setNewImages([...newImages, droppedFile])).catch((error)=>console.log(error))
          setIsImageDropped(false);
        }
      };

      const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsImageDropped(true);
      };

      useEffect(() => {
        getUploadImages();
      }, [newImages]);
    
      const getUploadImages = async (): Promise<void> => {
        api.getImages().then((response:any)=>setImageList(response?.results)).catch((error) => console.error("Error fetching uploaded images:", error))
      };

      const handleCloseModal = () => setModalOpen(false);
    
    

    return (
       <>
             <div className=" bg-white p-5 rounded-md mt-5">
            <div>
              <label htmlFor="media">Images</label>
              {newImages.length !== 0 ? (
                <div className="flex gap-3 flex-wrap mt-3">
                  {newImages.map((img, index) => (
                    <div
                      key={index}
                      className="h-[200px] w-[200px] rounded-md border border-base-300 flex justify-center items-center relative group"
                    >
                       <img
                          src={img instanceof File ? URL.createObjectURL(img) : img.image}
                          alt=""
                          className="absolute z-10 rounded-md"
                        />
                      <div className="absolute h-[200px] w-[200px] transition-all ease-linear rounded-md group-hover:bg-base-300 opacity-50 group-hover:z-20 hidden group-hover:block">
                        <div onClick={(e) => deleteImage(e, img)}>
                          <NXDelete className="h-[30px] w-[30px] rounded-md border border-red-600 bg-white p-1 absolute left-2 bottom-3 cursor-pointer" />
                        </div>
                      </div>
                    </div>
                  ))}
                  <label
                    htmlFor="media"
                    className="h-[50px] w-[50px] rounded-md border-dashed border border-base-300 flex justify-center items-center cursor-pointer hover:bg-base-100"
                  >
                    +
                  </label>
                </div>
              ) : (
                <></>
              )}
              <div>
                {newImages.length !== 0 ? (
                    <></>
                  ) : (
                    <div
                      className={`mt-2 cursor-pointer z-10 border-[2px] border-dashed border-base-50 text-black font-light p-5 flex justify-center items-center flex-col rounded-xl hover:bg-gray-100 ${
                        isImageDropped ? "bg-gray-100 border border-base-400" : ""
                      }`}
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                      onDragEnter={() => setIsImageDropped(true)}
                      onDragLeave={() => setIsImageDropped(false)}
                    >
                      <div className="mb-2 pt-6">
                        <label
                          htmlFor="media"
                          className="px-5 py-2 z-30 rounded-full bg-secondary-200 text-black mr-2 text-sm cursor-pointer"
                        >
                          Upload new
                        </label>

                        <button className="text-sm hover:underline" onClick={handleOpenModal}>Select existing</button>
                      </div>
                      <div className="text-sm font-thin pt-2 pb-5">
                        Accept images, videos, or 3D models
                      </div>
                    </div>
                  )}
                </div>
                <input
                id="media"
                type="file"
                className="hidden"
                onChange={uploadImageHandle}
              />
            </div>
          </div>
          <ImageChooseModal isOpen={isModalOpen} onClose={handleCloseModal} setNewImages={setNewImages}/>
       </>
    );
};

export default ImageField;