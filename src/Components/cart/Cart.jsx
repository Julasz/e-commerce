import {useCartContext} from '../../context/CartContext';
import {Link} from "react-router-dom";
import {useState} from 'react';
import {getFirestore} from '../../services/getFirestore'
import firebase from 'firebase'
import 'firebase/firestore'
import './CartEstilo.scss'; 
import CartFormulario from '../CartFormulario/CartFormulario';
import Slide from 'react-reveal/Slide'
import Zoom from 'react-reveal/Zoom'
import Spin from 'react-reveal/Spin'


const Cart = () => {
    
    const {cartList, removerItem, removerCart, cartTotal, userData} = useCartContext()
    const [orderId, setOrderId] = useState("")
    
    const generarOrden = () => {
        let order = {}
        order.date = firebase.firestore.Timestamp.fromDate(new Date())
        order.buyer = userData
        order.total = cartTotal
        order.items = cartList.map((items) => {
            const id = items.product.id
            const title = items.product.title
            const quantity = items.product.cantidad
            const total = items.product.price * items.cantidad
            return {id, title, quantity, total}
        });

        const dataBase = getFirestore()

        dataBase.collection("orders").add(order)
        .then((response) => setOrderId(response.id))
        .catch((error) => alert('Error:', error))
        .finally(() => removerCart())

    }
    return (
        <div className='contenedor-principal'>
            {cartList.length ? <button className='btn-vaciar-carrito' onClick={() => removerCart()}>Vaciar carrito</button>
            : orderId==="" 
                ? <div className="container-carrito-vacio">
                    <Spin>
                        <p>¡Ups...El carrito está vacío!</p>
                    </Spin>
                    <Link className='link-iniciar-compra' to="/">Empezar a comprar</Link>
                  </div>
                : <div>
                    <h3>¡Gracias por comprar! Pronto enviaremos su pedido.
                        <p>Su orden de compra es: {orderId}</p>
                    </h3>
                    <Zoom><div className='total-reserva'><p>El total de la compra es: $ {cartTotal}</p></div></Zoom>
                    <Link to='/'>Cerrar y volver al inicio</Link>
                  </div>
            }
            {cartList.map((items => 
                <Slide left>
                    <div className="contenedor-carrito-lleno" key={items.product.id}>
                        <img src={items.product.pictureUrl} alt={items.product.title}/>
                        <div className='contenido-descriptivo'>
                            <h5>{items.product.title}</h5>
                            <p>$ {items.product.price}</p>
                            <p>Cantidad: {items.cantidad}</p>
                            <p>Subtotal $ {items.product.price * items.cantidad}</p>
                        </div>
                        <button className="btn-remover" onClick={() => removerItem(items.product.id)}>Eliminar</button>
                    </div>
                </Slide>
            ))}
            <Zoom>
                <CartFormulario createOrder={generarOrden}/>
            </Zoom>
        </div>
    )
}

export default Cart


