import React, { ChangeEvent, useEffect, useState, FormEvent } from "react";
import { NXAlertCircle, NXPlus } from "../../icons";
import "./select-hide.css";
import SelectStyled from "../Select";
import NestedSelect from "../nestedSelect";
import useApi from "../../api";
import { makeCategoryEnumFriendly } from "../../enum";
import VariantSection from "./VariantSection";


function AddNewProductMain() {
  const api = useApi();

  // fetched data
  const [categories, setCategories] = useState<any[]>([]);
  const [colors, setColors] = useState<any[]>([]);


  const [fromData, setFormData] = useState<any>({});
  const [productConfig, setProductConfig] = useState<any>({});
  const [variantSection, setVariantSection] = useState<number>(1);

  const handleProductCreate = (event: FormEvent) => {
    event.preventDefault()
    api.createProduct(fromData).then((response) => {

    }).catch((error) => {

    })
  };

  const handleProductConfig = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked, type, value } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setProductConfig((prevData: any) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  const onVariantChange = (event: any) => {

  }

  const addNewVariant = (event: any) => {
    event.preventDefault();
    setVariantSection(prevVariantSection => prevVariantSection + 1);
  }

  const fetchData = () => {
    api.getCategories().then((response) => {
      const category = makeCategoryEnumFriendly(response as any);
      setCategories(category);
    }).catch((error) => {
      console.error("Error fetching categories:", error);
    });

    api.getColor().then((response) => {
      setColors(response as any);
    }).catch((error) => {
      console.error("Error fetching colors:", error);
    });
  };


  useEffect(() => {
    fetchData();
  }, [api]);

  const deleteVariant = (event: any) => {
    alert('delete')
    event.preventDefault();
    setVariantSection(prevVariantSection => prevVariantSection - 1);
  }





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
                <span className="text-base-300 text-sm">
                  1/2000
                </span>
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
              <label htmlFor="media">
                <div className="mt-2 cursor-pointer border-[2px] border-dashed border-base-50 text-black font-light p-5 flex justify-center items-center flex-col rounded-xl">
                  <div className="mb-2">
                    <button className="px-5 py-2 rounded-full bg-secondary-100 text-black mr-2">
                      Upload new
                    </button>
                    <button>Select existing</button>
                  </div>
                  <div>Accept images, videos, or 3D models</div>

                  <input id="media" type="file" className="hidden" />
                </div>
              </label>
            </div>
          </div>

          {/* tax class */}
          {productConfig.charge_tax && (
          <div className=" bg-white p-5 rounded-md mt-5">
            <div>
              <h1 className="font-nunito font-[900] text-2xl">Tax Class</h1>
            </div>

            <p>Tax Class Dropdown goes there</p>
          </div>)}
          {/* tax class end */}

          {/* tax class */}
          {productConfig.physical_product && (
          <div className=" bg-white p-5 rounded-md mt-5">
            <div>
              <h1 className="font-nunito font-[900] text-2xl">Shipping</h1>
            </div>

            <p>Shipping Handler goes there</p>
          </div>)}
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
              <h1 className="font-nunito font-[900] text-2xl">Product Control</h1>
            </div>

            <div className="flex items-center gap-3 my-5">
              <input onChange={handleProductConfig} type="checkbox" name="charge_tax" />
              <label className="font-nunito">Charge tax</label>
            </div>
            <div className="flex items-center gap-3 my-5">
            <input onChange={handleProductConfig} type="checkbox" name="physical_product" />
              <label className="font-nunito">Physical Product</label>
            </div>
            <div className="flex items-center gap-3 my-5">
            <input onChange={handleProductConfig} type="checkbox" name="track_stock" />
              <label className="font-nunito">Track Stock</label>
            </div>
            <div className="flex items-center gap-3 my-5">
            <input onChange={handleProductConfig} type="checkbox" name="has_variant" />
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
