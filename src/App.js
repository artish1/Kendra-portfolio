import React from "react";
import "./App.css";
import HomePage from "./components/organisms/HomePage";
import NavBar from "./components/molecules/NavBar";
import { Route } from "react-router-dom";
import AboutPage from "./components/organisms/AboutPage";

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
    </div>
  );
}

export default App;
