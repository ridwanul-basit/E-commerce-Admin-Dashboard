// ProductList.jsx
import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Apple iPad Air 2019 (3GB RAM, 128GB ROM, 8MP Main Camera)",
    category: "Mobiles & Tablets",
    price: 562.5,
    oldPrice: null,
    rating: 4,
    reviews: 14,
    stock: "Available",
    image:
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&q=80",
    specs: ["3GB RAM", "128GB ROM", "Apple A12 Bionic (7 nm)", "iOS 12.1.3"],
  },
  {
    id: 2,
    name: "Apple iPhone XS Max (4GB RAM, 512GB ROM, 12MP Main Camera)",
    category: "Mobiles & Tablets",
    price: 1050,
    rating: 5,
    reviews: 13,
    stock: "Available",
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&q=80",
    specs: ["4GB RAM", "512GB Internal Storage", "12MP Main Camera", "3174 mAh Li-Ion Battery"],
  },
  {
    id: 3,
    name: "Apple MacBook Pro (15” Retina, Touch Bar, 2.2GHz, 16GB RAM, 256GB SSD) - Space Gray (Latest Model)",
    category: "Computers & Accessories",
    price: 7199,
    rating: 5,
    reviews: 20,
    stock: "Out of Stock",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80",
    specs: ["16GB RAM", "256GB SSD Hard Drive", "Intel Core i7", "Space Gray"],
  },
  {
    id: 4,
    name: "Apple iMac Pro (27-inch with Retina 5K Display, 3.0GHz 10-core Intel Xeon W, 1TB SSD)",
    category: "Computers & Accessories",
    price: 1199.5,
    rating: 4,
    reviews: 8,
    stock: "Available",
    image:
      "	https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80",
    specs: ["16GB RAM", "1TB SSD", "10-core Intel Xeon", "Mouse"],
  },
  {
    id: 5,
    name: "Logitech G305 Gaming Mouse",
    category: "Computer & Accessories",
    price: 47.75,
    rating: 3,
    reviews: 6,
    stock: "Available",
    image:
      "	https://frlive.prium.me/assets/6-DIYsy-Ql.jpg",
    specs: [],
  },
  {
    id: 6,
    name: "Apple Watch Series 4 44mm GPS Only",
    category: "Watches & Accessories",
    price: 360,
    rating: 5,
    reviews: 14,
    stock: "Available",
    image:
      "https://frlive.prium.me/assets/5-CJ6zSCGx.jpg",
    specs: [],
  },
];

const ProductList = () => {
  return (
    <div className="max-w-6xl rounded-2xl bg-white mx-auto p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-2xl text-gray-600">
          Showing 1–6 of {products.length} Products
        </p>
        <select className="border rounded-md px-2 py-1 text-sm">
          <option>Sort by</option>
          <option>Price (Low to High)</option>
          <option>Price (High to Low)</option>
        </select>
      </div>

      {/* Product Cards */}
      <div className="space-y-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col md:flex-row  rounded-lg p-4 shadow-sm"
          >
            {/* Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full md:w-48 h-40 object-cover rounded-lg"
            />

            {/* Details */}
            <div className="flex-1 md:ml-6 mt-3 md:mt-0">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.category}</p>

              {/* Specs */}
              {product.specs.length > 0 && (
                <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
                  {product.specs.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>
              )}

            
            </div>
            <div>
                {/* Price */}
              <div className="mt-3">
                <span className="text-red-500 font-bold text-xl">
                  ${product.price}
                </span>
                {product.oldPrice && (
                  <span className="ml-2 text-gray-400 line-through">
                    ${product.oldPrice}
                  </span>
                )}
              </div>

              {/* Ratings */}
              <div className="flex items-center mt-2 text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) =>
                  i < product.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                )}
                <span className="ml-2 text-sm text-gray-600">
                  ({product.reviews})
                </span>
              </div>

              {/* Stock */}
              <p
                className={`text-sm mt-1 ${
                  product.stock === "Available"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                Stock: {product.stock}
              </p>

              {/* Actions */}
              <div className="flex items-center gap-3 mt-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  Add to Cart
                </button>
                <button className="px-4 py-2 border rounded-md hover:bg-gray-100">
                  ❤️ Favourite
                </button>
              </div>
            </div>
          </div>
        
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-2">
        <button className="px-3 py-1 border rounded-md">1</button>
        <button className="px-3 py-1 border rounded-md">2</button>
        <button className="px-3 py-1 border rounded-md">3</button>
      </div>
    </div>
  );
};

export default ProductList;
