import React from 'react';
import { Link } from 'react-router-dom';

function Header({ text }) {
  return (
    <div className="py-4 bg-sky-900 text-center mb-5">
      <Link to={'/'}>
        <h2 className="text-lg font-bold text-pink-600">{text}</h2>
      </Link>
    </div>
  );
}

export default Header;
