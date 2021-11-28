import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0 6px 17px 2px rgb(51 62 73 / 8%);
  transition: transform 0.3s ease-out;
  position: sticky;
  top: 0;
  background-color: #fff;
  h1 {
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 900;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  @media (min-width: 768px) {
    padding: 10px 50px;
    h1 {
      font-size: 2.5rem;
    }
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Link className="link-btn" to="/">
        <h1>The phone list</h1>
      </Link>
      <div className="flex-between">
        <ul>
          <Link className="link-btn" to="/form">
            New phone
          </Link>
        </ul>
      </div>
    </HeaderContainer>
  );
}
