"use client";

import { X, Sparkles } from "lucide-react";

type ChatHeaderProps = {
  onClose: () => void;
};

export default function ChatHeader({ onClose }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-[#333] bg-[#252526] flex-shrink-0">
      <div className="flex items-center gap-2">
        <Sparkles size={16} className="text-[#9cdcfe]" />
        <span className="text-sm font-medium text-[#cccccc]">Copilot</span>
      </div>
      <button
        onClick={onClose}
        className="text-[#858585] hover:text-[#cccccc] transition-colors p-1 hover:bg-[#2d2d30] rounded"
        aria-label="Close Copilot"
      >
        <X size={16} />
      </button>
    </div>
  );
}
