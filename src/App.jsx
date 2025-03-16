import "./App.css";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Headers from "./Components/Headers/Headers";
import Footer from "./Components/Footer/Footer";

// Lazy Load sahifalar
const BoshSahifa = React.lazy(() => import("./Pages/BoshSahifa/BoshSahifa"));
const Kirish = React.lazy(() => import("./Pages/Kirish/Kirish"));
const Savatcha = React.lazy(() => import("./Pages/Savatcha/Savatcha"));
const Sevimlilar = React.lazy(() => import("./Pages/Sevimlilar/Sevimlilar"));
const Taqqoslash = React.lazy(() => import("./Pages/Taqqoslash/Taqqoslash"));
const NotFound = React.lazy(() => import("./Pages/NotFound/NotFound"));

function App() {
  return (
    <>
      <Headers />

      {/* Faqat bitta yuklanish */}
      <Suspense fallback={<div className="loading">⏳ Yuklanmoqda...</div>}>
        <Routes>
          <Route path="/" element={<BoshSahifa />} />
          <Route path="/Taqqoslash" element={<Taqqoslash />} />
          <Route path="/Sevimlilar" element={<Sevimlilar />} />
          <Route path="/Savatcha" element={<Savatcha />} />
          <Route path="/Kirish" element={<Kirish />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </>
  );
}

export default App;
