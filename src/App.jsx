import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import HomePage from "./(tabs)/homepage";
import About from "./(tabs)/about";
import Portfolio from "./(tabs)/portfolio";
import Services from "./(tabs)/services";
import Contact from "./(tabs)/contact";

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Router>
        <Header />
        <Routes>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
