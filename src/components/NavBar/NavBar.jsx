import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import logo from '../../assets/ptfl-logo.png'; // Ajusta la ruta según sea necesario

function NavBar() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <NavLink
        to="/"
        style={{ textDecoration: "none", color: "#ffffff" }}
        className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
      >
        <img src={logo} alt="Tienda Ptfl Logo" style={{ height: "50px" }} /> {/* Ajusta el tamaño según sea necesario */}
      </NavLink>
      <section>
        <NavLink
          to="/category/poleras"
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Poleras
        </NavLink>
        <NavLink
          to="/category/polerones"
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Polerones
        </NavLink>
        <NavLink
          to="/category/gorras"
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Gorras
        </NavLink>
      </section>
      <CartWidget />
    </nav>
  );
}

export default NavBar;









