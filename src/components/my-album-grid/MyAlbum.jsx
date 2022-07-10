import React, { useEffect, useState } from 'react'
import MyAlbumsButton from '../my-albums/MyAlbumsButton';
import { useNavigate } from "react-router-dom";
import "./MyAlbum.css"
import MyAlbumsCard from '../my-albums/MyAlbumsCard';

const MyAlbum = () => {

  const [imagesData, setImagesData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?&limit=9")
      .then((res) => res.json())
      .then((data) => setImagesData(data))
      .catch((err) => console.log(err.message));
  }, []);

  const goBack = () => {
    navigate(-1);
  }


  return (
    <div className='my-album'>
      <MyAlbumsButton />
      <h2>My Album One</h2>
      <p>Date created: 29th November 2021 </p>
      <div className='my-album-grid'>
      {imagesData.map((image) => {
          return (
            <MyAlbumsCard
              key={image.id}
              src={image.download_url}
              alt={image.author}
            />
          );
        })}
      </div>
      <div className='my-album-buttons'>
        <button onClick={goBack} className='cancel-button'>GO BACK</button>
        <button className='save-button'>SAVE</button>
      </div>
    </div>
  )
}

export default MyAlbum