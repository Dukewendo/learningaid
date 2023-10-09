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

  function updateCardData(newData) {
    cardData = newData;
    localStorage.setItem("session", JSON.stringify(newData));
  }

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Learninghome cardData={cardData} updateCardData={updateCardData} />
          }
        ></Route>
        <Route
          path="/:cardtitle"
          element={
            <Singlecard
              cardData={cardData}
              updateCardData={Learninghome.updateCardData}
            />
          }
        ></Route>
        <Route
          path="/newcard"
          element={<Newcard cardData={cardData} />}
        ></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
