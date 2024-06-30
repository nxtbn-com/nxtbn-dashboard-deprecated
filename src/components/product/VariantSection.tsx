import React, { ChangeEvent } from "react";
import { NXAlertCircle } from "../../icons";
import SelectStyled from "../Select";

interface VariantSectionProps {
  productConfig: any;
  onVariantChange: any;
}

const VariantSection: React.FC<VariantSectionProps> = ({ productConfig, onVariantChange }) => {
  return (
    <div className="bg-white p-5 rounded-md mt-5">
      <div className="flex items-center gap-3">
        <h1 className="font-nunito font-[900] text-2xl">{productConfig.has_variant ? `Variant` : `Info`}</h1>
        <NXAlertCircle className="text-base-300" />
      </div>
      <div className="flex items-center gap-5 mt-5">
        <div className="w-full">
          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="text"
            placeholder="$0.00"
            className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60] placeholder:text-black border-[2px] border-dashed"
          />
        </div>
        <div className="w-full">
          <label htmlFor="compare-price">SKU</label>
          <input
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
            id="cost_per_item"
            type="text"
            placeholder="$0.00"
            className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60] placeholder:text-black border-[2px] border-dashed"
          />
        </div>
        <div className="w-full">
          <label htmlFor="profit">Profit</label>
          <input
            id="profit"
            type="text"
            placeholder="--"
            className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60] placeholder:text-black border-[2px] border-dashed"
          />
        </div>
        <div className="w-full">
          <label htmlFor="Stock">Stock</label>
          <input
            id="Stock"
            type="number"
            placeholder="--"
            className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60] placeholder:text-black border-[2px] border-dashed"
          />
        </div>
      </div>
      <div className="flex items-center gap-5 mt-5">
        <div className="w-full">
          <label htmlFor="profit">Weight</label>
          <SelectStyled />
        </div>
        <div className="w-full">
          <label htmlFor="color-name">Color Name</label>
          <SelectStyled />
        </div>
        <div className="w-full">
          <label htmlFor="color">Color</label>
          <input
            id="color"
            type="color"
          />
        </div>
      </div>
      <button className="font-nunito font-[800] flex items-center gap-1 mt-3">
        + Add Meta
      </button>
    </div>
  );
};

export default VariantSection;
