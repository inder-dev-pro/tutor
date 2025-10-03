// components/Quiz.jsx
import { useState } from "react";

export default function Quiz({ onScore }) {
  const question = {
    text: "Which of the following is a metal?",
    options: ["Oxygen", "Iron", "Sulfur", "Chlorine"],
    correct: "Iron",
    solution: `
✅ Iron is the correct answer.

Metals have certain distinguishing properties:
- **Lustrous (shiny)** appearance
- **Malleable** (can be hammered into sheets)
- **Ductile** (can be drawn into wires)
- **Good conductors** of heat and electricity
- Usually **form positive ions (cations)** in reactions

Now, lets compare with the options:
- **Oxygen** → Non-metal gas, supports combustion but is not a conductor.
- **Sulfur** → Non-metal solid, brittle and non-conductive.
- **Chlorine** → Non-metal gas, greenish-yellow, reactive.
- **Iron** → Strong, malleable, ductile, conducts heat and electricity → ✔️ a metal.

👉 Therefore, **Iron** is a metal, while the others are non-metals.
    `,
    hints: {
      Oxygen: "💡 Oxygen is a gas",
      Sulfur: "💡 Sulfur is brittle and non-shiny.",
      Chlorine: "💡 Chlorine is a reactive greenish-yellow gas, not a conductor of electricity.",
    },
  };

  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [hint, setHint] = useState("");
  const [showSolution, setShowSolution] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);

  const checkAnswer = (option) => {
    setSelected(option);

    if (option === question.correct) {
      setFeedback("✅ Correct! Great job! 🎉");
      setShowSolution(true);
      setHint("");

      if (!answeredCorrectly) {
        setAnsweredCorrectly(true);
        onScore?.(10); // Award 10 points immediately
      }
    } else {
      setFeedback("❌ Not quite. Try again!");
      setHint(question.hints[option] || "Think about the properties of metals.");
      setShowSolution(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-md space-y-4">
      <h2 className="text-xl font-bold">{question.text}</h2>

      {/* Options */}
      <div className="space-y-2">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => checkAnswer(option)}
            disabled={answeredCorrectly} // lock all options once correct
            className={`w-full py-2 px-4 rounded-lg border text-left transition ${
              selected === option
                ? option === question.correct
                  ? "bg-green-200 border-green-400"
                  : "bg-red-200 border-red-400"
                : "bg-gray-100 hover:bg-gray-200 border-gray-300"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Feedback */}
      {feedback && (
        <p
          className={`mt-4 text-lg font-medium text-center ${
            selected === question.correct ? "text-green-700" : "text-red-700"
          }`}
        >
          {feedback}
        </p>
      )}

      {/* Hint for wrong answers */}
      {hint && selected !== question.correct && (
        <div className="mt-2 p-3 bg-yellow-50 border border-yellow-300 rounded-lg text-yellow-800">
          {hint}
        </div>
      )}

      {/* Detailed Solution */}
      {showSolution && (
        <div className="mt-4 p-4 bg-green-50 border border-green-300 rounded-lg text-gray-800 whitespace-pre-line">
          <h3 className="font-semibold text-green-800">💡 Detailed Answer:</h3>
          <p>{question.solution}</p>
        </div>
      )}
    </div>
  );
}
