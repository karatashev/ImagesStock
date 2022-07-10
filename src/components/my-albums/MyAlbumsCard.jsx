import React, { useState } from "react";
import "./MyAlbumsCard.css";

const MyAlbumsCard = ({src, author}) => {

  const [image, setImage] = useState(true)

  const imageHandler = () => {
    setImage(current => !current)
  }

  return (
    <>
      <div className="my-albums-card-wrapper">
        {image ? <img className="my-albums-image-card" src={src} alt={author} /> : null}
        <div onClick={imageHandler} className="my-albums-overlay-text">X</div>
      </div>
    </>
  );
};

export default MyAlbumsCard;
