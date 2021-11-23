import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex-between">
      <Link className="link-btn" to="/">
        <h1>The phone list</h1>
      </Link>
      <div className="flex-between">
        <Link className="link-btn" to="/cart">
          Cart
        </Link>
      </div>
    </header>
  );
}
