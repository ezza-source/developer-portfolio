"use client";

import { useEffect, useRef } from "react";
import { Message } from "./ChatPanel";
import { User, Sparkles } from "lucide-react";

type ChatMessagesProps = {
  messages: Message[];
  isLoading: boolean;
};

export default function ChatMessages({ messages, isLoading }: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin scrollbar-thumb-[#3c3c3c] scrollbar-track-transparent">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex gap-3 mb-4 ${message.role === "user" ? "flex-row-reverse" : ""}`}
        >
          <div
            className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${
              message.role === "user"
                ? "bg-[#0e639c]"
                : "bg-[#2d2d30]"
            }`}
          >
            {message.role === "user" ? (
              <User size={14} className="text-white" />
            ) : (
              <Sparkles size={14} className="text-[#9cdcfe]" />
            )}
          </div>
          <div
            className={`flex-1 rounded-lg px-3 py-2 text-sm ${
              message.role === "user"
                ? "bg-[#0e639c] text-white"
                : "bg-[#2d2d30] text-[#cccccc]"
            }`}
          >
            <p className="whitespace-pre-wrap break-words">{message.content}</p>
            <span className="text-xs opacity-60 mt-1 block">
              {message.timestamp.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        </div>
      ))}
      {isLoading && (
        <div className="flex gap-3 mb-4">
          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#2d2d30] flex items-center justify-center">
            <Sparkles size={14} className="text-[#9cdcfe]" />
          </div>
          <div className="bg-[#2d2d30] rounded-lg px-3 py-2">
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-[#9cdcfe] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-2 h-2 bg-[#9cdcfe] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-2 h-2 bg-[#9cdcfe] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}
