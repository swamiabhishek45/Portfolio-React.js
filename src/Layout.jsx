import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./context/theme";
import About from "./components/About/About";
import { Analytics } from "@vercel/analytics/react";
import Aos from "aos";
import './App.css';

function Layout() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actual change in theme

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);


  useEffect(()=>{
    Aos.init();
  },[]);

  return (
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
          <Header />
          <Outlet>
              <About />
              <Outlet />
          </Outlet>
          <Footer />
          <Analytics />
      </ThemeProvider>
  );
}

export default Layout;
