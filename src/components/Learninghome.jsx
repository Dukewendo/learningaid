import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "../components/learninghome.css";

//Pages
import Header from "./Header";
import Allcards from "./Allcards";

export default function Learninghome() {
  let cardData = JSON.parse(localStorage.getItem("session")) || [];

  const navigate = useNavigate();

  function handleClick() {
    navigate("/newcard");
  }

  function handlebuttonClick() {
    localStorage.clear();
    window.location.reload();
  }

  const [filterCards, setfilterCards] = useState("");

  function handleSearch(e) {
    setfilterCards(e.target.value);
  }

  let filteredCards = cardData.filter((cardData) => {
    return console.log(
      cardData.cardtitle.toLowerCase().includes(filterCards.toLowerCase())
    );
  });

  const storageSize = new Blob(Object.values(localStorage)).size;
  console.log(`space left ${10000000 - storageSize} bytes `);

  return (
    <>
      <Header />
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by title"
          className="card-search"
          onChange={handleSearch}
        />
      </div>
      <div className="button-container">
        <button className="add-card-button" onClick={handleClick}>
          Add card
        </button>
      </div>

      <Allcards cardData={cardData} />

      <button onClick={handlebuttonClick}>Clear all cards</button>
    </>
  );
}
