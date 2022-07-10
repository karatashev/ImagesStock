import React, { useEffect, useState } from "react";
import GridContainer from "../grid-container/GridContainer";
import ImageCard from "../image-card/ImageCard";
import MyAlbumsButton from "../my-albums/MyAlbumsButton"
import "./ImagesStock.css";

const ImagesStock = () => {
  const [imagesData, setImagesData] = useState([]);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?&limit=12")
      .then((res) => res.json())
      .then((data) => setImagesData(data))
      .catch((err) => console.log(err.message));
  }, []);

  console.log(imagesData);

  return (
    <>
    <MyAlbumsButton />
    <div className="images-layout">
      <GridContainer>
        {imagesData.map((image) => {
          return (
            <ImageCard
              key={image.id}
              src={image.download_url}
              alt={image.author}
              ImageId={image.id}
            />
          );
        })}
      </GridContainer>
    </div>
    </>
  );
};

export default ImagesStock;
