"use client";

import { useState } from "react";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import LinesNumber from "@/components/layout/lines-numbers";
import Sidebar from "@/components/layout/sidebar";
import Terminal from "@/components/layout/terminal";
import ChatPanel from "@/components/copilot/ChatPanel";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { MessageSquare } from "lucide-react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [isCopilotOpen, setIsCopilotOpen] = useState(false);

  return (
    <div className="flex flex-col size-full">
      <Header />
      <div className="flex size-full relative">
        <Sidebar />

        <ResizablePanelGroup direction="horizontal" className="size-full">
          <ResizablePanel defaultSize={isCopilotOpen ? 75 : 100}>
            <ResizablePanelGroup direction="vertical" className="size-full">
              <ResizablePanel defaultSize={91}>
                <div className="size-full flex overflow-hidden">
                  <LinesNumber />
                  <div id="scroll" className="size-full overflow-y-auto overflow-x-hidden scroll-smooth">
                    {children}
                  </div>
                </div>
              </ResizablePanel>
              <ResizableHandle className="hidden sm:block" withHandle />
              <ResizablePanel className="hidden sm:block" defaultSize={9} minSize={4} maxSize={25}>
                <Terminal />
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>

          {isCopilotOpen && (
            <>
              <ResizableHandle />
              <ResizablePanel defaultSize={25} minSize={20} maxSize={40}>
                <ChatPanel onClose={() => setIsCopilotOpen(false)} />
              </ResizablePanel>
            </>
          )}
        </ResizablePanelGroup>

        {!isCopilotOpen && (
          <button
            onClick={() => setIsCopilotOpen(true)}
            className="absolute right-4 bottom-4 bg-[#0e639c] hover:bg-[#1177bb] text-white rounded-full p-3 shadow-lg transition-colors z-10"
            aria-label="Open Copilot"
          >
            <MessageSquare size={20} />
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
}
