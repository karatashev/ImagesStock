
import "./GridContainer.css"

const GridContainer = (props) => {
  return (
    <div className='grid-container'>
      {props.children}
    </div>
  )
}

export default GridContainer