// Feed.jsx
import React from "react";
import { MoreHorizontal, ThumbsUp, MessageSquare, Share } from "lucide-react";

const people = [
  "Emilia Clarke",
  "Kit Harington",
  "Sophie Turner",
  "Maisie Williams",
  "Lena Headey",
  "Isaac Hempstead",
  "Alfie Allen",
  "Gwendoline Christie",
];

const events = [
  { date: "Sep 21", title: "Newmarket Nights", location: "Cambridge" },
  { date: "Dec 31", title: "Last Night Celebration", location: "London" },
];

export default function Feed() {
  return (
    <div className="flex w-full bg-gray-100 min-h-screen justify-center p-6">
      {/* Main container */}
      <div className="flex w-full max-w-6xl gap-6">
        {/* Center feed */}
        <div className="flex-1 space-y-6">
          {/* Create Post */}
          <div className="bg-white rounded-2xl shadow p-4">
            <input
              type="text"
              placeholder="What do you want to talk about?"
              className="w-full p-3 border rounded-xl focus:outline-none"
            />
            <div className="flex justify-between items-center mt-3">
              <div className="flex gap-3 text-gray-500">
                <button className="text-sm hover:text-blue-600">Image</button>
                <button className="text-sm hover:text-blue-600">Event</button>
                <button className="text-sm hover:text-blue-600">Check In</button>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Share
              </button>
            </div>
          </div>

          {/* Post */}
          <div className="bg-white rounded-2xl shadow p-4">
            {/* Post header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold">Rowan Sebastian Atkinson</h2>
                <p className="text-sm text-gray-500">11 hrs · Consett, UK</p>
              </div>
              <MoreHorizontal className="text-gray-500" />
            </div>

            {/* Post text */}
            <p className="mt-3 text-gray-700">
              Rowan Sebastian Atkinson CBE is an English actor, comedian and
              screenwriter best known for his work on the sitcoms Blackadder and
              Mr. Bean.
            </p>

            {/* Images grid */}
            <div className="grid grid-cols-2 gap-2 mt-3">
              <img
                src="https://picsum.photos/id/1011/400/250"
                alt="img1"
                className="rounded-xl"
              />
              <img
                src="https://picsum.photos/id/1015/400/250"
                alt="img2"
                className="rounded-xl"
              />
              <img
                src="https://picsum.photos/id/1022/400/250"
                alt="img3"
                className="rounded-xl"
              />
              <img
                src="https://picsum.photos/id/1032/400/250"
                alt="img4"
                className="rounded-xl"
              />
            </div>

            {/* Reactions */}
            <div className="flex justify-between items-center text-gray-500 mt-3 border-t pt-3">
              <button className="flex items-center gap-1 hover:text-blue-600">
                <ThumbsUp size={18} /> Like
              </button>
              <button className="flex items-center gap-1 hover:text-blue-600">
                <MessageSquare size={18} /> Comment
              </button>
              <button className="flex items-center gap-1 hover:text-blue-600">
                <Share size={18} /> Share
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-72 space-y-6">
          {/* Birthday */}
          <div className="bg-white rounded-2xl shadow p-4">
            <p className="text-sm">
              🎂 <span className="font-semibold">Emma Watson’s</span> birthday
              is today
            </p>
          </div>

          {/* Add to feed */}
          <div className="bg-white rounded-2xl shadow p-4">
            <h3 className="font-semibold mb-3">Add to your feed</h3>
            <div className="space-y-3">
              {people.map((name) => (
                <div
                  key={name}
                  className="flex justify-between items-center text-sm"
                >
                  <span>{name}</span>
                  <button className="text-blue-600">+ Follow</button>
                </div>
              ))}
            </div>
          </div>

          {/* Events */}
          <div className="bg-white rounded-2xl shadow p-4">
            <h3 className="font-semibold mb-3">You may interested</h3>
            <div className="space-y-3">
              {events.map((ev) => (
                <div key={ev.title} className="border-l-4 border-red-500 pl-3">
                  <p className="text-sm text-gray-500">{ev.date}</p>
                  <p className="font-semibold">{ev.title}</p>
                  <p className="text-xs text-gray-500">{ev.location}</p>
                </div>
              ))}
            </div>
            <button className="mt-3 text-blue-600 text-sm">All Events</button>
          </div>
        </div>
      </div>
    </div>
  );
}
