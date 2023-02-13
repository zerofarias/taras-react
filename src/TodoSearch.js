import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
  const escribiendo = (event) =>{
    console.log(event.target.value);
  }

  return (
    <input 
        className="TodoSearch" placeholder="Cebolla" 
        onChange={escribiendo}
    />
  );
}

export { TodoSearch };
