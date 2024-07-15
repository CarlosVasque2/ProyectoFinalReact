import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

function NavBar() {
  return (
    <nav style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <h1>Tienda Ptfl</h1>
        <section>
            <Link to="/category/celular"> Celulares </Link>
            <Link to="/category/tablet"> Tablets </Link>
            <Link to="/category/computer"> Computers </Link>
        </section>
        <CartWidget />
    </nav>
  )
}

export default NavBar