import React from "react";
import logo from "./lichess-logo.svg";
import "./App.css";
import PerfList from "./PerfList";
import { readPerfEntries } from "./actions";

function App() {
  const entries = readPerfEntries();
  return (
    <div className="main-content">
      <header className="header">
        <img src={logo} className="lichess-logo" alt="Lichess logo" />
        <h1>Lichess Speedrun</h1>
      </header>
      <h2>Ratings</h2>
      <PerfList entries={entries} />
    </div>
  );
}

export default App;
