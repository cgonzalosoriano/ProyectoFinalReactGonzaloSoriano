import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
  const { cartItems, getTotalPrice, clearCart } = useContext(CartContext);

  return (
    <div className="cart-page page">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.imageUrl} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>{item.quantity} x ${item.price}</p>
                  <p>Total: ${item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total a Pagar: ${getTotalPrice()}</h3>
            <button onClick={clearCart} className="btn-clear-cart">Pagar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

