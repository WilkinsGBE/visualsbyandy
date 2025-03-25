import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./Header";
import HomePage from "./(tabs)/homepage";
import About from "./(tabs)/about";
import Portfolio from "./(tabs)/portfolio";
import Services from "./(tabs)/services";
import Contact from "./(tabs)/contact";
import Footer from "./Footer";
import CollectionPage from "./(tabs)/CollectionPage";

const App = () => {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,rgba(0,0,0,1)_90%)]"></div>

      {/* Ensuring Content is Above the Background */}
      <div className="relative z-10">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/homepage" />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route
              path="/collections/:collectionId"
              element={<CollectionPage />}
            />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
};

export default App;
