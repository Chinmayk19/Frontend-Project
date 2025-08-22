import { FaBars } from "react-icons/fa";

export default function Topbar({ onMenuClick }) {
  return (
    <header className="flex justify-between gap-2 items-center bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2 md:gap-3">
        {/* Mobile menu button */}
        <button className="md:hidden text-gray-600" onClick={onMenuClick}>
          <FaBars size={22} />
        </button>

        {/* Logo + badge */}
        <div className="flex flex-row items-center gap-1 sm:gap-2">
          <p className="font-bold text-sm sm:text-base md:text-lg w-fit text-center">
            Shoppie
          </p>
          <span className="bg-pink-100 text-pink-600 text-[9px] sm:text-[10px] md:text-xs px-1.5 py-0.5 rounded">
            Basic
          </span>
        </div>
      </div>

      {/* Right menu */}
      <div className="flex gap-3 sm:gap-4 md:gap-6 text-gray-500 items-center text-xs sm:text-sm md:text-base">
        <span>Notice</span>
        <span className="text-center">Help</span>
        <span className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gray-300 rounded-full" />
      </div>
    </header>
  );
}
