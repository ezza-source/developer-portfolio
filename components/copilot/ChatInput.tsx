"use client";

import { useState, FormEvent, KeyboardEvent } from "react";
import { Send } from "lucide-react";

type ChatInputProps = {
  onSend: (message: string) => void;
  disabled?: boolean;
};

export default function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="sticky bottom-0 border-t border-[#333] bg-[#252526] p-4 flex-shrink-0">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask Copilot..."
          disabled={disabled}
          className="flex-1 bg-[#3c3c3c] text-[#cccccc] placeholder-[#858585] rounded px-3 py-2 text-sm resize-none outline-none focus:ring-1 focus:ring-[#007acc] disabled:opacity-50 max-h-32"
          rows={1}
          style={{
            minHeight: "36px",
            maxHeight: "128px",
          }}
        />
        <button
          type="submit"
          disabled={disabled || !input.trim()}
          className="bg-[#0e639c] hover:bg-[#1177bb] disabled:bg-[#3c3c3c] disabled:text-[#858585] text-white rounded px-3 py-2 transition-colors disabled:cursor-not-allowed flex items-center justify-center min-w-[44px]"
          aria-label="Send message"
        >
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}
