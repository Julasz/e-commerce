import './CartFormulario.scss'
import { useCartContext } from '../../context/CartContext'

const CartFormulario = ({generarOrden}) => {

    const {handleForm, userData} = useCartContext()

    //modal
    //handleForm es clickCambio
    // const [name, setName] = useState(false)
    // const [phone, setPhone] = useState(false)
    // const [email, setEmail] = useState(false)
    // const [emailDos, setEmailDos] = useState(false)

    // const nameRegex =/^[a-zA-Z]{3,16}$/
    // const phoneRegex =/^[0-9]{11}$/
    // const emailRegex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]{2,30}[.][a-zA-Z]{2,4}$/

    // const valorName = (nameValidar) => {
    //     if (nameValidar) {
    //         if (nameRegex.test(nameValidar)) {
    //             setName(true)
    //         }
    //     }
    // }
    // const valorPhone = (phoneValidar) => {
    //     if (phoneValidar) {
    //         if (phoneRegex.test(phoneValidar)) {
    //             setPhone(true)
    //         }
    //     }
    // }
    // const valorEmail = (emailValidar) => {
    //     if (emailValidar) {
    //         if (emailRegex.test(emailValidar)) {
    //             setEmail(true)
    //         }
    //     }
    // }
    // const valorEmailDos = (emailDosValidar) => {
    //     if (emailDosValidar) {
    //         if (emailRegex.test(emailDosValidar)) {
    //             setEmailDos(true)
    //         }
    //     }
    // }
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
