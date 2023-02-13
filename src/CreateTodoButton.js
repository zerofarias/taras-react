import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const clickAdd = () => {
    alert('Hiciste Click en Agregar')
  };

  return (
    <button 
      className="CreateTodoButton"
      onClick={clickAdd}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
