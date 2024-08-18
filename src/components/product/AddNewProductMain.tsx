import React, { ChangeEvent, useEffect, useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { handleRetriveError, boolIndicator } from "../../utils";
import ProductControl from './productControl';


import { NXAlertCircle, NXPlus } from "../../icons";
import "./select-hide.css";
import SelectStyled from "../Select";
import TagSelect from "../TagSelect";
import NestedSelect from "../nestedSelect";
import useApi from "../../api";
import enumChoice, { getEnumItem, makeCategoryEnumFriendly, makeEnumFriendly } from "../../enum";
import VariantSection from "./VariantSection";
import { ImageField } from "../images";
import { toast } from 'react-toastify';
import EditorField from "../editor/EditorJS";
import SEO from "../seo/SEO";
import PageBodyWrapper from "../../components/PageBodyWrapper";


import { NXForm, InputField } from "../../components/common";



function AddNewProductMain() {
  const api = useApi();
  const navigate = useNavigate();

  // fetched data
  const [categories, setCategories] = useState<any[]>([]);
  const [colors, setColors] = useState<any[]>([]);
  const [ProductType, setProductType] = useState<any[]>([]);
  const [productTags, setProductTags] = useState<any[]>([]);
  const [collection, setCollection] = useState<any[]>([]);

  const [errorData, setErrorData] = useState<any>({});



  const [fromData, setFormData] = useState<any>({
    variants_payload: [{is_default_variant: true}]
  });
  const [productConfig, setProductConfig] = useState<any>({});

  const handleProductCreate = (event: FormEvent) => {
    event.preventDefault()
    api.createProduct(fromData).then((response:any) => {
      toast.success("Product Created Successfully!");
      navigate(`/dashboard/products/edit/${response.id}`); 
    }, (error) => {
      setErrorData(error.response.data);
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


  const addNewVariant = (event: any) => {
    event.preventDefault();
  
    setFormData((prevFormData: any) => {
      const updatedVariants = [
        ...(prevFormData.variants_payload || []),
        {is_default_variant: false}
      ];
  
      return {
        ...prevFormData,
        variants_payload: updatedVariants,
      };
    });
  };

  const fetchData = () => {
    api.getRecursiveCategories().then((response) => {
      const category = makeCategoryEnumFriendly(response as any);
      setCategories(category);
    }, handleRetriveError);

    api.getColor().then((response) => {
      setColors(response as any);
    }, handleRetriveError);

    api.getProductType().then((response) => {
      setProductType(response as any);
    }, handleRetriveError);

    api.getProductTags().then((response) => {
      setProductTags(response as any);
    }, handleRetriveError);

    api.getCollections().then((response) => {
      setCollection(response as any);
    }, handleRetriveError);

  };


  useEffect(() => {
    fetchData();
  }, []);

  const deleteVariant = async (event: any, id: any, serial: any, is_default_variant:boolean) => {
    event.preventDefault();

    if (is_default_variant) {
      toast.error("Default variant can not be deleted");
      return;
    }

      setFormData((prevFormData: any) => {
        const updatedVariants = [...(prevFormData.variants_payload || [])];
        updatedVariants.splice(serial - 1, 1); // Adjusted for potential off-by-one error
        return {
          ...prevFormData,
          variants_payload: updatedVariants,
        };
      });
      toast.success("Variant deleted successfully");
    
  };


  const onChangeHandler = (event: ChangeEvent<any>) => {
    const { name, value } = event.target;
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const onVariantChange = (data: any, index: number) => {
    setFormData((prevFormData: any) => {
      const updatedVariants = [...(prevFormData.variants_payload || [])];
      updatedVariants[index] = data;
  
      return {
        ...prevFormData,
        variants_payload: updatedVariants
      };
    });
  };
  

  const handleSingleChange = (name: any, value: any) => {
    console.log(name, value);
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const onProductTypeChange = (name: any, value: any) => {
    console.log(name, value);
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [name]: value
    }));

    setProductConfig(ProductType.find((item: any) => item.id === value));
  };

  const markAsDefault = (event: any, id: any, serial: any) => {
    event.preventDefault();
  
    setFormData((prevFormData: any) => {
      const updatedVariants = [...(prevFormData.variants_payload || [])];
      updatedVariants.forEach((variant: any) => {
        variant.is_default_variant = false;
      });
      updatedVariants[serial - 1].is_default_variant = true;
      return {
        ...prevFormData,
        variants_payload: updatedVariants,
      };
    });
  }

  return (
    <PageBodyWrapper bgClass="">
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
              <InputField
                type="text"
                id="product_name"
                name="name"
                onChange={onChangeHandler}
                placeholder="Type your product name"
                className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60] border-[2px] border-dashed"
                errorData={errorData}
              />
            </div>
            <div className="my-5">
              <label htmlFor="summary">summary</label>
              <InputField
                type="text"
                id="summary"
                name="summary"
                onChange={onChangeHandler}
                errorData={errorData}
                placeholder="Type product summary"
                className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60] border-[2px] border-dashed"
              />
            </div>

            <div className="mt-5">
              <div className="flex flex-col gap-3">
                <label htmlFor="product_description">Description</label>
                <EditorField name="description" errorData={errorData} onChange={(content) => handleSingleChange('description', JSON.stringify(content))}/>
              </div>
            </div>
          </div>

         
         <ImageField isMull={true}  label="Images" name="images" onChange={(name: string, data:any) => handleSingleChange(name, data.map((image: any) => image.id))} />

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
          {fromData.variants_payload && fromData.variants_payload.map((variant: any, index: number) => (
              <VariantSection
                key={index}
                productConfig={productConfig}
                onChange={onVariantChange}
                serial={index + 1}
                colors={colors}
                deleteVariant={deleteVariant}
                markAsDefault={markAsDefault}
                errorData={errorData}
                name='variants_payload'
                variant={variant}
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
          <div className="bg-white p-5 rounded-md mt-5">
            <SEO seoData={fromData} onChange={onChangeHandler}/>
          </div>

        </div>


        <div className="w-full md:w-[40%]">
          <div className=" bg-white p-5 rounded-md">
            <div>
              <h1 className="font-nunito font-[900] text-2xl">Status</h1>
            </div>
            <div className="w-full mt-3">
              <SelectStyled
                options={enumChoice.publishableStatus}
                name="status"
                onChange={(e) => handleSingleChange('status', e.value)}
              />
              <div className="absolute inset-y-0 right-0 top-10 flex items-center px-2 pointer-events-none"></div>
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
                <NestedSelect  onChange={(e) => handleSingleChange('category', e.value)} options={categories} />
              </div>
            </div>
            <div className="my-5">
              <label htmlFor="tags">Collection</label>
              <div className="pt-3">
                <SelectStyled
                  isMulti={true}
                  options={makeEnumFriendly(collection)}
                  onChange={(e) => handleSingleChange('collections', e.value)}
                  errorData={errorData}
                />
              </div>
            </div>
            <div className="my-5">
              <label htmlFor="tags">Product Type</label>
              <div className="pt-3">
                <SelectStyled
                  name='product_type'
                  options={makeEnumFriendly(ProductType)}
                  onChange={(e) => onProductTypeChange('product_type', e.value)}
                  errorData={errorData}
                />
              </div>
            </div>
            <div className="my-5">
              <label htmlFor="tags">Tags</label>
              <div className="pt-3">
                <TagSelect
                  errorData={errorData}
                  name='tags_payload'
                  isMulti={true}
                  tagAPI={api.getProductTags}
                  onChange={(e:any) => handleSingleChange('tags_payload', e.map((tag: any) => tag.value))}
                />
              </div>
            </div>
          </div>

          {/* Product Control */}
          <ProductControl productConfig={productConfig} />
          {/* Product Control End */}

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
    </PageBodyWrapper>
  );
}

export default AddNewProductMain;
