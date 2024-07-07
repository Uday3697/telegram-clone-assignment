import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/global.css";
import Home from "./pages/Home";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
// import ThemeToggleButton from "./components/ThemeToggle";
import "./styles/themes.css";
const ThemedApp: React.FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      {/* <ThemeToggleButton /> */}
      <Home />
    </>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ThemedApp />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
