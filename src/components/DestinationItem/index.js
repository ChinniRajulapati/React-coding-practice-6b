import './index.css'

const DestinationItem = props => {
  const {placesList} = props
  const {name, imgUrl} = placesList

  return (
    <li className="user-card-container">
      <img src={imgUrl} className="image" alt={name} />
      <p className="names">{name}</p>
    </li>
  )
}

export default DestinationItem
