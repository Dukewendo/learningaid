import React from "react";

//Pages
import Header from "./Header";
import Allcards from "./Allcards";

export default function Learninghome(props) {
  const cardData = props.cardData;
  return (
    <>
      <Header />
      <input type="text" placeholder="Search cards" className="card-search" />
      <Allcards cardData={cardData} />
    </>
  );
}
