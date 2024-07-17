import { Link } from "react-router-dom";
import './Item.css';

const Item = ({id, name, img, category, price}) => {
  return (
    <article className="item-article">
        <h1>{name}</h1>
        <img src={img} alt={name} />
        <p>Category: {category}</p>
        <h2>Precio: ${price}</h2>
        <Link to={`/detail/${id}`} >Ver detalle</Link>
        <hr />
    </article>
  )
}

export default Item;

