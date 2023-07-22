import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/cart">
        Cart<span className="cart-symbol">&#128722;</span>
      </NavLink>
    </div>
  );
};

export default Navbar;
