import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 4px solid rgba(0, 0, 0);
  border-radius: 4px;
  padding: 10px;
  img {
    height: 200px;
    width: 100%;
    object-fit: contain;
    background-color: rgb(223, 223, 223);
  }
`;

export default function Card({ phone }) {
  const { name, price } = phone;
  return (
    <CardContainer>
      {/* <img src={phoneData.photo} alt={phoneData.name} /> */}
      <div className="card-body">
        <h3>{name}</h3>
        <p className="price">{price} €</p>
      </div>
    </CardContainer>
  );
}
