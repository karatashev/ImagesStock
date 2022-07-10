
// import './App.css';

import { Route, Routes } from "react-router-dom";

import ImageCardDetails from "./components/image-card-details/ImageCardDetails";
import ImagesStock from "./components/images-stock/ImagesStock";
import LoginPage from "./components/login-page/LoginPage";
import MyAlbum from "./components/my-album-grid/MyAlbum";
import Navbar from "./components/navbar/Navbar";
// import SaveModal from "./components/save-image-modal/SaveModal";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/images" element={<ImagesStock />}/>
        {/* <Route path="/images/modal" element={<SaveModal />}/> */}
        <Route path="/images/:ImageId" element={<ImageCardDetails />}/>
        <Route path="/images/album" element={<MyAlbum />}/>
      </Routes>
 
    </div>
  );
}

export default App;
