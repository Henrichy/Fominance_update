import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BuyGiftCards from "./components/buyGiftCard";
import Home from "./components/Home";
import About from "./components/About";
import Mostpopular from "./components/Mostpopular";
import Faq from "./components/Faq"

import BestDeals from "./components/BestDeals";
import BlogPost from "./components/Blogpost";




function App() {
  return (
    <div className="max-w-[1512px mx-auto]" >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<BuyGiftCards />} />
          <Route path="/about" element={<About />} />
          <Route path="/mostpopularcards" element={<Mostpopular />} />

          <Route path="/faq" element={<Faq/>}/>
          <Route path="/bestdeals" element={<BestDeals />} />
          <Route path="/community/blog" element={<BlogPost />} />

        </Routes>
      </Router>
    </div>
  );
}


export default App;
