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
}


export { makeCategoryEnumFriendly, makeEnumFriendly };

export default enumChoice;