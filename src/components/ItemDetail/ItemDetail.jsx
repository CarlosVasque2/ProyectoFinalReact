import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import './ItemDetail.css';
import { useCart } from "../../hooks/useCart";
import { useNotification } from "../../context/NotificationContext";


const ItemDetail = ({name, img, description, stock, category, id, price}) => {
  //const {addItem, isInCart} = useContext(CartContext)
  const {addItem, isInCart} = useCart()
  const {setNotificacion} = useNotification() 

  const handleAdd = (count) => {
    const productObj = {
      id, name, price, quantity: count
    };
    addItem(productObj)
    //console.log(objetToAdd);
    //console.log('agregue al carrito', cantidad);
    //setQuantity(cantidad);
  };
  
  return (
    <div className="item-detail-container">
      <h2>{name}</h2>
      <div className="item-card">
        <img
          src={img}
          alt={name}
        />
        <div className="card-body">
          <p className="card-text">{description}</p>
          <p className="card-text">Categoria: {category}</p>
          <h2 className="card-text">Precio: $ {price}</h2>
          <h2 className="card-text">Disponible - {stock}</h2>
        </div>
      </div>
      <div className="item-actions">
        {
          isInCart(id) ? (
            <Link to='/cart'>Finalizar Compra</Link>
          ): (
            <ItemCount stock={stock} onAdd={handleAdd} />
          )
        }
      </div>
    </div>
  );
}

export default ItemDetail;

