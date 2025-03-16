import React from "react";
import HomePage from "./HomePage";
import Services from "./Services";  
import Aim from "./Aim";
import Footer from "./footer";
import Faq from "./faq";
import Scroll from "./Scroll";
import ContactUs from "./ContactUs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HomePage />  
      <Aim/>
      <Services />
      <Faq/>
      <ContactUs/>
      <Footer />
      <Scroll />
    </div>
  );
}

export default App;
