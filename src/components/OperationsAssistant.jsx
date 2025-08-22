import {
  FaVideo,
  FaStore,
  FaProjectDiagram,
  FaTicketAlt,
  FaBuilding,
  FaAd,
  FaTags,
  FaWallet,
} from "react-icons/fa";

export default function OperationsAssistant() {
  const ops = [
    {
      title: "Small telecast live",
      subtitle: "Live sales in WeChat",
      icon: <FaVideo className="text-pink-500" />,
    },
    {
      title: "Mini Program Store",
      subtitle: "WeChat Mini Program Store",
      icon: <FaStore className="text-green-500" />,
    },
    {
      title: "Distribution market",
      subtitle: "One-click promotion",
      icon: <FaProjectDiagram className="text-blue-500" />,
    },
    {
      title: "Coupon",
      subtitle: "Store marketing essentials",
      icon: <FaTicketAlt className="text-red-500" />,
    },
    {
      title: "Store construction",
      subtitle: "Can be customized",
      icon: <FaBuilding className="text-blue-400" />,
    },
    {
      title: "Promoting ads",
      subtitle: "WeChat billion-level exposure",
      icon: <FaAd className="text-orange-500" />,
    },
    {
      title: "Promotion rebate",
      subtitle: "Help you sell goods",
      icon: <FaTags className="text-pink-500" />,
    },
    {
      title: "Asset Management",
      subtitle: "Income and withdrawal",
      icon: <FaWallet className="text-green-500" />,
    },
  ];

  return (
    <section className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-gray-800">Operations Assistant</h2>
        <button className="text-sm text-pink-500 hover:underline cursor-pointer">
          More
        </button>
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {ops.map((o, i) => (
          <div
            key={i}
            className="bg-white border rounded-lg p-4 shadow-sm flex flex-col items-center text-center cursor-pointer hover:shadow-md transition"
          >
            <div className="text-2xl mb-2">{o.icon}</div>
            <p className="text-gray-800 font-medium text-sm">{o.title}</p>
            <p className="text-xs text-gray-500 mt-1">{o.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
