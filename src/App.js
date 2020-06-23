import React from "react";
import "./App.css";
import HomePage from "./components/organisms/HomePage";
import NavBar from "./components/molecules/NavBar";
import { Route } from "react-router-dom";
import AboutPage from "./components/organisms/AboutPage";
import SignLingoPage from "./components/organisms/SignLingoPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/">
        <HomePage />
      </Route>

      <Route exact path="/about">
        <AboutPage />
      </Route>

      <Route exact path="/work/sign-lingo">
        <SignLingoPage />
      </Route>
    </div>
  );
}

export default App;
