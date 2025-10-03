// src/pages/Dashboard.jsx
import ParentDashboard from "../components/ParentDashboard";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2 mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">👨‍👩‍👦 Parent Dashboard</h1>
        <p className="text-lg text-slate-600">Track your child's learning progress and achievements.</p>
      </div>
      <ParentDashboard />
    </div>
  );
}
