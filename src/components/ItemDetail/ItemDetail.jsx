

const ItemDetail = ({name, img, category, description, stock, price}) => {
  return (
    <article>
        <h1>{name}</h1>
        <img src={img} style={{widt: 300}}/>
        <p>Category: {category}</p>
        <p>{description}</p>
        <h2>{price}</h2>
        <p>{stock}</p>
    </article>
  )
}

export default ItemDetail