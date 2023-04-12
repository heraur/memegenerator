import React from "react";
import memesData from "../memesData";

export default function Meme() {
  // let [memeImage, setMemeImage] = React.useState("");
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  let url;
  function getMemeImage() {
    const dataAll = allMemeImages.data.memes;
    const meme = dataAll[Math.floor(Math.random() * dataAll.length)];
    url = meme.url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  return (
    <>
      <div className="meme-main">
        <div className="row g-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="top text"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="botton text"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
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
      <div className="meme">
        <img src={meme.randomImage} alt="" className="mem-im" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </>
  );
}
