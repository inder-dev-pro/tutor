// components/ConsentModal.jsx
import { useState } from "react";

export default function ConsentModal({ onConsent }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full text-center">
        <h2 className="text-xl font-bold mb-4">Parental Consent</h2>
        <p className="mb-4 text-gray-600">
          To comply with GDPR, we need parental consent before continuing.
        </p>
        <label className="flex items-center justify-center gap-2 mb-4">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          I am a parent/guardian and consent to my child using this demo
        </label>
        <button
          disabled={!checked}
          onClick={onConsent}
          className={`px-4 py-2 rounded-lg ${
            checked ? "bg-blue-600 text-white" : "bg-gray-400 text-gray-200"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
