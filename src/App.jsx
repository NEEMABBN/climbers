import React from "react";
import Navbar from "./Layouts/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import router from "./router";
import Footer from "./Layouts/Footer";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div
      className={`w-full flex flex-col items-center ${
        isHomePage ? "pt-[125px]" : "pt-[75px] md:pt-[125px]"
      }`}
    >
      <Navbar />
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
