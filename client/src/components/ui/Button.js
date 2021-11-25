import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  cursor: pointer;
  width: 150px;
  padding: 10px 0;
  color: white;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-weight: bold;
  border-radius: 4px;
  text-transform: uppercase;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
`;

export default function Button({ bgColor, onClick, children }) {
  return (
    <Btn onClick={onClick} style={{ backgroundColor: bgColor || '#fff' }}>
      {children}
    </Btn>
  );
}
