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
    ]
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

const getEnumItem = <T extends { id: string | number, name: string }>(arr: T[], val: string | number): { value: string, label: string } | undefined => {
  const foundItem = arr?.find(({ id }) => id === val);
  if (foundItem) {
    const obj = {
      value: String(foundItem.id), // Ensure value is a string
      label: foundItem.name
    };
    return obj
  }
  return undefined;
};



const getEnumList = <T extends { value: string | number }>(baseArr: T[], arr: (string | number)[]): T[] => {
  const data = baseArr.filter(el => {
      return arr?.some(f => f === el.value);
  });
  return data;
};



export { makeCategoryEnumFriendly, makeEnumFriendly, getEnumItem, getEnumList };

export default enumChoice;