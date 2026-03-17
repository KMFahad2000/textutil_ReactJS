import React, { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from './Components/alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 3500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      showAlert("Light mode enabled", "success");
    }
  };

  return (
    <Router>
      <div className={mode}>
        <Navbar 
          title="TextUtils" 
          aboutText="About" 
          mode={mode} 
          toggleMode={toggleMode} 
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route 
              path="/about" 
              element={<About mode={mode} />} 
            />
            <Route 
              path="/" 
              element={
                <Textform
                  showAlert={showAlert}
                  heading="Try TextUtils - word counter, character counter"
                  mode={mode}
                />
              } 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
