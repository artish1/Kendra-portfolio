import React from "react";
import "./App.css";
import HomePage from "./components/organisms/HomePage";
import NavBar from "./components/molecules/NavBar";
import { Route } from "react-router-dom";
import AboutPage from "./components/organisms/AboutPage";
import SignLingoPage from "./components/organisms/SignLingoPage";
import RecycleIQPage from "./components/organisms/RecycleIQPage";
import WanderlustPage from "./components/organisms/WanderlustPage";

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

      <Route exact path="/work/recycle-iq">
        <RecycleIQPage />
      </Route>

      <Route exact path="/work/wanderlust">
        <WanderlustPage />
      </Route>
    </div>
  );
}

export default App;
