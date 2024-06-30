import React, { useState } from "react";
import { NXAlertCircle, NXDelete } from "../../icons";
import SelectStyled from "../Select";
import { makeColorEnum } from "../../enum";

interface VariantSectionProps {
  productConfig: any;
  onVariantChange: any;
  serial: number;
  colors: any[];
  deleteVariant: any;
}

const VariantSection: React.FC<VariantSectionProps> = ({
  productConfig,
  onVariantChange,
  serial,
  colors,
  deleteVariant
}) => {
  const [metaSection, setMetaSection] = useState<number>(0);

  const addNewMetasection = (event: any) => {
    event.preventDefault();
    setMetaSection(prevVariantSection => prevVariantSection + 1);
  };
  

  return (
    <div className="p-5 border-[1px] border-solid border-base-200 relative">

      {productConfig.has_variant && (
        <button onClick={deleteVariant}  className="absolute top-3 right-3 bg-red-500 px-2 py-2 rounded"> <NXDelete className="text-white" /> </button>
      )}
      
      <div className="flex items-center gap-3">
        <h1 className="font-nunito font-[900] text-2xl">{productConfig.has_variant ? `Variant - ${serial}` : `Info`}</h1>
        <NXAlertCircle className="text-base-300" />
      </div>
      <div className="flex items-center gap-5 mt-5">
        <div className="w-full">
          <label htmlFor="price">Price</label>
          <input
            onChange={onVariantChange}
            id="price"
            type="text"
            placeholder="$0.00"
            className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60] placeholder:text-black border-[2px] border-dashed"
          />
        </div>
        <div className="w-full">
          <label htmlFor="compare-price">SKU</label>
          <input
            onChange={onVariantChange}
            id="compare-price"
            type="text"
            placeholder="SKU01"
            className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60] placeholder:text-black border-[2px] border-dashed"
          />
        </div>
      </div>
      <div className="flex items-center gap-5 mt-5">
        <div className="w-full">
          <label htmlFor="cost_per_item">Cost per item</label>
          <input
            onChange={onVariantChange}
            id="cost_per_item"
            type="text"
            placeholder="$0.00"
            className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60] placeholder:text-black border-[2px] border-dashed"
          />
        </div>
        <div className="w-full">
          <label htmlFor="profit">Profit</label>
          <input
            onChange={onVariantChange}
            id="profit"
            type="text"
            placeholder="--"
            className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60] placeholder:text-black border-[2px] border-dashed"
          />
        </div>

        {productConfig.track_stock && (
          <div className="w-full">
            <label htmlFor="Stock">Stock</label>
            <input
              onChange={onVariantChange}
              id="Stock"
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
          <div className="w-full">
            <label htmlFor="profit">Weight</label>
            <SelectStyled />
          </div>
          <div className="w-full">
            <label htmlFor="profit">Value</label>
            <input
              onChange={onVariantChange}
              id="Value"
              type="number"
              placeholder="--"
              className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60] placeholder:text-black border-[2px] border-dashed"
            />
          </div>
          </>
        )}
        
        <div className="w-full">
          <label htmlFor="color-name">Color Name</label>
          <SelectStyled options={makeColorEnum(colors)} />
        </div>
        <div className="w-full">
          <label htmlFor="color">Color</label>
          <input
            id="color"
            type="color"
          />
        </div>
      </div>


      {metaSection > 0 && (
         <div className="flex items-center mt-3">
         <h3 className="font-nunito font-[900]">Metadata</h3>
         <NXAlertCircle className="text-base-300" />
       </div>
      )}
     
      {Array.from({ length: metaSection }, (_, index) => (
          <div className="flex items-center gap-5 outline-[#0CAF60] border-[1px] border-double p-5">
            <div className="w-full">
              <label htmlFor="cost_per_item">Name</label>
              <input
                onChange={onVariantChange}
                id="cost_per_item"
                type="text"
                placeholder="eg. Capacity"
                className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60] placeholder:text-black border-[2px] border-dashed"
              />
            </div>
            <div className="w-full">
              <label htmlFor="profit">Value</label>
              <input
                onChange={onVariantChange}
                id="profit"
                type="text"
                placeholder="--"
                className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60] placeholder:text-black border-[2px] border-dashed"
              />
            </div>
          </div>
      ))}

      

      <button onClick={addNewMetasection} className="font-nunito font-[800] flex items-center gap-1 mt-3">
        + Add Metadata
      </button>
    </div>
  );
};

export default VariantSection;
