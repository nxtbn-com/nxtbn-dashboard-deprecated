// types.ts
export interface Category {
    id: number;
    name: string;
    description: string;
    subcategories: Category[];
}
