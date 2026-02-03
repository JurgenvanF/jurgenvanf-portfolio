import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Education from "./pages/education/Education.jsx";
import Profession from "./pages/profession/Profession.jsx";
import Projects from "./pages/projects/Projects.jsx";

import {
  Menu,
  X,
  User,
  GraduationCap,
  Briefcase,
  Folder,
  Sun,
  Moon,
} from "lucide-react";

import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Initialize darkMode from localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved !== null ? saved === "true" : false; // default to light mode
  });

  // Lock body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen]);

  // Apply dark mode class and save preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

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
          <div className="hero__logo">JF</div>
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
          {/* Dark Mode Toggle */}
          <button
            className={`hero__darkmode ${
              sidebarOpen ? "hero__darkmode--mobile" : "hero__darkmode--desktop"
            }`}
            onClick={(e) => {
              setDarkMode(!darkMode);
              const link = e.currentTarget;
              link.classList.add("clicked");
              setTimeout(() => link.classList.remove("clicked"), 200);
            }}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `hero__link hero__link--${item.class}${isActive ? " active" : ""}`
              }
              onClick={(e) => {
                setSidebarOpen(false);
                const link = e.currentTarget;
                link.classList.add("clicked");
                setTimeout(() => link.classList.remove("clicked"), 200);
              }}
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
