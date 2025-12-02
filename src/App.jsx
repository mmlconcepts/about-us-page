import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import MainLinks from "./components/MainLinks";
import Footer from "./components/Footer";
const Projects = React.lazy(() => import("./components/Projects"));
const Members = React.lazy(() => import("./components/Members"));
const Services = React.lazy(() => import("./components/Services"));  // <-- ADD THIS
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="background-overlay">
          
          <Header />

          <Routes>
            <Route path="/" element={<MainLinks />} />
            <Route path="/projects" element={<Suspense fallback={<div>Loading...</div>}><Projects /></Suspense>} />
            <Route path="/members" element={<Suspense fallback={<div>Loading...</div>}><Members /></Suspense>} />
            <Route path="/services" element={<Suspense fallback={<div>Loading...</div>}><Services /></Suspense>} />   {/* <-- NEW ROUTE */}
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
