import React, { useState, useContext } from "react";
import { DataContext } from "./DataContext";
import { Upload, Send } from "lucide-react";

export default function DataAIAssistant() {
   const { rows, headers } = useContext(DataContext);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "👋 Hi! I'm your DataAI Assistant. Upload a CSV and ask me anything about your data.",
    },
  ]);

  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);
const [loading, setLoading] = useState(false);

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];

    if (uploadedFile) {
      setFile(uploadedFile);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `✅ CSV Uploaded: ${uploadedFile.name}\n\nYou can now ask questions about your data.`,
        },
      ]);
    }
  };
const sendMessage = async () => {
  if (!input.trim()) return;

  const question = input;

  setMessages((prev) => [
    ...prev,
    {
      role: "user",
      content: question,
    },
  ]);

  setInput("");
  setLoading(true);

  try {
    const response = await fetch(
      "http://localhost:5000/chat",
      {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question,
            rows,
            headers,
          }),
        }
      );
const data = await response.json();

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: data.answer,
      },
    ]);
  } catch (error) {
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: "❌ Error getting AI response.",
      },
    ]);
  }

  setLoading(false);
};



  return (
    <div className="h-screen bg-[#081221] text-white flex justify-center p-6 pt-24">
      <div className="w-full max-w-5xl bg-[#0d1628] rounded-2xl border border-slate-800 flex flex-col">

        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">DataAI Assistant</h1>
            <p className="text-green-400 text-sm">
              ● Online • Powered by AI
            </p>
          </div>
</div>

       
<div className="flex-1 overflow-y-auto p-6 space-y-5">
  {messages.map((msg, index) => (
    <div
      key={index}
      className={`flex ${
        msg.role === "user"
          ? "justify-end"
          : "justify-start"
  }`}
    >
      <div
        className={`max-w-[75%] p-4 rounded-2xl ${
          msg.role === "user"
            ? "bg-indigo-600"
            : "bg-slate-800"
    }`}
      >
        <p className="whitespace-pre-wrap">
          {msg.content}
        </p>
      </div>
    </div>
  ))}

  {/* Loading Message */}
  {loading && (
    <div className="flex justify-start">
      <div className="bg-slate-800 p-4 rounded-2xl">
        🤖 Thinking...
      </div>
    </div>
  )}
</div>
       
        {/* Input */}
        <div className="border-t border-slate-800 p-4">
          <div className="flex gap-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && sendMessage()
              }
              placeholder="Ask a question about your data..."
              className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 outline-none"
            />

            <button
              onClick={sendMessage}
              className="bg-indigo-600 hover:bg-indigo-700 px-5 rounded-xl"
            >
              ➤
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}