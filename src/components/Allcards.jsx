import React from "react";
import "../components/allcards.css"

export default function Allcards(props) {
  const cardData = props.carddata;

  return (
    <div className="card-container">
    
      {cardData.map((item, index) => (
        <div className="card-content">
          <h3 className="card-title" key={index}>Card Title: {item.cardtitle}</h3>
          <h4 className="card-category">Category: {item.category}</h4>
          <h5 className="card-note">Notes: {item.cardnote}</h5>
          
        </div>
      ))}
    </div>
  );
}
