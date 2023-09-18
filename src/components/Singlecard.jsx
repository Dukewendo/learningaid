import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import "../components/singlecard.css";

export default function Singlecard(props) {
  const { id } = useParams();

  const navigate = useNavigate();

  const cardData = props.cardData;
  const card = cardData.find((item) => item.id === id);

  if (!card) {
    return <div className="no-card">Not found</div>;
  }

  return (
    <div className="single-card-container">
      <Header />
      <div className="single-card-content">
        <div className="card-title">Card Title: {card.cardtitle}</div>
        <div className="card-category">Category: {card.category}</div>
        <div className="card-note">Notes: {card.cardnote} </div>
      </div>
      <button onClick={() => navigate(-1)}>Back to cards</button>
    </div>
  );
}
