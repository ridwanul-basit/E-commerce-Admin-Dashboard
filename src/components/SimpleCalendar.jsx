import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const SimpleCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-4xl hover:shadow-3xl transition-shadow duration-500">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-2xl mb-8 shadow-lg">
          <h2 className="text-3xl font-extrabold text-center">
            📅 My Dashboard Calendar
          </h2>
        </div>

        {/* Calendar */}
        <div className="flex justify-center">
          <Calendar
            onChange={setDate}
            value={date}
            className="react-calendar border-none w-full rounded-xl shadow-inner p-4 hover:shadow-lg transition-shadow duration-300"
          />
        </div>

        {/* Selected Date */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-lg">Selected Date</p>
          <p className="text-2xl font-bold text-blue-600 mt-2">{date.toDateString()}</p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300">
            Add Event
          </button>
          <button
            onClick={() => setDate(new Date())}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleCalendar;
