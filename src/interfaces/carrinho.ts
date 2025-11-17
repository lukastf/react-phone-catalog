export interface ProductType {
  id: number;
  name: string;
  price: number;
}

export interface CartItemType extends ProductType {
  quantity: number;
}

export const initialProducts: ProductType[] = [
  { id: 1, name: "Camiseta Tailwind CSS", price: 59.9 },
  { id: 2, name: "Caneca ReactJS", price: 29.9 },
  { id: 3, name: "Livro TypeScript", price: 89.9 },
];
