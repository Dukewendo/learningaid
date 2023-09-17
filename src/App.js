import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

//Routes
import Learninghome from "./components/Learninghome";
import Singlecard from "./components/Singlecard";


//data
import cardData from "./components/mockdata.json"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Learninghome cardData ={cardData}/>} />
        <Route path="/:id" element={<Singlecard cardData ={cardData}/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
