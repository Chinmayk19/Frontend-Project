import { FaBars } from "react-icons/fa";

export default function Topbar({ onMenuClick }) {
  return (
    <header className="flex justify-between items-center bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2 md:gap-3">
        <button className="md:hidden text-gray-600" onClick={onMenuClick}>
          <FaBars size={22} />
        </button>
        <div className="flex flex-row items-center gap-1 sm:gap-2">
          <h1 className="font-bold text-base sm:text-lg">Aoki's shop</h1>
          <span className="bg-pink-100 text-pink-600 text-[10px] sm:text-xs px-2 py-0.5 rounded">
            Basic
          </span>
        </div>
      </div>

      <div className="flex gap-4 sm:gap-6 text-gray-500 items-center text-sm sm:text-base">
        <span>Notice</span>
        <span>Help center</span>
        <span className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-300 rounded-full" />
      </div>
    </header>
  );
}
