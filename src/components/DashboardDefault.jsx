import React from "react";

// DashboardDefault.jsx
// Single-file React component using Tailwind CSS. No external chart libraries required — charts are SVG-based.
// Replace sample JSON below with real API data as needed.

const sample = {
  stats: [
    { id: "sales", title: "Weekly Sales", value: "$47K", delta: "+2.5%", spark: [5, 8, 6, 9, 8, 11, 10] },
    { id: "orders", title: "Total Order", value: "58.4K", delta: "+1.2%", spark: [10, 12, 14, 13, 15, 18, 20] },
    { id: "market", title: "Market Share", value: "26M", delta: null, spark: [2, 6, 4, 10, 6, 14, 12] },
    { id: "weather", title: "Weather", value: "31°", delta: "NYC Sunny", spark: [1, 2, 2, 3, 2, 4, 5] },
  ],
  projects: [
    { id: 1, name: "Falcon", tag: "WEB", time: "58:20:00", progress: 85 },
    { id: 2, name: "Reign", tag: "APP", time: "31:50:00", progress: 60 },
    { id: 3, name: "Boosta", tag: "UI", time: "25:20:00", progress: 45 },
    { id: 4, name: "Roven", tag: "API", time: "12:50:00", progress: 30 },
    { id: 5, name: "Slick", tag: "CMS", time: "21:20:00", progress: 70 },
  ],
  sales: [
    { date: "Jan 1", v: 40 },
    { date: "Jan 2", v: 48 },
    { date: "Jan 3", v: 36 },
    { date: "Jan 4", v: 60 },
    { date: "Jan 5", v: 88 },
    { date: "Jan 6", v: 52 },
    { date: "Jan 7", v: 65 },
  ],
  storage: { usedGB: 1466, totalGB: 2 * 1024, breakdown: { user: 588, system: 379, shared: 192, free: 576 } },
  products: [
    { id: 1, title: "Roven Pro", category: "Landing", revenue: 1311, percent: 41 },
    { id: 2, title: "Boosta4", category: "Portfolio", revenue: 860, percent: 27 },
    { id: 3, title: "Falcon", category: "Admin", revenue: 538, percent: 17 },
    { id: 4, title: "Slick", category: "Builder", revenue: 245, percent: 8 },
    { id: 5, title: "Reign Pro", category: "Agency", revenue: 234, percent: 7 },
  ],
  files: [
    { id: 1, name: "apple-smart-watch.png", user: "Anthony", time: "Just Now" },
    { id: 2, name: "iphone.jpg", user: "Anthony", time: "Yesterday" },
    { id: 3, name: "Falcon v1.8.2.zip", user: "Jane", time: "2 days ago" },
    { id: 4, name: "mac.png", user: "Rowen", time: "5 days ago" },
  ],
  users: [
    { id: 1, name: "Emma Watson", role: "Admin" },
    { id: 2, name: "Antony Hopkins", role: "Editor" },
    { id: 3, name: "Anna Karolina", role: "Writer" },
    { id: 4, name: "John Lee", role: "Admin" },
  ],
  topProducts: [
    { name: "Roven Pro", value: 45 },
    { name: "Boosta4", value: 28 },
    { name: "Falcon", value: 33 },
    { name: "Slick", value: 22 },
    { name: "Reign Pro", value: 17 },
  ],
};

// ---------------- Utility: SVG helpers ----------------
const buildSparkPath = (data, w = 100, h = 30, padding = 4) => {
  if (!data || data.length === 0) return "";
  const min = Math.min(...data);
  const max = Math.max(...data);
  const len = data.length;
  const normalize = (v) => {
    if (max === min) return h / 2;
    return (
      h - ((v - min) / (max - min)) * (h - padding * 2) -
      padding
    );
  };
  const step = w / (len - 1);
  return data
    .map((d, i) => `${i === 0 ? "M" : "L"} ${i * step.toFixed(2)} ${normalize(d).toFixed(2)}`)
    .join(" ");
};

