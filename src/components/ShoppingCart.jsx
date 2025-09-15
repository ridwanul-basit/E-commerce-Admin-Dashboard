import React, { useState } from "react";

const ShoppingCart = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Apple iPad Air 2019 (3GB RAM, 128GB ROM, 8MP Main Camera)",
      price: 2250,
      quantity: 3,
      img: "https://frlive.prium.me/assets/4-CgsCyphl.jpg", // replace with real img
    },
    {
      id: 2,
      name: "Apple iPhone XS Max (4GB RAM, 512GB ROM, 12MP Main Camera)",
      price: 3150,
      quantity: 3,
      img: "https://frlive.prium.me/assets/3-BA0_kAH4.jpg",
    },
    {
      id: 3,
      name: "Apple MacBook Pro (15\" Retina, Touch Bar, 2.2GHz 6-Core Intel Core i7, 16GB RAM, 256GB SSD) - Space Gray (Latest Model)",
      price: 21597,
      quantity: 3,
      img: "https://frlive.prium.me/assets/1-idhNlro8.jpg",
    },
  ]);

  const [coupon, setCoupon] = useState("");

  // Quantity Update
  const updateQuantity = (id, type) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "inc"
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  };

  // Remove Item
  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Total
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-5xl mx-auto bg-white  shadow-md rounded-lg py-6">
     <div className="flex justify-between px-8">
         <h2 className="text-xl font-semibold mb-4  ">
        Shopping Cart ({items.length} Items)
      </h2>
      <div>
        <button className="border border-gray-200 text-gray-400 px-4 py-1 rounded mr-4">Continue Shopping</button>
            <button className="bg-blue-600 text-white px-5 py-1 rounded hover:bg-blue-700">
              Checkout
            </button>
      </div>
     </div>

      <table className="w-full text-left">
        <thead className="bg-[#EDF2F9] ">
          <tr className="">
            <th className="py-2 px-8">Name</th>
            <th className="py-2 text-center px-8">Quantity</th>
            <th className="py-2 text-right px-8">Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b border-gray-200">
              <td className="py-3 flex items-center gap-3">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded px-8"
                />
                <div className="w-2/3">
                  <p className="text-lg text-gray-600 font-medium">{item.name}</p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 text-sm mt-1"
                  >
                    Remove
                  </button>
                </div>
              </td>
              <td className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, "dec")}
                    className="px-2 py-1 border border-gray-200 rounded"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 border border-gray-200 rounded">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, "inc")}
                    className="px-2 py-1 border border-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="text-right font-semibold text-gray-400  px-8">
                ${item.price * item.quantity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer */}
      <div className="flex justify-end items-center mt-6">

        <div className="">
            <div className="flex justify-end gap-14 mx-8 mb-4">
            <p className="text-gray-600 font-bold">
            Total 
          </p>
          <p className="text-gray-600 font-bold">({items.length} items){" "}</p>
          <span className="text-gray-600 font-bold">${total}</span>
            </div>
          <div className="flex justify-end gap-3 mt-4 px-8">
             <input
            type="text"
            placeholder="Coupon Code"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            className="border border-gray-200 rounded px-3 py-1"
          />
          <button className="bg-gray-200 text-gray-400 px-4 py-1 rounded hover:bg-gray-300">
            Apply
          </button>
            <button className="bg-blue-600 text-white px-5 py-1 rounded hover:bg-blue-700">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
