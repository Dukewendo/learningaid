import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

//Routes
import Learninghome from "./components/Learninghome";
import Singlecard from "./components/Singlecard";
import Newcard from "./components/Newcard";

//data  swap to localstorage
import cardData from "./components/mockdata.json";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Learninghome cardData={cardData} />}></Route>
        <Route path="/:id" element={<Singlecard cardData={cardData} />}></Route>
        <Route path="/newcard" element={<Newcard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
