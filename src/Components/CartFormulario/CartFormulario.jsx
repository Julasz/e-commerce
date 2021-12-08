import './CartFormulario.scss'
import { useCartContext } from '../../context/CartContext'

const CartFormulario = ({generarOrden}) => {

    const {handleForm, userData} = useCartContext()

    return (
        <>
            <form onChange={handleForm}
                  onSubmit={(e)=>{
                      e.preventDefault()
                      userData.email === userData.emailDos ? generarOrden() : alert(`Por favor, los correos electrónicos deben coincidir.`)
                  }}
            >
                <div className="contenedor-form">
                    <h3>Ingresá tus datos para finalizar</h3>
                    <div className="relleno-form">
                        <div>
                            <h4>Nombre y Apellido: </h4>
                            <input type="text" name="name" placeholder='Nombre completo' defaultValue={userData.name} required />
                        </div>
                        <div>
                            <h4>Teléfono: </h4>
                            <input type="tel" name="phone" pattern="[0-9]{10}" placeholder='Número de teléfono' defaultValue={userData.phone} required/>
                            <p>Ingresá sin el 0 adelante, máximo 10 digitos.</p>
                        </div>
                        <div>
                            <h4>Email: </h4>
                            <input type="email" name="email" placeholder='Correo electrónico' defaultValue={userData.email} required/>
                        </div>
                        <div>
                            <h4>Confirmar email: </h4>
                            <input type="email" name="email2" placeholder='Comprobar correo electrónico' defaultValue={userData.emailConfirmado} required/>
                        </div>
                        <br />
                        <button className='btn-comprar' type='submit'>Comprar</button>
                    </div>
                </div>
            </form>
            
        </>
    )
}

export default CartFormulario
