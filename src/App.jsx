import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BuyGiftCards from "./components/buyGiftCard";
import Home from "./components/Home";
import About from "./components/About";
import Mostpopular from "./components/Mostpopular";
import BestDeals from "./components/BestDeals";
import Support from "./components/Support";



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<BuyGiftCards />} />
          <Route path="/about" element={<About />} />
          <Route path="/mostpopularcards" element={<Mostpopular />} />
          <Route path="/bestdeals" element={<BestDeals />} />
          <Route path="/support/help" element={<Support />} />


        </Routes>
      </Router>
    </>
  );
}


export default App;