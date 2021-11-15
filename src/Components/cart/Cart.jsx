import {useCartContext} from '../../context/CartContext';
import {Link} from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import './CartEstilo.scss'; 


const Cart = () => {
    
    const {cartList, removerItem, removerCart, cartTotal} = useCartContext()

    return (
        <div>
            {cartList.length ? <button className="btn-remover" onClick={() => removerCart()}>Vaciar carrito</button>
            : 
                <div className="container-carrito-vacio">
                    <p>¡Ups...El carrito está vacío!</p>
                    <Link className='link-iniciar-compra' to="/">Empezar a comprar</Link>
                    <AiOutlineShoppingCart className="carrito" />
                </div>
            }
            <div className={cartList.length ? 'carrito-lleno' : 'carrito-vacio' }> 
                {cartList.map(items => 
                    <div className="contenedor-carrito-lleno" key={items.product.id} >
                        <img src={items.product.pictureUrl} alt={items.product.title}/>
                        <div>
                            <h5 className="itemAgregado-titulo">{items.product.title}</h5>
                            <p className="itemAgregado-price">$ {items.product.price}</p>
                            <p className="itemAgregado-cantidad">Cantidad: {items.cantidad}</p>
                        </div>
                        <div>
                            <button className="btn-remover" onClick={() => removerItem(items.product.id)}>Eliminar producto</button>
                        </div>
                    </div>
                )}
                <div>
                    <p className="cart-total">El total de la compra es $ {cartTotal}</p>
                </div>
            </div>
        </div>
    )
}

export default Cart