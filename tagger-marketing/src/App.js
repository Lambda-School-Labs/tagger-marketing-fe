// import dependencies
import React from "react";

//import Components
import About from "./components/About";
import Features from './components/Features';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div class="wrapper">
      <Header />
      <About />
      <div class='footer-background'>
      <Footer />
      </div>
    </div>
  );
}

export default App;
