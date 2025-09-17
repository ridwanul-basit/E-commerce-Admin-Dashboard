// BillingForm.jsx
import React, { useState } from "react";

const BillingForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Free Trial Info */}
      <div className="bg-white shadow rounded-xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Get started with your free trial
        </h2>
        <p className="text-gray-600">
          Premium team - 5 Seats. Free for 30 days, cancel at any time. <br />
          <span className="font-medium">$6.25 / seat month after a trial</span>
        </p>
        <button className="text-blue-600 text-sm mt-2 underline">
          Change plan
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Billing Details */}
        <div className="bg-white shadow rounded-xl p-6 md:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Billing Details</h3>

          {/* Payment Options */}
          <div className="space-y-3 mb-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={() => setPaymentMethod("paypal")}
              />
              <span className="font-medium text-gray-700">PayPal</span>
              <span className="text-gray-500 text-sm">
                Pay with PayPal, Apple Pay, PayPal Credit and much more
              </span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
              />
              <span className="font-medium text-gray-700 flex items-center gap-2">
                Credit Card
                <img
                  src="	https://frlive.prium.me/assets/icon-payment-methods-Dd852Ycu.png"
                  alt="Visa"
                  className="h-5"
                />
                
              </span>
            </label>
            <p className="text-gray-500 text-sm">
              Safe money transfer using your bank accounts. Visa, maestro,
              discover, american express.
            </p>
          </div>

          {/* Credit Card Form */}
          {paymentMethod === "card" && (
            <form className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="XXXX XXXX XXXX XXXX"
                  className="mt-1 w-full border rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name of Card
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="mt-1 w-full border rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <input
                  type="text"
                  placeholder="USA"
                  className="mt-1 w-full border rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  ZIP Code
                </label>
                <input
                  type="text"
                  placeholder="1234"
                  className="mt-1 w-full border rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Exp Date
                </label>
                <input
                  type="text"
                  placeholder="05/2026"
                  className="mt-1 w-full border rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  CVV
                </label>
                <input
                  type="text"
                  placeholder="123"
                  className="mt-1 w-full border rounded-lg px-3 py-2"
                />
              </div>
            </form>
          )}
        </div>

        {/* Billing Summary */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Billing</h3>

          <select className="w-full border rounded-lg px-3 py-2 mb-4">
            <option>Monthly Plan</option>
            <option>Yearly Plan</option>
          </select>

          <div className="flex justify-between text-gray-700 mb-1">
            <span>Due in 30 days</span>
            <span>$375.00</span>
          </div>
          <div className="flex justify-between text-green-600 text-sm mb-4">
            <span>Annual saving</span>
            <span>$75.00/yr</span>
          </div>

          <div className="flex justify-between font-semibold text-lg mb-2">
            <span>Due today</span>
            <span>$0.00</span>
          </div>
          <p className="text-gray-500 text-sm mb-4">
            Once you start your trial, you will have 30 days to use Premium for
            free. After 30 days you’ll be charged based on your selected plan.
          </p>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Start free trial
          </button>

          <p className="text-gray-400 text-xs mt-3">
            By continuing, you are agreeing to our subscriber terms and will be
            charged at the end of the trial.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BillingForm;
