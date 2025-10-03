// src/pages/About.jsx
export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">About AI Tutor</h1>
        <p className="text-xl text-slate-600">Revolutionizing Education Through Artificial Intelligence</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-slate-700 leading-relaxed">
              We believe every student deserves personalized, engaging, and effective learning experiences. 
              Our AI-powered tutoring platform adapts to each student's unique learning style, pace, and needs.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Key Features</h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-center space-x-3">
                <span className="text-green-500">✓</span>
                <span>Live AI tutoring with interactive avatars</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-green-500">✓</span>
                <span>Personalized learning paths</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-green-500">✓</span>
                <span>Real-time progress tracking</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-green-500">✓</span>
                <span>Gamified learning experience</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Our Vision</h2>
            <p className="text-slate-700 leading-relaxed">
              To create a world where every learner has access to world-class education, 
              regardless of their background or circumstances. We're building the future of 
              personalized learning.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Technology</h2>
            <p className="text-slate-700 leading-relaxed">
              Powered by cutting-edge AI and machine learning technologies, our platform 
              provides intelligent tutoring that adapts in real-time to student needs and 
              learning patterns.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-6">Ready to Transform Learning?</h2>
        <p className="text-center text-lg mb-6">
          Join thousands of students who are already experiencing the future of education.
        </p>
        <div className="text-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}
