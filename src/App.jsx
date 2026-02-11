import { useState, useEffect, useLayoutEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";
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

function AppContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initialize darkMode from localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved !== null ? saved === "true" : false; // default to light mode
  });

  useEffect(() => {
    // Scroll to hash or top whenever route changes
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [location]);

  useEffect(() => {
    if (isModalOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      const scrollY = parseInt(document.body.style.top || "0") * -1;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    }
  }, [isModalOpen]);

  // Update body class based on current route (use useLayoutEffect for immediate update)
  useLayoutEffect(() => {
    let pageClass = "home";
    if (location.pathname === "/opleiding") pageClass = "education";
    else if (location.pathname === "/beroep") pageClass = "profession";
    else if (location.pathname === "/projecten") pageClass = "projects";

    document.body.className = pageClass;
  }, [location]);

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
    <>
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
        <Route
          path="/"
          element={
            <Home isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
          }
        />

        <Route path="/opleiding" element={<Education />} />
        <Route
          path="/beroep"
          element={
            <Profession
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          }
        />
        <Route path="/projecten" element={<Projects />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
