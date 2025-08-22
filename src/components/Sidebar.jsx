import {
  FaHome,
  FaStore,
  FaBox,
  FaChartBar,
  FaWallet,
  FaCogs,
  FaShoppingCart,
  FaTimes,
} from "react-icons/fa";

export default function Sidebar({ onClose }) {
  const items = [
    { label: "Home", icon: <FaHome /> },
    { label: "Live", icon: <FaStore /> },
    { label: "Shop", icon: <FaShoppingCart /> },
    { label: "Commodity", icon: <FaBox /> },
    { label: "Order", icon: <FaShoppingCart /> },
    { label: "Data", icon: <FaChartBar /> },
    { label: "Assets", icon: <FaWallet /> },
    { label: "Application", icon: <FaCogs /> },
    { label: "Set up", icon: <FaCogs /> },
  ];

  return (
    <aside className="w-60 h-screen bg-white shadow-md p-4 relative z-50 md:static md:translate-x-0">
      {/* Close button - visible only on mobile */}
      <button
        className="absolute top-4 right-4 md:hidden text-gray-600"
        onClick={onClose}
      >
        <FaTimes size={20} />
      </button>

      <h2 className="text-xl font-bold text-indigo-600 mb-6">xiaoDianPu</h2>

      <ul className="space-y-4 text-gray-600">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-center gap-3 cursor-pointer hover:text-indigo-600"
          >
            {item.icon}
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
