// src/pages/Home.jsx
import { useState } from "react";
import Quiz from "../components/quiz";
import Gamification from "../components/gamification";
import LiveAvatar from "../components/LiveAvatar";

export default function Home() {
  const [score, setScore] = useState(0);

  return (
    <div className="relative min-h-screen">
      {/* Classroom Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Classroom decorative elements */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-200 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-20 right-20 w-12 h-12 bg-green-200 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-pink-200 rounded-full opacity-40"></div>
        <div className="absolute bottom-10 right-10 w-14 h-14 bg-orange-200 rounded-full opacity-50"></div>
        
        {/* Classroom board pattern */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-green-100 to-green-200 opacity-30"></div>
        <div className="absolute top-8 left-8 w-24 h-1 bg-green-300 opacity-50"></div>
        <div className="absolute top-8 left-40 w-16 h-1 bg-green-300 opacity-50"></div>
        <div className="absolute top-8 right-8 w-20 h-1 bg-green-300 opacity-50"></div>
        
        {/* Floating educational icons */}
        <div className="absolute top-32 left-1/4 text-4xl opacity-20 animate-bounce">📚</div>
        <div className="absolute top-40 right-1/4 text-3xl opacity-20 animate-bounce" style={{animationDelay: '1s'}}>✏️</div>
        <div className="absolute bottom-32 left-1/3 text-3xl opacity-20 animate-bounce" style={{animationDelay: '2s'}}>🧮</div>
        <div className="absolute bottom-40 right-1/3 text-4xl opacity-20 animate-bounce" style={{animationDelay: '0.5s'}}>🔬</div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 space-y-8">
        <div className="text-center space-y-2 mb-8">
          <div className="flex justify-center">
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/20">
              <span className="text-2xl">🎓</span>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900">AI Tutor</h1>
              <span className="text-2xl">📖</span>
            </div>
          </div>
          <p className="text-lg text-slate-600 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
            Welcome to your personalized learning space! Practice, get feedback, and track your progress with your AI tutor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Half - Live AI Tutor (50% width) */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20 relative overflow-hidden">
            {/* Classroom board effect */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-green-500"></div>
            <LiveAvatar />
          </div>
          
          {/* Right Half - Learning Tools (50% width) */}
          <div className="space-y-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20 relative overflow-hidden">
              {/* Notebook lines effect */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-500"></div>
              <div className="absolute top-8 left-8 w-full h-px bg-blue-200 opacity-30"></div>
              <div className="absolute top-12 left-8 w-full h-px bg-blue-200 opacity-30"></div>
              <div className="absolute top-16 left-8 w-full h-px bg-blue-200 opacity-30"></div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center space-x-2">
                <span>📝</span>
                <span>Interactive Quiz</span>
              </h2>
              <Quiz onScore={(points) => setScore((prevScore) => prevScore + points)} />
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20 relative overflow-hidden">
              {/* Progress chart effect */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 to-purple-500"></div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center space-x-2">
                <span>📊</span>
                <span>Learning Progress</span>
              </h2>
              <Gamification score={score} />
            </div>
          </div>
        </div>

        {/* Classroom Footer */}
        <div className="text-center py-8">
          <div className="inline-flex items-center space-x-4 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/20">
            <span className="text-2xl">🌟</span>
            <span className="text-slate-700 font-medium">Keep up the great work!</span>
            <span className="text-2xl">🎯</span>
          </div>
        </div>
      </div>
    </div>
  );
}
