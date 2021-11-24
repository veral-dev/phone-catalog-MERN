import React from 'react';
import styled from 'styled-components';

const AlertContainer = styled.div`
  width: 100%;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-weight: bold;
  border-radius: 4px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  color: #fff;
  padding: 1rem;
  text-align: center;
  margin-top: 1rem;
`;

export default function Alert({ message, bgColor }) {
  return <AlertContainer style={{ backgroundColor: bgColor || 'tomato' }}>{message}</AlertContainer>;
}
