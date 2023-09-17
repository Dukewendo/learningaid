import React from "react";


import "../components/allcards.css";

export default function Allcards(props) {

  const cardData = props.cardData;

  return (
    <div className="card-container">
      {cardData.map((item) => (
        <div className="card-content" key={item.cardtitle}>
          <a href={`/${item.id}`}>View card</a>
          <h3 className="card-title" >
            Card Title: {item.cardtitle}
          </h3>
          <h4 className="card-category">Category: {item.category}</h4>
          <h5 className="card-note">Notes: {item.cardnote}</h5>
        </div>
      ))}
    </div>
  );
}
