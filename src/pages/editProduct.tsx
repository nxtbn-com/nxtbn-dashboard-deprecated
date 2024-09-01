import { ChangeEvent, useEffect, useState, FormEvent } from "react";
import { useParams } from 'react-router-dom';

import ProductControl from '../components/product/productControl';

import { NXAlertCircle, NXPlus } from "../icons";
import "../components/product/select-hide.css";
import SelectStyled from "../components/Select";
import NestedSelect from "../components/nestedSelect";
import TagSelect from "../components/TagSelect";
import useApi from "../api";
import enumChoice, { makeCategoryEnumFriendly, makeEnumFriendly, makeTagEnumFriendly, getEnumItem, transformSingleEnum } from "../enum";
import VariantSection from "../components/product/VariantSection";
import { ImageField } from "../components/images";
import EditorField from "../components/editor/EditorJS";
import SEO from "../components/seo/SEO";
import { useDeleteConfirmation } from "../components/common";




import { toast } from 'react-toastify';

const processProductResponse = (productResponse: any) => {
  const processedResponse = {
    ...productResponse,
    images: productResponse.images_details.map((image: any) => image.id),
    variants_payload: productResponse.variants,
    tags_payload: makeTagEnumFriendly(productResponse.tags),
    variant_to_delete: [],
  };
  return processedResponse;
};



