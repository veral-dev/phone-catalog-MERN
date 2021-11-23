import React from 'react';

export default function Card({ phone }) {
  const { name, price } = phone;
  return (
    <div className="card">
      {/* <img src={phoneData.photo} alt={phoneData.name} /> */}
      <div className="card-body">
        <h3>{name}</h3>
        <p className="price">{price} €</p>
      </div>
    </div>
  );
}