const LineChart = ({ data, className = "w-full h-44" }) => {
  const w = 600;
  const h = 220;
  const values = data.map((d) => d.v);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const points = values.map((v, i) => {
    const x = (i / (values.length - 1)) * w;
    const y = h - ((v - min) / (max - min)) * h;
    return [x, y];
  });
  const path = points.map((p, i) => `${i === 0 ? "M" : "L"}${p[0]},${p[1]}`).join(" ");
  const area = `${path} L ${w},${h} L 0,${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className={className}>
      <defs>
        <linearGradient id="areaGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#areaGrad)" />
      <path d={path} fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {points.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r={3} fill="#fff" stroke="#2563eb" strokeWidth={1.5} />
      ))}
    </svg>
  );
};

const Donut = ({ percent = 75, size = 96, stroke = 10 }) => {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const dash = (percent / 100) * c;
  return (
    <div className="flex items-center justify-center">
      <svg width={size} height={size}>
        <g transform={`translate(${size / 2}, ${size / 2})`}>
          <circle r={r} fill="none" stroke="#e6e7ee" strokeWidth={stroke} />
          <circle
            r={r}
            fill="none"
            stroke="#2563eb"
            strokeWidth={stroke}
            strokeDasharray={`${dash} ${c - dash}`}
            strokeLinecap="round"
            transform="rotate(-90)"
          />
        </g>
      </svg>
      <div className="absolute text-center">
        <div className="text-xl font-semibold">{percent}%</div>
        <div className="text-xs text-gray-500">Bandwidth</div>
      </div>
    </div>
  );
};

// ---------------- Small reusable pieces ----------------
const StatCard = ({ item }) => {
  return (
    <div className="bg-white shadow-xl rounded-lg px-4 py-6">
      <div className="flex justify-between items-start">
        <div>
          <div className="">{item.title}</div>
          <div className="text-4xl text-[#5E6E82] font-bold mt-3">{item.value}</div>
          <div>
            {item.delta && <div className="text-sm text-center px-2 py-0.5 bg-green-100 rounded-full text-green-600 mt-2">{item.delta}</div>}
          </div>
        </div>
        <div className="w-28 h-12">
          <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-full">
            <path d={buildSparkPath(item.spark, 100, 30)} fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const ProjectList = ({ items }) => (
  <div className="bg-white shadow-xl rounded-lg p-4">
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-semibold">Running Projects</h3>
      <div className="text-sm text-gray-500">Working Time</div>
    </div>
    <div className="space-y-3">
      {items.map((p) => (
        <div key={p.id} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">{p.name.charAt(0)}</div>
            <div>
              <div className="font-medium">{p.name} <span className="text-xs text-gray-400">{p.tag}</span></div>
              <div className="text-xs text-gray-500">{p.time}</div>
            </div>
          </div>
          <div className="w-36">
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div style={{ width: `${p.progress}%` }} className="bg-blue-500 h-2 rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-3 text-sm text-blue-600">Show all projects &rarr;</div>
  </div>
);

const StorageBar = ({ storage }) => {
  const percent = Math.round((storage.usedGB / storage.totalGB) * 100);
  return (
    <div className="bg-white shadow-xl rounded-lg p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="font-semibold">Using Storage {storage.usedGB} MB of {Math.round(storage.totalGB)} MB</div>
        <div className="text-sm text-gray-500">Show</div>
      </div>
      <div className="w-full bg-gray-100 h-3 rounded-full">
        <div style={{ width: `${percent}%` }} className="bg-green-400 h-3 rounded-full" />
      </div>
      <div className="text-xs text-gray-500">User: {storage.breakdown.user}MB • System: {storage.breakdown.system}MB • Shared: {storage.breakdown.shared}MB</div>
    </div>
  );
};

const ProductsTable = ({ items }) => (
  <div className="bg-white shadow-xl rounded-lg p-4">
    <div className="flex items-center justify-between mb-3">
      <h3 className="font-semibold">Best Selling Products</h3>
      <div className="text-sm text-gray-500">Revenue ($)</div>
    </div>
    <div className="space-y-3">
      {items.map((it) => (
        <div key={it.id} className="flex items-center justify-between">
          <div>
            <div className="font-medium">{it.title}</div>
            <div className="text-xs text-gray-500">{it.category}</div>
          </div>
          <div className="text-right">
            <div className="font-semibold">${it.revenue}</div>
            <div className="text-xs text-gray-500">{it.percent}%</div>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-3 text-sm text-blue-600">View All</div>
  </div>
);

const FileList = ({ files }) => (
  <div className="bg-white shadow-xl rounded-lg p-4">
    <div className="flex items-center justify-between mb-3">
      <h3 className="font-semibold">Shared Files</h3>
      <div className="text-sm text-gray-500">View All</div>
    </div>
    <div className="space-y-3">
      {files.map((f) => (
        <div key={f.id} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-600">F</div>
            <div>
              <div className="font-medium">{f.name}</div>
              <div className="text-xs text-gray-500">{f.user} • {f.time}</div>
            </div>
          </div>
          <div className="text-sm text-gray-500">...</div>
        </div>
      ))}
    </div>
  </div>
);

const ActiveUsers = ({ users }) => (
  <div className="bg-white shadow-xl rounded-lg p-4">
    <h3 className="font-semibold mb-3">Active Users</h3>
    <div className="space-y-3">
      {users.map((u) => (
        <div key={u.id} className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">{u.name.split(" ")[0].charAt(0)}</div>
          <div>
            <div className="font-medium">{u.name}</div>
            <div className="text-xs text-gray-500">{u.role}</div>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-3 text-sm text-blue-600">All active users &rarr;</div>
  </div>
);

const BarChart = ({ data }) => {
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div className="bg-white shadow-xl rounded-lg p-4">
      <h3 className="font-semibold mb-3">Top Products</h3>
      <div className="space-y-3">
        {data.map((d, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-24 text-xs text-gray-500">{d.name}</div>
            <div className="w-full bg-gray-100 h-3 rounded-full">
              <div style={{ width: `${(d.value / max) * 100}%` }} className="bg-blue-500 h-3 rounded-full" />
            </div>
            <div className="w-12 text-right text-sm font-semibold">{d.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ---------------- Main dashboard component ----------------
export default function DashboardDefault() {
  return (
    <div className="p-6  min-h-screen">
      <div className="max-w-screen-2xl mx-auto space-y-8">
        {/* Top stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 ">
          {sample.stats.map((s) => (
            <StatCard key={s.id} item={s} />
          ))}
        </div>

        {/* Middle area: projects + sales */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-2">
            <ProjectList items={sample.projects} />
            <div className="mt-4">
              <StorageBar storage={sample.storage} />
            </div>
          </div>

          <div className="lg:col-span-2 bg-white shadow-xl rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold">Total Sales</h3>
              <select className="text-sm text-gray-500 bg-transparent">
                <option>January</option>
                <option>February</option>
              </select>
            </div>
            <div className="w-full h-56">
              <LineChart data={sample.sales} className="w-full h-full" />
            </div>
          </div>
        </div>

        {/* Lower middle: products + files + alert */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-4">
            <ProductsTable items={sample.products} />
            <div className="flex gap-4">
              <div className="flex-1">
                <FileList files={sample.files} />
              </div>
              <div style={{ width: 300 }}>
                <div className="bg-white shadow-xl rounded-lg p-4 h-full">
                  <h3 className="font-semibold mb-3">Storage Alert</h3>
                  <p className="text-sm text-gray-600">Running out of your space? Your storage will be running out soon. Get more space and powerful productivity features.</p>
                  <div className="mt-4 text-sm text-blue-600">Upgrade storage &rarr;</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-4">
            <ActiveUsers users={sample.users} />
            <BarChart data={sample.topProducts} />
            <div className="bg-white shadow-xl rounded-lg p-4 flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Bandwidth Saved</h3>
                <div className="text-sm text-gray-500">Last 6 Months</div>
              </div>
              <div className="relative  w-24 h-24">
                <Donut percent={93} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
