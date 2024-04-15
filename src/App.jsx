import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BuyGiftCards from "./components/buyGiftCard";
import Home from "./components/Home";
import About from "./components/About";
import Mostpopular from "./components/Mostpopular";
import Faq from "./components/Faq"

import BestDeals from "./components/BestDeals";
import BlogPost from "./components/Blogpost";
import Affiliate from "./components/affiliate";
import Cont from "./components/Contact";
import SignUp from "./components/signup";
import SignIn from "./components/signin";




function App() {
  return (
    <div className="max-w-[1512px mx-auto]" >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<BuyGiftCards />} />
          <Route path="/about" element={<About />} />
          <Route path="/mostpopularcards" element={<Mostpopular />} />

          <Route path="/support/faq" element={<Faq/>}/>
          <Route path="/bestdeals" element={<BestDeals />} />
          <Route path="/community/blog" element={<BlogPost />} />
          <Route path="/community/affiliate" element={<Affiliate />} />
          <Route path="/support/contact" element={<Cont />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />



        </Routes>
      </Router>
    </div>
  );
}


export default App;
