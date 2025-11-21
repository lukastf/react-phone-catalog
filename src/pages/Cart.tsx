import React from "react";

import { useCart } from "../contexts/UseCart";
//import ProductList from "../components/ProductList";

const CartSummary: React.FC = () => {
  const { cart, removeFromCart, cartTotal, addToCart, subtractFromCart } =
    useCart();

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Seu Carrinho de Compras</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul className="mb-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center mb-2"
              >
                <p className="w-30 lg:w-md">{item.name}</p>
                <div className="w-40 lg:w-xs">
                  <button
                    onClick={() => addToCart(item)}
                    className="text-blue-500 hover:text-blue-700 text-sm px-4 py-2 border border-black cursor-pointer"
                    title="Remover item"
                  >
                    +
                  </button>
                  <span className="mx-1">(Qtd: {item.quantity})</span>
                  <button
                    onClick={() => subtractFromCart(item)}
                    className="text-blue-500 hover:text-blue-700 text-sm px-4 py-2 border border-black cursor-pointer"
                    title="Remover item"
                  >
                    -
                  </button>
                </div>
                <div className="w-30 lg:w-xs">
                  <span className="font-semibold mr-3">
                    $ {(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                    title="Remover item"
                  >
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-xl font-bold">
            Total: $ {cartTotal.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

function Cart() {
  return (
    // Toda a aplicação precisa estar dentro do Provedor

    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Loja Online</h1>

      {/*<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">*/}
      <div className="flex justify-center gap-4">
        <CartSummary />
        {/*<div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Produtos Disponíveis</h2>
          <ProductList />
        </div>
        <div className="lg:col-span-1">
          <CartSummary />
        </div>*/}
      </div>
    </div>
  );
}

export default Cart;

/*function Cart() {
  return (
    <>
      <h1>Cart</h1>
    </>
  );
}

export default Cart;*/
