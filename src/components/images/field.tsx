import React, { useEffect, useState } from 'react';
import ImageChooseModal from './modal';
import { NXDelete } from "../../icons";
import { AxiosResponse } from "axios";
import useApi from "../../api";

interface ImageFieldProps {
    label?: string;
    value?: any;
    name: string;
    onChange: any;
    isMull?: boolean;
}

interface ImageData {
    id: number;
    image: string;
}

const ImageField: React.FC<ImageFieldProps> = ({ label='', value,  name, onChange, isMull=false }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [valueList, setValueList] = useState<ImageData[]>([]);
    const [isImageDropped, setIsImageDropped] = useState(false);
    const api = useApi();

    const uploadImageHandle = (e: any) => {
        const data = new FormData();
        data.append("name", e.target.files[0]?.name);
        data.append("image", e.target.files[0]);
        data.append("image_alt_text", e.target.files[0]?.name);
    
        api.postImage(data).then((response: AxiosResponse) => {
          const ImageResponse = response as unknown as any;
            const newImage = { id: ImageResponse.id, image: ImageResponse.image };
            setValueList((prevValue) => {
                const newValue = [...prevValue, newImage];
                onChange(name, newValue);
                return newValue;
            });
        }).catch((error) => console.log(error));
    };

    const onSelectedSave = (data: any) => {
      setValueList((prevValue) => {
        const newValue = [...prevValue, ...data];
        onChange(name, newValue);
        return newValue;
    });
    }

    const deleteImage = (e: any, imgId: number) => {
      e.preventDefault();
      setValueList((prevValue) => {
          const newValue = prevValue.filter((imgData) => imgData.id !== imgId);
          onChange(name, newValue);
          return newValue;
      });
  };

    const handleOpenModal = () => {
        setModalOpen(true);
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
    
            api.postImage(data).then((response: AxiosResponse) => {
              const ImageResponse = response as unknown as any;
                const newImage = { id: ImageResponse.id, image: ImageResponse.image };
                setValueList((prevValue) => {
                    const newValue = [...prevValue, newImage];
                    onChange(name, newValue);
                    return newValue;
                });
            }).catch((error) => console.log(error));
            setIsImageDropped(false);
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsImageDropped(true);
    };

    const handleCloseModal = () => setModalOpen(false);

    useEffect(() => { // for edit only to display pre uploaded images
        if (value) {
            setValueList(value);
        }
    }, [value]);

    return (
       <>
            <div className="bg-white p-5 rounded-md mt-5">
                <div>
                    <label htmlFor="media">Images</label>
                    {valueList.length !== 0 ? (
                        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-3">
                            {valueList.map((imgData) => (
                                <div
                                    key={imgData.id}
                                    className="aspect-w-1 aspect-h-1 box-border object-cover overflow-hidden rounded-md border border-base-300 flex justify-center items-center relative group"
                                >
                                    <img
                                        src={imgData.image}
                                        alt=""
                                        className="aspect-square w-full h-full object-cover rounded-md"
                                    />
                                    <div className="absolute h-[200px] w-[200px] transition-all ease-linear rounded-md group-hover:bg-base-300 opacity-50 group-hover:z-20 hidden group-hover:block">
                                        <div onClick={(e) => deleteImage(e, imgData.id)}>
                                            <NXDelete className="h-[30px] w-[30px] rounded-md border border-red-600 bg-white p-1 absolute left-2 bottom-3 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <label
                                htmlFor="media"
                                className="w-24 h-24 aspect-w-1 aspect-h-1 rounded-md border-dashed border border-base-300 flex justify-center items-center cursor-pointer hover:bg-base-100"
                            >
                                +
                            </label>
                        </div>
                    ) : (
                        <></>
                    )}
                    <div>
                        {valueList.length !== 0 ? (
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
                                    <a className="text-sm hover:underline" onClick={handleOpenModal}>Select existing</a>
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
            <ImageChooseModal onSelectedSave={onSelectedSave} isOpen={isModalOpen} onClose={handleCloseModal} />
       </>
    );
};

export default ImageField;
