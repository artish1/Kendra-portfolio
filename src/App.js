import React from "react";
import "./App.css";
import HomePage from "./components/organisms/HomePage";
import NavBar from "./components/molecules/NavBar";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/">
        <HomePage />
      </Route>
    </div>
  );
}

export default App;
