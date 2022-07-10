import React, { useState } from "react";
import "./ImageCard.css"
import { Link } from "react-router-dom";
import SaveModal from "../save-image-modal/SaveModal";


const ImageCard = ({src, author, ImageId}) => {
  const [openSaveModal, setOpenSaveModal] = useState(false)


  return (
    <>
    <div className="image-card-wrapper">
      <Link to={`/images/${ImageId}`}>
      <img className="image-card" src={src} alt={author}/>
      </Link>
      <div onClick={() => setOpenSaveModal(true)} className="overlay-text">ADD TO ALBUM +</div>
      {/* <div className="image-card-overplay">
        <div className="overlay-text">Add to album</div>
      </div> */}
    </div>
    <SaveModal open={openSaveModal} onClose={() => setOpenSaveModal(false)}/>
    </>
  );
};

export default ImageCard;
