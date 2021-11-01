import React from 'react'
import {ItemCount} from '../../../src/Components/items/ItemCount'


export const ItemDetail = ({producto}) => {
    return (
        <>
            <div className='detalle_container'>
                <img className='detalle_imagen' src={producto.pictureUrl} alt={producto.description}/>
                <div className='detalle_descripcion'>
                    <h2>{producto.title}</h2>
                    <p>{producto.description}</p>
                </div>
                <h3 className='detalle_precio'>$ {producto.price}</h3>
                <ItemCount stock={producto.stock} initial={0}/>
            </div>
        </>
    )
}