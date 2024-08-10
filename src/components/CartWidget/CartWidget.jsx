import { Link } from 'react-router-dom'
import cart from '../../assets/cart.svg'
import { useCart } from '../../hooks/useCart'
import './CartWidget.css'

function CartWidget() {
  const {totalQuantity} = useCart()
  return (
    <Link className="CartWidget" to="/cart">
        <img src={cart}
         className="CartImg"
        />
        {totalQuantity}
    </Link>
  )
}

export default CartWidget