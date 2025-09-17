// Followers.jsx
import React, { useState } from "react";

const followers = [
  { name: "Emilia Clarke", role: "Technext limited", img: "https://i.pravatar.cc/100?img=1" },
  { name: "Kit Harington", role: "Harvard Korea Society", img: "https://i.pravatar.cc/100?img=2" },
  { name: "Sophie Turner", role: "Graduate Student Council", img: "https://i.pravatar.cc/100?img=3" },
  { name: "Peter Dinklage", role: "Art Club, MIT", img: "https://i.pravatar.cc/100?img=4" },
  { name: "Nikolaj Coster", role: "Archery Club, MIT", img: "https://i.pravatar.cc/100?img=5" },
  { name: "Isaac Hempstead", role: "Asymptones", img: "https://i.pravatar.cc/100?img=6" },
  { name: "Alfie Allen", role: "Brain Trust", img: "https://i.pravatar.cc/100?img=7" },
  { name: "Iain Glen", role: "GSAS Action Coalition", img: "https://i.pravatar.cc/100?img=8" },
  { name: "Liam Cunningham", role: "Caving Club, MIT", img: "https://i.pravatar.cc/100?img=9" },
  { name: "John Bradley", role: "Chess Club", img: "https://i.pravatar.cc/100?img=10" },
  { name: "Rory McCann", role: "Chamber Music Society", img: "https://i.pravatar.cc/100?img=11" },
  { name: "Joe Dempsey", role: "Clubchem", img: "https://i.pravatar.cc/100?img=12" },
  { name: "Maisie Williams", role: "Brain Trust", img: "https://i.pravatar.cc/100?img=13" },
  { name: "Lena Headey", role: "Clubchem", img: "https://i.pravatar.cc/100?img=14" },
  { name: "Gwendoline Christie", role: "Technext limited", img: "https://i.pravatar.cc/100?img=15" },
  { name: "Nathalie Emmanuel", role: "Asymptones", img: "https://i.pravatar.cc/100?img=16" },
  { name: "Natalie Dormer", role: "Musical Club", img: "https://i.pravatar.cc/100?img=17" },
  { name: "Carice Houten", role: "Concert Choir", img: "https://i.pravatar.cc/100?img=18" },
  { name: "Hannah Murray", role: "Career Club", img: "https://i.pravatar.cc/100?img=19" },
  { name: "Rose Leslie", role: "Musical Club", img: "https://i.pravatar.cc/100?img=20" },
  { name: "Rory McCann", role: "Alpine Ski Club", img: "https://i.pravatar.cc/100?img=21" },
  { name: "Diana Rigg", role: "Clubchem", img: "https://i.pravatar.cc/100?img=22" },
  { name: "Michelle Fairley", role: "Alpha Chi Omega", img: "https://i.pravatar.cc/100?img=23" },
  { name: "Gemma Whelan", role: "Chamber Music Society", img: "https://i.pravatar.cc/100?img=24" },
];

export default function Followers() {
  const [search, setSearch] = useState("");

  const filteredFollowers = followers.filter((f) =>
    f.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl bg-white rounded-2xl mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Followers ({followers.length})</h2>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-lg px-3 py-2 text-sm focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select className="border rounded-lg px-3 py-2 text-sm">
            <option>All followers</option>
            <option>Recently added</option>
            <option>Close friends</option>
          </select>
        </div>
      </div>

      {/* Followers Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredFollowers.map((follower, index) => (
          <div
            key={index}
            className="flex flex-col items-center  p-4 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <img
              src={follower.img}
              alt={follower.name}
              className="w-20 h-20 rounded-full border-2 border-gray-200 object-cover"
            />
            <h3 className="mt-3 font-medium text-sm text-blue-600 hover:underline cursor-pointer">
              {follower.name}
            </h3>
            <p className="text-xs text-gray-500">{follower.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
