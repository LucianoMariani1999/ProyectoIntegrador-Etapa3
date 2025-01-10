import React, { useContext} from "react";
import { NavLink, Link } from "react-router-dom";
import "../css/header.css";
import { CartContext } from "./ShoppingCartContext";

export const Header = () => {
   const [cart, setCart] = useContext(CartContext);
   const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);
   const navStyles = {
    color: "#fff",
    listStyle: "none",
    textDecoration: "none",
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <img
<<<<<<< HEAD
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFXY4vPOw7SGm7ya73hrwviPq942e_uNDpnw&s" width={100}
                        alt="logo"/>
=======
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFXY4vPOw7SGm7ya73hrwviPq942e_uNDpnw&s" width={100}
						alt="logo"/>
>>>>>>> c7cdeac (retoque)
          <Link to="/" className="navbar-brand">
            Travel Now
          </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link ">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <ul className="nav-list">
        <Link to={"/cart"} style={navStyles}>
          <li className="nav-item2">
          Cart: <span className="cart-count">{quantity}</span>
          </li>
        </Link>
        </ul>
      </nav>
    </>
  );
};

export default Header;
