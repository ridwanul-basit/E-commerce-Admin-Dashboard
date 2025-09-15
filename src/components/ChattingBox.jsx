import React from "react";
import { Phone, Video, MoreVertical } from "lucide-react";

const ChattingBox = () => {
  return (
    <div className="flex h-screen rounded-3xl p-6">
      {/* Sidebar */}
      <div className="w-1/4  bg-white border-r border-gray-200 overflow-y-auto">
        <div className="p-4 border-b border-gray-200 font-semibold">Chats</div>
        <div className="space-y-2 p-2">
          {[
            { name: "Kit Harington", last: "Emma sent 6 photos", active: true },
            { name: "Avengers", last: "Rowen: @Emma What do yo..." },
            { name: "Peter Dinklage", last: "You: 😁" },
            { name: "Lena Headey", last: "What are you doing?" },
            { name: "Nikolaj Coster", last: "How are you?" },
            { name: "Isaac Hempstead", last: "You: 👋" },
            { name: "Rory McCann", last: "Hello!" },
            { name: "Joe Dempsie", last: "You: 😍" },
            { name: "Maisie Williams", last: "..." },
          ].map((chat, i) => (
            <div
              key={i}
              className={`flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-gray-100 ${
                chat.active ? "bg-green-50 border-l-4 border-green-500" : ""
              }`}
            >
              <div>
                <div className="font-semibold">{chat.name}</div>
                <div className="text-sm text-gray-500 truncate w-40">
                  {chat.last}
                </div>
              </div>
              {chat.active && (
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center bg-white px-4 py-[6px] border-b border-gray-200">
          <div>
            <div className="font-semibold">Kit Harington</div>
            <div className="text-sm text-gray-500">Active 7h ago</div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100">
              <Phone size={18} />
            </button>
            <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100">
              <Video size={18} />
            </button>
            <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100">
              <MoreVertical size={18} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-white space-y-4">
          {/* Text message (left) */}
          <div className="flex flex-col items-start">
            <div className="bg-gray-100 p-3 rounded-lg shadow-sm max-w-xs">
              I took some excellent images yesterday.
            </div>
            <div className="text-xs text-gray-400 mt-1">11:54 AM</div>
          </div>

          {/* Text message (right) */}
          <div className="flex flex-col items-end">
            <div className="bg-blue-500 text-white p-3 rounded-lg shadow-sm max-w-xs">
              Give me the images.
            </div>
            <div className="text-xs text-gray-400 mt-1">11:55 AM</div>
          </div>

          {/* Image Grid (left message with attachments) */}
          <div className="flex flex-col items-start mt-28">
            <div className="grid grid-cols-3 gap-2 max-w-md">
              <img
                src="	https://frlive.prium.me/assets/1-DDPO-pAm.jpg"
                className="rounded-lg"
                alt="nature"
              />
              <img
                src="https://frlive.prium.me/assets/2-CIvfQZ8w.jpg"
                className="rounded-lg"
                alt="shoe"
              />
              <img
                src="https://frlive.prium.me/assets/3-BGAlC0UU.jpg"
                className="rounded-lg"
                alt="snow"
              />
              <img
                src="	https://frlive.prium.me/assets/4-BYzmYfOg.jpg"
                className="rounded-lg"
                alt="surf"
              />
              <img
                src="	https://frlive.prium.me/assets/5-BdgAjrAe.jpg"
                className="rounded-lg"
                alt="golf"
              />
              <img
                src="	https://frlive.prium.me/assets/6-BOnACEL-.jpg"
                className="rounded-lg"
                alt="forest"
              />
            </div>
            <div className="text-xs text-gray-400 mt-1">11:57 AM</div>
          </div>
        </div>

        {/* Input */}
        <div className="flex items-center bg-white p-3 border-t border-gray-200">
          <input
            type="text"
            placeholder="Type your message"
            className="flex-1 border border-gray-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChattingBox;
