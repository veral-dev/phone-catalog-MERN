import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const CardContainer = styled.div`
  animation: ${(props) => props.timer * 0.5}s ease 0s normal forwards 1 fadein;
  -webkit-animation: ${(props) => props.timer * 0.5}s ease 0s normal forwards 1 fadein;

  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  background-color: #fff;
  border: 2px solid rgba(0, 0, 0);
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  max-width: 100%;
  box-shadow: 0 6px 17px 2px rgb(51 62 73 / 8%);
  img {
    height: 150px;
    width: 100%;
    object-fit: scale-down;
  }
  > div {
    text-align: center;
  }
`;

export default function Card({ phone }) {
  const history = useHistory();
  const { name, price, image, _id, idx } = phone;

  const linkToDetails = () => {
    history.push(`/phone/${_id}`);
  };

  return (
    <CardContainer timer={idx} onClick={linkToDetails}>
      <img src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <p className="price">{price} €</p>
      </div>
    </CardContainer>
  );
}
