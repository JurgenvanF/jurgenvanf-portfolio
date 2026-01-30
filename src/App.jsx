import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Education from "./pages/education/Education.jsx";
import Profession from "./pages/profession/Profession.jsx";
import Projects from "./pages/projects/Projects.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> | <Link to="/opleiding">Opleiding</Link> |{" "}
        <Link to="/beroep">Beroep</Link> |{" "}
        <Link to="/projecten">Projecten</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/opleiding" element={<Education />} />
        <Route path="/beroep" element={<Profession />} />
        <Route path="/projecten" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
