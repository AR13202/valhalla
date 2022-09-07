import React from "react";
import Navbar from "./components/Navbar";
import Img from "./components/Logo.jpg";
import "./index.css";
function App() {
  
     return<>
     <Navbar />
      <div className="container">
        <div className="logo"><img src={Img}  alt="" /></div>
        <div className="letsStart">HI</div>
      </div>
     </>
      
    

}

export default App;
