import React, {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

    const [cantidad, setCantidad]= useState (initial)

    function res (){
        if (cantidad > 0 ){
          setCantidad (cantidad - 1)
        } 
      }

      function sum (){
        if (cantidad < stock ){
          setCantidad (cantidad + 1)
        } 
      }


  return (
    <>
    <button  className= "btn btn-warning mx-5 my-5"disabled={cantidad === 0} onClick={res} >-</button>
    <span className= "mx-3">{cantidad}</span>
    <button  className= "btn btn-warning"disabled={cantidad === stock} onClick={sum} >+</button>
    <button  className= "btn btn-success mx-4"disabled={cantidad === 0} onClick={()=>onAdd(cantidad)} >Agregar al carrito</button>

    </>
  )
}

export default ItemCount