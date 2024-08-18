interface CategoryinputOption {
    id: number;
    name: string;
    description?: string | null;
    children?: CategoryinputOption[];
}
  
interface CategoryOption {
    value: number;
    label: string;
    children?: CategoryOption[];
};


type Option = {
  value: string;
  label: string;
};

const enumChoice = {
    sex: [
        { value: "MALE", label: "Male"},
        { value: "FEMALE", label: "Female"}
    ],
    stockStatus: [
      { value: "IN_STOCK", label: "In stock"},
      { value: "OUT_OF_STOCK", label: "Out of stock"}
    ],
    weightUnits: [
      { value: "KG", label: "Kilogram"},
      { value: "GRAM", label: "Gram"},
      { value: "OZ", label: "Ounce"},
      { value: "LB", label: "Pound"},
      { value: "TON", label: "Ton"}
    ],
    heightUnits: [
      { value: "CM", label: "Centimeter"},
      { value: "M", label: "Meter"},
      { value: "INCH", label: "Inch"},
      { value: "FT", label: "Feet"}
    ],
    publishableStatus: [
      {value: "DRAFT", label: "Draft"},
      { value: "PUBLISHED", label: "Published"},
      { value: "ARCHIVED", label: "Archived"}
    ],
}
  


function makeCategoryEnumFriendly(data: CategoryinputOption[]): CategoryOption[] {
    return data.map(item => {
      let transformedItem: CategoryOption = {
        value: item.id,
        label: item.name,
      };
      if (item.children && item.children.length > 0) {
        transformedItem.children = makeCategoryEnumFriendly(item.children);
      }
      return transformedItem;
    });
};

function makeEnumFriendly(data: any[]): Option[] {
  return data.map(item => ({
      value: item.id,
      label: item.name
  }));
};

function makeTagEnumFriendly(data: any[]): Option[] {
  return data.map(item => ({
      value: item.name,
      label: item.name
  }));
};

function makeColorEnumFriendly(data: any[]): Option[] {
  return data.map(item => ({
      value: item.code,
      label: item.name
  }));
};

const getColorEnumItem = (arr: any[], val: string): { value: string, label: string } | undefined => {
  const foundItem = arr?.find(item => item.code === val);

  if (foundItem) {
    return {
      value: foundItem.code,
      label: foundItem.name
    };
  }

  return undefined;
};



const getEnumItem = <T extends { id?: string | number, value?: string | number, name?: string, label?: string }>(
  arr: T[],
  val: string | number
): { value: string, label: string } | undefined => {

  if (val === undefined) {
    // If val is undefined, return undefined
    return undefined;
  }
  const foundItem = arr?.find(item => item.id === val || item.value === val);

  if (foundItem) {
    const obj = {
      value: String(foundItem.id ?? foundItem.value), // Use id if present, otherwise use value
      label: foundItem.name ?? foundItem.label ?? "" // Use name if present, otherwise use label, or default to empty string
    };
    return obj;
  }

  return undefined;
};




const transformSingleEnum = (data: any) => {
  return {
    value: data.id,
    label: data.name
  };
}


const getEnumList = <T extends { value: string | number }>(baseArr: T[], arr: (string | number)[]): T[] => {
  const data = baseArr.filter(el => {
      return arr?.some(f => f === el.value);
  });
  return data;
};



export { makeCategoryEnumFriendly, makeEnumFriendly, getEnumItem, getEnumList, transformSingleEnum, makeColorEnumFriendly, getColorEnumItem, makeTagEnumFriendly };

export default enumChoice;