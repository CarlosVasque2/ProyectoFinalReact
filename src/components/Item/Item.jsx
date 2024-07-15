import { Link } from "react-router-dom"

const Item = ({id, name, img, category, price}) => {
  return (
    <article>
        <h1>{name}</h1>
        <img src={img} style={{widt: 100}}/>
        <p>Category: {category}</p>
        <h2>{price}</h2>
        <Link to={`/detail/${id}`} >Ver detalle</Link>
        <hr />
    </article>
  )
}

export default Item