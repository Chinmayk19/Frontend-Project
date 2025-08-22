import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StepCards from "./components/StepCards";
import TodayData from "./components/TodayData";
import OperationsAssistant from "./components/OperationsAssistant";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar - fixed height, does not scroll with main */}
      <div
        className={`fixed md:static z-40 top-0 left-0 h-screen transition-transform duration-300
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 h-screen overflow-y-auto">
        <Topbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="p-6">
          <StepCards />
          <TodayData />
          <OperationsAssistant />
        </div>
      </main>
    </div>
  );
}
