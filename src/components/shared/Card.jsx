import React from 'react';

function Card({ children }) {
  return (
    <div className="bg-white text-gray-800 rounded-lg text-center text-gray-70 py-9 px-4 relative mb-5">
      {children}
    </div>
  );
}

export default Card;
