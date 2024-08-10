import React from 'react';

const CartWidget = ({ totalItems }) => {
  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      <span>{totalItems}</span>
    </div>
  );
};

export default CartWidget;
