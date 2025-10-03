// components/Sidebar.jsx
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Student Dashboard", icon: "🎓" },
    { path: "/dashboard", label: "Parent Dashboard", icon: "👨‍👩‍👦" },
    { path: "/about", label: "About Us", icon: "ℹ️" },
  ];

  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">
          <span className="text-blue-400">AI</span> Tutor
        </h1>
        <p className="text-slate-400 text-sm mt-1">Personalized Learning</p>
      </div>
      
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              location.pathname === item.path
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>
      
      <div className="mt-8 pt-6 border-t border-slate-700">
        <div className="text-xs text-slate-400">
          <p>© 2024 AI Tutor</p>
          <p className="mt-1">Empowering Education</p>
        </div>
      </div>
    </div>
  );
}
