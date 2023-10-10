import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../components/newcard.css";

export default function Newcard() {
  const navigate = useNavigate();

  const [cardtitle, setCardtitle] = useState("");
  const [cardcategory, setCardcategory] = useState("");
  const [cardnote, setCardnotes] = useState("");
  const [isValid, setIsValid] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    if (
      cardtitle.trim() === "" ||
      cardcategory.trim() === "" ||
      cardnote.trim() === ""
    ) {
      setIsValid(false);
      return;
    }

    setIsValid(true);

    const newCard = { cardtitle, cardcategory, cardnote };
    let cardArray = [];

    cardArray = JSON.parse(localStorage.getItem("session")) || [];
    cardArray.push(newCard);

    localStorage.setItem("session", JSON.stringify(cardArray));

    navigate("/");
  }

  return (
    <div className="submit-new-card-container">
      <h1 className="new-card-header">Add card</h1>
      <form className="new-card-form" onSubmit={handleSubmit}>
        <input
          className={`card-title ${isValid ? "" : "invalid"}`}
          type="text"
          value={cardtitle}
          onChange={(e) => setCardtitle(e.target.value)}
          placeholder="Card title"
        />
        <input
          className={`card-category ${isValid ? "" : "invalid"}`}
          value={cardcategory}
          onChange={(e) => setCardcategory(e.target.value)}
          type="text"
          placeholder="Card category"
        />
        <textarea
          className={`card-notes ${isValid ? "" : "invalid"}`}
          value={cardnote}
          onChange={(e) => setCardnotes(e.target.value)}
          placeholder="card notes"
          name="card-notes"
          cols="30"
          rows="15"
        ></textarea>
        <input className="submit-button" type="submit" value="submit" />
      </form>
    </div>
  );
}
