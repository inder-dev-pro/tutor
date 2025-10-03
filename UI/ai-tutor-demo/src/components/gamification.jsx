// components/Gamification.jsx
export default function Gamification({ score }) {
    return (
      <div className="bg-white p-4 rounded-2xl shadow-md text-center">
        <h3 className="font-bold text-lg"> Rewards </h3>
        <p className="mt-2">Points: <span className="font-semibold">{score}</span></p>
        {score >= 10 && <p className="text-green-600 mt-2">🏆 Badge: Quick Learner</p>}
      </div>
    );
  }
  