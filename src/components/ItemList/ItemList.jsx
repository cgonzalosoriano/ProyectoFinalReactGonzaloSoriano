import React from 'react';
import Item from '../Item/Item';
import imageshop1 from '../../assets/images/shop1.jpg';
import imageshop2 from '../../assets/images/shop2.jpg';
import imageshop3 from '../../assets/images/shop3.jpg';
import imageshop4 from '../../assets/images/shop4.jpg';
import imageshop5 from '../../assets/images/shop5.jpg';
import imageshop6 from '../../assets/images/shop6.jpg';
import imageshop7 from '../../assets/images/shop7.jpg';
import imageshop8 from '../../assets/images/shop8.jpg';
import imageshop9 from '../../assets/images/shop9.jpg';
import imageshop10 from '../../assets/images/shop10.jpg';
import imageshop11 from '../../assets/images/shop11.jpg';
import imageshop12 from '../../assets/images/shop12.jpg';

const ItemList = () => {
  const items = [
    { id: 1, name: 'X-Blade', description: 'filo en 2 ruedas', price: 8, imageUrl: imageshop1 },
    { id: 2, name: 'Track Stars', description: 'Descripción breve 2', price: 5.5, imageUrl: imageshop2 },
    { id: 3, name: 'Delorean', description: 'El auto del Doc', price: 11, imageUrl: imageshop3 },
    { id: 4, name: 'McLaren Elva', description: 'pistas y sol', price: 14, imageUrl: imageshop4 },
    { id: 5, name: 'Max Steel Bike', description: 'la nave de max steels', price: 7, imageUrl: imageshop5 },
    { id: 6, name: 'Pagani Zonda R', description: 'Ganas seguro', price: 16, imageUrl: imageshop6 },
    { id: 7, name: 'Ducati Panigale', description: 'la ganadora del superbike', price: 7, imageUrl: imageshop7 },
    { id: 8, name: 'F-16 Falcon', description: 'Race skin', price: 8, imageUrl: imageshop8 },
    { id: 9, name: 'Nitro', description: 'Arrancones', price: 10, imageUrl: imageshop9 },
    { id: 10, name: 'Fat Ride', description: 'Bobber Style', price: 15, imageUrl: imageshop10 },
    { id: 11, name: 'Jeep', description: 'Fast and Furious', price: 12, imageUrl: imageshop11 },
    { id: 12, name: 'R-32', description: 'Fast and Furious', price: 19, imageUrl: imageshop12 },
  ];

  return (
    <div className="item-list">
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
