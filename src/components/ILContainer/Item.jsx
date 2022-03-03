import React from 'react'
import './itemListContainer.css'

export const Item = ({titulo, descripcion, imagen, precio, stock}) => {
  return (
    <div className='container item'>
        <div className='titulo'>{titulo}</div>  
        <img src={imagen} alt={titulo} />
        <div className='descripcion'>{descripcion}</div>  
        <button>Detalles</button>
        <div className='precio'>${precio}</div>
    </div>
  )
}

