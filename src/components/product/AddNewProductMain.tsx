import React, { ChangeEvent, useEffect, useState, FormEvent } from "react";
import { NXAlertCircle, NXCross, NXDelete, NXPlus } from "../../icons";
import "./select-hide.css";
import SelectStyled from "../Select";
import NestedSelect from "../nestedSelect";
import useApi from "../../api";
import { makeCategoryEnumFriendly } from "../../enum";
import VariantSection from "./VariantSection";
import { AxiosResponse } from "axios";
import CustomModal from "../Modal";

function AddNewProductMain() {
  const api = useApi();

  // fetched data
  const [categories, setCategories] = useState<any[]>([]);
  const [colors, setColors] = useState<any[]>([]);

  const [fromData, setFormData] = useState<any>({});
  const [productConfig, setProductConfig] = useState<any>({});
  const [variantSection, setVariantSection] = useState<number>(1);

  const handleProductCreate = (event: FormEvent) => {
    event.preventDefault();
    api
      .createProduct(fromData)
      .then((response) => {})
      .catch((error) => {});
  };

  const handleProductConfig = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked, type, value } = event.target;
    const inputValue = type === "checkbox" ? checked : value;

    setProductConfig((prevData: any) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  const onVariantChange = (event: any) => {};

  const addNewVariant = (event: any) => {
    event.preventDefault();
    setVariantSection((prevVariantSection) => prevVariantSection + 1);
  };

  const fetchData = () => {
    api
      .getCategories()
      .then((response) => {
        const category = makeCategoryEnumFriendly(response as any);
        setCategories(category);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });

    api
      .getColor()
      .then((response) => {
        setColors(response as any);
      })
      .catch((error) => {
        console.error("Error fetching colors:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteVariant = (event: any) => {
    alert("delete");
    event.preventDefault();
    setVariantSection((prevVariantSection) => prevVariantSection - 1);
  };

  const [newImages, setNewImages] = useState<any[]>([]);

  const uploadImageHandle = async (e: any) => {
    const data = new FormData();

    data.append("name", e.target.files[0]?.name);
    data.append("image", e.target.files[0]);
    data.append("image_alt_text", e.target.files[0]?.name);

    try {
      await api.productImage(data);
      setNewImages([...newImages, e.target.files[0]]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteImage = (e: any, img: any) => {
    e.preventDefault();
    setNewImages(newImages.filter((image) => image !== img));
  };

  const [imageList, setImageList] = useState<any[]>([]);

  useEffect(() => {
    getUploadImages();
  }, [newImages]);

  const getUploadImages = async (): Promise<void> => {
    try {
      const response: AxiosResponse | any = await api.getImages();
      setImageList(response?.results);
    } catch (error) {
      console.error("Error fetching uploaded images:", error);
    }
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
    getUploadImages();
  };
  const handleCloseModal = () => setModalOpen(false);

  const [isImageDropped, setIsImageDropped] = useState(false);

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
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

      try {
        await api.productImage(data);
        setNewImages([...newImages, droppedFile]);
      } catch (error) {
        console.log(error);
      }
      setIsImageDropped(false);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsImageDropped(true);
  };

  interface SelectImageType {
    id: number;
    isSelected: boolean;
  }

  const [selectImage, setSelectImage] = useState<SelectImageType[]>([]);

  const onSelectImage = (e: any, id: number) => {
    if (e.target.checked) {
      setSelectImage([...selectImage, { id: id, isSelected: true }]);
    } else {
      setSelectImage(selectImage.filter((img) => img.id !== id));
    }
  };

  const deleteSelectedImage = async (e: any, selectedImg: any) => {
    e.preventDefault();
    for (let i = 0; i < selectedImg.length; i++) {
      await api
        .deleteImage(selectedImg[i].id)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    }
    setSelectImage([]);
    getUploadImages();
  };

  const onSaveImage = async (e: any) => {
    e.preventDefault();

    const updatedImages = [...newImages];

    for (let i = 0; i < selectImage.length; i++) {
      const images = imageList.filter((img) => img.id === selectImage[i].id);

      const response = await fetch(images[0].image);
      const blob = await response.blob();
      const file = new File([blob], images[0].name, { type: blob.type });
      updatedImages.push(file);
    }
    setNewImages(updatedImages);
    setModalOpen(false);
  };

  return (
    <section className="px-10 py-5">
      {/* top action button */}
      <div className="hidden md:flex md:justify-end md:gap-5 md:mb-5">
        <button className="text-[#0CAF60] border border-[#0CAF60] px-10 py-3 rounded-xl font-nunito font-[900]">
          Discard
        </button>
        <button
          className="text-white bg-[#0CAF60] px-10 py-3 rounded-xl font-nunito font-[900] disabled:bg-[#0caf609a]"
          onClick={handleProductCreate}
        >
          Save
        </button>
      </div>
      {/* body */}
      <div className="flex flex-col justify-center md:flex-row gap-5">
        <div className="w-full md:w-[60%]">
          <div className="bg-white p-5 rounded-md">
            <div className="flex items-center gap-3">
              <h1 className="font-nunito font-[900] text-2xl">
                Product Information
              </h1>
              <NXAlertCircle className="text-base-300" />
            </div>
            <div className="my-5">
              <label htmlFor="product_name">Product Name</label>
              <input
                type="text"
                id="product_name"
                placeholder="Type your product name"
                className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60] border-[2px] border-dashed"
              />
            </div>
            <div className="mt-5">
              <div className="flex justify-between">
                <label htmlFor="product_description">Description</label>
                <span className="text-base-300 text-sm">1/2000</span>
              </div>
              <textarea
                placeholder="Type your product description here"
                name=""
                id="product_description"
                className="w-full px-5 py-3 h-[224px] bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60] border-[2px] border-dashed"
              ></textarea>
            </div>
          </div>
          <div className=" bg-white p-5 rounded-md mt-5">
            <div>
              <label htmlFor="media">Media</label>
              {newImages.length !== 0 ? (
                <div className="flex gap-3 flex-wrap mt-3">
                  {newImages.map((img, index) => (
                    <div
                      key={index}
                      className="h-[200px] w-[200px] rounded-md border border-base-300 flex justify-center items-center relative group"
                    >
                      <img
                        src={URL.createObjectURL(img)}
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

                      <button
                        className="text-sm hover:underline"
                        onClick={handleOpenModal}
                      >
                        Select existing
                      </button>
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
          <div>
            <CustomModal isOpen={isModalOpen} onClose={handleCloseModal}>
              <div className="p-4">
                <div className="flex justify-between border-b pb-4">
                  <strong className="text-sm">Select images</strong>
                  <span onClick={handleCloseModal}>
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
          </div>

          {/* tax class */}
          {productConfig.charge_tax && (
            <div className=" bg-white p-5 rounded-md mt-5">
              <div>
                <h1 className="font-nunito font-[900] text-2xl">Tax Class</h1>
              </div>

              <p>Tax Class Dropdown goes there</p>
            </div>
          )}
          {/* tax class end */}

          {/* tax class */}
          {productConfig.physical_product && (
            <div className=" bg-white p-5 rounded-md mt-5">
              <div>
                <h1 className="font-nunito font-[900] text-2xl">Shipping</h1>
              </div>

              <p>Shipping Handler goes there</p>
            </div>
          )}
          {/* tax class end */}

          <div className="bg-white p-5 rounded-md mt-5">
            {Array.from({ length: variantSection }, (_, index) => (
              <VariantSection
                key={index}
                productConfig={productConfig}
                onVariantChange={onVariantChange}
                serial={index + 1}
                colors={colors}
                deleteVariant={deleteVariant}
              />
            ))}

            {productConfig.has_variant && (
              <div className="flex justify-center mt-3">
                <button
                  onClick={addNewVariant}
                  className="flex items-center font-nunito font-[800] gap-2 px-5 py-3 bg-primary-500 text-white rounded-xl"
                >
                  <NXPlus className="mr-1" /> Add Variant
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="w-full md:w-[40%]">
          <div className=" bg-white p-5 rounded-md">
            <div>
              <h1 className="font-nunito font-[900] text-2xl">Status</h1>
            </div>
            <div className="w-full mt-3">
              <SelectStyled
                options={[
                  { value: "active", label: "Active" },
                  { value: "inactive", label: "InActive" },
                ]}
              />
              <div className="absolute inset-y-0 right-0 top-10 flex items-center px-2 pointer-events-none"></div>
            </div>
          </div>
          {/* publishing */}
          <div className=" bg-white p-5 rounded-md mt-5">
            <div className="flex items-center gap-3">
              <h1 className="font-nunito font-[900] text-2xl">Publishing</h1>
              <NXAlertCircle className="text-base-300" />
            </div>
            <p className="font-bold mt-7">Sales channels</p>

            <div className="flex gap-2 items-center mt-3">
              <input type="checkbox" name="" id="sales-channel" />
              <label htmlFor="sales-channel">Sales channels</label>
            </div>
            <div className="flex gap-2 items-start mt-3">
              <input type="checkbox" name="" id="sales-channel" />
              <label htmlFor="sales-channel">
                Point of Sale <br />
                <span className="text-sm">
                  Point of Sale has not been set up.
                </span>
                <br />
                <span className="text-sm">
                  Finish the remaining steps to start selling in person.
                </span>
              </label>
            </div>
          </div>
          {/* product organization */}
          <div className=" bg-white p-5 rounded-md mt-5">
            <div className="flex items-center gap-3">
              <h1 className="font-nunito font-[900] text-2xl">
                Product organization
              </h1>
              <NXAlertCircle className="text-base-300" />
            </div>

            <div className="w-full mt-10">
              <label htmlFor="category">Category</label>
              <div className="pt-3">
                <NestedSelect options={categories} />
              </div>
            </div>
            <div className="my-5">
              <label htmlFor="product_type">Product type</label>
              <input
                id="product_type"
                type="text"
                className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-md font-nunito outline-[#0CAF60] border-[2px] border-dashed"
              />
            </div>
            <div className="my-5">
              <label htmlFor="tags">Tags</label>
              <div className="pt-3">
                <SelectStyled isMulti={true} />
              </div>
            </div>
          </div>

          {/* Product Control */}
          <div className=" bg-white p-5 rounded-md mt-5">
            <div>
              <h1 className="font-nunito font-[900] text-2xl">
                Product Control
              </h1>
            </div>

            <div className="flex items-center gap-3 my-5">
              <input
                onChange={handleProductConfig}
                type="checkbox"
                name="charge_tax"
              />
              <label className="font-nunito">Charge tax</label>
            </div>
            <div className="flex items-center gap-3 my-5">
              <input
                onChange={handleProductConfig}
                type="checkbox"
                name="physical_product"
              />
              <label className="font-nunito">Physical Product</label>
            </div>
            <div className="flex items-center gap-3 my-5">
              <input
                onChange={handleProductConfig}
                type="checkbox"
                name="track_stock"
              />
              <label className="font-nunito">Track Stock</label>
            </div>
            <div className="flex items-center gap-3 my-5">
              <input
                onChange={handleProductConfig}
                type="checkbox"
                name="has_variant"
              />
              <label className="font-nunito">Has Variant</label>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse justify-center gap-5 mb-5 md:hidden">
          <button className="text-[#0CAF60] border border-[#0CAF60] px-10 py-3 rounded-xl font-nunito font-[900]">
            Discard
          </button>
          <button
            className="text-white bg-[#0CAF60] px-10 py-3 rounded-xl font-nunito font-[900] disabled:bg-[#0caf609a]"
            disabled
          >
            Save
          </button>
        </div>
      </div>
    </section>
  );
}

export default AddNewProductMain;
