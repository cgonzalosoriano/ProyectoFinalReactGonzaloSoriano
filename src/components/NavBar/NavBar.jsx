import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/images/logo.jpg';


const NavBar = () => {
  const { getTotalItems } = useContext(CartContext);

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="TucuWheels Logo" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/shop">Tienda</Link>
        <Link to="/auction">Subastas</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contacto</Link>
      </div>
      <Link to="/cart">
        <CartWidget totalItems={getTotalItems()} />
      </Link>
    </nav>
  );
};

export default NavBar;


