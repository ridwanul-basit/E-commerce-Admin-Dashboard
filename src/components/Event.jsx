// Event.jsx
import React from "react";
import { Calendar, MapPin, Users } from "lucide-react";

export default function Event() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Event Banner */}
      <div className="relative">
        <img
          src="https://picsum.photos/1200/400"
          alt="Event Banner"
          className="rounded-2xl shadow-lg w-full h-64 object-cover"
        />
        <div className="absolute bottom-4 left-6 bg-white bg-opacity-80 rounded-xl px-4 py-2 shadow">
          <h1 className="text-2xl font-semibold text-gray-900">
            Newmarket Nights
          </h1>
          <p className="text-gray-600">Live Concert & Celebration</p>
        </div>
      </div>

      {/* Event Info */}
      <div className="bg-white rounded-2xl shadow p-6 mt-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <Calendar size={18} />
              <span>21 September, 2025 · 6:00 PM - 11:00 PM</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
              <MapPin size={18} />
              <span>Duke Cambridge Club, Cambridge</span>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            RSVP / Join
          </button>
        </div>

        {/* Divider */}
        <hr className="my-6" />

        {/* Event Description */}
        <h2 className="text-lg font-semibold mb-2">About this Event</h2>
        <p className="text-gray-600 leading-relaxed">
          Experience the magic of Newmarket Nights! Join us for an unforgettable
          evening filled with live music performances, food stalls, and
          interactive sessions. Perfect for friends, families, and music lovers
          who want to enjoy a night of celebration under the stars.
        </p>

        {/* Organizer Info */}
        <div className="mt-6 flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/60?img=12"
            alt="Organizer"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-medium">Hosted by Duke Cambridge Club</h3>
            <p className="text-sm text-gray-500">Event Organizer</p>
          </div>
        </div>
      </div>

      {/* Attendees */}
      <div className="bg-white rounded-2xl shadow p-6 mt-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Users size={18} /> Attendees
        </h2>
        <div className="flex -space-x-4">
          {[1, 2, 3, 4, 5].map((id) => (
            <img
              key={id}
              src={`https://i.pravatar.cc/60?img=${id + 10}`}
              alt="Attendee"
              className="w-12 h-12 rounded-full border-2 border-white object-cover"
            />
          ))}
          <span className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 text-sm border-2 border-white">
            +15
          </span>
        </div>
      </div>

      {/* Related Events */}
      <div className="bg-white rounded-2xl shadow p-6 mt-6">
        <h2 className="text-lg font-semibold mb-4">You may also like</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 border rounded-xl hover:shadow">
            <h3 className="font-medium">Last Night Celebration</h3>
            <p className="text-sm text-gray-500">
              London Music Society · Dec 31, 2025
            </p>
          </div>
          <div className="p-4 border rounded-xl hover:shadow">
            <h3 className="font-medium">Winter Gala</h3>
            <p className="text-sm text-gray-500">
              Oxford Club · Jan 15, 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
