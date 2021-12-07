import {useCartContext} from '../../context/CartContext';
import {Link} from "react-router-dom";
import {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import {getFirestore} from '../../services/getFirestore'
import firebase from 'firebase'
import 'firebase/firestore'
import './CartEstilo.scss'; 
import CartFormulario from '../CartFormulario/CartFormulario';


const Cart = () => {
    
    const {cartList, removerItem, removerCart, cartTotal, userData} = useCartContext()
    const [orderId, setOrderId] = useState("")
    // const [formData, setFormData] = useState({name:'', phone:'', email:'', email2:''})
    //modal
    const [mostrarModal, setMostrarModal] = useState(false)
    const modalCerrar = () => setMostrarModal(false)
    const modalAbierto = () => setMostrarModal(true)

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
    const clickGenerarCompra = () => { //handleOnClick
        modalCerrar()
        removerCart()
        generarOrden()
    }
    return (
        <div className='contenedor-principal'>
            <h2>Tu carrito de compras</h2>
            {cartList.length ? <button className='btn-vaciar-carrito' onClick={() => removerCart()}>Vaciar carrito</button>
            : orderId==="" 
                ? <div className="container-carrito-vacio">
                    <p>¡Ups...El carrito está vacío!</p>
                    <Link className='link-iniciar-compra' to="/">Empezar a comprar</Link>
                  </div>
                : <div>
                    <h3>¡Gracias por comprar! Pronto enviaremos su pedido.
                        <p>Su orden de compra es: {orderId}</p>
                    </h3>
                    <Link to='/'>Cerrar y volver al inicio</Link>
                  </div>
            }
            {cartList.map((items => 
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
            ))}
            <div className='total-reserva'><p>El total de la compra es: $ {cartTotal}</p></div>

            <CartFormulario createOrder={generarOrden}/>
            {/* <Modal show={mostrarModal} onHide={modalCerrar}>
                    <Modal.Header closeButton>
                        <Modal.Title>Ingresá tus datos para finalizar</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onChange={clickCambio}>
                            <div className="contenedor-form">
                                <h3>Ingresá tus datos para finalizar</h3>
                                <div className="relleno-form">
                                    <h4>Nombre y Apellido: </h4>
                                    <input type="text" name="name" placeholder='Nombre completo' defaultValue={formData.name} required />
                                    <h4>Teléfono: </h4>
                                    <input type="tel" name="phone" pattern="[0-9]{10}" placeholder='Número de teléfono' defaultValue={formData.phone} required/>
                                    <p>Ingresá sin el 0 adelante, máximo 10 digitos.</p>
                                    <h4>Email: </h4>
                                    <input type="email" name="email" placeholder='Correo electrónico' defaultValue={formData.email} required/>
                                    <h4>Confirmar email: </h4>
                                    <input type="email" name="email2" placeholder='Comprobar correo electrónico' defaultValue={formData.email2} required/>
                                </div>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={modalCerrar}>
                            Retroceder
                        </Button>
                        <Button onClick={()=>{
                            if (formData.length === true) {
                                if (formData.email === formData.email2) {
                                    clickGenerarCompra()
                                }else alert(`El correo electrónico debe coincidir`)
                            }else alert(`Debes completar el formulario para completar la compra.`)
                        }}>
                            Comprar
                        </Button>
                    </Modal.Footer>
            </Modal> */}
        </div>
    )
}

export default Cart


