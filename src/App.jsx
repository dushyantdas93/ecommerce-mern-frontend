import React from "react";
import Navbar from "./pages/Navbar.jsx";
import Login from "./pages/Login.jsx";
import Footer from "./pages/Footer.jsx";
import Register from "./pages/Register.jsx";

const App = () => {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <Login />
      {/* <Register/> */}
      <Footer />
    </div>
  );
};

export default App;
