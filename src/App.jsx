import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Syllabus from "./pages/Syllabus";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import RegisterModal from "./components/RegisterModal";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Common Header */}
      <Header />

      {/* Page Routes */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/syllabus" element={<Syllabus />} />
          {/* optional: 404 page */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>

 {/* 🔔 Auto popup registration modal */}
      <RegisterModal />

      {/* Common Footer */}
      <Footer />
    </div>
  );
}

export default App;
