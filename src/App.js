import React from "react";
import HomePage from "./HomePage";
import Services from "./Services";  
import Aim from "./Aim";
import Footer from "./footer";
import Faq from "./faq";
import Contact from "./Contact";
import Scroll from "./Scroll";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HomePage />  
      <Aim/>
      <Services />
      <Faq/>
      <Contact/>
      <Footer />
      <Scroll />
    </div>
  );
}

export default App;
