import "./App.css";

import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import SingleMovie from "./SingleMovie";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/movies/:id' element={ <SingleMovie/>}/>
      </Routes>
    </div>
  );
}

export default App;
