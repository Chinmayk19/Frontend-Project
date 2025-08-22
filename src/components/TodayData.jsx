import {
  FaYenSign,
  FaFileInvoice,
  FaUsers,
  FaTruck,
  FaVideo,
  FaUserPlus,
  FaChartLine,
  FaShoppingCart,
} from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function TodayData() {
  const data = [
    {
      label: "Payment amount",
      value: 8992,
      yesterday: 8638,
      icon: <FaYenSign />,
      color: "bg-red-100 text-red-600",
    },
    {
      label: "Payment order",
      value: 793,
      yesterday: 753,
      icon: <FaFileInvoice />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      label: "Paying customer",
      value: 280,
      yesterday: 320,
      icon: <FaUsers />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      label: "Pending orders",
      value: 480,
      yesterday: 470,
      icon: <FaTruck />,
      color: "bg-green-100 text-green-600",
    },
    {
      label: "Live stream viewers",
      value: 23466,
      yesterday: 22089,
      icon: <FaVideo />,
      color: "bg-pink-100 text-pink-600",
    },
    {
      label: "New attention",
      value: 4890,
      yesterday: 3800,
      icon: <FaUserPlus />,
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      label: "Cumulative attention",
      value: 135743,
      yesterday: 130493,
      icon: <FaChartLine />,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      label: "Number of orders",
      value: 5249,
      yesterday: 4680,
      icon: <FaShoppingCart />,
      color: "bg-teal-100 text-teal-600",
    },
  ];
  const chartData = data.slice(0, 4).map((item) => ({
    name: item.label,
    Today: item.value,
    Yesterday: item.yesterday,
  }));

  return (
    <section className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold">Today's data</h2>
        <span className="text-sm text-pink-500 cursor-pointer">More</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white p-4 shadow-sm rounded-lg flex justify-between items-center"
          >
            <div>
              <p className="text-gray-500 text-sm">{item.label}</p>
              <h3 className="text-xl font-bold">{item.value.toLocaleString()}</h3>
              <p className="text-gray-400 text-xs">
                Yesterday {item.yesterday.toLocaleString()}
              </p>
            </div>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${item.color}`}
            >
              {item.icon}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h3 className="font-semibold mb-4">Comparison (Today vs Yesterday)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Today" fill="#6366f1" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Yesterday" fill="#e5e7eb" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
