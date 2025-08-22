export default function StepCards() {
  const steps = [
    { 
      title: "1. Certification", 
      desc: "Upload qualification information", 
      bg: "bg-pink-100", 
      text: "text-pink-600" 
    },
    { 
      title: "2. Upload a product", 
      desc: "Fill in product information", 
      bg: "bg-blue-100", 
      text: "text-blue-600" 
    },
    { 
      title: "3. Open for sale", 
      desc: "Choose to open any sales channel", 
      bg: "bg-purple-100", 
      text: "text-purple-600" 
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-6">
      {steps.map((s, i) => (
        <div 
          key={i} 
          className={`flex-1 p-4 rounded-lg shadow-sm ${s.bg}`}
        >
          <h3 className={`font-bold mb-1 ${s.text}`}>{s.title}</h3>
          <p className="text-sm text-gray-700">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}
