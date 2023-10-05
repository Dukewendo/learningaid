import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../components/learninghome.css";

//Pages
import Header from "./Header";
import Allcards from "./Allcards";

export default function Learninghome() {
  const [cardData, setCardData] = useState([]);

  const fetchCardData = () => {
    const data = JSON.parse(localStorage.getItem("session")) || [];
    setCardData(data);
  };

  const navigate = useNavigate();

  useEffect(() => {
    console.log("fetching localStorage data");
    fetchCardData();
  }, [navigate]);

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
    <p>Testing update 1</p>
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
        <p className="localstorage-para">
          This page is using {((storageSize / 5000000) * 100).toFixed(5)} % of
          your 5Mb local storage memory
        </p>
      </div>
    </>
  );
}
