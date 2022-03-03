import React, {useState, useEffect} from 'react'
import { products } from './products'
import { listarArray } from './listarArray'
import { ItemList } from './ItemList'
import './itemListContainer.css'


const ILContainer = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        listarArray(products)
        .then((res)=>{
            setItems(res)
        })
        .catch((err)=>console.log(err))
        .finally(()=>{
            setLoading(false)
        })
    },[])

  return (
    <div className='container d-grid justify-content-around '>

        {
            loading ? 
                <div className='cargando'>Cargando lista de Productos...</div>
                :
                <ItemList items={items} />
        }    

    </div>
  )
}

export default ILContainer