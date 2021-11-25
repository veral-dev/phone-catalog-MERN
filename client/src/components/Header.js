import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    margin: 10px 50px;
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
