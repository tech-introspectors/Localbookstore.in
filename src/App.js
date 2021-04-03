import React from "react";
import { Route, Switch } from "react-router";
import Navbar from "./components/navbar/Navbar";
import GlobalStyle from "./GlobalStyle";
import Homepage from "./pages/Homepage/Homepage";
import LoginSystem from "./pages/loginSystem/LoginSystem";
import Profilepage from "./pages/Profilepage/Profilepage";
// import ToggleNavbar from "./components/navbar/ToggleNavbar";
// import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Navbar />

      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/profile" component={Profilepage} />
        <Route path="/loginsystem" component={LoginSystem} />
      </Switch>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
