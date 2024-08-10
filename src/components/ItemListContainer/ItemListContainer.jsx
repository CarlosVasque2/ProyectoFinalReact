import { useEffect, useState } from "react";
//import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import './ItemListContainer.css';
import { db } from "../../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useNotification } from "../../context/NotificationContext";

const ItemListContainer = ({ greetings }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();
  const {setNotification} = useNotification()


  useEffect(() => {
    setLoading(true);
    //const asyncFunctions = category ? getProductsByCategory : getProducts;
    const collectionRef = category
    ? query(collection(db, "productos"), where("category", "==", category))
    : collection(db, "productos")

    getDocs(collectionRef)
        .then((querySnapshot)=>{
          const productos = querySnapshot.docs.map((doc)=>{
            return {id: doc.id, ...doc.data()}
          })
          setProducts(productos)
        })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return <h3 style={{ color: "white", backgroundColor: "black", textAlign: "center" }}>Cargando productos...</h3>;
  }

  return (
    <div>
      <h1>{greetings}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
