import React from 'react';
import AuctionItem from '../../components/AuctionItem/AuctionItem';
import auction1 from '../../assets/images/auction1.jpg';
import auction2 from '../../assets/images/auction2.jpg';
import auction3 from '../../assets/images/auction3.jpg';

const Auction = () => {
  const auctionItems = [
    {
      id: 1,
      name: 'HW - DIAMOND',
      imageUrl: auction1,
      endTime: new Date(Date.now() + 86400000), // 24 horas a partir de ahora
    },
    {
      id: 2,
      name: 'VW',
      imageUrl: auction2,
      endTime: new Date(Date.now() + 172800000), // 48 horas a partir de ahora
    },
    {
      id: 3,
      name: 'Ford A Hot Road',
      imageUrl: auction3,
      endTime: new Date(Date.now() + 259200000), // 72 horas a partir de ahora
    },
  ];

  return (
    <div className="page auction-page">
      <h2>Subastas</h2>
      <div className="auction-items">
        {auctionItems.map((item) => (
          <AuctionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Auction;

