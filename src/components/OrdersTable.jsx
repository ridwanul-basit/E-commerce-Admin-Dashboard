// OrdersList.jsx
import React from "react";

const orders = [
  {
    id: 181,
    name: "Ricky Antony",
    email: "ricky@example.com",
    date: "20/04/2019",
    address: "Ricky Antony, 2392 Main Avenue, Penasauka, New Jersey 02149",
    shipping: "Via Flat Rate",
    status: "Completed",
    amount: 99,
  },
  {
    id: 182,
    name: "Kin Rossow",
    email: "kin@example.com",
    date: "20/04/2019",
    address: "Kin Rossow, 1 Hollywood Blvd, Beverly Hills, California 90210",
    shipping: "Via Free Shipping",
    status: "Processing",
    amount: 120,
  },
  {
    id: 183,
    name: "Merry Diana",
    email: "merry@example.com",
    date: "30/04/2019",
    address: "Merry Diana, 1 Infinite Loop, Cupertino, California 90210",
    shipping: "Via Link Road",
    status: "On-Hold",
    amount: 70,
  },
  {
    id: 184,
    name: "Bucky Robert",
    email: "bucky@example.com",
    date: "30/04/2019",
    address: "Bucky Robert, 1 Infinite Loop, Cupertino, California 90210",
    shipping: "Via Free Shipping",
    status: "Pending",
    amount: 92,
  },
  {
    id: 185,
    name: "Rocky Zampa",
    email: "rocky@example.com",
    date: "30/04/2019",
    address: "Rocky Zampa, 1 Infinite Loop, Cupertino, California 90210",
    shipping: "Via Free Shipping",
    status: "On-Hold",
    amount: 120,
  },
  {
    id: 186,
    name: "Ricky John",
    email: "ricky@example.com",
    date: "30/04/2019",
    address: "Ricky John, 1 Infinite Loop, Cupertino, California 90210",
    shipping: "Via Free Shipping",
    status: "Processing",
    amount: 145,
  },
  {
    id: 187,
    name: "Cristofer Henric",
    email: "cristofer@example.com",
    date: "30/04/2019",
    address: "Cristofer Henric, 1 Infinite Loop, Cupertino, California 90210",
    shipping: "Via Flat Rate",
    status: "Completed",
    amount: 55,
  },
  {
    id: 188,
    name: "Brate Lee",
    email: "lee@example.com",
    date: "29/04/2019",
    address: "Brate Lee, 1 Infinite Loop, Cupertino, California 90210",
    shipping: "Via Link Road",
    status: "On-Hold",
    amount: 90,
  },
  {
    id: 189,
    name: "Thomas Stephenson",
    email: "stephenson@example.com",
    date: "29/04/2019",
    address: "Thomas Stephenson, 116 Ballifearry Road, Bamff",
    shipping: "Via Flat Rate",
    status: "Processing",
    amount: 52,
  },
  {
    id: 190,
    name: "Evie Singh",
    email: "eviesing@example.com",
    date: "29/04/2019",
    address: "Evie Singh, 54 Castledore Road, Tunstead",
    shipping: "Via Flat Rate",
    status: "Completed",
    amount: 90,
  },
];

const statusColors = {
  Completed: "bg-green-100 text-green-700",
  Processing: "bg-blue-100 text-blue-700",
  Pending: "bg-orange-100 text-orange-700",
  "On-Hold": "bg-gray-200 text-gray-600",
};

const OrdersTable = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Orders</h2>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
            + New
          </button>
          <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100">
            Filter
          </button>
          <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100">
            Export
          </button>
        </div>
      </div>

      {/* Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-600 text-left">
            <th className="p-2">
              <input type="checkbox" />
            </th>
            <th className="p-2">Order</th>
            <th className="p-2">Date</th>
            <th className="p-2">Ship To</th>
            <th className="p-2">Status</th>
            <th className="p-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="border-t hover:bg-gray-50 transition"
            >
              <td className="p-2">
                <input type="checkbox" />
              </td>
              <td className="p-2">
                <p className="text-blue-600 font-medium">
                  #{order.id} by {order.name}
                </p>
                <p className="text-sm text-gray-500">{order.email}</p>
              </td>
              <td className="p-2">{order.date}</td>
              <td className="p-2">
                <p>{order.address}</p>
                <p className="text-sm text-gray-500">{order.shipping}</p>
              </td>
              <td className="p-2">
                <span
                  className={`px-2 py-1 text-sm font-medium rounded-md ${statusColors[order.status]}`}
                >
                  {order.status}
                </span>
              </td>
              <td className="p-2 font-semibold">${order.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <nav className="flex gap-2">
          <button className="px-3 py-1 border rounded">‹</button>
          <button className="px-3 py-1 border rounded bg-blue-500 text-white">
            1
          </button>
          <button className="px-3 py-1 border rounded">2</button>
          <button className="px-3 py-1 border rounded">3</button>
          <button className="px-3 py-1 border rounded">›</button>
        </nav>
      </div>
    </div>
  );
};

export default OrdersTable;
