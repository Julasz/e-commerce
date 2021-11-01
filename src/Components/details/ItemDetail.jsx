import React from 'react'
import {ItemCount} from '../items/ItemCount'
 
export const ItemDetail = ({product}) => {
    return (
        <>
            <div className='detalle_container'>
                <img className='detalle_imagen' src={product.pictureUrl} alt={product.description}/>
                <div className='detalle_descripcion'>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                </div>
                <h3 className='detalle_precio'>$ {product.price}</h3>
                <div className='item_count'>
                    <ItemCount  stock={product.stock} initial={0}/>
                </div>
            </div>
        </>
    )
}