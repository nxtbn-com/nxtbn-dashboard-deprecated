interface inputOption {
    id: number;
    name: string;
    description?: string | null;
    children?: inputOption[];
  }
  
  interface Option {
    value: number;
    label: string;
    children?: Option[];
}

const enumChoice = {
    sex: [
        { value: "MALE", label: "Male"},
        { value: "FEMALE", label: "Female"}
    ]
}
  


function makeCategoryEnumFriendly(data: inputOption[]): Option[] {
    return data.map(item => {
      let transformedItem: Option = {
        value: item.id,
        label: item.name,
      };
      if (item.children && item.children.length > 0) {
        transformedItem.children = makeCategoryEnumFriendly(item.children);
      }
      return transformedItem;
    });
}


export { makeCategoryEnumFriendly };

export default enumChoice;