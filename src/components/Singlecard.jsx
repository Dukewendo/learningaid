import React from "react";
import { useParams } from "react-router-dom";

export default function Singlecard({cardData}) {
  const { id } = useParams();

  const card = cardData.find((item) => item.id === id);

  if (!card) {
    return <div className="no-card">Not found</div>
  }


  return (
    <div single-card-container>
      <div className="card-title">Card Title: {card.id}</div>
      <div className="card-category">Category: {card.category}</div>
      <div className="card-note">Notes: </div>
    </div>
  );
}