function EditProduct() {
  const api = useApi();
  const { id } = useParams();
  const { handleDelete } = useDeleteConfirmation();

  // fetched data
  const [categories, setCategories] = useState<any[]>([]);
  const [colors, setColors] = useState<any[]>([]);
  const [ProductType, setProductType] = useState<any[]>([]);


  const [fromData, setFormData] = useState<any>({});
  const [imageList, setImageList] = useState<any[]>([]);
  const [productConfig, setProductConfig] = useState<any>({});
  const [errorData, setErrorData] = useState<any>({});


  const handleProductUpdate = (event: FormEvent) => {
    event.preventDefault()
    api.updateProduct(id, fromData).then((response) => {
      toast.success("Product updated Successfully!")
    }).catch((error) => {
      toast.error("Product updated is failed!")
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
        {is_default_variant: false,}
      ];
  
      return {
        ...prevFormData,
        variants_payload: updatedVariants,
      };
    });
  };
  

  const fetchData = () => {
    Promise.all([
      api.getRecursiveCategories(),
      api.getColor(),
      api.getProductById(id),
      api.getProductType(),
    ])
    .then(([
      categoriesResponse,
      colorsResponse,
      productResponse,
      productTypeResponse,
    ]) => {
      const categories = makeCategoryEnumFriendly(categoriesResponse as any);
      setCategories(categories);
      setColors(colorsResponse as any);
      setProductType(productTypeResponse as any);

      const productData = productResponse as any;
      const processedProductResponse = processProductResponse(productData);
      setFormData(processedProductResponse);
      setProductConfig(processedProductResponse.product_type_details)

      const imagesArray = productData.images_details.map((image: any) => ({ id: image.id, image: image.image }));
      setImageList(imagesArray);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  const deleteVariant = async (event: any, id: any, serial: any, is_default_variant: boolean) => {
    event.preventDefault();

    if (is_default_variant) {
      toast.error("Default variant cannot be deleted");
      return;
    }
  
    setFormData((prevFormData: any) => {
      const updatedVariants = [...(prevFormData.variants_payload || [])];
      updatedVariants.splice(serial - 1, 1); // Adjusted for potential off-by-one error

      if (id) {
        return {
          ...prevFormData,
          variants_payload: updatedVariants,
          variant_to_delete: [...prevFormData.variant_to_delete, id], // Add the id to variant_to_delete
        };
      } else {
        return {
          ...prevFormData,
          variants_payload: updatedVariants,
        };
      }
    });

    toast.success("Variant deleted successfully");
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

  const onImageChange = (field: string, data: any) => {
    const imageIds = data.map((image: any) => image.id);
    setFormData((prevFormData: any) => ({
        ...prevFormData,
        images: imageIds
    }));
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
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  // const handleTagChange = (name: any, value: any) => {
  //   setFormData((prevFormData: any) => ({
  //     ...prevFormData,
  //     [name]: value
  //   }));
  // };
  

  return (
    <section className="px-10 py-5 relative">
      {/* top action button */}
      <div className="hidden md:flex md:justify-end md:gap-5 md:mb-5 sticky top-0 right-12 z-30 bg-white rounded-md py-4 px-4">
        <button className="text-[#0CAF60] border border-[#0CAF60] px-10 py-3 rounded-xl font-nunito font-[900] hover:bg-slate-200">
          Discard
        </button>
        <button
          className="text-white bg-[#0CAF60] hover:bg-[#098d4d] px-10 py-3 rounded-xl font-nunito font-[900] disabled:bg-[#0caf609a]"
          onClick={handleProductUpdate}
        >
          Edit
        </button>
      </div>
      {/* body */}
      <div className="flex flex-col justify-center md:flex-row gap-5">
        <div className="w-full md:w-[60%]">
          <div className="bg-white p-5 rounded-md">
            <div className="flex items-center gap-3">
              <h1 className="font-nunito font-[900] text-2xl">
                Edit Product Information
              </h1>
              <NXAlertCircle className="text-base-300" />
            </div>
            <div className="my-5">
              <label htmlFor="product_name">Product Name</label>
              <input
                type="text"
                id="product_name"
                name="name"
                defaultValue={fromData.name || ''}
                onChange={onChangeHandler}
                placeholder="Type your product name"
                className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60] border-[2px] border-dashed"
              />
            </div>
            <div className="my-5">
              <label htmlFor="summary">summary</label>
              <input
                type="text"
                id="summary"
                name="summary"
                defaultValue={fromData.summary || ''}
                onChange={onChangeHandler}
                placeholder="Type product summary"
                className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60] border-[2px] border-dashed"
              />
            </div>

            
            <div className="mt-5">
              <div className="flex flex-col gap-3">
                <label htmlFor="product_description">Description</label>
                {fromData.description && <EditorField
                  defaultValue={JSON.parse(fromData.description)}
                  onChange={(content) => handleSingleChange('description', JSON.stringify(content))}
                />}
              </div>
            </div>
          </div>

         <ImageField isMull={true} value={imageList}  label="Images" name="images" onChange={onImageChange} />

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
                key={variant.id || index}
                productConfig={productConfig}
                onChange={onVariantChange}
                serial={index + 1}
                colors={colors}
                deleteVariant={deleteVariant}
                markAsDefault={markAsDefault}
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
              {fromData.status && (
                <SelectStyled
                  options={enumChoice.publishableStatus}
                  name="status"
                  onChange={(e) => handleSingleChange('status', e.value)}
                  defaultValue={getEnumItem(enumChoice.publishableStatus, fromData.status)}
                  // defaultValue={{value: "DRAFT", label: "Draft"}}
                />
              )}
              
              <div className="absolute inset-y-0 right-0 top-10 flex items-center px-2 pointer-events-none"></div>
            </div>
          </div>
          {/* publishing */}
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
                {fromData.category_details && (
                  <NestedSelect
                    options={categories}
                    defaultValue={transformSingleEnum(fromData.category_details)}
                    />
                )}
                
              </div>
            </div>
            <div className="my-5">
              <label htmlFor="tags">Product Type</label>
              <div className="pt-3">
                {ProductType.length && fromData.product_type &&
                (<SelectStyled
                  name='product_type'
                  options={makeEnumFriendly(ProductType)}
                  isDisabled={true}
                  defaultValue={getEnumItem(ProductType, fromData.product_type)}
                  errorData={errorData}
                />)
                }
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
                  onChange={(e:any) => handleSingleChange('tags_payload', e)}
                  defaultValue={fromData.tags_payload || []}
                />
              </div>
            </div>
          </div>

          {/* Product Control */}
          <ProductControl productConfig={productConfig} />
          {/* Product Control End */}


        </div>


        <div className="flex flex-col-reverse justify-center gap-5 mb-5 md:hidden">
          <button className="text-[#0CAF60] border border-[#0CAF60] px-10 py-3 rounded-xl font-nunito font-[900] hover:bg-slate-200">
            Discard
          </button>
          <button
            className="text-white bg-[#0CAF60] hover:bg-[#098d4d] px-10 py-3 rounded-xl font-nunito font-[900] disabled:bg-[#0caf609a]"
            disabled
          >
            Save
          </button>
        </div>
      </div>
    </section>
  );
}

export default EditProduct;
