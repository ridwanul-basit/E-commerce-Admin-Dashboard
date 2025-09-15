// ComposeBox.jsx
import React, { useState } from "react";
import {
  Bold,
  Italic,
  Link,
  List,
  ListOrdered,
  Image,
  Quote,
  LayoutGrid,
  Play,
  Undo,
  Redo,
  Paperclip,
  Trash2,
} from "lucide-react";

const ComposeBox = () => {
  const [attachments, setAttachments] = useState([
    { name: "winter.jpg", size: "873.00kb" },
    { name: "coffee.zip", size: "342.00kb" },
  ]);

  return (
    <div className="max-w-4xl  mx-auto bg-white rounded-xl shadow ">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 rounded-t-xl">
        <h2 className="font-semibold text-gray-700">New message</h2>
      </div>

      {/* Input fields */}
      <div className="px-4 py-2 border-b border-gray-200">
        <input
          type="text"
          placeholder="To"
          className="w-full outline-none text-sm py-1"
        />
      </div>
      <div className="px-4 py-2 border-b border-gray-200">
        <input
          type="text"
          placeholder="Subject"
          className="w-full outline-none text-sm py-1"
        />
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-3 px-4 py-2 border-b border-gray-200 text-gray-600">
        <button className="p-1 hover:bg-gray-100 rounded"><Bold size={16} /></button>
        <button className="p-1 hover:bg-gray-100 rounded"><Italic size={16} /></button>
        <button className="p-1 hover:bg-gray-100 rounded"><Link size={16} /></button>
        <button className="p-1 hover:bg-gray-100 rounded"><List size={16} /></button>
        <button className="p-1 hover:bg-gray-100 rounded"><ListOrdered size={16} /></button>
        <button className="p-1 hover:bg-gray-100 rounded"><Image size={16} /></button>
        <button className="p-1 hover:bg-gray-100 rounded"><Quote size={16} /></button>
        <button className="p-1 hover:bg-gray-100 rounded"><LayoutGrid size={16} /></button>
        <button className="p-1 hover:bg-gray-100 rounded"><Play size={16} /></button>
        <button className="p-1 hover:bg-gray-100 rounded"><Undo size={16} /></button>
        <button className="p-1 hover:bg-gray-100 rounded"><Redo size={16} /></button>
      </div>

      {/* Message body */}
      <div className="px-4 py-4 min-h-[200px]">
        <textarea
          placeholder="Write your message..."
          className="w-full h-40 resize-none outline-none text-sm"
        ></textarea>
      </div>

      {/* Attachments */}
      <div className="px-4 bg-gray-50 border-t border-gray-200 space-y-2">
        {attachments.map((file, i) => (
          <div
            key={i}
            className="flex items-center justify-between  px-3 py-2 rounded text-sm text-gray-600"
          >
            <span>{file.name} ({file.size})</span>
            <button
              onClick={() =>
                setAttachments(attachments.filter((_, idx) => idx !== i))
              }
              className="text-gray-400 hover:text-red-500"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 bg-gray-50 rounded-b-xl">
        <div className="flex items-center gap-2">
          <button className="px-4 py-1.5 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm">
            Send
          </button>
          <button className="p-1 hover:bg-gray-200 rounded">
            <Paperclip size={18} />
          </button>
          <button className="p-1 hover:bg-gray-200 rounded">
            <Image size={18} />
          </button>
        </div>
        <button className="p-2 hover:bg-gray-200 rounded">
          <Trash2 size={18} className="text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default ComposeBox;
