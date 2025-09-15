// ChatBox.jsx
import React from "react";
import {
  Star,
  RefreshCcw,
  Settings,
  Trash2,
  Archive,
  Mail,
  AlertCircle,
} from "lucide-react";

const ChatBox = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-4">
      {/* Top Controls */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-3">
        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" />
          <button className="p-1 hover:bg-gray-100 rounded">
            <RefreshCcw size={18} />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <Settings size={18} />
          </button>
        </div>
        <button className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm">
          + Compose
        </button>
      </div>

      {/* Unread Section */}
      <div className="mt-4">
        <h2 className="text-sm font-semibold text-gray-500 mb-2">Unread</h2>

        <div className="flex items-center justify-between bg-blue-50 px-3 py-2 rounded-md mb-2">
          <div className="flex items-center gap-2 ">
            <input type="checkbox" className="w-4 h-4" />
            <Star size={16} className="text-yellow-500" />
            <span className="font-semibold">Diana</span>
            <span className="text-sm">Your Daily Work Summary</span>
          </div>
          <span className="text-xs text-gray-500">Mar 26</span>
        </div>

        <div className="flex items-center border-t border-gray-200 justify-between hover:bg-gray-50 px-3 py-2 rounded-md">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <Star size={16} className="text-gray-400" />
            <span className="font-semibold">Unsplash Team</span>
            <span className="text-sm">
              Get involved for International Women’s Day - with link
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-1 hover:bg-gray-100 rounded">
              <Trash2 size={16} />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <Archive size={16} />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <Mail size={16} />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <AlertCircle size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Everything else */}
      <div className="mt-4">
        <h2 className="text-sm font-semibold text-gray-500 mb-2">
          Everything else
        </h2>

        {[
          { sender: "GitHub", subject: "[GitHub] Subscribed to technext…" },
          { sender: "Coursera", subject: "Recommended: Server-side Development…" },
          { sender: "Spectrum", subject: "Spectrum Weekly Digest…" },
          { sender: "Pinterest", subject: "14 ideas in Pink saree…" },
          { sender: "Medium", subject: "Technology Brief: Who’s keeping us safe?" },
          { sender: "Stripe", subject: "Confirm your Stripe email address!" },
          { sender: "Tony Stark", subject: "Bruce Banner - Invitation to edit…" },
          { sender: "YouTube", subject: "Firebase just uploaded a video…" },
        ].map((mail, i) => (
          <div
            key={i}
            className="flex items-center justify-between border-t border-gray-200 hover:bg-gray-50 px-3 py-2 rounded-md"
          >
            <div className="flex gap-6">
              <input type="checkbox" className="w-4 h-4" />
              <Star size={16} className="text-gray-400" />
              <span className="text-sm text-gray-500">{mail.sender}</span>
              <span className="text-sm text-left pl-20 text-gray-500">{mail.subject}</span>
            </div>
            <span className="text-xs text-gray-500">Mar 3</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-gray-500 mt-4 border-t border-gray-200 pt-2">
        <span>2.29 GB (13%) of 17 GB used</span>
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-gray-100 rounded">&lt;</button>
          <span>1-10 of 12</span>
          <button className="p-1 hover:bg-gray-100 rounded">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
