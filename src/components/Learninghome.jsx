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
    if (window.confirm("Are you sure?")) {
      localStorage.clear();
      window.location.reload();
    } else {
      return false;
    }
  }

  const [filterCards, setfilterCards] = useState("");

  function handleSearch(e) {
    setfilterCards(e.target.value);
  }

  let filteredCards = cardData.filter((cardData) => {
    return cardData.cardtitle.toLowerCase().includes(filterCards.toLowerCase());
  });

  const storageSize = new Blob(Object.values(localStorage)).size;

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

      <Allcards cardData={filteredCards} />
      <div className="clear-all">
        <button className="clear-all-button" onClick={handlebuttonClick}>
          Clear all cards
        </button>
        <h5>
          This page is using {((storageSize / 5000000) * 100).toFixed(5)} % of
          localStorage memory
        </h5>
      </div>
    </>
  );
}
