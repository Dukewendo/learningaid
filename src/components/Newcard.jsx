import React from "react";

import "../components/newcard.css";

export default function Newcard() {
  function handleSubmit() {
    alert("Added")
  }

  return (
    <div className="submit-new-card-container">
      <h1 className="new-card-header">Add card</h1>
      <form className="new-card-form" onSubmit={handleSubmit}>
        <input className="card-title" type="text" placeholder="Card title" />
        <input className="card-category" type="text" placeholder="Card category" />
        <textarea className="card-notes" placeholder="card notes" name="card-notes" cols="30" rows="15"></textarea>
        <input className="submit-button" type="submit" value="submit"/>
      </form>
    </div>
  );
}
