import React, { useState, useEffect } from 'react';

const AuctionItem = ({ item }) => {
  const calculateTimeLeft = (endTime) => {
    const difference = +new Date(endTime) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(item.endTime));
  const [bids, setBids] = useState([]);
  const [newBid, setNewBid] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(item.endTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [item.endTime]);

  const handleBidSubmit = () => {
    if (newBid && !isNaN(newBid) && newBid > 0 && name && phone) {
      setBids((prevBids) => [...prevBids, { amount: parseFloat(newBid), name, phone }]);
      setNewBid('');
      setName('');
      setPhone('');
    }
  };

  const topBids = bids
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 3);

  return (
    <div className="auction-item">
      <img src={item.imageUrl} alt={item.name} />
      <h3>{item.name}</h3>
      <p>Tiempo restante: {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</p>
      <div className="bids">
        <h4>Top 3 Ofertas:</h4>
        <ul>
          {topBids.map((bid, index) => (
            <li key={index}>
              {bid.name} (${bid.amount.toFixed(2)}) - {bid.phone}
            </li>
          ))}
        </ul>
      </div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre"
      />
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Teléfono"
      />
      <input
        type="number"
        value={newBid}
        onChange={(e) => setNewBid(e.target.value)}
        placeholder="Ingrese su oferta"
      />
      <button onClick={handleBidSubmit}>Ofertar</button>
    </div>
  );
};

export default AuctionItem;


