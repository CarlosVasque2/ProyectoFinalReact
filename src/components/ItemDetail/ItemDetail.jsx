import "./ItemDetail.css";

const ItemDetail = ({ name, img, category, description, stock, price }) => {
  return (
    <article className="item-detail">
      <h1>{name}</h1>
      <img src={img} alt={name} className="item-image" />
      <p>Category: {category}</p>
      <p>{description}</p>
      <h2>{price}</h2>
      <p>Stock: {stock}</p>
    </article>
  );
};

export default ItemDetail;