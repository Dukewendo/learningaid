import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

//Routes
import Learninghome from "./components/Learninghome";
import Singlecard from "./components/Singlecard";
import Newcard from "./components/Newcard";


function App() {
  let cardData = [];

  cardData.push(JSON.parse(localStorage.getItem("session")));
  localStorage.setItem("session", JSON.stringify(cardData));

  localStorage.setItem(
    "session",
    JSON.stringify([
      {
        id: "0",
        cardtitle: "Testcard1",
        category: "Testcategory1",
        cardnote: "test notes",
      },
    ])
  );

  let cards = JSON.parse(localStorage.getItem('session'));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Learninghome cardData={cards} />}></Route>
        <Route path="/:id" element={<Singlecard cardData={cards} />}></Route>
        <Route path="/newcard" element={<Newcard cardData={cards}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
