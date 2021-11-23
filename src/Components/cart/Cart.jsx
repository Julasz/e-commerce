import {useCartContext} from '../../context/CartContext';
import {Link} from "react-router-dom";
import {useState} from 'react';
import CartFormulario from '../CartFormulario/CartFormulario'
import {getFirestore} from '../../services/getFirestore'
import firebase from 'firebase'
import 'firebase/firestore'
import {Modal} from 'react-bootstrap'
import './CartEstilo.scss'; 


const Cart = () => {
    
    const {cartList, removerItem, removerCart, cartTotal, formData} = useCartContext()
    //datos para el formulario
    const [orderId, setOrderId] = useState("")
    
    const generarOrden = (e) => {
        e.preventDefault()
        let order = {}
        order.date = firebase.firestore.Timestamp.fromDate(new Date())
        order.buyer = formData
        order.total = cartTotal
        order.items = cartList.map((items) => {
            const id = items.product.id
            const title = items.product.title
            const quantity = items.product.cantidad
            const total = items.product.price * items.cantidad
            return {id, title, quantity, total}
        });

        const dbQuery = getFirestore()
        dbQuery.collection("orders").add(order)
        .then((resp) => setOrderId(resp.id))
        .catch((error) => alert(`Algo ha pasado: ${error}`))
        .finally(() => removerCart())
        
        //actualizacion de datos
        const itemUpDate = dbQuery.collection("itemsAgregados").where(firebase.firestore.FieldPath.documentId(), "in", cartList.map(itemToUpdate => itemToUpdate.product.id))
        const batch = dbQuery.batch()

        itemUpDate.get()
        .then((respuesta) => {
            respuesta.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - cartList.find(itemToUpdate => itemToUpdate.product.id === docSnapshot.id).cantidad
                })
            })
            batch.commit()
            .catch (error => alert(`Ha ocurrido un error: ${error}`))
        })
    }
    
    

    return (
        <>
            <div>
                {cartList.length ? <button className="btn-remover" onClick={() => removerCart()}>Vaciar carrito</button>
                : orderId===""
                    ?
                    <div className="container-carrito-vacio">
                        <p>¡Ups...El carrito está vacío!</p>
                        <Link className='link-iniciar-compra' to="/">Empezar a comprar</Link>
                    </div>
                    :
                    <div>
                        <Modal.Body>Gracias por comprar, pronto enviaremos su pedido.
                            <Modal.Text>{`Su orden de compra es: ${orderId}`}</Modal.Text>
                        </Modal.Body>
                        <Link to='/'>Cerrar y volver al inicio</Link>
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
                        <CartFormulario generarOrden={generarOrden}/>
                    </div>
                   

                </div>
            </div>
           
        </>
    )
}

export default Cart


