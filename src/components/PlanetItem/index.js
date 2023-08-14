// Write your code here
import './index.css'

const Items = props => {
  const {listItem} = props
  const {name, imageUrl, description} = listItem

  return (
    <div className="bg">
      <img src={imageUrl} alt={`planet ${name}`} className="img" />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default Items
