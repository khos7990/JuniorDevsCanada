import Home from "../src/Pages/Home";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={Home} />
      </Routes>
    </div>
  );
}

export default App;
