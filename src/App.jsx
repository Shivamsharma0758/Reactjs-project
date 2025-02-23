import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/pages/Home/Home";
import PlaceHolder from "./Components/pages/PlaceHolder/PlaceHolder";
import Cart from "./Components/pages/Cart/Cart";
import Footer from "./Components/footer/Footer";
import Login from "./Components/Loginpages/Login";


const App = () => {
  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/order" element={<PlaceHolder />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
