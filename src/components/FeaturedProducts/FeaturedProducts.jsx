import React from 'react';
import Item from '../Item/Item';
import image1 from '../../assets/images/home1.jpg';
import image2 from '../../assets/images/home2.jpg';
import image3 from '../../assets/images/home3.jpg';
import image4 from '../../assets/images/home4.jpg';

const FeaturedProducts = () => {
  const featuredItems = [
    { id: 1, name: 'El Barón Rojo', description: 'El terror de los cielos y tierra', price: 17, imageUrl: image1 },
    { id: 2, name: 'Pack Imperdible', description: 'Apocalipsis Now', price: 200, imageUrl: image2 },
    { id: 3, name: 'HM City', description: 'corre caminos', price: 12, imageUrl: image3 },
    { id: 4, name: 'Camaro on fire', description: 'alcanzalo si puedes', price: 21, imageUrl: image4 },
  ];

  return (
    <div className="featured-products">
      {featuredItems.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default FeaturedProducts;
