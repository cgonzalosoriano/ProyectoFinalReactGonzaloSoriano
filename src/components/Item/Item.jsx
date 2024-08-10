import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector';

const Item = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart({ ...item, quantity });
    }
  };

  return (
    <div className="item">
      <img src={item.imageUrl} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>${item.price}</p>
      <ItemQuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <button onClick={handleAddToCart}>Añadir al Carrito</button>
    </div>
  );
};

export default Item;



