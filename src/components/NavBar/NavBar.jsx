import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

function NavBar() {
  return (
    <nav style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <Link to="/" style={{textDecoration: "none", color: "#ffffff", fontSize: "35px"}}>Tienda Ptfl</Link>
        <section>
            <Link to="/category/celular"> Celulares </Link>
            <Link to="/category/tablet"> Tablets </Link>
            <Link to="/category/computer"> Computers </Link>
        </section>
        <CartWidget />
    </nav>
  )
}

export default NavBar;







