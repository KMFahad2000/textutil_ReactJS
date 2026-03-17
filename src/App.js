import React, { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";

function App() {
  const [mode, setMode] = useState("light"); // ✅ Single source of truth

  const togglemode = () => {
    setMode(mode === "light" ? "dark" : "light"); // ✅ Simple toggle
  };

  return (
    <div className={mode}> {/* ✅ Apply to whole App */}
      <Navbar title="Textutils" aboutText="About Us" mode={mode} togglemode={togglemode} />
      <div className="container my-4">
        <About />
        <br />
        <hr className="border border-3 border-dark" />
        <Textform head="Text analyzers" />
      </div>
    </div>
  );
}

export default App;
