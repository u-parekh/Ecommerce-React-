import { useContext } from "react";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, increase, decrease, remove, total } =
    useContext(CartContext);

  return (
    <>
      <Navbar />
      <div className="p-6">
        {cart.length === 0 && <p>Your cart is empty.</p>}

        {cart.map(item => (
          <div
            key={item.id}
            className="flex justify-between bg-white p-4 mb-4 shadow"
          >
            <div>
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </div>
            <div className="space-x-2">
              <button onClick={() => decrease(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increase(item.id)}>+</button>
              <button
                onClick={() => remove(item.id)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
      </div>
    </>
  );
}
