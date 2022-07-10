
import "./SaveModal.css"


const SaveModal = ({open, onClose}) => {

  if (!open) return null
  // const navigate = useNavigate();
  // const goBack = () => {
  //   navigate(-1);
  // }



  return (
    
    <div onClick={onClose} className='save-modal-container'>
      <div>
        <button className='create-option'>CREATE NEW ALBUM</button>
        <button className='existing-option'>ADD TO EXISTING</button>
      </div>
      <div>
        <input className='save-modal-input' type="text" placeholder='Enter title here'/>
      </div>  
      <div className='bottom-buttons'>
        {/* <Link to={`/images`}> */}
        <button onClick={onClose} className='cancel-button'>CANCEL</button>
        {/* </Link> */}
        
        <button className='save-button'>SAVE</button>
      </div>
    </div>
  )
}

export default SaveModal