import React from "react";

export default function Allcards(props) {
  const cardData = props.carddata;

  return (
    <div className="card-container">
      <h1>test</h1>
      {cardData.map((item, index) => (
        <div className="card-content">
          <h2 key={index}>Card Name: {item.cardname}</h2>
          <h3>Catagory: {item.catagory}</h3>
          <h4>Link</h4>
        </div>
      ))}
    </div>
  );
}
