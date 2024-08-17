import React from 'react';
import { boolIndicator } from "../../utils";

import enumChoice, { getEnumItem } from "../../enum";


interface ProductConfig {
  charge_tax: boolean;
  track_stock: boolean;
  has_variant: boolean;
  physical_product: boolean;
  weight_unit?: string; // Adjust this type as needed
}

interface ProductControlProps {
  productConfig: ProductConfig;
}

const ProductControl: React.FC<ProductControlProps> = ({ productConfig }) => {
  return (
    <div className="bg-white p-5 rounded-md mt-5">
      <div>
        <h1 className="font-nunito font-[900] text-2xl">Product Control</h1>
      </div>

      <ul className="my-5 space-y-4">
        <li className="flex items-center gap-3">
          {boolIndicator(productConfig.charge_tax)}
          <span className="font-nunito">Charge tax</span>
        </li>

        <li className="flex items-center gap-3">
          {boolIndicator(productConfig.track_stock)}
          <span className="font-nunito">Track Stock</span>
        </li>

        <li className="flex items-center gap-3">
          {boolIndicator(productConfig.has_variant)}
          <span className="font-nunito">Has Variant</span>
        </li>

        <li className="flex items-center gap-3">
          {boolIndicator(productConfig.physical_product)}
          <span className="font-nunito">Physical Product</span>
        </li>

        {productConfig.physical_product && (
          <li>
            Weight Value:{' '}
            <span className="font-nunito">
              {getEnumItem(enumChoice.weightUnits, productConfig?.weight_unit || '')?.label}
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ProductControl;
