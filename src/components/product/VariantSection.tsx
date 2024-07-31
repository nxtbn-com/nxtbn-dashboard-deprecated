import React, { useState } from "react";
import { NXAlertCircle, NXDelete } from "../../icons";
import SelectStyled from "../Select";
import { makeEnumFriendly } from "../../enum";

import { InputField } from "../../components/common";

interface VariantSectionProps {
  productConfig: any;
  serial: number;
  colors: any[];
  deleteVariant: any;
  onChange: any;
  errorData?: any;
  name?: string;
}

const VariantSection: React.FC<VariantSectionProps> = ({
  productConfig,
  serial,
  colors,
  deleteVariant,
  errorData,
  onChange,
  name,
}) => {
  const [metaSection, setMetaSection] = useState<number>(0);
  const [variantDate, setVariantDate] = useState<any>({});

  // check if variantly completely missing
  const isVariantMissingError = errorData?.variants_payload && Array.isArray(errorData?.variants_payload) && typeof errorData?.variants_payload[0] === 'string';

  const addNewMetasection = (event: any) => {
    event.preventDefault();
    setMetaSection(prevVariantSection => prevVariantSection + 1);
  };


  const [selectedColor, setSelectedColor] = useState<any>({colorName: '', colorCode: '#ffffff'})

  const colorNameSelect = (value: any, actionMeta: any) => {
    setSelectedColor({colorName: value.label, colorCode: colors.filter((color)=>color.name === value.label)[0].code})
  }

  const colorCodeChange = (e:any) => {
    setSelectedColor({colorCode: e.target.value})
  };

  const onChangeHandler = (e: any) => {
    setVariantDate({...variantDate, [e.target.name]: e.target.value})
    onChange({...variantDate, [e.target.name]: e.target.value}, serial - 1)
  }


  const style = {
    control: (provided:any, state:any) => ({
      ...provided,
      padding: '6px',
      borderRadius: '10px',
    }),
  
  }
  

  return (
    <div className={`p-5 border-[1px] border-solid rounded-md relative ${isVariantMissingError ? 'border-red-500' : 'border-base-200'}`}>

      {productConfig.has_variant && (
        <button onClick={deleteVariant}  className={`absolute top-3 right-3 bg-red-500 px-2 py-2 rounded`}> <NXDelete className="text-white" /> </button>
      )}
      
      <div className="flex items-center gap-3">
        <h1 className="font-nunito font-[900] text-2xl">{productConfig.has_variant ? `Variant - ${serial}` : `Info`}</h1>
        <NXAlertCircle className="text-base-300" />
      </div>

      {isVariantMissingError ? <p className="text-red-500">* Product Information Required</p>  : ''}
      

      {productConfig.has_variant && (
      <div className="flex items-center gap-5 mt-5">
        <div className="w-full">
          <label htmlFor="name">Variant Name</label>
          <input
            onChange={onChangeHandler}
            id="name"
            name="name"
            type="text"
            placeholder="Variant Name"
            className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60] placeholder:text-black border-[2px] border-dashed"
          />
        </div>
      </div>)}

      <div className="flex items-center gap-5 mt-5">
        <div className="w-full">
          <label htmlFor="price">Price</label>
          <InputField
            errorData={errorData?.variants_payload ? errorData?.variants_payload[serial - 1] : {}}
            onChange={onChangeHandler}
            name="price"
            id="price"
            type="text"
            placeholder="$0.00"
            className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60] placeholder:text-black border-[2px] border-dashed"
          />
        </div>
        <div className="w-full">
          <label htmlFor="sku-price">SKU</label>
          <InputField
            errorData={errorData?.variants_payload ? errorData?.variants_payload[serial - 1] : {}}
            onChange={onChangeHandler}
            id="sku-price"
            name="sku"
            type="text"
            placeholder="SKU01"
            className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60] placeholder:text-black border-[2px] border-dashed"
          />
        </div>
      </div>
      <div className="flex items-center gap-5 mt-5">
        <div className="w-full">
          <label htmlFor="cost_per_item">Cost per item</label>
          <InputField
            errorData={errorData?.variants_payload ? errorData?.variants_payload[serial - 1] : {}}
            onChange={onChangeHandler}
            id="cost_per_item"
            name="cost_per_unit"
            type="text"
            placeholder="$0.00"
            className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60] placeholder:text-black border-[2px] border-dashed"
          />
        </div>
        <div className="w-full">
          <label htmlFor="profit">Profit</label>
          <InputField
            errorData={errorData?.variants_payload ? errorData?.variants_payload[serial - 1] : {}}
            onChange={onChangeHandler}
            id="profit"
            name="profit"
            type="text"
            placeholder="--"
            className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60] placeholder:text-black border-[2px] border-dashed"
          />
        </div>

        {productConfig.track_stock && (
          <div className="w-full">
            <label htmlFor="Stock">Stock</label>
            <InputField
              errorData={errorData?.variants_payload ? errorData?.variants_payload[serial - 1] : {}}
              onChange={onChangeHandler}
              id="Stock"
              name="Stock"
              type="number"
              placeholder="--"
              className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60] placeholder:text-black border-[2px] border-dashed"
            />
          </div>
        )}
      
      </div>
      <div className="flex items-center gap-5 mt-5">
        {productConfig.physical_product && (
          <>
          <div className="w-full flex flex-col gap-3">
            <label htmlFor="profit">Weight</label>
            <SelectStyled customStyles={style}/>
          </div>
          <div className="w-full">
            <label htmlFor="profit">Value</label>
            <input
              onChange={onChangeHandler}
              id="Value"
              name="margin"
              type="number"
              placeholder="--"
              className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60] placeholder:text-black border-[2px] border-dashed"
            />
          </div>
          </>
        )}
        
        <div className="w-full flex flex-col gap-3 ">
          <label htmlFor="color-name">Color Name</label>
          <SelectStyled options={makeEnumFriendly(colors)} onChange={colorNameSelect} customStyles={style}/>
        </div>
        <div className="w-full flex flex-col justify-start gap-3">
          <label htmlFor="color">Color</label>
          <input
            id="color"
            type="color"
            value={selectedColor.colorCode}
            onChange={colorCodeChange}
            style={{height:50, width:"100%", borderRadius: 10}}
          />
        </div>
      </div>




      {metaSection > 0 && (
        <div className="mt-5">
          <h3 className="font-nunito font-[900]">Metadata</h3>
          
          <div className="flex items-center gap-5 mt-3">
            <div className="w-full font-nunito font-[900]">Name</div>
            <div className="w-full font-nunito font-[900]">Value</div>
          </div>
        </div>
      )}
     
     {Array.from({ length: metaSection }, (_, index) => (
        <div key={index} className="flex items-center gap-5 p-1">
          <div className="w-full">
            <input
              onChange={onChangeHandler}
              type="text"
              placeholder="eg. Capacity"
              className="w-full px-5 py-3 bg-secondary-50 rounded-xl font-nunito outline-[#0CAF60] placeholder:text-black border-[2px] border-dashed"
            />
          </div>
          <div className="w-full">
            <input
              onChange={onChangeHandler}
              type="text"
              placeholder="--"
              className="w-full px-5 py-3 bg-secondary-50 rounded-xl font-nunito outline-[#0CAF60] placeholder:text-black border-[2px] border-dashed"
            />
          </div>
        </div>
      ))}      

      <button onClick={addNewMetasection} className="font-nunito font-[800] flex items-center gap-1 mt-6">
        + Add Metadata
      </button>
    </div>
  );
};

export default VariantSection;
