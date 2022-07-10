import React from "react";
import "./DownloadModal.css";

const DownloadModal = () => {
  

  return (
    <div className="download-modal">
      <div className="size">
        <p>ORIGINAL</p>
        <p>{"(2632x3290)"}</p>
      </div>
      <div className="size">
        <p>LARGE</p>
        <p>{"(1920x2400)"}</p>
      </div>
      <div className="size">
        <p>MEDIUM</p>
        <p>{"(1280x1600)"}</p>
      </div>
      <div className="size">
        <p>SMALL</p>
        <p>{"(640x800)"}</p>
      </div>
    </div>
  );
};

export default DownloadModal;
