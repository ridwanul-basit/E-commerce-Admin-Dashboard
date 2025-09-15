// Analytics.jsx
import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar
} from "recharts";

const Analytics = () => {
  // Dummy Data
  const lineData = [
    { name: "Sep 1", sessions: 400, users: 240 },
    { name: "Sep 5", sessions: 600, users: 300 },
    { name: "Sep 10", sessions: 500, users: 280 },
    { name: "Sep 15", sessions: 700, users: 400 },
  ];

  const pieData = [
    { name: "Chrome", value: 60 },
    { name: "Safari", value: 20 },
    { name: "Firefox", value: 10 },
    { name: "Other", value: 10 },
  ];
  const COLORS = ["#4285F4", "#34A853", "#FF9900", "#888888"];

  const barData = [
    { page: "Home", count: 300 },
    { page: "Dashboard", count: 180 },
    { page: "Reports", count: 120 },
    { page: "Profile", count: 90 },
  ];

  return (
    <div className="p-6  min-h-screen grid grid-cols-12 gap-6">
      {/* 🔹 Top Cards */}
      <div className="col-span-12 grid grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-gray-500">Users</p>
          <h2 className="text-2xl font-bold">3.9k</h2>
          <p className="text-green-500 text-sm">+6.3%</p>
        </div>
        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-gray-500">New Users</p>
          <h2 className="text-2xl font-bold">6.3k</h2>
          <p className="text-red-500 text-sm">-8.4%</p>
        </div>
        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-gray-500">Bounce Rate</p>
          <h2 className="text-2xl font-bold">49.4%</h2>
          <p className="text-green-500 text-sm">+4.9%</p>
        </div>
        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-gray-500">Session Duration</p>
          <h2 className="text-2xl font-bold">4m 03s</h2>
          <p className="text-green-500 text-sm">+2.1%</p>
        </div>
      </div>

      {/* 🔹 Line Chart */}
      <div className="col-span-8 bg-white rounded-xl shadow p-5">
        <h2 className="font-semibold mb-4">Sessions Overview</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sessions" stroke="#4F46E5" strokeWidth={2} />
            <Line type="monotone" dataKey="users" stroke="#22C55E" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 🔹 Active Users Right Now */}
      <div className="col-span-4 bg-blue-600 text-white rounded-xl shadow p-5">
        <h2 className="text-xl font-semibold">Users Online Right Now</h2>
        <p className="text-4xl font-bold mt-3">955</p>
        <ResponsiveContainer width="100%" height={120}>
          <BarChart data={barData}>
            <Bar dataKey="count" fill="#60A5FA" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 🔹 Pie Chart (by Browser) */}
      <div className="col-span-4 bg-white rounded-xl shadow p-5">
        <h2 className="font-semibold mb-4">Sessions by Browser</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* 🔹 Bar Chart (Active Pages) */}
      <div className="col-span-8 bg-white rounded-xl shadow p-5">
        <h2 className="font-semibold mb-4">Most Active Pages</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="page" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#10B981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;
