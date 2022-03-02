import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = () => {

    const onAdd = (cantidad) =>{
        console.log(`Se agregaron ${cantidad} productos`)
    }
  return (
    <>
        <h1 className='mx-5'>Desafio 4 - Contador</h1>
        <ItemCount stock={10} initial={1} onAdd={onAdd} />
    
    </>
  )
}

export default ItemListContainer