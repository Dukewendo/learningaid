import React from "react";


//Pages
import Header from "./Header";
import Allcards from "./Allcards";

//data
import data from "./mockdata.json";


export default function Learninghome() {
  return (
    <>
      <Header />
      <Allcards carddata = {data}/>
    </>
  );
}


