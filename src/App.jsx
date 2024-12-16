import React, { useEffect } from "react";
import Navbar from "./Layouts/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import router from "./router";
import Footer from "./Layouts/Footer";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, [pathname]);
    return null;
  };
  return (
    <div
      className={`w-full flex flex-col items-center ${
        isHomePage ? "pt-[125px]" : "pt-[75px] md:pt-[125px]"
      }`}
    >
      <Navbar />
      <ScrollToTop />
      <Routes>
        {router.map((item, index) => (
          <Route key={index} path={item.path} element={item.element} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
