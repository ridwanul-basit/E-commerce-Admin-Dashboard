// Pricing.jsx
import React, { useState } from "react";

export default function Pricing() {
  const [billing, setBilling] = useState("yearly"); // monthly | yearly

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <div className="w-3/6">
          <p className="text-sm text-gray-400 mb-2">Free for 30 days</p>
        <h1 className="text-4xl font-semibold text-gray-800">
          For teams of all sizes, in the cloud
        </h1>
        <p className="text-gray-400 mt-2">
          Get the power, control, and customization you need to manage your
          team’s and organization’s projects.
        </p>
        <a
          href="#"
          className="text-blue-600 text-sm mt-2 inline-block hover:underline"
        >
          Have questions? Chat with us
        </a>
        </div>
      </div>

      {/* Billing toggle */}
      <div className="flex justify-between bg-white p-5 rounded-2xl items-center mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="text-lg font-bold">Billed Annually</span>
          <span className="bg-green-100 text-green-700 font-bold text-xs px-2 py-0.5 rounded">
            Save 25%
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span>Monthly</span>
          <button
            className={`w-10 h-5 flex items-center rounded-full p-1 transition ${
              billing === "yearly" ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() =>
              setBilling(billing === "yearly" ? "monthly" : "yearly")
            }
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow transform transition ${
                billing === "yearly" ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
          <span>Yearly</span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Single */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col">
          <h3 className="text-lg font-semibold">Single</h3>
          <p className="text-gray-600 mt-1">
            For teams that need to create project plans with confidence.
          </p>
          <p className="text-3xl font-bold mt-4">
            {billing === "yearly" ? "$0" : "$0"}
            <span className="text-base font-medium text-gray-500">/year</span>
          </p>
          <button className="mt-4 bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50">
            Start free trial
          </button>
          <ul className="mt-6 space-y-2 text-sm text-gray-600 flex-1">
            <li>✔ Timeline</li>
            <li>✔ Advanced Search</li>
            <li>
              ✔ Custom fields{" "}
              <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded">
                New
              </span>
            </li>
            <li>✔ Task dependencies</li>
            <li>✔ Private teams & projects</li>
          </ul>
          <a href="#" className="mt-4 text-blue-600 text-sm hover:underline">
            More about Single
          </a>
        </div>

        {/* Business */}
        <div className="bg-blue-50 border-2 border-blue-600 rounded-xl shadow p-6 flex flex-col">
          <h3 className="text-lg font-semibold">Business</h3>
          <p className="text-gray-500 mt-1">
            For teams and companies that need to manage work across initiatives.
          </p>
          <p className="text-3xl font-bold mt-4">
            {billing === "yearly" ? "$39" : "$49"}
            <span className="text-base font-medium text-gray-500">/year</span>
          </p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Get Business
          </button>
          <ul className="mt-6 space-y-2 text-sm text-gray-600 flex-1">
            <li>✔ Portfolios</li>
            <li>✔ Lock custom fields</li>
            <li>✔ Onboarding plan</li>
            <li>✔ Resource Management</li>
            <li>✔ Lock custom fields</li>
          </ul>
          <a href="#" className="mt-4 text-blue-600 text-sm hover:underline">
            More about Business
          </a>
        </div>

        {/* Extended */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col">
          <h3 className="text-lg font-semibold">Extended</h3>
          <p className="text-gray-500 mt-1">
            For organizations that need additional security and support.
          </p>
          <p className="text-3xl font-bold mt-4">
            {billing === "yearly" ? "$99" : "$129"}
            <span className="text-base font-medium text-gray-500">/year</span>
          </p>
          <button className="mt-4 bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50">
            Purchase
          </button>
          <ul className="mt-6 space-y-2 text-sm text-gray-600 flex-1">
            <li>✔ Portfolios</li>
            <li>
              ✔ Tags{" "}
              <span className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded">
                Coming soon
              </span>
            </li>
            <li>✔ Onboarding plan</li>
            <li>✔ Resource Management</li>
          </ul>
          <a href="#" className="mt-4 text-blue-600 text-sm hover:underline">
            More about Extended
          </a>
        </div>
      </div>
    </div>
  );
}
