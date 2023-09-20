import React from "react";
import { useNavigate } from "react-router-dom";

import "../components/learninghome.css";

//Pages
import Header from "./Header";
import Allcards from "./Allcards";

export default function Learninghome(props) {
  const cardData = props.cardData;

  const navigate = useNavigate();
  
  function handleClick() {
    navigate("/newcard")
  }

  return (
    <>
      <Header />
      <div className="search-container">
        <input type="text" placeholder="Search cards" className="card-search" />
      </div>
      <div className="button-container">
        <button
          className="add-card-button"
          onClick={handleClick()}
        >Add card</button>
      </div>

      <Allcards cardData={cardData} />
    </>
  );
}
