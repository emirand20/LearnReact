import React, { useState } from 'react';

const Button = () => {
  const [color, setColor] = useState('black');
  const handleClick = () => {
    setColor(color === 'black' ? 'red' : 'black');
  };

  return (
    <div>
      <button onClick={handleClick}>
        Change Color
      </button>
      <p style={{ color }}>Text</p>
    </div>
  );
};

export default Button;