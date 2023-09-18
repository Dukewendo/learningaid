import React from "react";

import "../components/learninghome.css";

//Pages
import Header from "./Header";
import Allcards from "./Allcards";

export default function Learninghome(props) {
  const cardData = props.cardData;
  return (
    <>
      <Header />
      <div className="search-container">
        <input type="text" placeholder="Search cards" className="card-search" />
      </div>

      <Allcards cardData={cardData} />
    </>
  );
}
