// App.jsx
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/dashboard";
import About from "./pages/About";
import ConsentModal from "./components/ConsentModal";
import Sidebar from "./components/Sidebar";

function App() {
  const [consentGiven, setConsentGiven] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Show modal only if consent not given */}
      {!consentGiven && <ConsentModal onConsent={() => setConsentGiven(true)} />}

      <div className="flex">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
