// Invoice.jsx
import React from "react";

const Invoice = () => {
  return (
    <div className="">
      <div className="max-w-5xl mx-auto  shadow-md rounded-lg p-6 bg-white mb-10">
        {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Order #AD20294</h1>
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded text-gray-600 text-sm hover:bg-gray-100">
            ⬇ Download (.pdf)
          </button>
          <button className="px-3 py-1 border rounded text-gray-600 text-sm hover:bg-gray-100">
            🖨 Print
          </button>
          <button className="px-3 py-1 border rounded text-green-600 bg-green-50 hover:bg-green-100 text-sm">
            💲 Receive Payment
          </button>
        </div>
      </div>

      </div>
      <div className="max-w-5xl mx-auto  shadow-md rounded-lg p-6 bg-white ">
        {/* Top Info */}
      <div className="flex justify-between border-b pb-6 mb-6">
        {/* Logo + Bill To */}
        <div>
          <img
            src="https://frlive.prium.me/assets/logo-invoice-CpU2y6Qw.png"
            alt="Logo"
            className="mb-4 w-40 h-40"
          />
          <p className="text-gray-700 font-semibold">Invoice to</p>
          <h2 className="text-lg font-semibold">Antonio Banderas</h2>
          <p className="text-gray-600">
            1954 Bloor Street West <br />
            Toronto ON, M6P 3K9 <br />
            Canada
          </p>
          <p className="text-blue-600 mt-2">example@gmail.com</p>
          <p className="text-gray-600">+4444-6666-7777</p>
        </div>

        {/* Invoice Details */}
        <div className="text-right">
          <h2 className="text-2xl font-semibold mb-2">Invoice</h2>
          <p className="text-gray-600">Falcon Design Studio</p>
          <p className="text-gray-600">156 University Ave, Toronto</p>
          <p className="text-gray-600">ON, Canada, M5H 2H7</p>

          <div className="mt-14 space-y-1 text-sm">
            <p>
              <span className="font-semibold">Invoice No:</span> 14
            </p>
            <p>
              <span className="font-semibold">Order Number:</span> AD20294
            </p>
            <p>
              <span className="font-semibold">Invoice Date:</span> 2018-09-25
            </p>
            <p>
              <span className="font-semibold">Payment Due:</span> Upon receipt
            </p>
          </div>

          <p className="mt-4 bg-green-100 text-green-800 px-3 py-1 rounded inline-block font-semibold">
            Amount Due: $19688.40
          </p>
        </div>
      </div>

      {/* Product Table */}
      <div className="overflow-hidden border rounded-lg">
        <table className="w-full border-collapse">
          <thead className="bg-blue-600 text-white text-left">
            <tr>
              <th className="p-3">Products</th>
              <th className="p-3">Quantity</th>
              <th className="p-3">Rate</th>
              <th className="p-3">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-3">
                <p className="font-medium">Platinum web hosting package</p>
                <p className="text-sm text-gray-500">Down 35mb, Up 100mb</p>
              </td>
              <td className="p-3">2</td>
              <td className="p-3">$65.00</td>
              <td className="p-3">$130.00</td>
            </tr>
            <tr className="border-t">
              <td className="p-3">
                <p className="font-medium">2 Page website design</p>
                <p className="text-sm text-gray-500">
                  Includes basic wireframes and responsive templates
                </p>
              </td>
              <td className="p-3">1</td>
              <td className="p-3">$2100.00</td>
              <td className="p-3">$2100.00</td>
            </tr>
            <tr className="border-t">
              <td className="p-3">
                <p className="font-medium">Mobile App Development</p>
                <p className="text-sm text-gray-500">
                  Includes responsive navigation
                </p>
              </td>
              <td className="p-3">8</td>
              <td className="p-3">$500.00</td>
              <td className="p-3">$4000.00</td>
            </tr>
            <tr className="border-t">
              <td className="p-3">
                <p className="font-medium">Web App Development</p>
                <p className="text-sm text-gray-500">Includes react spa</p>
              </td>
              <td className="p-3">6</td>
              <td className="p-3">$2000.00</td>
              <td className="p-3">$12000.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="flex justify-end mt-6">
        <div className="w-64">
          <div className="flex justify-between py-1">
            <span>Subtotal:</span>
            <span>$18,230.00</span>
          </div>
          <div className="flex justify-between py-1">
            <span>Tax 8%:</span>
            <span>$1458.40</span>
          </div>
          <div className="flex justify-between font-semibold text-lg py-2 border-t mt-2">
            <span>Total:</span>
            <span>$19688.40</span>
          </div>
          <div className="flex justify-between font-bold text-green-600 text-lg py-2">
            <span>Amount Due:</span>
            <span>$19688.40</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Invoice;
