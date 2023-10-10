import React from "react";
import "../components/allcards.css";

export default function Allcards(props) {

  const cardData = props.cardData;

  return (
    <div className="card-container">
      {cardData.map((item) => (
        <a className="card-link" href={`learninghome/#${item.cardtitle}`} key={item.cardtitle}>
          <div className="card-content">
            <h3 className="card-title">Card Title: {item.cardtitle}</h3>
            <h5 className="card-category">Category: {item.cardcategory}</h5>
            <h5 className="card-note">Notes: {item.cardnote}</h5>
          </div>
        </a>
      ))}
    </div>
  );
}
