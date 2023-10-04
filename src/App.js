import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import "./App.css";

//Routes
import Learninghome from "./components/Learninghome";
import Singlecard from "./components/Singlecard";
import Newcard from "./components/Newcard";

function App() {
  let cardData = JSON.parse(localStorage.getItem("session")) || [];

  localStorage.setItem("session", JSON.stringify(cardData));

  

  console.log(cardData);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Learninghome cardData={cardData} />}></Route>
        <Route path="/:cardtitle" element={<Singlecard cardData={cardData} />}></Route>
        <Route
          path="/newcard"
          element={<Newcard cardData={cardData} />}
        ></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
