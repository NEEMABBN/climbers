import React from "react";
import Navbar from "./Layouts/Navbar";
import { Route, Routes } from "react-router-dom";
import router from "./router";
import Footer from "./Layouts/Footer";

function App() {
  return (
    <div className="w-full flex flex-col items-center overflow-hidden pt-[125px]">
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
