import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 2px solid rgba(0, 0, 0);
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  max-width: 100%;
  img {
    height: 150px;
    width: 100%;
    object-fit: contain;
  }
  > div {
    text-align: center;
  }
`;

export default function Card({ phone }) {
  const history = useHistory();
  const { name, price, image, _id } = phone;

  const linkToDetails = () => {
    history.push(`/phone/${_id}`);
  };

  return (
    <CardContainer onClick={linkToDetails}>
      <img src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <p className="price">{price} €</p>
      </div>
    </CardContainer>
  );
}
