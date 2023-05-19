import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} style={{ padding: '10px 20px' }}>
      {children}
    </button>
  );
};

export default Button;
