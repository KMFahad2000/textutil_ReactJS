import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";

function App() {
  return (
    <>
      <Navbar title=" Textutils" aboutText="About Us" />
      <div className="container my-4">
        <Textform head="Text analyzers" />
      </div>
    </>
  );
}

export default App;
