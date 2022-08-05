import React from 'react';

function Button({ children, className, type = 'button', isDisabled = false }) {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`border rounded-md px-4 py-2 outline-none  ${className}  ${
        isDisabled ? 'text-gray-500 cursor-not-allowed bg-gray-100' : ''
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
