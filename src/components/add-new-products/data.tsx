// data.ts

export interface TagOption {
    readonly value: string;
    readonly label: string;
    // readonly isFixed?: boolean;
    // readonly isDisabled?: boolean;
  }
  
  export const tagOptions: TagOption[] = [
    { value: 'fashion', label: 'Fashion'},
    { value: 'blue', label: 'Blue'},
    { value: 'purple', label: 'Purple'},
    { value: 'red', label: 'Red'},
    { value: 'orange', label: 'Orange'},
    { value: 'yellow', label: 'Yellow'},
    { value: 'green', label: 'Green'},
    { value: 'forest', label: 'Forest'},
    { value: 'slate', label: 'Slate'},
    { value: 'silver', label: 'Silver'},
  ];