import React, { useState } from "react";

const AddProduct = () => {
  const [specs, setSpecs] = useState([
    { label: "Processor", value: "2.3GHz quad core Intel Core i5" },
    { label: "Memory", value: "8GB of 2133MHz LPDDR3 onboard memory" },
    { label: "Brand name", value: "Apple" },
  ]);
  const [newSpec, setNewSpec] = useState({ label: "", value: "" });

  const addSpec = () => {
    if (newSpec.label && newSpec.value) {
      setSpecs([...specs, newSpec]);
      setNewSpec({ label: "", value: "" });
    }
  };

  const removeSpec = (index) => {
    setSpecs(specs.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6  min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6 border border-gray-200">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Add a product</h2>
          <div className="space-x-2">
            <button className="px-4 py-2 border border-gray-200 rounded-lg">
              Discard
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              Add product
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Left side */}
          <div className="col-span-2 space-y-6">
            {/* Basic Information */}
            <div>
              <h3 className="font-medium mb-2">Basic Information</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Product name"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="Manufacturer Name"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="Product identification No"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="Product Summary"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2"
                />
              </div>
            </div>

            {/* Add Images */}
            <div>
              <h3 className="font-medium mb-2">Add Images</h3>
              <div className="border-2 border-dashed border-gray-200 rounded-lg h-32 flex items-center justify-center text-gray-500 cursor-pointer">
                Drag your image here or{" "}
                <span className="text-blue-600">Browse</span>
              </div>
            </div>

            {/* Details */}
            <div>
              <h3 className="font-medium mb-2">Details</h3>
              <textarea
                rows="4"
                placeholder="Product description"
                className="w-full border border-gray-200 rounded-lg px-3 py-2"
              ></textarea>
              <div className="grid grid-cols-2 gap-4 mt-3">
                <select className="border border-gray-200 rounded-lg px-3 py-2">
                  <option>Import Status</option>
                </select>
                <select className="border border-gray-200 rounded-lg px-3 py-2">
                  <option>Country of Origin</option>
                </select>
              </div>
              <input
                type="date"
                className="w-full mt-3 border border-gray-200 rounded-lg px-3 py-2"
              />
              <input
                type="text"
                placeholder="Warranty Length"
                className="w-full mt-3 border border-gray-200 rounded-lg px-3 py-2"
              />
              <input
                type="text"
                placeholder="Warranty Policy"
                className="w-full mt-3 border border-gray-200 rounded-lg px-3 py-2"
              />
            </div>

            {/* Specifications */}
            <div>
              <h3 className="font-medium mb-2">Specifications</h3>
              <div className="space-y-2">
                {specs.map((s, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center border border-gray-200 rounded-lg px-3 py-2"
                  >
                    <span>
                      <b>{s.label}:</b> {s.value}
                    </span>
                    <button
                      onClick={() => removeSpec(i)}
                      className="text-red-500 font-bold"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mt-3">
                <input
                  type="text"
                  placeholder="Label"
                  value={newSpec.label}
                  onChange={(e) =>
                    setNewSpec({ ...newSpec, label: e.target.value })
                  }
                  className="flex-1 border border-gray-200 rounded-lg px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="Property"
                  value={newSpec.value}
                  onChange={(e) =>
                    setNewSpec({ ...newSpec, value: e.target.value })
                  }
                  className="flex-1 border border-gray-200 rounded-lg px-3 py-2"
                />
                <button
                  onClick={addSpec}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                >
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="space-y-6">
            {/* Type */}
            <div>
              <h3 className="font-medium mb-2">Type</h3>
              <select className="w-full border border-gray-200 rounded-lg px-3 py-2 mb-2">
                <option>Select category</option>
              </select>
              <select className="w-full border border-gray-200 rounded-lg px-3 py-2 mb-2">
                <option>Select sub-category</option>
              </select>
              <input
                type="text"
                placeholder="Tags"
                className="w-full border border-gray-200 rounded-lg px-3 py-2"
              />
            </div>

            {/* Pricing */}
            <div>
              <h3 className="font-medium mb-2">Pricing</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Base Price"
                  className="flex-1 border border-gray-200 rounded-lg px-3 py-2"
                />
                <select className="border border-gray-200 rounded-lg px-3 py-2">
                  <option>USD</option>
                </select>
              </div>
              <input
                type="text"
                placeholder="Discount in percentage"
                className="w-full mt-3 border border-gray-200 rounded-lg px-3 py-2"
              />
              <input
                type="text"
                placeholder="Final Price"
                className="w-full mt-3 border border-gray-200 rounded-lg px-3 py-2"
              />
            </div>

            {/* Shipping */}
            <div>
              <h3 className="font-medium mb-2">Shipping</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="radio" name="shipping" defaultChecked /> Delivered
                  by vendor (you)
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="shipping" /> Delivered by FALCON{" "}
                  <span className="text-xs text-orange-500">(recommended)</span>
                </label>
              </div>
            </div>

            {/* Stock Status */}
            <div>
              <h3 className="font-medium mb-2">Stock status</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="radio" name="stock" defaultChecked /> In stock
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="stock" /> Unavailable
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="stock" /> To be announced
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-200">
          <span className="text-gray-500">You’re almost done</span>
          <div className="space-x-2">
            <button className="px-4 py-2 border border-gray-200 rounded-lg">
              Discard
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              Add product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
