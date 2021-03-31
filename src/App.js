import React from "react";
// import Navbar from "./components/navbar/Navbar";
import SignUp from "./components/loginSystem/SignUp";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      {/* <Navbar /> */}
      <SignUp reverse={true} />
    </div>
  );
}

export default App;
