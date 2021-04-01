import React from "react";
import Navbar from "./components/navbar/Navbar";
import GlobalStyle from "./GlobalStyle";
// import LoginSystem from "./components/loginSystem/LoginSystem";
import ToggleNavbar from "./components/navbar/ToggleNavbar";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <ToggleNavbar />
      {/* <LoginSystem reverse={true} /> */}
    </div>
  );
}

export default App;
