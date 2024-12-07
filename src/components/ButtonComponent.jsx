import React from 'react';

function ButtonComponent({ type, text, onClick }) {
  return (
    <button type={type} className="button-component" onClick={onClick}>
      {text}
    </button>
  );
}

export default ButtonComponent;