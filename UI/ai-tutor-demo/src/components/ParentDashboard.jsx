// src/components/ParentDashboard.jsx
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";

const topicData = [
  { topic: "Algebra", completed: 8, total: 10, percentage: 80 },
  { topic: "Geometry", completed: 6, total: 8, percentage: 75 },
  { topic: "Fractions", completed: 9, total: 10, percentage: 90 },
  { topic: "Statistics", completed: 4, total: 6, percentage: 67 },
  { topic: "Trigonometry", completed: 3, total: 8, percentage: 38 },
];

const weeklyProgressData = [
  { week: "Week 1", hours: 4.5, quizzes: 3, score: 78 },
  { week: "Week 2", hours: 5.2, quizzes: 4, score: 82 },
  { week: "Week 3", hours: 6.1, quizzes: 5, score: 85 },
  { week: "Week 4", hours: 5.8, quizzes: 4, score: 88 },
  { week: "Week 5", hours: 7.2, quizzes: 6, score: 91 },
  { week: "Week 6", hours: 6.5, quizzes: 5, score: 89 },
];

const subjectPerformanceData = [
  { subject: "Math", score: 87, time: "12h 30m", progress: 85 },
  { subject: "Science", score: 92, time: "8h 45m", progress: 78 },
  { subject: "English", score: 84, time: "6h 20m", progress: 72 },
  { subject: "History", score: 79, time: "4h 15m", progress: 65 },
];

const achievementData = [
  { name: "Math Master", value: 3, color: "#3b82f6" },
  { name: "Quiz Champion", value: 2, color: "#facc15" },
  { name: "Study Streak", value: 1, color: "#16a34a" },
  { name: "Problem Solver", value: 4, color: "#ef4444" },
];

const COLORS = ["#3b82f6", "#facc15", "#16a34a", "#ef4444"];

export default function ParentDashboard() {
  return (
    <div className="space-y-8">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Total Study Time</p>
              <p className="text-3xl font-bold">32h 45m</p>
            </div>
            <div className="text-4xl opacity-80">⏰</div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm font-medium">Average Score</p>
              <p className="text-3xl font-bold">87%</p>
            </div>
            <div className="text-4xl opacity-80">📊</div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-2xl shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm font-medium">Quizzes Completed</p>
              <p className="text-3xl font-bold">27</p>
            </div>
            <div className="text-4xl opacity-80">🎯</div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm font-medium">Current Streak</p>
              <p className="text-3xl font-bold">12 days</p>
            </div>
            <div className="text-4xl opacity-80">🔥</div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Topic Progress */}
        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Topic Progress</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topicData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="topic" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: 'none', 
                  borderRadius: '8px',
                  color: 'white'
                }} 
              />
              <Legend />
              <Bar dataKey="completed" fill="#3b82f6" name="Completed" radius={[4, 4, 0, 0]} />
              <Bar dataKey="total" fill="#e2e8f0" name="Total" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Weekly Performance */}
        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Weekly Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={weeklyProgressData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="week" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: 'none', 
                  borderRadius: '8px',
                  color: 'white'
                }} 
              />
              <Legend />
              <Area type="monotone" dataKey="score" stroke="#16a34a" fill="#16a34a" fillOpacity={0.3} strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Subject Performance & Achievements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Subject Performance */}
        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Subject Performance</h2>
          <div className="space-y-4">
            {subjectPerformanceData.map((subject, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {subject.subject.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{subject.subject}</h3>
                    <p className="text-sm text-slate-600">{subject.time} studied</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-slate-900">{subject.score}%</p>
                  <div className="w-20 bg-slate-200 rounded-full h-2 mt-1">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" 
                      style={{ width: `${subject.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Recent Achievements</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={achievementData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label={({ name, value }) => `${name}: ${value}`}
              >
                {achievementData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: 'none', 
                  borderRadius: '8px',
                  color: 'white'
                }} 
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Study Insights */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-semibold mb-6">📈 Study Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="font-semibold mb-2">Best Performance</h3>
            <p className="text-slate-300">Science (92% average)</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">⏰</div>
            <h3 className="font-semibold mb-2">Peak Study Time</h3>
            <p className="text-slate-300">4:00 PM - 6:00 PM</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">📚</div>
            <h3 className="font-semibold mb-2">Focus Area</h3>
            <p className="text-slate-300">Trigonometry needs attention</p>
          </div>
        </div>
      </div>
    </div>
  );
}
