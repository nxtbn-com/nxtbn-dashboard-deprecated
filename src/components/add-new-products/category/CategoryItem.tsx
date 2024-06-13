// CategoryItem.tsx
import React from "react";
import { Category } from "./types";
import { NXRightArrow } from "../../../icons";

interface CategoryItemProps {
  category: Category;
  onClick: (category: Category) => void;
  setCategoryName: any;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category, onClick, setCategoryName }) => {

  const handleCategory = (e:any) => {
    console.log(e.target.innerText)
    setCategoryName(e.target.innerText)
  }

  return (
    <li
      
      className="flex justify-between items-center p-3 cursor-pointer border-b border-gray-200"
    >
      {category.subcategories.length > 0 ? (
        <>
          <span className="hover:bg-base-50 hover:text-base-300" onClick={handleCategory}>{category.name}</span>
          <span className="transform transition-transform hover:text-base-300" onClick={() => onClick(category)}>
            <NXRightArrow className="h-[22px]" />
          </span>
        </>
      ) : (
        <span onClick={handleCategory} className="w-full hover:text-base-300">{category.name}</span>
      )}
    </li>
  );
};

export default CategoryItem;
