import React from "react";
import { initialProducts } from "../interfaces/carrinho";
import type { ProductType } from "../interfaces/carrinho";
import { useCart } from "../contexts/UseCart";

const ProductCard: React.FC<{ product: ProductType }> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">R$ {product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

const ProductList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {initialProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
