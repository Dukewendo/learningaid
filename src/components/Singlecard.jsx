import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import "../components/singlecard.css";

export default function Singlecard(props) {
  const { cardtitle } = useParams();

  const navigate = useNavigate();

  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem("session")) || [];
    setCardData(existingData);
  }, []);

  //const cardData = props.cardData;
  const card = cardData.find((item) => item.cardtitle === cardtitle);

  if (!card) {
    return <div className="no-card">Not found</div>;
  }

  function handleClick() {
    if (window.confirm("Are you sure?")) {
      const existingData = JSON.parse(localStorage.getItem("session"));
      existingData.splice(cardData.indexOf(card), 1);
      localStorage.setItem("session", JSON.stringify(existingData));
      navigate(-1);
    } else {
      return false;
    }
  }

  return (
    <div className="single-card-container">
      <Header />
      <div className="single-card-content" onClick={() => navigate(-1)}>
        <div className="card-title">
          <h2>Title: {card.cardtitle}</h2>
        </div>
        <div className="card-category">
          <h3>Category: {card.cardcategory}</h3>
        </div>
        <div className="card-note">
          <h3>Notes: {card.cardnote}</h3>
        </div>
      </div>
      <div className="delete-btn-container">
        <button className="delete-signle-card-button" onClick={handleClick}>
          delete card
        </button>
      </div>
    </div>
  );
}
