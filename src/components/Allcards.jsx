import React from "react";
import "../components/allcards.css";

export default function Allcards(props) {
  let cardData = props.cardData;

  return (
    <div className="card-container">
      {cardData.map((item) => (
        <>
          <div className="card-content" key={item.cardtitle}>
            <a className="card-link" href={`learninghome/#${item.cardtitle}`}>
              <h3 className="card-title">Card Title: {item.cardtitle}</h3>
              <h5 className="card-category">Category: {item.cardcategory}</h5>
              <h5 className="card-note">Notes: {item.cardnote}</h5>
            </a>
          </div>
        </>
      ))}
    </div>
  );
}
