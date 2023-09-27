import { useState } from "react";

import "../components/newcard.css";

export default function Newcard() {
  const [cardtitle, setCardtitle] = useState("");
  const [cardcategory, setCardcategory] = useState("");
  const [cardnotes, setCardnotes] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newCard = { cardtitle, cardcategory, cardnotes };
    console.log(newCard);
  }

  return (
    <div className="submit-new-card-container">
      <h1 className="new-card-header">Add card</h1>
      <form className="new-card-form" onSubmit={handleSubmit}>
        <input
          className="card-title"
          type="text"
          value={cardtitle}
          onChange={(e) => setCardtitle}
          placeholder="Card title"
        />
        <input
          className="card-category"
          value={cardcategory}
          onChange={(e) => setCardcategory}
          type="text"
          placeholder="Card category"
        />
        <textarea
          className="card-notes"
          value={cardnotes}
          onChange={(e) => setCardnotes}
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
