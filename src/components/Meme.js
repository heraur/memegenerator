import React from "react";
import memesData from "../memesData";

export default function Meme() {
  function getMemeImage() {
    const dataAll = memesData;
    const meme =
      dataAll.data.memes[Math.floor(Math.random() * dataAll.data.memes.length)];
    return meme;
  }
  return (
    <div className="meme-main">
      <div className="row g-3">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            aria-label="top text"
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            aria-label="botton text"
          />
        </div>
      </div>
      <div className="d-grid gap-2 meme-btn">
        <button
          className="btn meme-bouton"
          type="button"
          onClick={getMemeImage}
        >
          Get a new meme image
        </button>
      </div>
    </div>
  );
}
