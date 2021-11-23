import {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {useCartContext} from '../../context/CartContext';
import './itemDetail.scss'; 

const ItemDetail = ({product}) => {
    
    const [cantidad, setCantidad] = useState (1);
    const {addAlCarrito} = useCartContext();

    const addCart = (cantidadAgregada) => {
        setCantidad(cantidadAgregada);
        addAlCarrito({product, cantidad: cantidadAgregada});
    }

    return (
            <div className="detalle_container">
                <div className='seccionUno'>
                    <img className="detalle_imagen" src={product.pictureUrl} alt={product.title}/>
                </div>
                <div className="seccionDos">
                    <div className='detalle_descripcion'>
                        <h2 className="item-detail-title">{product.title}</h2>
                        <p className="item-detail-description">{product.description}</p>
                    </div>
                    <h3 className='detalle_precio'>$ {product.price}</h3>
                </div>
                <div className='item_count'>
                    <ItemCount initial={cantidad} stock={product.stock} addCart={addCart}/>

                </div>
            </div>
    )
}

export default ItemDetail