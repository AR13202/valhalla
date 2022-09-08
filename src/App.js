import React from "react";
import Navbar from "./components/Navbar";
import Img from "./components/Logo2.jpg";
import "./index.css";
function App() {
  
     return<>
     <Navbar />
     <div className="container">
      <img  classname="bgimg" src={Img} />
      <div className="bgtext"><b> Navbar</b></div>
      <button className="b1">abc</button>
      </div>
     </>
      
    

}

export default App;
