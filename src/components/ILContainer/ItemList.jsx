import React from 'react'
import { Item } from './Item'
import './itemListContainer.css'

export const ItemList = ({items}) => {
  return (
    <div className='container il'>
        {
            items.map((item)=> <Item {...item} key={item.id} /> )
        }

    </div>
  )
}

