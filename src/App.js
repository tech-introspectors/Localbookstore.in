import React from "react";
import Navbar from "./components/navbar/Navbar";
import GlobalStyle from "./GlobalStyle";
import LoginSystem from "./components/loginSystem/LoginSystem";
// import ToggleNavbar from "./components/navbar/ToggleNavbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Navbar />

      <LoginSystem reverse={true} />

      <Footer />
    </div>
  );
}

export default App;
