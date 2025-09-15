// AnalyticsCRM.jsx
import React from "react";
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell
} from "recharts";
import {
  ComposableMap, Geographies, Geography, ZoomableGroup
} from "react-simple-maps";

// 🌍 World map topojson
const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";


const AnalyticsCRM = () => {
  // Dummy Data
  const kpiData = [
    { title: "New Contacts", value: "15%", change: "+2.5%", color: "text-blue-600" },
    { title: "New Users", value: "13%", change: "-1.2%", color: "text-green-600" },
    { title: "New Leads", value: "16%", change: "+3.1%", color: "text-purple-600" },
  ];

  const revenueData = [
    { name: "Aug 1", inbound: 4000, outbound: 2400 },
    { name: "Aug 10", inbound: 3000, outbound: 1398 },
    { name: "Aug 20", inbound: 2000, outbound: 9800 },
    { name: "Aug 30", inbound: 2780, outbound: 3908 },
    { name: "Sep 10", inbound: 1890, outbound: 4800 },
    { name: "Sep 20", inbound: 2390, outbound: 3800 },
  ];

  const pieData = [
    { name: "Inbound", value: 4200 },
    { name: "Outbound", value: 5600 },
    { name: "Other", value: 3500 },
  ];
  const COLORS = ["#6366F1", "#10B981", "#F59E0B"];

  const funnelData = [
    { stage: "Lead", count: 800 },
    { stage: "Contacted", count: 650 },
    { stage: "Qualified", count: 500 },
    { stage: "Proposal", count: 300 },
    { stage: "Closed", count: 150 },
  ];

  const leadConvData = [
    { stage: "Campaigns", rate: 70 },
    { stage: "Leads", rate: 50 },
    { stage: "Opportunities", rate: 40 },
    { stage: "Negotiation", rate: 20 },
    { stage: "Closed", rate: 10 },
  ];

  return (
    <div className="p-6 min-h-screen grid grid-cols-12 gap-6">
      {/* 🔹 KPI Cards */}
      {kpiData.map((kpi, idx) => (
        <div key={idx} className="col-span-4 bg-white shadow rounded-xl p-5">
          <p className="text-gray-500">{kpi.title}</p>
          <h2 className={`text-2xl font-bold ${kpi.color}`}>{kpi.value}</h2>
          <p className="text-sm text-gray-400">{kpi.change}</p>
        </div>
      ))}

      {/* 🔹 Revenue Chart */}
      <div className="col-span-8 bg-white rounded-xl shadow p-5">
        <h2 className="font-semibold mb-4">Revenue Overview</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="inbound" stroke="#6366F1" strokeWidth={2} />
            <Line type="monotone" dataKey="outbound" stroke="#F97316" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 🔹 Leads Pie */}
      <div className="col-span-4 bg-white rounded-xl shadow p-5">
        <h2 className="font-semibold mb-4">Leads</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={90} label>
              {pieData.map((entry, idx) => (
                <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* 🔹 Funnel */}
      <div className="col-span-4 bg-white rounded-xl shadow p-5">
        <h2 className="font-semibold mb-4">Deal Funnel</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart layout="vertical" data={funnelData}>
            <XAxis type="number" hide />
            <YAxis type="category" dataKey="stage" />
            <Tooltip />
            <Bar dataKey="count" fill="#22C55E" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 🔹 World Map */}
      <div className="col-span-8 bg-white overflow-hidden rounded-xl shadow p-5">
        <h2 className="font-semibold mb-4">Location by Sessions</h2>
        <div className="h-[300px]">
          <ComposableMap projection="geoMercator">
  <ZoomableGroup zoom={1}>
    <Geographies geography={geoUrl}>
      {({ geographies }) =>
        geographies.map((geo) => (
          <Geography
            key={geo.rsmKey}
            geography={geo}
            fill="#93C5FD"
            stroke="#2563EB"
            style={{
              default: { outline: "none" },
              hover: { fill: "#1D4ED8", outline: "none" },
              pressed: { fill: "#1E40AF", outline: "none" },
            }}
          />
        ))
      }
    </Geographies>
  </ZoomableGroup>
</ComposableMap>

        </div>
      </div>

      {/* 🔹 Lead Conversion */}
      <div className="col-span-12 bg-white rounded-xl shadow p-5">
        <h2 className="font-semibold mb-4">Lead Conversion</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={leadConvData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="stage" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="rate" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsCRM;
