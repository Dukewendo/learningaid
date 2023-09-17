import React from "react";

//Pages
import Header from "./Header";
import Allcards from "./Allcards";

export default function Learninghome(props) {

  const cardData = props.cardData;
  return (
    <>
      <Header />
      <Allcards cardData={cardData} />
    </>
  );
}
