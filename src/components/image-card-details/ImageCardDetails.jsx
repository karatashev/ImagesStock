import React, { useEffect, useState } from "react";
import "./ImageCardDetails.css";
import MyAlbumsButton from "../my-albums/MyAlbumsButton";
import { useNavigate, useParams } from "react-router-dom";
import SaveModal from "../save-image-modal/SaveModal"
import DownloadModal from "../download-modal/DownloadModal";


const ImageCardDetails = () => {
  const [image, setImage] = useState({});
  const { ImageId } = useParams();
  const navigate = useNavigate();
  const [openSaveModal, setOpenSaveModal] = useState(false)
  const [isOpen, setIsOpen] = useState(false)



  useEffect(() => {
    fetch(`https://picsum.photos/id/${ImageId}/info`)
      .then((res) => res.json())
      .then((data) => setImage(data))
      .catch((err) => console.log(err.message));
  }, [ImageId]);

  console.log(image);

  const goBack = () => {
    navigate(-1);
  };

  

  const openModalHandler = (e) => {
    setIsOpen(current => !current)
  }

  return (
    <>
      <MyAlbumsButton />
      <div className="card-details-container">
        <div className="card-details-buttons">
          <button onClick={() => setOpenSaveModal(true)} className="add-button">ADD TO ALBUM +</button>
          <SaveModal open={openSaveModal} onClose={() => setOpenSaveModal(false)}/>

          <button onClick={openModalHandler} className="download-button">DOWNLOAD</button>
          {isOpen && <DownloadModal />}
        </div>
        <img className="card-details-image" src={image.download_url} alt="/" />
        <div className="card-details-info">
          <p>UPLOADED BY</p>
          <h4>{image.author}</h4>
          <small>29th November 2021</small>
        </div>
        <button onClick={goBack} className="back-button">
          GO BACK
        </button>
      </div>
    </>
  );
};

export default ImageCardDetails;
