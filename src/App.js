import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./index.css"
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home"
import Accommodation from "./pages/Accomodation/Accomodation"
import Explore from "./pages/Explore/Explore"
import DropDown from "./components/DropDown/DropDown";


function App () {
  return (
    <div className="container">
    <Router basename="/">
      <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="accommodation" element={<Accommodation />} />
        <Route path="explore" element={<Explore />} />
     </Routes>
    </Router>
    </div>
  );
}


export default App;
