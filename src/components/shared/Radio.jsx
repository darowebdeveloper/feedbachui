import React from 'react';

function Radio({ name, value, id, handleChange, selected }) {
  return (
    <div className="relative">
      <input
        className="h-11 w-11 outline-none accent-pink-600 peer cursor-pointer"
        type="radio"
        value={value}
        name={name}
        id={id}
        onChange={handleChange}
        checked={selected === value}
      />
      <label
        htmlFor={id}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pb-1 peer-checked:text-white cursor-pointer"
      >
        {value}
      </label>
    </div>
  );
}

export default Radio;
