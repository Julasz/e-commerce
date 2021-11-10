import { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import {ItemCount} from '../ItemCount/ItemCount'
import './itemDetail.scss'


export const ItemDetail = ({product}) => {
    
    const [cantidad, setCantidad] = useState(1)
    const {cartList, agregarAlCarrito} = useCartContext()

    const addCart = (cantidadAgregada) => {
        setCantidad(cantidadAgregada)
        agregarAlCarrito({product, cantidad:cantidadAgregada})
    }
    
    console.log(cartList)
    return (
        <>
            <div className='detalle_container'>
                <div className='seccionUno'>
                    <img className='detalle_imagen' src={product.pictureUrl} alt={product.description}/>

                </div>
                <div className='seccionDos'>
                    <div className='detalle_descripcion'>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                    </div>
                    <h3 className='detalle_precio'>$ {product.price}</h3>
                    <div className='item_count'>
                        <ItemCount  stock={product.stock} initial={cantidad} addCart={addCart}/>
                    </div>
                </div>
            </div>
        </>
    )
}
