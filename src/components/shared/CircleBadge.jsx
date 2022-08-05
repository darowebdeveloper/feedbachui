import React from 'react';

function CircleBadge({ children, className }) {
  return (
    <span
      className={`${className} absolute bg-pink-600 text-white rounded-full w-11 h-11 flex justify-center items-center  text-center -top-4 -left-4 `}
    >
      {children}
    </span>
  );
}

export default CircleBadge;
