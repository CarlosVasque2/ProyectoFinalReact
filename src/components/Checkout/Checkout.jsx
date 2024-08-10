import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import { db } from "../../services/firebase";
import './Checkout.css'; // Asegúrate de importar el archivo CSS

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderCreated, setOrderCreated] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
    });

    const { cart, totalQuantity, getTotal, clearCart } = useCart();
    const total = getTotal();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const createOrder = async () => {
        setLoading(true);
        try {
            const objOrder = {
                buyer: formData,
                items: cart,
                totalQuantity,
                total,
                date: new Date(),
            };

            const ids = cart.map((item) => item.id);
            const productRef = collection(db, "productos");

            const productsAddedFromFirestore = await getDocs(
                query(productRef, where(documentId(), "in", ids))
            );
            const { docs } = productsAddedFromFirestore;

            const outOfStock = [];
            const batch = writeBatch(db);

            docs.forEach((doc) => {
                const dataDoc = doc.data();
                const stockDB = dataDoc.stock;

                const productAddedToCart = cart.find((prod) => prod.id === doc.id);
                const productQuantity = productAddedToCart?.quantity;

                if (stockDB >= productQuantity) {
                    batch.update(doc.ref, { stock: stockDB - productQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();

                const orderRef = collection(db, "orders");
                const orderAdded = await addDoc(orderRef, objOrder);
                console.log(`El id de su orden es ${orderAdded.id}`);
                
                setOrderCreated(true);
                clearCart();
            } else {
                console.log("Hay productos que están fuera de stock");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="checkout-container">
            <div>
                {cart.map((item) => (
                    <article className="cart-item" key={item.id}>
                        <header>
                            <h2>
                                {item.name}{" "}
                                <span className="badge">Cantidad: {totalQuantity}</span>
                            </h2>
                        </header>
                    </article>
                ))}
            </div>
            <h1>Checkout</h1>
            {/* Formulario */}
            <form className="checkout-form">
                <input
                    type="text"
                    name="firstName"
                    placeholder="Nombre"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Apellido"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Teléfono"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Dirección"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />
                <div className="d-flex justify-content-center">
                    <button
                        type="button"
                        onClick={createOrder}
                    >
                        Generar Orden
                    </button>
                </div>
            </form>
            {loading && <div className="status-message loading">Se está generando la orden...</div>}
            {orderCreated && <div className="status-message success">La orden fue creada correctamente</div>}
        </div>
    );
};

export default Checkout;

