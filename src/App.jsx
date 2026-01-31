import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Education from "./pages/education/Education.jsx";
import Profession from "./pages/profession/Profession.jsx";
import Projects from "./pages/projects/Projects.jsx";
import logo from "./assets/jf-logo.png";

import { Menu, X, User, GraduationCap, Briefcase, Folder } from "lucide-react";

import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home", icon: <User />, class: "home" },
    {
      to: "/opleiding",
      label: "Opleiding",
      icon: <GraduationCap />,
      class: "education",
    },
    {
      to: "/beroep",
      label: "Beroep",
      icon: <Briefcase />,
      class: "profession",
    },
    {
      to: "/projecten",
      label: "Projecten",
      icon: <Folder />,
      class: "projects",
    },
  ];

  return (
    <BrowserRouter>
      <nav className="hero">
        <NavLink to="/" className="hero__title">
          <img className="hero__logo" src={logo} alt="Logo" />
          <p className="hero__brand">Portfolio</p>
        </NavLink>

        {/* Mobile toggle button */}
        <button
          className="hero__toggle"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle menu"
        >
          {sidebarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Overlay for mobile sidebar */}
        <div
          className={`hero__overlay ${sidebarOpen ? "active" : ""}`}
          onClick={() => setSidebarOpen(false)}
        />

        <div className={`hero__nav ${sidebarOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `hero__link hero__link--${item.class}${isActive ? " active" : ""}`
              }
              onClick={() => setSidebarOpen(false)} // close sidebar on click
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
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
